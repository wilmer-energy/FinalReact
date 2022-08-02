import React from 'react';

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 img-fluid" alt="..." />
                        {/* <video src="./src/video/videocarrousel.mp4" autoPlay muted className="d-block w-120 videoc"></video> */}
                        <div className="carousel-caption d-none d-md-block">
                            <h2>STATION INTELIGENT </h2>
                          <a href="" className='btn btn-info'>Buy Now</a>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>SMARTPHONES Y SMARTTV'S</h2>
                            <a href="" className='btn btn-info'>Buy Now</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>COMPUTERS Y OTHERS </h2>
                            <a href="" className='btn btn-info'>Buy Now</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>


            </div>
        </>
    );
};

export default Carousel;