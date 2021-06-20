import { useSelector } from "react-redux";
import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  
  return (
    <>
      <h1>Cart</h1>

      <table>
        <thead>
          <tr>
            <th>produto</th>
            <th>preço</th>
            <th>qtd</th>
            <th>subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({product, quantity}) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{quantity}</td>
              <td>{(product.price * quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}