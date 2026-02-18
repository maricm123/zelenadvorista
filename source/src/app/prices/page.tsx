import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import GalleryV1 from "@/components/gallery/GalleryV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV2 from "@/components/team/TeamV2";
import FarmersPage from "../gallery/page";
import PricingIntroSection from "@/components/prices/PricingIntroSection";

export const metadata = {
    title: "Zelena Dvorista - Cenovnik",
};

const PricesPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Cenovnik" breadCrumb="Cenovnik" />
                <PricingIntroSection />
            </LayoutV1>
        </>
    );
};

export default PricesPage;