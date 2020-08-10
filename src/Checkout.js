import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CurrncyFormat from "react-currency-format";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/OHL/XCM_CUTTLE_1241487_1281644_IN_AUGART20_3254719_1500x300_en_IN.jpg"
      />

      {basket?.length === 0 ? (
        <div>
          <h2> Sorry! Your Shopping Cart Is Empty </h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">
            Your Shopping Cart (make sure you're signed in)
          </h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
