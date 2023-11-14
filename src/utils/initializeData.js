import GamingImg from "../assets/images/image-gaming-growth.jpg";
import RetroImg from "../assets/images/image-retro-pcs.jpg";
import topImg from "../assets/images/image-top-laptops.jpg";
import Web3DesktopImg from "../assets/images/image-web-3-desktop.jpg";

export const mainNewsData = [
    {
        id: "mainnews",
        title: "News",
        url: "#news",
        data: [
            {
                id: 1,
                name: "The Bright Future of Web 3.0",
                imgURL: Web3DesktopImg,
                desc: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
            }
        ]
    }
];

export const popularData = [
    {
        id: "popular",
        title: "Popular",
        url: "#popular",
        data: [
            {
                id: 1,
                headlinenum: "01",
                imgURL: RetroImg,
                headline: "Reviving Retro PCs",
                desc: "What happens when old PCs are given modern upgrades?"
            },
            {
                id: 2,
                headlinenum: "02",
                imgURL: topImg,
                headline: "Top 10 Laptops of 2022",
                desc: "Our best picks for various needs and budgets"
            },
            {
                id: 3,
                headlinenum: "03",
                imgURL: GamingImg,
                headline: "The Growth of Gaming",
                desc: "How the pandemic has sparked fresh opportunities."
            }
        ]
    }
];

export const trendingData = [
    {
        id: "trending",
        title: "Trending",
        url: "#trending",
        data: [
            {
                id: 4,
                name: "Hydrogen VS Electric Cars",
                desc: "Will hydrogen-fueled cars ever catch up to EVs?"
            },
            {
                id: 5,
                name: "The Downsides of AI Artistry",
                desc: "What are the possible adverse effects of on-demand AI image generation?"
            },
            {
                id: 6,
                name: "Is VC Funding Drying Up?",
                desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
            }
        ]
    }
];
