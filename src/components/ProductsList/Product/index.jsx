import "./productsList.css";
function ProductsList({ products, Product, handleClick }) {
  return (
    <div className="divDeItens">
      <ul className="listaDeItens">
        {products.map((result) => { 
          return (
            <div key={result.id}>
              <li>
                <Product
                  id={result.id}
                  nome={result.name}
                  categoria={result.category}
                  preco={result.price}
                  imagem={result.img}
                  handleClick={handleClick}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default ProductsList;
