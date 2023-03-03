import { useEffect, useState } from "react"
import { arrowRight } from "../assets/general"
import { NewsProps } from "../consts/news"

export default function NewsPage() {
    const [news, setNews] = useState<NewsProps[]>([])
    useEffect(() => {
        fetch('/api/news')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <section className="padding py-[1.4in] md:py-[1.8in] 2xl:py-[2.2in] flex flex-col gap-20">
            <div className="flex flex-col gap-4 sm:ml-[4vw] md:ml-[6vw] 2xl:ml-[8vw]">
                <h2 className="open-sans font-bold text-3xl flex items-center">
                <img className="max-h-[1.6em] mr-3" src={arrowRight} alt="" />
                AKTUALNOŚCI
                </h2>
            </div>
            <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:flex xl:flex-row justify-center">
                {news.map(n => <News {...n} key={n.title} />)}
            </div>
        </section>
    )
}

const News = ({ title, desc }: NewsProps) => {
    return (
        <div className="max-w-[60vw] flex flex-col">
            <h2 className="leading-none text-xl">{title}</h2>
            <p className="mt-2">{desc}</p>
        </div>
    )
}