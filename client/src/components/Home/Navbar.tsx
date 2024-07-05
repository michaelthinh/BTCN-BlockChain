import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white mx-auto max-w-screen-xl p-6">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="w-[120px]">
            <img className="w-[100%]" src="./assets/logo-mew.png" alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-[30px]">
          <Link to="/about">
            <p className="text-primary-green font-bold">About</p>
          </Link>
          <Link to="/faq">
            <p className="text-primary-green font-bold">FAQ</p>
          </Link>
          <Link to="/contact">
            <p className="text-primary-green font-bold">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
