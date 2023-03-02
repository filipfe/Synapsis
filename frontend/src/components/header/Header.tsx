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
      <div className="padding bg-primary flex items-center justify-center sm:justify-end gap-4 h-[3rem]"></div>
      <div
        className={`padding flex items-center justify-between min-h-[5rem] ${
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
  <Link className="font-bold" to="/">
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
        className={`flex flex-col md:flex-row justify-center items-center bg-white gap-8 text-sm font-medium absolute top-0 md:relative left-full transition-transform ${
          active && "-translate-x-full"
        } md:left-auto h-screen md:h-full w-screen md:w-max`}
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
