import Image from 'next/image';
import SingleProgressV2 from '../progress/SingleProgressV2';
import ProgressV2Data from "@/assets/jsonData/progress/ProgressV2Data.json"

const WhyChooseV3 = () => {
    return (
        <>
            <div className="choose-us-style-three-area default-padding bg-dark text-light">
                {/* <div className="illustration-bottom">
                    <Image src="/assets/img/illustration/17.png" alt="Image Not Found" width={700} height={400} />
                </div> */}
                <div className="shape" style={{ backgroundImage: 'url(/assets/img/about/about-us.jpg)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6 pl-60 pl-md-15 pl-xs-15">
                            <h2 className="title"> <br /> Zelena Dvorišta</h2>
                            <p>
                                Zelena Dvorišta je vaš pouzdan partner u održavanju i razvijanju dvorišta. Naša strast za prirodom i zelenim prostorima osigurava da vaše dvorište bude u najboljem mogućem stanju. Bilo da je reč o redovnom održavanju, uređenju ili specijalizovanim uslugama, naš tim stručnjaka je tu da vam pomogne da ostvarite svoj zeleni kutak.
                            </p>
                            <div className="list-grid">
                                {/* <div className="achivement-content">
                                    {ProgressV2Data.map(progress =>
                                        <SingleProgressV2 progress={progress} key={progress.id} />
                                    )}
                                </div> */}
                                <ul className="list-item">
                                    <li>Profesionalno</li>
                                    <li>Na vreme</li>
                                    <li>Kvalitetno</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV3;