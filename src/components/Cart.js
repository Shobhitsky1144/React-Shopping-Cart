import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  //   const [items, setItems] = useState();
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state);
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };

  const total = cartItem.reduce(addition, 0);

  return (
    <div>
      <h1>All Carts item</h1>
      {cartItem.map((item) => {
        return (
          <>
            {console.log(item)}
            <div className="">{item.name}</div>
            <div className="">
              <img src={` ../images/${item.image}`} alt="cart" height="70" />
              <p>{item.price}</p>
              <div className="" style={{ float: "right" }}>
                <button
                  onClick={() => dispatch({ type: "INC", payload: item })}
                >
                  INC
                </button>
                <h1>{item.quantity}</h1>
                {/* <h2>Total:{item.price * item.quantity}</h2> */}

                <button
                  onClick={() => {
                    if (item.quantity === 1) {
                      dispatch({ type: "REMOVE", payload: item });
                    } else {
                      dispatch({ type: "DEC", payload: item });
                    }
                  }}
                >
                  DEC
                </button>
              </div>

              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item })}
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
      <h2>
        full amount:
        {total}
      </h2>
    </div>
  );
};

export default Cart;
