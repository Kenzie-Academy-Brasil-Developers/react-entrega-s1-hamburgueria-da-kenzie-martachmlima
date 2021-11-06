import "./style.css";

const Product = ({ products, currentFunction, userInput }) => {
  return (
    <>
      {userInput !== "" && (
        <div className="result">
          Resultado para: <span className="input">{userInput}</span>
        </div>
      )}

      <div className="scroll">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <section>
              <img src={item.img} />
            </section>
            <div className="info">
              <span className="name">{item.name}</span>
              <span className="category"> {item.category}</span>
              <span className="price">
                {" "}
                R{"$ "}
                {Number(item.price).toFixed(2)}
              </span>
              <button
                onClick={(event) => {
                  currentFunction(item.id);
                  event.preventDefault();
                }}
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
