import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SingleProduct({ product, handleCheckboxChange, isChecked }) {
  const [currentProduct, setCurrentProduct] = useState(product);

  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);

  const onCheckboxChange = () => {
    handleCheckboxChange(currentProduct.id);
  };

  return (
    <section className="single-product fade-in">
      <div className="flex flex-jc-fs gap-2 align-center">
        <div className="single-product__checkbox-container">
          <input
            type="checkbox"
            id={`product-${currentProduct.id}`}
            className="delete-checkbox"
            onChange={onCheckboxChange}
            checked={isChecked}
          />
        </div>
      </div>
      <div className="">
        <p>{currentProduct.sku}</p>
        <p>{currentProduct.name}</p>
        <p className="single-product__price">
          <span>$</span>
          {currentProduct.price}
        </p>
        <p>{currentProduct.description}</p>
      </div>
    </section>
  );
}

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default SingleProduct;
