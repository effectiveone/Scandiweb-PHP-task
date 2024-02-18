import { useNavigate } from 'react-router-dom';
import { HeaderComponent, SingleProduct } from '../components';
import { useProductLogic } from '../utils/useProduct.js';

function Products() {
  const navigate = useNavigate();
  const {
    products,
    isLoading,
    isError,
    checkedProducts,
    handleCheckboxChange,
    handleDelete,
  } = useProductLogic();

  if (isError) {
    return <main>Could not retrieve the products at the moment!</main>;
  }

  return (
    <main className="products">
      <HeaderComponent
        title="Product List"
        btnOneText="ADD"
        btnTwoText="MASS DELETE"
        btnOneAction={() => navigate('/add-product')}
        btnTwoAction={handleDelete}
        btnTwoId="delete-product-btn"
        btnTwoDisabled={checkedProducts.length === 0}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="products__product-container">
          {products &&
            products?.products
              ?.slice()
              ?.sort((a, b) => a.id - b.id)
              ?.map((product) => {
                return (
                  <SingleProduct
                    key={product.id}
                    product={product}
                    handleCheckboxChange={handleCheckboxChange}
                    isChecked={checkedProducts.includes(product.id)}
                  />
                );
              })}
        </section>
      )}
    </main>
  );
}

export default Products;
