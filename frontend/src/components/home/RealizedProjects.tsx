import CountUp from "react-countup";
import { arrowRight } from "../../assets/general";
import { yellowBoxes } from "../../consts/home";
import { YellowBoxProps } from "../../types/home";

export default function RealizedProject() {
  return (
    <section className="padding py-[2rem] md:py-[3rem] 2xl:py-[4rem]">
      <div className="mb-20 flex flex-col gap-4 sm:ml-[4vw] md:ml-[6vw] 2xl:ml-[8vw]">
        <h2 className="open-sans font-bold text-3xl flex items-center">
          <img className="max-h-[1.6em] mr-3" src={arrowRight} alt="" />
          <CountUp
            className="open-sans font-bold mr-[0.3em]"
            useEasing
            enableScrollSpy
            end={498}
          />{" "}
          ZREALIZOWANYCH PROJEKTÓW...
        </h2>
        <p className="text-[#3A3A3A] open-sans max-w-[50%] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dictum
          leo aliquam ipsum. Metus, bibendum felis blandit tincidunt. Tristique
          odio scelerisque massa
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {yellowBoxes.map((box) => (
          <YellowBox {...box} key={box.text} />
        ))}
      </div>
    </section>
  );
}

const YellowBox = ({ image, number, text }: YellowBoxProps) => {
  return (
    <div className="bg-primary flex flex-col items-center gap-2 rounded py-5 px-8">
      <img className="h-[1.5in]" src={image} alt="" />
      <h3 className="text-4xl">
        <CountUp
          className="font-semibold"
          enableScrollSpy
          useEasing
          end={number}
        />
      </h3>
      <h3 className="roboto text-center">{text}</h3>
    </div>
  );
};
