import React from "react";

function Heros() {
  return (
    <div className="py-16 bg-yellow-50 overflow-hidden">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div>
          <span className="block w-max mx-auto py-2 px-4 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
            The Guide For The Perfect Pc
          </span>
          <h2 className="mt-4 text-center text-2xl text-yellow-900 font-bold md:text-4xl">
            As you use this site to build your{" "}
            <br className="lg:block" hidden /> next rig, make sure to check if
            your components can work together
          </h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-indigo-700  group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100"
              >
                <span className="font-bold text-yellow-700">1</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">
                  First step
                </h4>
                <p className="text-gray-600 group-hover:text-yellow-200">
                Pick out your parts! It is crucial to know which component goes with what. For example, some motherboards cant handle certain GPUs. Or, a power supply won't have too much wattage for all your components. There is alot of science behind components working together at their max capacity. For instance, a certain CPU cant handle the power of a certain GPU. Your Pc will run, but it will bottleneck. Aslo, if you'e taking the water cooled route, buy pick out the specific water pipes and have prior knowledge before installing that! 

                </p>
              </div>
              <img
                src={require("../imgs/gpu.png")}
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              />
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-indigo-700  group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100"
              >
                <span className="font-bold text-yellow-700">2</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">
                  Second Step
                </h4>
                <p className="text-gray-600 group-hover:text-yellow-200">
                  Buy your parts! A great way to buy parts is to always price
                  match. Make sure to get them at a great price. Not only at a
                  great price but from a reputable source. Now, graphics cards
                  can be bought at lower than Msrp however if you're buying one
                  from a crypto miner, make sure the GPU has been well taken
                  care of! Check out the CPUS for bent pins or missing ones! A
                  bent pin doesn't always mean the cpu is non-functionable. You
                  may be able to readajust the pin! Same goes with all second
                  hand used components beaware.
                </p>
              </div>
              <img
                 src={require("../imgs/gaming-pc.png")}
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              />
            </div>
          </div>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-white shadow-2xl transition duration-300 group-hover:bg-indigo-700  group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-12 p-8 md:p-12 lg:p-8 xl:p-12">
              <div
                aria-hidden="true"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100"
              >
                <span className="font-bold text-yellow-700">3</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white">
                  Final Step
                </h4>
                <p className="text-gray-600 group-hover:text-yellow-200">
                  Lastly, some people ought to buy prebuilt pcs. That is a great
                  choice, but the satisfaction you get from building your
                  masterpiece is a great feeling. When you take the approach of
                  tackling building your own rig, make sure you've studied how
                  to build one. Read or watch on how to build a computer.
                  Nothing is worse than bending a CPU pin, booting up your all
                  put together Pc and the BIOS not running, or even a leaky
                  water cooling pipe. Now a days there are awsome videos to see!
                  Be ready to spend 1-3 hours putting up your new beast!
                </p>
              </div>
              <img
                src={require("../imgs/hardware.png")}
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
