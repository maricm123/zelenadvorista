import BreadCrumbContactUs from "@/components/breadCrumb/BreadCrumbContactUs";
import ContactV2 from "@/components/contact/ContactV2";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Zelena Dvorista - Kontakt"
};

const ContactPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumbContactUs title="Kontaktirajte nas" breadCrumb="Kontakt" />
                <ContactV2 />
            </LayoutV1>
        </>
    );
};

export default ContactPage;