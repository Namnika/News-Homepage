import Button from "../components/Button";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

News.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool
};

export default function News({ news, loading }) {
    const slicedNews = news.sort(() => 0.5 - Math.random()).slice(0, 1);

    return (
        <>
            <div className="col-span-2">
                {slicedNews.map((i) => {
                    return (
                        <>
                            <div key={i.title}>
                                {loading ? (
                                    <Skeleton.Node
                                        active
                                        style={{
                                            width: "45rem",
                                            height: "30rem"
                                        }}
                                    >
                                        <DotChartOutlined
                                            style={{
                                                fontSize: 0
                                            }}
                                        />
                                    </Skeleton.Node>
                                ) : (
                                    <img src={i.urlToImage} className="py-0" alt="web3-img" />
                                )}

                                <div className="grid grid-cols-1 lg:items-center items-start lg:mt-0 mt-8 text-start lg:grid-cols-2">
                                    <h2 className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold'] leading-[1.1em] text-5xl lg:text-[3.3rem]">
                                        {i.title}
                                    </h2>

                                    <div className="lg:px-5 leading-8 font-['Inter-Regular']">
                                        <p className="text-[15px]  line-clamp-4 mt-4 text-[color:hsl(236,13%,42%)]">
                                            {i.description}
                                        </p>
                                        <Button>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
