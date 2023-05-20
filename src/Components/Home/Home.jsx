import './Home.css';
import { useTitle } from '../../hooks/hooks';
import SwiperComponent from '../SwiperComponent/SwiperComponent';
import { Card } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Home = () => {
    useTitle("Home");
    return (
        <>
            <section className="swiper-container mb-5">
                <SwiperComponent></SwiperComponent>
            </section>
            <section className="container my-5">
                <h2 className="text-center">Our Collection</h2>
                <div className="my-5 row">
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/zGytNmf/2.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Construction Vehicle</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/23P1D03/3.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Construction Truck</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/2NhcrLK/4.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Police Car</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/NWGj6qd/5.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Miniature Train</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/P5pnfsC/6.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Miniature Car - Volkswagen</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/9sJ3YPP/7.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Miniature Truck - Ford</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/7X4H59N/8.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Miniature Bus - Volkswagen</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/JBQj08y/9.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Miniature Car - Chevrolet Corvette</Card.Title>
                        </Card>
                    </div>
                    <div className="col-lg col-sm-12 m-2">
                        <Card style={{ width: '18rem', height:"275px" }}>
                            <Card.Img variant="top" src="https://i.ibb.co/zb5hqcC/1.jpg"></Card.Img>
                            <Card.Title className="my-2 p-2 text-center">Sports Car - Lamborghini</Card.Title>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container my-5 border p-5">
                <Tabs>

                    <TabList>
                    <Tab>Miniature Cars</Tab>
                    <Tab>Construction Toys</Tab>
                    <Tab>Sports Car</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>

                </Tabs>

            </section>
        </>
    );
};

export default Home;