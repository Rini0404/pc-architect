import React from "react";
import Pc1 from "../imgs/pc1.jpg";
import Pc2 from "../imgs/pc2.jpg";
import Pc3 from "../imgs/pc3.jpg";
import Pc4 from "../imgs/pc7.jpg";
import Pc5 from "../imgs/pc03.jpg";
import Pc6 from "../imgs/pc6.jpg";
import Pc7 from "../imgs/pc5.jpg";
import Pc8 from "../imgs/pc8.jpg";
import Pc9 from "../imgs/pc9.jpg";
import Pc10 from "../imgs/pc10.jpg";



function Gallery() {
  return (
    <section className="py-6 bg-yellow-50 dark:text-gray-50">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src={Pc1}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-xl min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc2}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc3}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc4}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc5}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc6}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc7}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc8}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-xl min-h-48 dark:bg-gray-500 aspect-square"
          src={Pc9}
        />
        <img
          src={Pc10}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-xl min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
}

export default Gallery;
