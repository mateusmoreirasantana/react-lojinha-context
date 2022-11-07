import { useNavigate } from "react-router-dom"
import { useContext,useState } from 'react';
import CheckoutContext from "../contexts/CheckoutContext"
import Product from "../components/Product";
export default function CheckoutPage() {
  const navigate = useNavigate();
  const {productsSelected, setPoductsSelected} = useContext(CheckoutContext);

  function getTotal() {
    return productsSelected.reduce((total, current) => {
      return total += current.price;
    }, 0)
  }

  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      {
        productsSelected.map(product => {
          return (
            <Product
              key={product.name}
              name={product.name}
              icon={product.icon}
              price={product.price}
            />
          )
        })
      }
      <div className="register">
        <b>Total da compra:</b> R$ <span>{getTotal().toFixed(2)}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>


  )
}