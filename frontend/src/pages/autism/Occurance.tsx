import { occurance } from "../../assets/autism/autism";

export default function Occurance() {
    return (
        <section className="padding flex flex-col gap-16 py-[1in] md:grid grid-cols-2">
            <img className="w-full" src={occurance} alt="" />
            <p className="text-sm open-sans leading-loose">Ogólnoświatowe wskaźniki występowania autyzmu podawane przez WHO za 2012 r. mówią o 1 dziecku z autyzmem na 160 dzieci (0,6%). W Stanach Zjednoczonych Raport CDC za 2016 r. podaje średnią częstotliwość ASD 18.5 na 1,000 (jedno na 54) dzieci w wieku 8 lat.  Nie istnieją pełne dane epidemiologiczne mówiące o częstotliwości występowania autyzmu w Europie czy w Polsce. W Polsce dane Biura Osób Niepełnosprawnych MRPiPS wskazują na wzrost liczby wydawanych orzeczeń o niepełnosprawności z powodu ASD z 7617 w 2012 r. do 19 859 wydanych orzeczeń w 2019 r., co oznacza ponad 2,5 krotny wzrost! Nie są to jednak dane o liczbie osób z ASD, gdyż orzeczenia są wydawane na różne okresy ważności. W roku szkolnym 2018/2019 w szkołach podstawowych specjalnych w Polsce uczyło się 19 916 tys. uczniów z ASD. Jednak liczba ta jest znacząco większa, gdyż wielu uczniów z ASD, zwłaszcza z ZA, uczy się w szkołach masowych, integracyjnych, w szkołach ponadpodstawowych, a szereg uczniów z ASD zaliczonych jest do innej kategorii – do uczniów z niepełnosprawnościami sprzężonymi (najczęściej autyzm i niepełnosprawność intelektualna). Z roku na rok diagnozowanych jest coraz więcej osób ze spektrum autyzmu w różnym wieku i wzrasta skala niezaspokojonych potrzeb grupy osób z niepełnosprawnością z powodu autyzmu. Wskazują na to <span className="font-bold open-sans">Raport NIK (2020) i Raport Caritas z projektu Konsultacje+ (2017)</span>
            </p>
        </section>
    )
}