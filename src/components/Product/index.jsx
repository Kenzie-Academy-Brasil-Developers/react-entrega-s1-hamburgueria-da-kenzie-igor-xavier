import "./product.css";
function Product({ id, nome, categoria, preco, imagem, handleClick }) {
  return (
    <div className="card">
      <div className="imgCard">
        <img src={imagem} alt="" />
      </div>
      <h2>{nome}</h2>
      <label>{categoria}</label>
      <h3>R$ {Number.parseFloat(preco).toFixed(2)} </h3>
      <button className="btComprar" onClick={() => handleClick(id)}>
        Adicionar
      </button>
    </div>
  );
}
export default Product;
