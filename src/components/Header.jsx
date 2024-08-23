import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="px-6 lg:px-40 pt-10 pb-3 lg:py-10">
      <nav className="flex justify-between font-poppins font-semibold text-neutral-grey-violet">
        <div className="flex gap-8">
          <img src={logo.src} alt="Shortly Logo" className="object-contain" />
          <button className="hidden lg:block hover:text-neutral-dark-violet" type="button">Features</button>
          <button className="hidden lg:block hover:text-neutral-dark-violet" type="button">Pricing</button>
          <button className="hidden lg:block hover:text-neutral-dark-violet" type="button">Resources</button>
        </div>
        <div className="flex gap-8">
          <FontAwesomeIcon
            icon={faBars}
            alt="Font Awesome hamburger menu icon"
            className="lg:hidden h-8 w-8 p-2 object-contain cursor-pointer"
          />
          <button className="hidden lg:block hover:text-neutral-dark-violet" type="button">Login</button>
          <button className="hidden lg:block text-white bg-primary-cyan px-6 py-2 rounded-full hover:opacity-50" type="button">Sign Up</button>
        </div>
      </nav>
    </header>
  )
}