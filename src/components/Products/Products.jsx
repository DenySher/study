import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/productsActions";
import { selectProductsList } from "../../redux/selectors/productsSelectors";
import styles from './Prodacts.module.scss'

const Products = () => {

    const dispatch = useDispatch()
    const productsList = useSelector(selectProductsList);

    const addToCart = (product) => {
      dispatch(addProductToCart(product))
    }

    console.log(productsList)

  return (
    
      <div className={styles.ContainerProductsCart}>
        <div>
          {productsList.map((product) => (
            <div className={styles.productCart} key={product.id}>
              <h3>{product.name}</h3>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          ))}
          
        </div>
        <div className={styles.cart}>
          <h3>Shopping cart:</h3> 
          {
            //  (
            //   // <div>
            //   //   <h3>{}</h3>
            //   //   <button> Delete </button>
            //   // </div>
            // )
          }
        </div>
      </div>
  );
};

export default Products;
