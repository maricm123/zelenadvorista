"use client"
import Image from 'next/image';
import AboutV1ListData from '@/assets/jsonData/about/AboutV1ListData.json'
import AboutV1List from './AboutV1List';
import Counter from '../counter/Counter';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {
    useEffect(() => {
        // Set initial position
        gsap.set('.animation-shape', {
            yPercent: 10,
        });

        // Create the animation
        gsap.to('.animation-shape', {
            yPercent: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.animation-shape',
                scrub: 1,
            },
        });
    }, []);

    return (
        <>
            <div className="about-style-one-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="about-style-one-thumb">
                                <Image src="/assets/img/about/cikarezezivicu.jpg" alt="Image Not Found" width={615} height={852} priority />
                                <div className="animation-shape">
                                    <Image src="/assets/img/illustration/cikarezezivicu.jpg" alt="Image Not Found" width={250} height={533} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-style-one-info">
                                <h2 className="title">  <br /> </h2>
                                <h1>Naša priča</h1>
                                <p>
                                    Zelena dvorišta su priča ljudi koji su učili radeći. Sve je počelo jednostavno, kroz rad, pokušaje i upornost.
Spontano i gotovo slučajno, kroz razne terenske i fizičke poslove, kao mladi tim sa željom za izazovima i voljom za razvijanjem nečeg svog, rodila se ideja da se bavimo prostorima kojima je potrebna pažnja, red i kontinuitet.

Kroz neposredan rad i osluškivanje potreba ljudi, uočili smo da mnogi vlasnici kuća, vikendica i poslovnih objekata, zbog ličnih i poslovnih obaveza, nemaju vremena da se posvete svojim dvorištima onako kako bi želeli. Korak po korak, iz tog saznanja nastala je ideja da razvijemo sistem košenja, čišćenja i redovnog održavanja dvorišta, jednostavan, ali odgovoran.
<h1>O nama</h1>

Već više od tri godine posao radimo temeljno, uz stalno učenje i poštovanje prema ljudima i prostoru koji nam je poveren. Iz sezone u sezonu poboljšavamo edukaciju, opremu i način rada i verujemo da kvalitet ne dolazi preko noći, već iz discipline, strpljenja, iskustva i vremena provedenog na terenu.

Glad za znanjem i razvojem sopstvenog posla jača nam je od brzih rešenja i kratkoročnih ciljeva. Svaki posao gledamo kao novu misiju i izazov, kojem pristupamo ozbiljno i posmatramo ga kao priliku za usavršavanje i davanje maksimuma. Verujemo da se pravi napredak gradi kroz odgovornost, sposobnost rešavanja problema, učenje na greškama i spremnost da se svaki sledeći posao uradi bolje nego prethodni i tako zadovolje želje klijenta.

Naš cilj od prvog dana nije bio samo profit, već razvoj. Razvoj sistema rada, lične i poslovne odgovornosti, odnosa sa ljudima i doprinos sredini u kojoj radimo i živimo.
<br />
<h1>Saradnja</h1>
Saradnju gradimo sa vlasnicima privatnih kuća, vikendica i poslovnih objekata koji cene trud, poštovanje dogovora i pouzdan odnos. Ne težimo velikom broju klijenata, već dugoročnim saradnjama u kojima svakom dvorištu možemo da se posvetimo planski i temeljno.

Verujemo u jasan dogovor i standarde koji se poštuju sa obe strane. Zato svaki posao započinjemo besplatnim obilaskom terena i otvorenim razgovorom, kako bismo zajedno utvrdili potrebe, realna očekivanja i mogućnosti da isporučimo najbolju moguću uslugu.

Naš cilj je da prostor sa svakim našim dolaskom izgleda zdravije, urednije i funkcionalnije i da postane mesto u kojem možete da uživate, bez stresa i razmišljanja o održavanju.

Zelena dvorišta su posao u razvoju.
I mi zajedno sa njim.
                                </p>
                                <div className="fun-fact-style-flex mt-35">
                                    <div className="counter">
                                        <div className="timer"><Counter end={100} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Obavljenih <br /> poslova</span>
                                </div>
                                <ul className="top-feature">
                                    {AboutV1ListData.map(list =>
                                        <AboutV1List key={list.id} list={list} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;