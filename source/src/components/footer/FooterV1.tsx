"use client"
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import FooterRecentPost from "./FooterRecentPost";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV1 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/8.png)' }}>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 item">
                                <div className="footer-item about">
                                    <Link href="/">
                                        <Image className="logo w-auto" src="/assets/img/logozelena.svg" alt="Logo" width={790} height={240} />
                                    </Link>
                                    <p>
                                        Pozovite nas danas i saznajte kako možemo pomoći da vaše dvorište zablista!
                                    </p>
                                    {/* <form onSubmit={handleForm}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete="off" required />
                                        <button type="submit"> Go</button>
                                    </form> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 item">
                                <div className="footer-item link">
                                    <h4 className="widget-title">Otkrij još</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">O nama</Link>
                                        </li>
                                        <li>
                                            <Link href="/project">Projekti</Link>
                                        </li>
                                        <li>
                                            <Link href="/services">Usluge</Link>
                                        </li>
                                        <li>
                                            <Link href="/farmers">Galerija</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Kontakt</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item recent-post">
                                    <h4 className="widget-title">Najskoriji Projekti</h4>
                                    <ul>
                                        {BlogV1Data.slice(1, 3).map(blog =>
                                            <FooterRecentPost blog={blog} key={blog.id} />
                                        )}
                                    </ul>
                                </div>
                            </div> */}

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item contact">
                                    <h4 className="widget-title">Kontakt Informacije</h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-home" />
                                            </div>
                                            <div className="content">
                                                <strong>Adresa:</strong>
                                                Ćirila i Metodija 80, Novi Sad
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@validtheme.com">rivanovic999@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone" />
                                            </div>
                                            <div className="content">
                                                <strong>Telefon:</strong>
                                                <a href="tel:+381628269969">+381 62 826 9969</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="" target="_blank">zelenadvorista</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-right-bottom">
                    <Image src="/assets/img/shape/kosilica.png" alt="Image Not Found" width={1000} height={500} />
                </div>
            </footer>
        </>
    );
};

export default FooterV1;