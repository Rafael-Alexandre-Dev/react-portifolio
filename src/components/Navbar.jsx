import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div onClick={() => window.open("https://www.linkedin.com/in/rafael-alexandre-de-jesus-a81b64223/", "_blank")} style={{"cursor": "pointer"}}><FaLinkedin /></div>
        <div onClick={() => window.open("https://github.com/Rafael-Alexandre-Dev", "_blank")} style={{"cursor": "pointer"}}><FaGithub /></div>
        {/* <FaSquareXTwitter />
        <FaInstagram /> */}
      </div>
    </nav>
  );
};

export default Navbar;
