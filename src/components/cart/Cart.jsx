import "./cart.css";
function Cart({ currentSale, cartTotal }) {
  return cartTotal === 0 ? (
    <div className="carrinho">
      <div className="vazio">
        <div className="carrinhoTituloVazio">Carrinho de compras</div>
        <h2 className="sacolaVazia">Sua sacola está vazia</h2>
        <p className="addItens">Adicione itens</p>
      </div>
    </div>
  ) : (
    <div className="carrinho">
      <div className="carrinhoTitulo">Carrinho de compras</div>
      <ul>
        {currentSale.map((result) => {
          return (
            <div className="cartProducts">
              <div className="imgDivCart">
                <img className="imgCart" src={result.img} alt="" />
              </div>
              <div className="nomeDescDiv">
                <h2 className="nomeCart">{result.name}</h2>
                <label className="categoriaCart">{result.category}</label>
              </div>
              <a href="" className="removerCart">
                Remover
              </a>
            </div>
          );
        })}
      </ul>
      <div className="totalDiv">
        <p className="total">Total:</p>
        <p className="valorTotal">{cartTotal.toFixed(2)}</p>
      </div>
      <button className="removerBt">Remover todos</button>
    </div>
  );
}
export default Cart;
