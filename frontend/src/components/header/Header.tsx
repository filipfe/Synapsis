import { Link } from "react-router-dom";
import { useResolvedPath, useMatch, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { logo } from "../../assets/general";
import NavLink from "./components/NavLink";
import { navLinks } from "../../consts/header";

export default function Header() {
  const [down, setDown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("ankieta")) return;
    const cb = () => setDown(window.scrollY > 100);
    window.addEventListener("scroll", cb);
    return () => window.removeEventListener("scroll", cb);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-30 top-0 transition-all bg-white `}
    >
      <div className="2xl:px-[18vw] px-[8vw] md:px-[2vw] bg-primary flex items-center justify-center sm:justify-end gap-4 py-3">
        <Link className="py-3 px-6 text-white rounded-full open-sans font-bold bg-[#1A356D] text-sm" to='/'>PRZEKAŻ DAROWIZNĘ</Link>
        <button>PL</button>
        <button>ENG</button>
      </div>
      <div
        className={`2xl:px-[18vw] px-[8vw] md:px-[2vw] flex justify-between min-h-[5rem] ${
          down ? "shadow-primarySmall md:min-h-[5rem]" : "md:min-h-[6rem]"
        }`}
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

const Logo = () => (
  <Link className="font-bold self-center" to="/">
    <img className="max-w-[2.5in]" src={logo} alt="" />
  </Link>
);

const lineStyle = "h-[3px] w-full bg-primary transition rounded-xl";

const Nav = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row justify-center items-stretch md:self-stretch bg-white gap-8 text-sm font-medium absolute top-0 md:relative left-full transition-transform ${
          active && "-translate-x-full"
        } md:left-auto h-screen md:h-auto w-screen md:w-max`}
      >
        {navLinks.map((link) => (
          <NavLink {...link} key={link.to} />
        ))}
      </div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className="burger flex flex-col relative z-50 md:hidden h-5 w-8 justify-between cursor-pointer"
      >
        <div
          style={
            active
              ? {
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%) rotate(45deg)",
                  maxWidth: "100%",
                }
              : { maxWidth: "60%" }
          }
          className={lineStyle}
        ></div>
        <div style={active ? { opacity: 0 } : {}} className={lineStyle}></div>
        <div
          style={
            active
              ? {
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%) rotate(-45deg)",
                  maxWidth: "100%",
                }
              : { maxWidth: "60%", marginLeft: "auto" }
          }
          className={lineStyle}
        ></div>
      </div>
    </>
  );
};
