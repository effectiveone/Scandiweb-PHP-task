import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { HeaderComponent, SingleProduct } from '../components';
import { fetchProducts, deleteProducts } from '../app/productsSlice';

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const isError = useSelector((state) => state.products.isError);
  const [checkedProducts, setCheckedProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCheckboxChange = (productId) => {
    setCheckedProducts((prevIds) => {
      if (prevIds.includes(productId)) {
        return prevIds.filter((id) => id !== productId);
      } else {
        return [...prevIds, productId];
      }
    });
  };

  const handleDelete = () => {
    console.log('checkedProducts', checkedProducts);
    dispatch(deleteProducts(checkedProducts))
      .then(() => {
        setCheckedProducts([]);
        dispatch(fetchProducts());
        alert('uzyte');
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

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
