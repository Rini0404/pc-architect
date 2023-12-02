import Picture from '../imgs/icons8-video-card-80.png'
function Footer() {
  return (

    <footer className="bg-gray-900 relative">
      <div className=" inset-x-0 bottom-0 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            {/* logo with title */}
            <div className="flex justify-center text-teal-300 lg:justify-start">
              <a href="#" className="">
                <img
                  src={Picture}
                  className=""
                  alt="logo"
                  height="100%"
                  width="100%"
                />
              </a>
            </div>
            <div className="flex justify-center text-teal-300 lg:justify-start">
              <a href="#" className="">  
                <h1 className="text-3xl font-bold">
                  Pc Architect
                </h1>
              </a>
            </div>

            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 lg:text-left">
              Hello! I hope you're having a great time with my website. I'm glad you have decided to visit.
              If you're interested in more of my work, here are a few links to my social networks!
            </p>
          </div>

          <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
            <ul className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12">
              <li>
                <a 
              
                className="text-white transition hover:text-white/75" href="https://github.com/Rini0404"
                target="_blank">
                  My
                  Github
                </a>
              </li>

              <li>
                <a className="text-white transition hover:text-white/75" href="https://www.linkedin.com/in/rene-ortega-a29564196/">
                  Linked in
                </a>
              </li>

              <li>
                <a className="text-white transition hover:text-white/75" href="https://twitter.com/ReneOrt81345106">
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-sm text-center text-gray-400 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
