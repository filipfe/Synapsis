import { arrowRight } from "../../../assets/general";

export default function CooperatingOrganizations() {
  return (
    <section className="padding flex flex-col gap-16 py-[1in] md:grid grid-cols-2">
      <div className="flex items-center">
        <img className="max-h-[1.6em] mr-3" src={arrowRight} alt="" />
        <h2>MISJA</h2>
      </div>
    </section>
  );
}
