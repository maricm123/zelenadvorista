import AboutV1 from "@/components/about/AboutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV1 from "@/components/team/TeamV1";
import TimelineV1 from "@/components/timeline/TimelineV1";
import WhyChooseV3 from "@/components/whyChoose/WhyChooseV3";

export const metadata = {
    title: "Zelena Dvorista - O nama"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="O nama" breadCrumb="O nama" />
                <AboutV1 />
                {/* <TimelineV1 sectionClass="default-padding-bottom" /> */}
                <WhyChooseV3 />
                {/* <TeamV1 /> */}
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;