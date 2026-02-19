"use client";
import AboutV1ListData from '@/assets/jsonData/about/AboutV1ListData.json'
import AboutV1List from './AboutV1List';
import Counter from '../counter/Counter';

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">

                        {/* INFO / TEKST BLOK */}
                        <div className="col-xl-12 col-lg-12">
                            <div className="about-style-one-info">

                                <h1 className="title">Naša priča</h1>

                                <p className="lead">
                                    <strong>Zelena dvorišta</strong> su priča ljudi koji su učili radeći. Sve je počelo jednostavno, kroz rad, pokušaje i upornost. 
                                    Spontano i gotovo slučajno, kroz razne terenske i fizičke poslove, kao mladi tim sa željom za izazovima i voljom za razvijanjem nečeg svog, rodila se ideja da se bavimo prostorima kojima je potrebna pažnja, red i kontinuitet.
                                </p>

                                <p>
                                    Kroz neposredan rad i osluškivanje potreba ljudi, uočili smo da mnogi vlasnici kuća, vikendica i poslovnih objekata, zbog ličnih i poslovnih obaveza, nemaju vremena da se posvete svojim dvorištima onako kako bi želeli. 
                                    <strong>Krok po korak</strong>, iz tog saznanja nastala je ideja da razvijemo sistem košenja, čišćenja i redovnog održavanja dvorišta, jednostavan, ali odgovoran.
                                </p>

                                <h2 className="subtitle">O nama</h2>

                                <p>
                                    Već više od tri godine posao radimo temeljno, uz stalno učenje i poštovanje prema ljudima i prostoru koji nam je poveren. 
                                    <em>Iz sezone u sezonu poboljšavamo edukaciju, opremu i način rada.</em>  
                                    Verujemo da kvalitet ne dolazi preko noći, već iz discipline, strpljenja, iskustva i vremena provedenog na terenu.
                                </p>

                                <h2 className="subtitle">Saradnja</h2>

                                <p>
                                    Saradnju gradimo sa vlasnicima privatnih kuća, vikendica i poslovnih objekata koji cene trud, poštovanje dogovora i pouzdan odnos. 
                                    Ne težimo velikom broju klijenata, već dugoročnim saradnjama u kojima svakom dvorištu možemo da se posvetimo planski i temeljno.
                                </p>

                                <p>
                                    Verujemo u jasan dogovor i standarde koji se poštuju sa obe strane. Zato svaki posao započinjemo besplatnim obilaskom terena i otvorenim razgovorom, kako bismo zajedno utvrdili potrebe, realna očekivanja i mogućnosti da isporučimo najbolju moguću uslugu.
                                </p>

                                {/* FUN FACT / COUNTER */}
                                <div className="fun-fact-style-flex mt-35">
                                    <div className="counter">
                                        <div className="timer"><Counter end={100} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Obavljenih <br /> poslova</span>
                                </div>

                                {/* LISTA FEATURE / USP – jedan ispod drugog */}
<ul className="top-feature mt-30" style={{ paddingLeft: 10, display: 'inline', width: '100%' }}>
    {AboutV1ListData.map(list => (
        <li key={list.id} style={{ marginBottom: '15px' }}>
            <AboutV1List list={list} />
        </li>
    ))}
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
