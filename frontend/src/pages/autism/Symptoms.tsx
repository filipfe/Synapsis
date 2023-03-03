import { symptoms1, symptoms2 } from "../../assets/autism/autism";

export default function Symptoms() {
    return (
        <section className="padding flex flex-col gap-16 py-[1in] md:grid grid-cols-2">
            <img className="w-full" src={symptoms1} alt="" />
            <div className="flex flex-col gap-4">
                <h3 className="font-bold open-sans">Problemy w sferze społecznego komunikowania się i interakcji społecznych</h3>
                <p className="text-sm open-sans leading-loose">Osoby w spektrum autyzmu mają trudności w nawiązywaniu kontaktów i przestrzeganiu reguł społecznych, a także ze zrozumieniem reakcji i emocji innych ludzi. Często wyrażają własne uczucia w nietypowy sposób. Mogą w ogóle nie posługiwać się mową werbalną albo mieć ograniczony zasób słów; mogą też mówić płynnie, ale mieć trudności z rozumieniem kontekstu i wyrażaniem abstrakcyjnych pojęć. Często nie potrafią kompensować tego gestem ani innymi formami przekazu lub ich próby radzenia sobie nie są w pełni wystarczające. W interakcjach z innymi nie okazują wzajemności, ich wypowiedzi mogą często bardziej przypominać wykład niż codzienną rozmowę.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-bold open-sans">Tendencja do powtarzalnych wzorców zachowań, zainteresowań i aktywności</h3>
                <p className="text-sm open-sans leading-loose">Osoby te zwykle przejawiają opór przed zmianami w otoczeniu i przebiegu aktywności; mają nietypowe zainteresowania i pasje. Zachowują się w nietypowy, powtarzalny lub zrytualizowany sposób, co może dotyczyć sposobu poruszania się, chodzenia, mówienia (np. dobierania słów i formułowania zdań), sposobu wykonywania codziennych złożonych czynności itp. Zdarza się, że posiadają niezwykłe dla swojego wieku lub wyjątkowo nasilone zainteresowania i ulubione tematy, którym poświęcają wiele swojego czasu i uwagi. Często w zmieniony sposób odbierają i przetwarzają bodźce sensoryczne z otoczenia, np. narzekają, że jest za głośno, za jasno lub brzydko pachnie, choć wokół inni tak nie uważają. Osoby w spektrum autyzmu naprawdę wtedy czują inaczej, ich zmysły działają w szczególny sposób.</p>
            </div>
            <img className="w-full" src={symptoms2} alt="" />
            <div className="flex flex-col col-span-2 gap-8">
                <p className="text-sm leading-loose"><strong>WAŻNE!</strong> Powyższy opis jest jedynie wskazówką do zrozumienia osób z autyzmem. Ale SPEKTRUM oznacza, że KAŻDA osoba z autyzmem jest inna i u każdej autyzm przejawia się różnym zestawem cech i ich nasilenia. Mogą pojawić się też takie, które nie zostały tu wymienione.</p>
                <p className="text-sm open-sans leading-loose">
                Wiele osób zw spektrum autyzmu wykazuje nadwrażliwość lub ograniczone reakcje na bodźce dotykowe, bólowe, słuchowe, wzrokowe i zapachowe. W różnych sytuacjach życiowych mogą doświadczać przeciążenia sensorycznego (ang. meltdown), które objawia się płaczem, paniką, czasami złością, co znacznie utrudnia im panowanie nad swoimi reakcjami i powoduje duże cierpienie. 
                </p>
            </div>
        </section>
    )
}