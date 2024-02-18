import PropTypes from 'prop-types';

function renderOptions(list) {
  return list.map((item) => (
    <option key={item.id || item} value={item.id || item}>
      {item.name || item}
    </option>
  ));
}

function FormRowSelect({
  defaultValue = '',
  id,
  labelText,
  list = [],
  name,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="form-row">
      <label htmlFor={id || name}>
        {labelText || name}
        {required && <span className="input-required"> *</span>}
      </label>
      <select
        className="text-capitalize"
        name={name}
        id={id || name}
        defaultValue={defaultValue || placeholder}
        onChange={onChange}
        required={required}
      >
        {placeholder && <option disabled>{placeholder}</option>}
        {renderOptions(list)}
      </select>
    </div>
  );
}

FormRowSelect.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  list: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FormRowSelect;
