import "./style.css";

const Product = ({ products, currentFunction }) => {
  return (
    <div>
      {products.map((item) => (
        <>
          <img src={item.img} />
          <span>{item.name}</span>
          <span> {item.category}</span>
          <span>{item.price}</span>
          <button
            onClick={(event) => {
              currentFunction(item.id);
              event.preventDefault();
            }}
          >
            Adicionar
          </button>
        </>
      ))}
    </div>
  );
};

export default Product;
