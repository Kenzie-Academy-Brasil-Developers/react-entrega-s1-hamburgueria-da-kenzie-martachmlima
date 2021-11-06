import "./style.css";

const Cart = ({ currentSale, currentFunction, auxFunction }) => {
  return (
    <div className="container">
      <div>
        <h2>Carrinho de Compras</h2>
        {currentSale.length === 0 ? (
          <div className="message">
            Sua sacola está vazia <span>Adicione itens</span>
          </div>
        ) : (
          <>
            <>
              {currentSale.map((item) => (
                <div className="product2" key={item.id}>
                  <section className="foto">
                    <img src={item.img} />
                  </section>
                  <div className="info2">
                    <span className="name">{item.name}</span>
                    <span className="category"> {item.category}</span>
                  </div>
                  <span
                    className="remove"
                    onClick={(event) => {
                      auxFunction(item.id);
                      event.preventDefault();
                    }}
                  >
                    Remover
                  </span>
                </div>
              ))}
            </>
            <div className="line"></div>
            <div className="total">
              Total
              <span className="totalPrice">
                R{"$ "}
                {currentSale.reduce(
                  (currentTotal, newValue) => currentTotal + newValue.price,
                  0
                )}
              </span>
            </div>
            <button
              onClick={(event) => {
                currentFunction();
                event.preventDefault();
              }}
            >
              Remover todos
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
