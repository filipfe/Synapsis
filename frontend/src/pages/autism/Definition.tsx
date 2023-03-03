import { definition } from "../../assets/autism/autism";

export default function Definition() {
    return (
        <section className="padding flex flex-col gap-16 py-[1in] md:grid grid-cols-2">
            <img className="w-full" src={definition} alt="" />
            <div className="flex flex-col gap-8">
                <p className="text-sm open-sans leading-loose">Autyzm jest zaburzeniem neurorozwojowym. Przyczyny autyzmu nie są w pełni znane - wpływ na jego ujawnienie się mają zarówno czynniki genetyczne, jak i środowiskowe. Wpływa całościowo na rozwój i funkcjonowanie danej osoby.</p>
                <p className="text-sm open-sans leading-loose">Określenie „spektrum autyzmu” ma na celu zwrócenie uwagi na to, jak różnorodne są osoby z autyzmem i w jak różny sposób zaburzenie to może wpływać na ich życie. W spektrum znajdują się zarówno osoby które nie mówią, mają poważne problemy w zakresie samodzielności i funkcjonują na poziomie niepełnosprawności intelektualnej. Dtyczy to również osób sprawnie porozumiewających się mową, zakładających rodziny i realizujących się w życiu zawodowym. Dla skrótowego określenia spektrum autyzmu używa się najczęściej angielskiego ASD (Autism Spectrum Disorder); odpowiednikiem w języku polskim jest określenie: całościowe zaburzenia rozwojowe (CZR).</p>
            </div>
            <p className="col-span-2 text-sm open-sans leading-loose">
                Osoby dorosłe ze spektrum mogą identyfikować się z różnymi określeniami swojego nietypowego funkcjonowania, tj. „autystyk”, „asperger”, “neuro nietypowy, „osoba ze spektrum”, “osoba z autyzmem” czy „osoba autystyczna”. Natomiast dzieci i młodzież często jeszcze nie wiedzą, jak chciałyby same siebie określać. Autyzm jest częścią tożsamości danej osoby, występuje od urodzenia i… po prostu jest. Nie jest chorobą. Jest stanem – odmiennym sposobem myślenia i odczuwania świata. U niektórych osób prowadzi do niepełnosprawności o różnym stopniu, ponieważ może powodować poważne problemy w życiu i ograniczać samodzielne radzenie sobie z codziennymi wyzwaniami. Z tego powodu warto jest podejmować działania, które pomogą przezwyciężać trudności wynikające z autyzmu i lepiej sobie z nimi radzić.
            </p>
        </section>
    )
}