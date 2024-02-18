import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiHandler } from './apiHandler.js';

function useProductForm() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [productTypes, setProductTypes] = useState([]);
  const [selectedType, setSelectedType] = useState({});
  const [selectedTypeProperties, setSelectedTypeProperties] = useState([]);
  const [properties, setProperties] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchProductTypes = async () => {
      try {
        const { data } = await apiHandler.get('/types');
        setProductTypes(data.data);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };

    fetchProductTypes();
  }, []);

  const handleTypeChange = async (typeId) => {
    const selectedProductType = productTypes.find(
      (type) => type.id === Number(typeId)
    );
    setSelectedType(selectedProductType);
    setProperties([]);

    try {
      const { data } = await apiHandler.get('/properties', {
        params: { type_id: typeId },
      });
      setSelectedTypeProperties(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const handleSubmit = async () => {
    const formData = new FormData(formRef.current);
    const productData = {
      ...Object.fromEntries(formData),
      ['properties']: properties,
    };

    try {
      await apiHandler.post('/products', JSON.stringify(productData));
      console.log(JSON.stringify(productData));
      return navigate('/');
    } catch (error) {
      console.error(error);

      // Sprawdź, czy błąd jest wynikiem walidacji na serwerze
      if (error?.response?.status === 400) {
        // Jeśli tak, to wyświetl błędy walidacji
        const validationErrors = error?.response?.data?.message;
        toast.error(validationErrors);
      } else {
        // W przeciwnym razie wyświetl ogólny komunikat błędu
        toast.error('An error occurred while processing your request.');
      }
    }
  };
  return {
    formRef,
    productTypes,
    selectedType,
    handleSubmit,
    selectedTypeProperties,
    properties,
    handleTypeChange,
    setProperties,
    navigate,
  };
}

export default useProductForm;
