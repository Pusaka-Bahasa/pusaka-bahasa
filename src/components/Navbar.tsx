import "../styles/output.css";
import Logo from "../images/Logo.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 navTops">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-6">
        <a href="javascript:void(0)" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-lg font-semibold whitespace-nowrap text-white">Pusaka Bahasa</span>
        </a>
        <div className="md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:block sm:hidden hidden">
          <span className="flex flex-col-1 lg:gap-2 font-medium sm:gap-1 md:gap-1 gap-2 items-center lg:px-4 lg:py-2 sm:px-2.5 sm:py-2.5 px-2 py-1 md:px-2.5 md:py-2.5 rounded-full" style={{ background: "#e8f549" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4">
              <path fill="#0c4b54" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <a href="#" className="block py-2 px-3 md:p-0" aria-current="page" style={{ color: "#0c4b54" }}>
              Indonesia
            </a>
          </span>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col mt-4 font-medium md:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 navbg">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 navbg">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
