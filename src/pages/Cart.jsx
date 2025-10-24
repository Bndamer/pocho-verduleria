import Carrito from '../components/Carrito.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart({ cart, removeFromCart, updateQuantity }) {
  return (
    <div className="container">
      <Carrito
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default Cart;
