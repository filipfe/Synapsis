import Events from "../components/home/Events";
import ImageSlider from "../components/home/ImageSlider";
import News from "../components/home/News";
import Places from "../components/home/Places";
import RealizedProject from "../components/home/RealizedProjects";

export default function HomePage() {
    return (
        <div className="flex flex-col items-stretch">
            <ImageSlider />
            <RealizedProject />
            <News />
            <Events />
            <Places />
        </div>
    )
}