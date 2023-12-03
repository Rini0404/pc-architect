const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const userModel = require("../models/userModel");
const Part = require("../models/PartModels");

const models = {
  cpu: Part.Cpu,
  gpu: Part.Gpu,
  hdd: Part.Hdd,
  ram: Part.Ram,
  ssd: Part.Ssd,
  usb: Part.Usb
};

const registerUser = asyncHandler(async (req, res, next) => {

  try {

    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please enter all fields'
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      data: savedUser,
    });

  } catch (error) {

    console.log("error in registerUser", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });

  }

});

const getAllUsers = asyncHandler(async (req, res, next) => {
  try {

    const findAllUsers = await userModel.find();


    res.status(200).json({
      success: true,
      data: findAllUsers,
    });

  } catch (error) {
    console.log("error in getAllUsers", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// @des : Auth a user
// @route : POST /api/users/login
// @access : public
const loginUser = asyncHandler(async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if(!user) {
      return res.status(400).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const savedPartsData = await Promise.all(user.savedParts.map(async (savedPart) => {
        if (savedPart && savedPart.type) {
          const PartModel = models[savedPart.type]; // Update path accordingly
          return await PartModel.findById(savedPart.partId);
        }
        return null;
      }));

      console.log('savedPartsData', savedPartsData)
      
      res.json({
        success: true,
        id: user._id,
        name: user.firstName + " " + user.lastName,
        email: user.email,
        token: generateToken(user._id),
        savedParts: savedPartsData.filter(part => part !== null), // This will now include full details of each part
      });

    } else {
      res.status(400).json({
        success: false,
        error: "Invalid credentials",
      });
    }
    
  } catch (error) {
    console.log(" error in loginUser", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }

});

// @des : get user
// @route : GET /api/users/me
// @access : private
const getMe = asyncHandler(async (req, res) => {
  
  try {

    const user = await userModel.findById(req.user._id).select("-password");

    if(!user) {
      return res.status(400).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    console.log("error in getMe", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  
});

// @des : generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const savePartForUser = asyncHandler(async (req, res) => {
  try {
    const { partId, type } = req.body;
    
    // find user but not password

    const user = await userModel.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "User not found",
      });
    }

    if(!partId) {
      return res.status(400).json({
        success: false,
        error: "Part not found",
      });
    }

    if( user.savedParts.length === 0) {
      user.savedParts.push({ partId, type});
      await user.save();
      return res.status(200).json({
        success: true,
        data: user
      });
    }

    
    // check if part already exists
    const partExists = user.savedParts.find(part => part.partId.toString() === partId);

    if(partExists) {
      return res.status(400).json({
        success: false,
        error: "Part already saved",
      });
    }

    user.savedParts.push({ partId, type });

    await user.save();

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {
    console.log("error in savePartForUser", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});



module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  savePartForUser,
};
