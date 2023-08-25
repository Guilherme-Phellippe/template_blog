import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";
import Main from "../components/templates/Main";

export default function Home() {
    return (
        <div className="w-screen bg-[#0001]">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}