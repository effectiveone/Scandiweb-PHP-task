import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  HeaderComponent,
  FormRow,
  FormRowSelect,
} from '../components/index.js';
import { apiHandler } from '../utils/apiHandler.js';

function AddProduct() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [productTypes, setProductTypes] = useState([]);
  const [selectedType, setSelectedType] = useState({});
  const [selectedTypeProperties, setSelectedTypeProperties] = useState([]);
  const [properties, setProperties] = useState({});

  // Pobranie typów produktów przy montowaniu komponentu
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

  console.log('productTypes', productTypes);

  // Obsługa zmiany typu produktu
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

  // Walidacja produktu
  // const validateProduct = (product) => {
  //   // Logika walidacji produktu
  // };

  // Obsługa zatwierdzenia formularza
  const handleSubmit = async () => {
    const formData = new FormData(formRef.current);
    const productData = {
      ...Object.fromEntries(formData),
      ['properties']: properties,
    };

    // if (!validateProduct(productData)) return;

    try {
      await apiHandler.post('/products', JSON.stringify(productData));
      return navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="add-product">
      <HeaderComponent
        title="Product Add"
        btnOneText="Save"
        btnTwoText="Cancel"
        btnTwoClass="btn-cancel"
        btnOneAction={handleSubmit}
        btnTwoAction={() => navigate('/')}
      />

      <form method="POST" id="product_form" className="fade-in" ref={formRef}>
        <FormRow name="sku" labelText="SKU" required />
        <FormRow name="name" required />
        <FormRow type="number" labelText="Price ($)" name="price" required />
        <FormRowSelect
          labelText="Type switcher"
          name="type_id"
          id="productType"
          placeholder="Please Select Type"
          list={productTypes}
          onChange={(e) => handleTypeChange(e.target.value)}
          required
        />
      </form>

      {!!selectedTypeProperties && (
        <div id={selectedType.name} className="product-type-container">
          {selectedTypeProperties.data?.map((property) => {
            return (
              <FormRow
                key={property.id}
                name={property.name}
                labelText={`${property.name} (${property.unit})`}
                onChange={(e) =>
                  setProperties({
                    ...properties,
                    [property.name]: e.target.value,
                  })
                }
                required
              />
            );
          })}
          <p>
            Please provide{' '}
            <span className="text-capitalize">{selectedType.measure_name}</span>{' '}
            in{' '}
            <span className="text-capitalize">{selectedType.measure_unit}</span>{' '}
            format
          </p>
        </div>
      )}
    </main>
  );
}

export default AddProduct;
