export default function Footer() {
    return (
        <>
            <footer className="py-24 ">
                <div className="grid lg:grid-cols-5 grid-rows-2 border-t-2 border-slate-500 gap-6">
                    <div class="lg:col-span-2 lg:col-start-1 text-start">

                        <a href="#" target="_blank" className="text-[color:hsl(236,13%,42%)]">
                            {" "}
                            this is footer
                        </a>
                    </div>
                    <div class="lg:col-span-2 lg:col-end-6 lg:text-right">social links</div>

                </div>
            </footer>
        </>
    );
}

/* .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  } */

// https://play.tailwindcss.com/V7irubSNcJ

// &copy; dynamic year by me(portfolio link) &mdash; Made with 💜
// social link : twitter, github, linkedin
