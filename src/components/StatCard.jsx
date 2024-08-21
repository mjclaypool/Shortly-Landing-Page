export default function StatCard({ image, altText, title, details }) {
  return (
    <div className="relative font-poppins bg-white h-[270px] lg:w-[354px] rounded-md mx-6">
      <h3 className="font-bold text-[22px] pt-[72px] px-6">{title}</h3>
      <p className="text-base lg:text-md max-w-[480px] lg:w-full text-neutral-grey-violet lg:leading-relaxed px-6 py-4">{details}</p>
      <div className="absolute -top-[45px] left-[50%] translate-x-[-50%] lg:left-[30px] flex items-center justify-center h-[90px] w-[90px] rounded-full bg-primary-dark-violet">
        <img src={image} alt={altText} className="h-[40px] object-contain" />
      </div>
    </div>
  )
}