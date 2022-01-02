import React, { useState } from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const sd = useSelector((state) => state);
  // const [data, setData] = useState(Data)
  return (
    <div>
      {console.log("sd", sd)}
      {/* {sd.length} */}
      <div className="">
        <Link to="/cart">Cart {sd ? sd.length : "0"}</Link>
      </div>
      {Data.map((item) => {
        return (
          <>
            <div className="">{item.name}</div>
            <div className="">
              <img src={` ../images/${item.image}`} alt="cart" height="70" />
              <p>{item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                AddCart
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
