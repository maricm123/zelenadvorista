"use client"
import Image from 'next/image';
import { toast } from 'react-toastify';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactV2 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Hvala što ste nam poslali poruku!")
    }

    return (
        <>
            <div className="contact-area contact-page overflow-hidden bg-gray default-padding">
                <div className="sahpe-right-bottom">
                    <Image src="/assets/img/shape/16.png" alt="Image Not Found" width={290} height={500} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-xl-7 col-lg-7">
                            <div className="contact-form-style-one mb-md-50">
                                <Image src="/assets/img/illustration/10.png" alt="Image Not Found" width={360} height={600} />
                                <h5 className="sub-title">Imaš pitanja?</h5>
                                <h2 className="heading">Pošalji nam poruku</h2>

                                <form className="contact-form contact-form" onSubmit={handleForm}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Ime" type="text" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control no-arrows" id="phone" name="phone" placeholder="Telefon" type="number" required autoComplete='off' />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Reci nam kako ti možemo pomoći" required autoComplete='off' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" name="submit" id="submit">
                                                <i className="fa fa-paper-plane" /> Pošalji poruku
                                            </button>
                                        </div>
                                    </div>
                                    {/* Alert Message */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-tact-stye-one col-xl-5 col-lg-5 pl-80 pl-md-15 pl-xs-15">
                            <div className="contact-style-one-info">
                                <h2>
                                    Kontakt
                                    <span>
                                        Informacije
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{ animationPlayState: 'running' }} /></svg>
                                    </span>
                                </h2>
                                <p>
                                    Ako imate bilo kakvih pitanja, slobodno nas kontaktirajte putem donjih podataka ili ispunite obrazac i odazvaćemo se u najkraćem mogućem roku.
                                </p>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <h5 className="title">Telefon</h5>
                                            <a href="tel:+381628269969">+381 62 826 9969</a>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="info">
                                            <h5 className="title">Naša lokacija</h5>
                                            <p>
                                                Ulica Ćirila i Metodija 80, <br /> Novi Sad
                                            </p>
                                        </div>
                                    </li> */}
                                    <li>
                                        <div className="info">
                                            <h5 className="title">Zvanična e-mail adresa</h5>
                                            <a href="mailto:rivanovic999@gmail.com">rivanovic999@gmail.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV2;