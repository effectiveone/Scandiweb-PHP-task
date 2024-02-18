import { HeaderComponent, FormRow, FormRowSelect } from '../components';
import useProductForm from '../utils/useProductForm.js';

function AddProduct() {
  const {
    formRef,
    productTypes,
    selectedType,
    selectedTypeProperties,
    properties,
    handleTypeChange,
    navigate,
    handleSubmit,
    setProperties,
  } = useProductForm();

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
          {selectedTypeProperties.data?.map((property) => (
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
          ))}
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
