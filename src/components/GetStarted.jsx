import bgImgD from "../../images/bg-boost-desktop.svg";
import bgImgM from "../../images/bg-boost-mobile.svg";

export default function GetStarted() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 lg:gap-8 h-[296px] lg:h-[250px] bg-primary-dark-violet font-poppins">
      <div className="absolute z-0">
        <img src={bgImgD.src} alt="Background geometric shapes" className="hidden lg:block h-[250px] w-[100vw] object-cover" />
        <img src={bgImgM.src} alt="Background geometric shapes" className="lg:hidden h-[296px] w-[100vw] object-cover" />
      </div>
      <h2 className="relative z-10 font-bold text-[26px] lg:text-4xl text-white">Boost your links today</h2>
      <button className="relative z-10 font-semibold text-lg text-white bg-primary-cyan px-12 py-3 rounded-full hover:bg-cyan-200" type="button">Get Started</button>
    </div>
  )
}