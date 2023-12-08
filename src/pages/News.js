import Button from "../components/Button";
import AudioComponent from "../components/AudioComponent";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

News.propTypes = {
    news: PropTypes.array,
    loading: PropTypes.bool
};

export default function News({ news, loading }) {
    const voiceId = import.meta.env.VITE_VOICE_ID;
    const voiceApiKey = import.meta.env.VITE_VOICE_API_KEY;
    const audioQualitySettings = {
        stability: 0,
        similarity_boost: 0
    };

    const slicedNews = news.sort(() => 0.5 - Math.random()).slice(0, 1);

    return (
        <>
            <div className="col-span-2">
                {slicedNews.map((i) => {
                    return (
                        <>
                            <div key={i._id}>
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
                                    <img src={i.media} className="py-0" alt="web3-img" />
                                )}

                                <div className="grid grid-cols-1 lg:items-center items-start lg:mt-0 mt-8 text-start lg:grid-cols-2">
                                    <h2 className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold'] leading-[1.1em] text-5xl lg:text-[3.3rem]">
                                        {i.title}
                                    </h2>

                                    <div className="lg:px-5 leading-8 font-['Inter-Regular']">
                                        <AudioComponent
                                            voiceId={voiceId}
                                            apiKey={voiceApiKey}
                                            text={`${i.title}${i.excerpt}`}
                                            voiceSettings={audioQualitySettings}
                                        />
                                        <p className="text-[15px]  line-clamp-4 mt-4 text-[color:hsl(236,13%,42%)]">
                                            {i.excerpt}
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
