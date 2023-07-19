import { Footer, Navbar } from "@/components";
import { About, Explore, Feedbacks, GetStarted, Hero, Insights, WhatsNew, World } from "@/sections";


const Home: React.FC = () => {

    return (
        <section>
            <Navbar />
            <Hero />
            <div className="relative">
                <About />
                <div className="gradient-03 z-0"/>
                <Explore />
            </div>
            <div className="relative">
                <GetStarted />
                <div className="gradient-04 z-0"/>
                <WhatsNew />
            </div>
            <World />
            <div className="relative">
                <Insights />
                <div className="gradient-04 z-0"/>
                <Feedbacks />
            </div>
            <Footer />
        </section>
    )
}

export default Home;