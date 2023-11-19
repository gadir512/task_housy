import logo from '../assets/logo.svg'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4  px-10 md:px-20 sticky top-0 z-50">
      <div className="flex">
        <div className="mr-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <ul className="flex space-x-4 ml-auto">
          <li className="text-gray-800 hover:text-black mr-6">Home</li>
          <li className="text-gray-800 hover:text-black"><i className="fa-regular fa-heart mr-1"></i>Favourites</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
