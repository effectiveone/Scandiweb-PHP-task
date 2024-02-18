import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchProducts, deleteProducts } from '../app/productsSlice';

export function useProductLogic() {
  const dispatch = useDispatch();

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
    dispatch(deleteProducts(checkedProducts))
      .then(() => {
        setCheckedProducts([]);
        dispatch(fetchProducts());
        alert('Products deleted successfully.');
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return {
    products,
    isLoading,
    isError,
    checkedProducts,
    handleCheckboxChange,
    handleDelete,
  };
}
