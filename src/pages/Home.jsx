import Carrusel from '../components/Carrusel.jsx';  
import Gallery from '../components/Gallery.jsx';  
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ addToCart }) {
  return (
    <>
      <Carrusel />
      <Gallery addToCart={addToCart} />
    </>
  );
}

export default Home;