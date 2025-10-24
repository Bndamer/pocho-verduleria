import React from "react";

function Carrito({ cart, removeFromCart, updateQuantity }) {

  
  // Calcular total general del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="carrito mt-5 border rounded">
      <h2 className="text-center mb-4">🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <p className="mb-0 text-muted">
                      ${item.price} c/u
                    </p>
                    
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <p className="mb-0 fw-bold">
                      Subtotal: ${item.price * item.quantity}
                    </p>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-end">
            <h4>Total: ${total}</h4>
            <button className="btn btn-success mt-2">Finalizar compra</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrito;