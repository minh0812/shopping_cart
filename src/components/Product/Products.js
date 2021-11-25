import Product from "./Product";
import productsProvider from "../../features/product/products";

const Products = () => {
  return (
    <div className="product-list">
      {productsProvider.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
