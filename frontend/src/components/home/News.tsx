import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arrowRight } from "../../assets/general";
import { NewsBoxProps } from "../../types/home";

export default function News() {
  const [error, setError] = useState(false);
  const [news, setNews] = useState<NewsBoxProps[]>([]);
  useEffect(() => {
    fetch("/api/news", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => setError(true));
  }, []);
  return (
    <section className="padding py-[2rem] md:py-[3rem] 2xl:py-[4rem] flex flex-col gap-20">
      <div className="flex flex-col gap-4 sm:ml-[4vw] md:ml-[6vw] 2xl:ml-[8vw]">
        <h2 className="open-sans font-bold text-3xl flex items-center">
          <img className="max-h-[1.6em] mr-3" src={arrowRight} alt="" />
          AKTUALNOŚCI
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:flex xl:flex-row justify-center">
        {news.length > 0 ? (
          news.map((box) => <NewsBox {...box} key={box.text} />)
        ) : (
          <h2>BRAK AKTUALNOŚCI</h2>
        )}
      </div>
      <Link
        to="/aktualnosci"
        className="w-max rounded py-3 px-6 bg-secondary mx-auto font-bold open-sans text-white"
      >
        Przejdź do aktualności
      </Link>
    </section>
  );
}

const NewsBox = ({ image, date, text }: NewsBoxProps) => {
  return (
    <div className="border-primary border-[1px] flex flex-col rounded">
      <img className="w-full object-cover h-[2in]" src={image} alt="" />
      <div className="p-4 bg-primary">
        <p>{text}</p>
        <small>{date.toISOString()}</small>
      </div>
    </div>
  );
};
