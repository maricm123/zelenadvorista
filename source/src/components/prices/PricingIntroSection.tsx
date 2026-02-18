"use client";

const PricingIntroSection = () => {
    return (
        <div className="pricing-info-area default-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="site-heading text-center mb-40">
                            <h5 className="sub-title">Transparentan pristup</h5>
                            <h2 className="title">Cenovnik i formiranje cena</h2>
                        </div>

                        <div className="pricing-info-content text-center">
                            <p className="lead mb-30">
                                Zbog različitih uslova na terenu i obima posla, nije moguće unapred
                                formirati tačne cene bez obilaska lokacije. Naša praksa je da
                                izvršimo <strong>besplatnu procenu na terenu</strong>, tokom koje
                                sagledavamo stanje prostora, vaše potrebe i želje, kao i obim
                                potrebnih radova.
                            </p>

                            <p className="mb-30">
                                Nakon obilaska i zajedničkog dogovora oko plana uređenja ili
                                održavanja, formiramo cenu u skladu sa realnim zahtevima posla i
                                mogućnošću kvalitetne isporuke usluge. Ukoliko postignemo dogovor,
                                dobijate <strong>okviran predračun</strong> i termin izvođenja
                                radova.
                            </p>

                            <p className="mb-0">
                                Usluge poput postavljanja tepih-travnjaka, košenja većih parcela,
                                sadnje biljaka i pranja pod pritiskom formiraju se u skladu sa
                                važećim tržišnim cenama.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingIntroSection;
