import heroImg from "../../images/illustration-working.svg";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center overflow-x-clip py-10">
      <div className="flex flex-col text-center lg:text-start items-center lg:items-start font-poppins lg:pl-40 lg:pr-16">
        <h1 className="font-bold text-[42px] lg:text-[76px] leading-[48px] lg:leading-[84px] text-neutral-dark-violet pt-10 lg:pt-0">More than just shorter links</h1>
        <p className="text-lg lg:text-[22px] text-neutral-grey-violet pb-8 pt-2 lg:pt-0">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className="font-semibold text-lg text-white bg-primary-cyan px-12 py-3 rounded-full hover:opacity-50" type="button">Get Started</button>
      </div>
      <img src={heroImg} alt="Illustration of someone working at a computer" className="h-[340px] lg:h-[482px] lg:w-[610px] object-cover object-left pl-4 lg:pl-0" />
    </div>
  )
}