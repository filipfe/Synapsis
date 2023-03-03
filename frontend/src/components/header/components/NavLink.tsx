import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { linkArrow } from "../../../assets/header/header";
import { NavLinkProps } from "../../../types/header";

export default function NavLink({
  title,
  to,
  subLinks,
  className,
}: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  const activePath = useResolvedPath(to);
  const isActive = useMatch({ path: activePath.pathname, end: true });

  return (
    <div className="relative flex items-stretch z-10" onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      {subLinks.length > 0 ? 
        <button className="flex items-center h-full font-semibold"><span className={`h-full flex flex-col justify-center font-semibold after:block after:h-[2px] after:justify-self-start after:w-full after:bg-secondary after:transition-all ${isActive ? 'after:max-w-[60%]' : hovered ? 'after:max-w-[80%]' : ' after:max-w-[0%]'}`}>{title}</span> <img className="max-h-[0.8em] ml-2" src={linkArrow} alt='' /></button>
       : <Link
        to={to}
        className={`${className && className} font-semibold h-full self-stretch min-h-full relative`}
      >
        <span className={`h-full flex flex-col justify-center font-semibold after:block after:h-[2px] after:justify-self-start after:w-full after:bg-secondary after:transition-all ${isActive ? 'after:max-w-[60%]' : hovered ? 'after:max-w-[80%]' : ' after:max-w-[0%]'}`}>{title}</span>
      </Link>}
      {subLinks.length > 0 && hovered && (
        <div className="absolute left-0 rounded border-[1px] border-black top-[75%] flex flex-col">
          {subLinks.map((link) => (
            <SubNavLink {...link} key={link.to} />
          ))}
        </div>
      )}
    </div>
  );
}

const SubNavLink = ({ title, to, subLinks }: NavLinkProps) => {
    const [hovered, setHovered] = useState(false);
    const activePath = useResolvedPath(to);
     const isActive = useMatch({ path: activePath.pathname, end: true });
    return (
      <div className="relative px-6 py-3 bg-white z-20"  onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
        {subLinks.length > 0 ? 
        <button className="flex items-center h-full font-semibold"><span className={`h-full flex flex-col justify-center font-semibold after:block after:h-[2px] after:justify-self-start after:w-full after:bg-secondary after:transition-all ${isActive ? 'after:max-w-[60%]' : hovered ? 'after:max-w-[80%]' : ' after:max-w-[0%]'}`}>{title}</span> <img className="max-h-[0.8em] ml-2 -rotate-90" src={linkArrow} alt='' /></button>
       :
        <Link className="font-semibold" to={to}><span className={`h-full flex flex-col justify-center font-semibold after:block after:h-[2px] after:justify-self-start after:w-full after:bg-secondary after:transition-all ${isActive ? 'after:max-w-[60%]' : hovered ? 'after:max-w-[80%]' : ' after:max-w-[0%]'}`}>{title}</span></Link>
        }
        {subLinks.length > 0 && hovered && (
        <div className="absolute rounded border-[1px] border-black top-0 left-[99%] flex flex-col">
          {subLinks.map((link) => (
            <SubNavLink {...link} key={link.to} />
          ))}
        </div>
      )}
      </div>
  );
};
