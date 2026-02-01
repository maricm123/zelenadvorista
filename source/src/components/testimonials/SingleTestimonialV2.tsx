import RatingsStar from '../utilities/RatingsStar';
import Image from 'next/image';

interface DataType {
    id?: number;
    ratings: number;
    testimonial?: string;
    name: string;
    designation?: string;
    avatar?: string;
    quoteIcon?: string;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { avatar, ratings, quoteIcon, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-style-two">
                <div className="item-info">
                    <div className="rating">
                        <RatingsStar ratings={ratings} />
                    </div>
                    <p>
                        {testimonial.testimonial}
                    </p>
                </div>
                <div className="provider">
                    <div className="thumb">
                        {/* <Image src={`/assets/img/farmers/${avatar}`} alt={name} width={800} height={800} /> */}
                        {/* <div className="quote">
                            <Image src={`/assets/img/shape/${quoteIcon}`} alt="Quote Icon" width={128} height={128} />
                        </div> */}
                    </div>
                    <div className="info">
                        <div className="content">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;