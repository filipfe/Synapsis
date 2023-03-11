import { useState } from "react";

type DropdownProps = {
  title: string;
  component: JSX.Element;
};

export default function Dropdown({ title, component }: DropdownProps) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`p-4 border-[1px] border-[#d9d9d9] transition-colors flex flex-col gap-4 ${
        active ? "bg-white" : "bg-[#f4f4f4]"
      }`}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <h3 className="text-[#333] text-xl ml-8">{title}</h3>
        <div className="rounded-full flex items-center justify-center bg-[#FCFCFC] text-white h-3 w-3">
          {active ? "-" : "+"}
        </div>
      </div>
      {active && component}
    </button>
  );
}
