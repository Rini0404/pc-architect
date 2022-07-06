import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
// import PartForm from '../components/PartForm';
import { Card, Input } from "semantic-ui-react";

function IndexPage() {
  const [gpu, setGpu] = React.useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/SignIn");
    }
  }, [user, navigate]);

  React.useEffect(() => {
    axios.get("/api/gpus").then((res) => {
      setGpu(res.data);
      console.log(res.data);
    });
  }, []);

  // search gpus
  const searchGpus = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);
    if (searchInput !== "") {
      const filteredData = gpu.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(gpu);
    }
  };

  return (
    <>
      <div className="p-20 landing-page">
        <div className="landing-page-header">
          <div className="landing-page-header-text">
            {/* passes in user data
                            can change it to email, if i want an email instead of name */}
            <h1>Welcome {user && user.name} </h1>
          </div>
        </div>
      </div>
      {/* section to display data */}
      <div className="p-10 landing-page">
        <div className="landing-page-header">
          <div className="landing-page-header-text">
            <h1>Your Data</h1>
          </div>
          {/* search feild  black border*/}
          <div className="border black-border search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => searchGpus(e.target.value)}
            />
            <button
              type="button"
              className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
              // onClick={() => searchGpus("")}
            >
              With banner
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
                Hi!
              </span>
            </button>
          </div>
          {/* card to display gpus searched */}
        </div>
      </div>
      {searchInput.length > 1
            ? filteredResults.map((item) => {
                return (
                  // card that display gpus searched
                  <div className="p-10 landing-page">
                  <div class="parent border justify-items-center ">
                    <div class="div1"> </div>
                    <div class="div2 "> </div>
                    <div class="div3">{item.URL}</div>
                    <div class="div4">{item.Brand} </div>
                    <div class="div5">{item.Model} </div>
                    <div class="div6">{item.Type} </div>
                  </div>
                  </div>
                );
              })
            : gpu.map((item) => {
                return (
                  <Card key={item.id}>
                    <Card.Content>
                      <Card.Header>{item.Type}</Card.Header>
                      <Card.Meta>{item.Brand}</Card.Meta>
                      <Card.Description>{item.Model}</Card.Description>
                    </Card.Content>
                  </Card>
                );
              })}
    </>
  );
}

export default IndexPage;
