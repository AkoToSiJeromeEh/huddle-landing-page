import "./App.css";
import { illustration, huddleLogo } from "./assets";
import { Figure, Reveal } from "./components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      {/* main container */}
      <main
        className="
     min-h-dvh text-pretty 
     bg-primary-violet 
     bg-no-repeat  
     Mobile:bg-cover
     bg-top Mobile:bg-center 	
     bg-[url('bg-mobile.svg')] Tablet:bg-[url('bg-desktop.svg')]
     grid place-content-start Mobile:place-content-center
     "
      >
        {/* wrapper */}
        <div
          className=" 
      w-[90%]   max-w-[1440px] m-auto
      grid grid-cols-1 text-center text-white
      Tablet:grid-cols-2  Tablet:text-start gap-8 
       h-full Tablet:h-[50rem]
      "
        >
          {/* image */}
          <div>
            <Reveal direction="top">
              <Figure>
                <img
                  className="h-10 m-[5rem_0rem_5rem_0rem]"
                  src={huddleLogo}
                  alt="huddle logo"
                  title="logo"
                />
              </Figure>
            </Reveal>
            <Reveal direction="left">
              <Figure>
                <img
                  className="mb-[3rem]"
                  src={illustration}
                  alt="huddle illustration"
                  title="illustration"
                />
              </Figure>
            </Reveal>
          </div>
          {/* article */}
          <article className=" flex flex-col gap-7 items-center justify-center Tablet:items-start Tablet:justify-start self-center mt-0 Tablet:mt-[7rem] p-0 Tablet:p-14 ">
            <Reveal direction="right">
              <h1 className=" font-poppins font-semibold text-[1.7rem] max-w-[36ch] m-auto Tablet:text-[2.6rem] ">
                Build The Community Your Fans Will Love
              </h1>
            </Reveal>
            <Reveal direction="right">
              <p className=" font-open-sans max-w-[36ch] Tablet:max-w-full  m-auto text-lg">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
            </Reveal>
            <Reveal width="w-full" direction="right">
              <button className=" bg-white text-primary-violet font-poppins  mb-[3rem] rounded-full w-[70%] p-3 shadow-[#00000047] shadow-[0px_10px_10px] Mobile:w-full Tablet:w-52 hover:bg-soft-mageneta hover:text-white  ">
                Register
              </button>
            </Reveal>
          </article>
          {/* footer */}
          <footer className=" w-full col-span-1 Desktop:col-span-2 mb-5">
            <ul className="flex flex-row gap-4 items-center justify-center Tablet:items-start Tablet:justify-end">
              <li>
                <Reveal width="w-fit" direction="left">
                  <a target="_blank" href="https://www.facebook.com/">
                    {" "}
                    <FaFacebookF />{" "}
                  </a>
                </Reveal>
              </li>

              <li>
                <Reveal width="w-fit" direction="top">
                  <a target="_blank" href="https://twitter.com/">
                    {" "}
                    <FaTwitter />
                  </a>
                </Reveal>
              </li>

              <li>
                <Reveal width="w-fit" direction="right">
                  <a target="_blank" href="https://www.instagram.com/">
                    {" "}
                    <FaInstagram />
                  </a>
                </Reveal>
              </li>
            </ul>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
