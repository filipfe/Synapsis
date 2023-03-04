import { useEffect, useState } from "react";
import { arrowRight } from "../../assets/general";
import { PlaceBoxProps } from "../../types/home";

export default function Places() {
  const [places, setPlaces] = useState<PlaceBoxProps[]>([]);
  useEffect(() => {
    fetch("/api/places", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <section className="padding py-[2rem] md:py-[3rem] 2xl:py-[4rem] flex flex-col gap-20">
      <div className="flex flex-col gap-4 sm:ml-[4vw] md:ml-[6vw] 2xl:ml-[8vw]">
        <h2 className="open-sans font-bold text-3xl flex items-center">
          <img className="max-h-[1.6em] mr-3" src={arrowRight} alt="" />
          NASZE PLACÓWKI
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:flex xl:flex-row justify-center">
        {places.length > 0 ? (
          places.map((place) => <PlaceBox {...place} key={place.text} />)
        ) : (
          <h2>NIE ZNALEZIONO PLACÓWEK</h2>
        )}
      </div>
    </section>
  );
}

const PlaceBox = ({ image, phone, email, text }: PlaceBoxProps) => {
  return (
    <div className="flex flex-col rounded">
      <img className="w-full object-cover h-[2in]" src={image} alt="" />
      <div className="p-4 bg-primary flex flex-col gap-4">
        <p className="font-semibold open-sans">{text}</p>
        <div className="flex flex-col">
          <span>tel. {phone}</span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};
