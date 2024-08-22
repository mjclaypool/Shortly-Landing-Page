import { useState, useRef } from "react";

import bgImgD from "../../images/bg-shorten-desktop.svg";
import bgImgM from "../../images/bg-shorten-mobile.svg";

export default function ShortenLink() {
  const [isInvalid, setIsInvalid] = useState(false);
  const linkUrl = useRef();

  function handleSubmit(event) {
    setIsInvalid(false);
    event.preventDefault();

    if(linkUrl.current.value.includes(' ') || linkUrl.current.value.includes('&') || linkUrl.current.value.includes('?') || linkUrl.current.value.includes('#')){
      setIsInvalid(true);
    }
  }

  return (
    <div className="absolute -top-[80px] lg:-top-[75px] left-[50%] translate-x-[-50%] flex w-full h-[160px] lg:h-[150px] px-6 lg:px-40">
      <div className="relative flex items-center justify-center w-full bg-primary-dark-violet px-6 lg:px-16 rounded-lg">
        <div className="absolute w-full h-full z-0">
          <img src={bgImgD} alt="Background geometric shapes" className="w-full h-full hidden lg:block object-cover rounded-lg" />
          <img src={bgImgM} alt="Background geometric shapes" className="w-full h-full lg:hidden object-fill rounded-lg" />
        </div>
        <form className="relative flex flex-col lg:flex-row w-full lg:gap-6" onSubmit={handleSubmit}>
          <input
            name="linkUrl"
            ref={linkUrl}
            placeholder="Shorten a link here..."
            className="w-full font-poppins placeholder:text-stone-400 text-lg px-4 lg:px-6 py-3 mt-2 mb-1 lg:my-0 rounded-md lg:rounded-lg"
          />
          {isInvalid &&
            <p className="relative text-left lg:absolute lg:-bottom-6 font-poppins text-xs italic text-secondary-red">Please add a link</p>
          }
          <button
            className="min-w-[170px] relative font-poppins font-bold text-lg text-white bg-primary-cyan px-8 py-3 my-2 lg:my-0 rounded-md lg:rounded-lg"
            type="submit"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  )
}