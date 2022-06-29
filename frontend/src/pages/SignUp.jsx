// import Pic1 from "../imgs/pcPic1.jpg";
import { useEffect, useState }  from "react";
import {FaUser} from 'react-icons/fa'
function SignUp() {

  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const { name, email, password, confirmPassword } = formData;
  
  const onChange = (e) => {
      setFormData((prevState)  => ({
        ...prevState,
        [e.target.name]: e.target.value
        
      }));

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  

  return (
    // cool register form here
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default SignUp;


//  <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
//       <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
//         <div className="md:flex w-full">
//           <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
//             {/* <svg id="a87032b8-5b37-4b7e-a4d9-4dbfbe394641" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"</svg> */}
//             <img src={Pic1} className="w-full" alt="tailus logo" />
//           </div>
         
//           <form className="w-full md:w-1/2 py-10 px-5 md:px-10" onSubmit={onSubmit}>
//             <div className="text-center mb-10">
//               <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
//               <p>Enter your information to register</p>
//             </div>
//             <div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-5">
//                   <label for="" className="text-xs font-semibold px-1">
//                     Full Name
//                   </label>
//                   <div className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//               <FaUser/>
//                       <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="Roanoa Zoro"
//                       name="name"
//                       id="name"
//                       value={name}
//                       onChange={onChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-5">
//                   <label for="" className="text-xs font-semibold px-1">
//                     Email
//                   </label>
//                   <div className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                       <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
//                     </div>
//                     <input
//                       value={email}
//                       onChange={onChange}
//                       id="email"
//                       type="email"
//                       name="email"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="johnsmith@example.com"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-12">
//                   <label for="" className="text-xs font-semibold px-1">
//                     Password
//                   </label>
//                   <div className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                       <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
//                     </div>
//                     <input
//                       value={password}
//                       onChange={onChange}
//                       id="password"
//                       name="password"
//                       type="password"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="************"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-12">
//                   <label for="" className="text-xs font-semibold px-1">
//                     Password
//                   </label>
//                   <div className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                       <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
//                     </div>
//                     <input
//                       value={confirmPassword}
//                       onChange={onChange}
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       type="password"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="confirm password"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-5">
//                   <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
//                     type="submit"
//                   >
//                     REGISTER NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>