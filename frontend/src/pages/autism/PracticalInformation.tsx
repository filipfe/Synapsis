import Dropdown from "../../components/Dropdown";
import { practicalInfo } from "../../consts/autism";

export default function PracticalInformation() {
  return (
    <section className="padding py-[1in] md:py-[1.4in] flex flex-col gap-8">
      {practicalInfo.map((info) => (
        <Dropdown
          title={info.title}
          component={
            <p className="font-semibold text-sm text-left open-sans leading-relaxed">
              {info.text}
            </p>
          }
        />
      ))}
    </section>
  );
}
