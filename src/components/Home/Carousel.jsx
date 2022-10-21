import Carousel from 'react-bootstrap/Carousel';
import "../Home/Carousel.css"

function CarouselHome() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="img"
          src="https://http2.mlstatic.com/D_NQ_NP_628579-MLA51311153589_082022-O.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>"Temporada Nueva B&H Kids"</h5>
          <p>Conjunto Bautismo: Boina, Tiradores, Bermuda/pescador, Moño.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://http2.mlstatic.com/D_NQ_NP_715345-MLA51311203135_082022-O.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>"Temporada Nueva B&H Kids"</h5>
          <p>Conjunto Bautismo: Boina, Tiradores, Bermuda/pescador, Moño.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://http2.mlstatic.com/D_NQ_NP_727687-MLA51311166417_082022-O.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>"Temporada Nueva B&H Kids"</h5>
          <p>Conjunto Bautismo: Boina, Tiradores, Bermuda/pescador, Moño.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://http2.mlstatic.com/D_NQ_NP_754161-MLA51311171371_082022-O.webp"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>"Temporada Nueva B&H Kids"</h5>
          <p>
          Conjunto Bautismo: Boina, Tiradores, Bermuda/pescador, Moño.
          </p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;