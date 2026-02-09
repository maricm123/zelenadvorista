import Link from 'next/link';

const ProductSpeciality = () => {
    return (
        <>
            <div className="product-speciality-arae bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/20.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-8">
                            <div className="product-speciality-info default-padding-bottom">
                                <div className="product-badge">
                                    <h1>100% <strong>Pouzdani</strong></h1>
                                </div>
                                <h2><strong>Besplatna </strong>procena </h2>
                                <p>
                                    Kontaktirajte nas danas za besplatnu procenu vašeg dvorišta. Stalo nam je da vaš zeleni prostor bude uvek lep i funkcionalan. Naš tim je spreman da odgovori na sva vaša pitanja i ponudi rešenja prilagođena vašim potrebama.
                                </p>
                                <Link className="btn btn-dark btn-md radius animation" href="/shop">Pozovite nas!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSpeciality;