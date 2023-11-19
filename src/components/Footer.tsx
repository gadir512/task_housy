import logo from "../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-6 md:p-20 mt-auto">
      <div className="flex flex-col md:flex-row md:mb-20">
        <div className="md:w-2/5 pr-0 md:pr-16 mb-6 md:mb-0">
          <h3 className="text-lg ">
            <img src={logo} alt="Logo" className="h-8 mb-2 md:mb-6" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
          </h3>
        </div>
        <div className="md:w-1/2 md:flex md:flex-wrap">
          <div className="w-full md:w-1/2 mb-6">
            <h2 className="text-lg mb-4">Menyu</h2>
            <ul>
              <li className="mb-1">Haqqımızda</li>
              <li className="mb-1">Reklam yerləşdir</li>
              <li className="mb-1">Əlaqə</li>
              <li className="mb-1">Haqqımızda</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mb-6">
            <h2 className="text-lg mb-4">Dəstək</h2>
            <ul>
              <li className="mb-1">İstifadəçi razılaşması</li>
              <li className="mb-1">Reklam yerləşdir</li>
              <li className="mb-1">Əlaqə</li>
              <li className="mb-1">Haqqımızda</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 md:flex md:flex-wrap">
          <div className="w-full md:w-1/2 mb-6">
            <h2 className="text-lg mb-4">Əlaqə</h2>
            <ul>
              <li className="mb-1">
                <i className="fa-solid fa-phone mr-4"></i>+994 55 555 55 55
              </li>
              <li className="mb-1"><i className="fa-regular fa-envelope mr-4"></i> example@com</li>
              <li className="mb-1"><i className="fa-brands fa-facebook mr-4"></i>Facebook</li>
              <li className="mb-1"><i className="fa-brands fa-instagram mr-4"></i>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center md:text-left">© Copyright 2023 Housy Ltd. Bütün hüquqları qorunur.</p>
    </footer>
  );
};

export default Footer;
