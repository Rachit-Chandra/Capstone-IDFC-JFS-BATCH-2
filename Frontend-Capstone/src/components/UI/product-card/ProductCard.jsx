import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";
import { Card ,CardBody,CardTitle,CardText} from 'reactstrap';
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <Card
    className="my-2"
    color="info"
    
    inverse
    style={{
      width: '36rem'
    }}
  >
    <CardBody>
      
      
 
        <div className="product__img">
          <img src={image01} alt="product-img" className="w-50" />
        </div>

        <div className="product__content">
          <h5>
            <Link to={`/medicine/${id}`}>{title}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">

            <span className="product__price">&#8377;{price}</span>
            <button className="addTOCart__btn" onClick={addToCart}>
              Add to Bag
            </button>
          </div>
        </div>
        </CardBody>
  </Card>
    </div>
  );
};

export default ProductCard;
