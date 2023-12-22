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
            <section className="my-auto flex h-[73vh] lg:h-[75vh]">
                <div className="my-auto mx-auto">
                    <img
                        className="lg:h-[65vh] lg:w-[100vw]"
                        src={PageNotFound}
                        alt="page-not-found"
                    />
                    <div className="text-[15px] text-[color:hsl(236,13%,42%)]">
                        <p className="font-['Inter-Regular']">
                            Oops! It looks like you've stumbled upon a page that doesn't
                            exist. But no worries, I'll put you on the right track.
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
                </div>
            </section>
            <Footer />
        </div>
    );
}
