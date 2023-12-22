import Logo from "../assets/images/logo.svg";
import PageNotFound from "../assets/images/page-not-found.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:pt-12 lg:pb-0 lg:px-14 pt-4 pb-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
            <a href="#">
                <img src={Logo} alt="logo" />
            </a>
            <section>
                <img src={PageNotFound} alt="page-not-found" />
                <div className="text-base text-[color:hsl(236,13%,42%)]">
                    <p className="font-['Inter-Regular']">
                        I'm sorry, the page you were looking for does not exist. But don't
                        worry, I'll let you put on the right track.
                    </p>
                    <p className="font-['Inter-Bold']">
                        Try to visit{" "}
                        {
                            <Link className="hover:text-[color:hsl(5,85%,63%)]" to="/">
                                Home
                            </Link>
                        }
                        . You will get someting else than nothing!
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
