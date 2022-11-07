import { useContext,useState } from 'react';
import CheckoutContext from "../contexts/CheckoutContext"
export default function Product(props) {
  const { name, icon, price } = props;
  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");
  const {product, setProduct} = useState();
  const [selected, setSelected] = useState(false);

  const {productsSelected, setPoductsSelected} = useContext(CheckoutContext);
  function addProductOnCheckout(){
    if (isProductAlreadySelected()) {
      const newProductList = removeProductFromCart();
      setPoductsSelected(newProductList);
      
    } else {
      setPoductsSelected([...productsSelected, { name: name, icon: icon, price: price}]);
    }
  
  }

  function removeProductFromCart() {
    return productsSelected.filter(productOnCart => name !== productOnCart.name);
  }

  function isProductAlreadySelected() {
    return productsSelected.find(productOnCart => name === productOnCart.name);
  }

  return (
    <div className={productsSelected.find(productOnCart => name === productOnCart.name) ? "product selected":"product"} onClick={addProductOnCheckout}>
      {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}