import { arrowRight } from "../assets/general";

type PageFrameProps = {
  children: JSX.Element;
  title: string;
  image: string;
};

export default function PageFrame({ image, title, children }: PageFrameProps) {
  return (
    <>
      <section className="relative flex items-center justify-center h-[50vh] pt-[148px] md:pt-[164px]">
        <img
          className="object-cover absolute inset-0 w-full h-full opacity-50 -z-10"
          src={image}
          alt=""
        />
        <h2 className="open-sans font-bold text-3xl flex items-center">
          <img
            className="max-h-[1.6em] mr-3"
            loading="lazy"
            src={arrowRight}
            alt=""
          />
          {title}
        </h2>
      </section>
      {children}
    </>
  );
}
