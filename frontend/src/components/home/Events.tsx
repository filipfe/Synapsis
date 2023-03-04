import { useEffect, useState } from "react";
import { arrowRight } from "../../assets/general";
import { BoxProps as EventBoxProps } from "../../types/home";

export default function Events() {
  const [error, setError] = useState(false);
  const [events, setEvents] = useState<EventBoxProps[]>([]);
  useEffect(() => {
    fetch("/api/events", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <section className="padding py-[2rem] md:py-[3rem] 2xl:py-[4rem]">
      <div className="mb-20 flex flex-col gap-4 sm:ml-[4vw] md:ml-[6vw] 2xl:ml-[8vw]">
        <h2 className="open-sans font-bold text-3xl flex items-center">
          <img className="max-h-[1.6em] mr-3" src={arrowRight} alt="" />
          NADCHODZĄCE WYDARZENIA
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:flex xl:flex-row justify-center">
        {events.length > 0 ? (
          events.map((box) => <EventBox {...box} key={box.text} />)
        ) : (
          <h2>NIE ZNALEZIONO WYDARZEŃ</h2>
        )}
      </div>
    </section>
  );
}

const EventBox = ({ image, text }: EventBoxProps) => {
  return (
    <div className="flex flex-col rounded">
      <img className="w-full object-cover h-[2in]" src={image} alt="" />
      <div className="p-4 bg-primary flex flex-col gap-4">
        <p className="font-semibold open-sans">{text}</p>
      </div>
    </div>
  );
};
