import "./product.css";
import Me from "../../img/me.png";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="" target="_blank" rel="noreferrer">
        <img src="https://source.unsplash.com//720x600/?coding,phyton" alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
