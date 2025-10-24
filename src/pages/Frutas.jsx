import Gallery from "../components/Gallery.jsx";

function Frutas({ addToCart }) {
  return (
    <>
      <Gallery addToCart={addToCart} categoryFilter="Fruta" />
    </>
  );
}

export default Frutas;