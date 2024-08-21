import logo from "../../images/logo-light.svg"
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-start pb-14 lg:py-20 lg:px-40 font-poppins text-base text-neutral-grey-violet bg-neutral-dark-violet">
      <img src={logo} alt="Shortly logo" className="h-[40px] object-contain my-10 lg:my-0" />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:pl-8">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold text-white mb-3">Features</h3>
          <button type="button" className="lg:text-left">Link Shortening</button>
          <button type="button" className="lg:text-left">Branded Links</button>
          <button type="button">Analytics</button>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <button type="button">Blog</button>
          <button type="button">Developers</button>
          <button type="button">Support</button>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <button type="button">About</button>
          <button type="button">Our Team</button>
          <button type="button">Careers</button>
          <button type="button">Contact</button>
        </div>
        <div className="flex justify-center items-center gap-6">
          <img src={facebook} alt="Shortly logo" className="object-contain" />
          <img src={twitter} alt="Shortly logo" className="object-contain" />
          <img src={pinterest} alt="Shortly logo" className="object-contain" />
          <img src={instagram} alt="Shortly logo" className="object-contain" />
        </div>
      </div>
    </footer>
  )
}