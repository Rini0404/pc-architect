import React from "react";


function Favorites () {

  const favs = JSON.parse(localStorage.getItem("fav"));
  console.log(favs);
  return (
    <>
    <h1>Header Here</h1>
    <div>
      {favs?.map((item) => {
        return <div>{item.Model}</div>
      })}
    </div>
    </>
  )
}

export default Favorites;