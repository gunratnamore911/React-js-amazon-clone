import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketToatal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small>
              <input type="checkbox" />
              This Order Contain Vouchers.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketToatal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={alert('thanks for shopping')}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
