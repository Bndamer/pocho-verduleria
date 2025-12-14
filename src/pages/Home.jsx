import Carrusel from '../components/Carrusel.jsx';  
import Gallery from '../components/Gallery.jsx';  
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ addToCart, searchTerm }) {
  return (
    <>
      <Carrusel />
       <Gallery addToCart={addToCart} searchTerm={searchTerm} />
    </>
  );
}

export default Home;