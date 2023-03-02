import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { NavLinkProps } from "../../../types/header";

export default function NavLink({
  title,
  to,
  subLinks,
  className,
}: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  const activePath = useResolvedPath(to);
  const isActive = useMatch({ path: `${activePath.pathname}/*`, end: true });

  return (
    <div className="relative">
      <Link
        to={to}
        className={`${className && className} transition-colors font-semibold ${
          isActive ? "text-primary" : "hover:text-primary"
        }`}
      >
        {title}
      </Link>
      {subLinks.length > 0 && (
        <div className="absolute left-0 rounded border-[1px] border-black top-[120%] flex flex-col">
          {subLinks.map((link) => (
            <SubNavLink {...link} key={link.to} />
          ))}
        </div>
      )}
    </div>
  );
}

const SubNavLink = ({ title, to }: NavLinkProps) => {
  return (
    <div className="">
      <Link to={to}>{title}</Link>
    </div>
  );
};
