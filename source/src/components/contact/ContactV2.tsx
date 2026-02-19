"use client";

import Image from "next/image";

const ContactV2 = () => {
  return (
    <>
      <div className="contact-area contact-page overflow-hidden bg-gray default-padding">
        {/* Shape */}
        <div className="sahpe-right-bottom">
          <Image
            src="/assets/img/shape/16.png"
            alt="Shape"
            width={290}
            height={500}
            priority
          />
        </div>

        <div className="container">
          <div className="row align-center">
            {/* LEFT SIDE – INFO / CTA */}
            <div className="col-tact-stye-one col-xl-7 col-lg-7 mb-md-50">
              <div className="contact-style-one-info">
                <h5 className="sub-title">Kako da nas kontaktiraš?</h5>
                <h2 className="heading">Brzo i jednostavno</h2>

                <p>
                  Ako imaš pitanja ili želiš saradnju, slobodno nas kontaktiraj
                  putem telefona, emaila ili društvenih mreža. Odgovaramo u
                  najkraćem mogućem roku.
                </p>

                <ul className="contact-process mt-30">
                  <li>
                    <i className="fas fa-phone-alt" />
                    <div>
                      <h5>Pozovi nas</h5>
                      <p>24/7</p>
                    </div>
                  </li>

                  <li>
                    <i className="fas fa-envelope" />
                    <div>
                      <h5>Pošalji email</h5>
                      <p>Odgovor u roku od 24h</p>
                    </div>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/zelenadvorista/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <i className="fab fa-instagram" />
                      <div>
                        <h5>Instagram</h5>
                        <p>@zelenadvorista</p>
                      </div>
                    </a>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-40">
                  <a
                    href="mailto:rivanovic999@gmail.com"
                    className="btn btn-theme"
                  >
                    <i className="fas fa-paper-plane" /> Pošalji email
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – CONTACT INFO */}
            <div className="col-tact-stye-one col-xl-5 col-lg-5 pl-80 pl-md-15 pl-xs-15">
              <div className="contact-style-one-info">
                <h2>
                  Kontakt
                  <span>
                    Informacije
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0"
                        style={{ animationPlayState: "running" }}
                      />
                    </svg>
                  </span>
                </h2>

                <p>Slobodno nas kontaktirajte putem sledećih podataka.</p>

                <ul>
                  <li>
                    <div className="content">
                      <h5 className="title">Telefon</h5>
                      <a href="tel:+381628269969">+381 62 826 9969</a>
                    </div>
                  </li>

                  <li>
                    <div className="info">
                      <h5 className="title">Email adresa</h5>
                      <a href="mailto:rivanovic999@gmail.com">
                        rivanovic999@gmail.com
                      </a>
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
