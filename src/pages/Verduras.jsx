import Gallery from "../components/Gallery.jsx";

function Verduras({ addToCart }) {
  return (
    <>
      <Gallery addToCart={addToCart} categoryFilter="Verdura" />
    </>
  );
}

export default Verduras;