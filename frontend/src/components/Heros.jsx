import React from 'react';


function Heros() {
  return (
    
<div className="py-16 bg-yellow-50 overflow-hidden">
    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div>
            <span className="block w-max mx-auto py-2 px-4 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">Main features</span>
            <h2 className="mt-4 text-center text-2xl text-yellow-900 font-bold md:text-4xl">A technology-first approach to payments <br className="lg:block" hidden/> and finance</h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-indigo-700  group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                    <div aria-hidden="true" className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100">
                        <span className="font-bold text-yellow-700">1</span>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">First feature</h4>
                        <p className="text-gray-600 group-hover:text-yellow-200">Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                    </div>
                    <img src="images/avatars/burger.png" className="w-16" width="512" height="512" alt="burger illustration"/>
                </div>
            </div>
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-indigo-700  group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                    <div aria-hidden="true" className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100">
                        <span className="font-bold text-yellow-700">2</span>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">Second feature</h4>
                        <p className="text-gray-600 group-hover:text-yellow-200">Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                    </div>
                    <img src="images/avatars/metal.png" className="w-16" width="512" height="512" alt="burger illustration"/>
                </div>
            </div>
            <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-indigo-700  group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
                    <div aria-hidden="true" className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100">
                        <span className="font-bold text-yellow-700">3</span>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">Third feature</h4>
                        <p className="text-gray-600 group-hover:text-yellow-200">Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                    </div>
                    <img src="images/avatars/trowel.png" className="w-16" width="512" height="512" alt="burger illustration"/>
                </div>
            </div>

            
        </div>
    </div>
</div>  

);
}


export default Heros;