import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './SwiperComponent.css';

const SwiperComponent = () => {
    return (
        <div className="carousel">
            <Carousel style={{height:"500px", borderRadius:"16px"}}>
                <Carousel.Item style={{height:"500px", borderRadius:"16px"}}>
                    <img
                    className="d-block carousel-img "
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Big Discount!</p>
                    <h3>For All Toys</h3>
                    <button className='shop-now-btn mb-2'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height:"500px", borderRadius:"16px"}}>
                    <img
                    className="d-block carousel-img"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <p>Basic Collection</p>
                    <h3>Summer Collection</h3>
                    <button className='shop-now-btn mb-2'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height:"500px", borderRadius:"16px"}}>
                    <img
                    className="d-block  carousel-img"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <p>
                        New On 2023!
                    </p>
                    <h3>Exciting Miniature Cars!</h3>
                    <button className='shop-now-btn mb-2'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height:"500px", borderRadius:"16px"}}>
                    <img
                    className="d-block carousel-img"
                    src={img4}
                    alt="4th slide"
                    />

                    <Carousel.Caption>
                    <p>
                       Basic Collection
                    </p>
                    <h3>Summer Collection</h3>
                    <button className='shop-now-btn mb-2'>Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SwiperComponent;