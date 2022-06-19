import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/productsActions";
import { selectProductsList } from "../../redux/selectors/productsSelectors";

const Products = () => {
    const dispatch = useDispatch()
  const productsList = useSelector(selectProductsList);

  const addToCart = (product) => {
    dispatch(addProductToCart(product))
  }

  return (
    <div>
      {productsList.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
