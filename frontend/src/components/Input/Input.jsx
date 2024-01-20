import './Input.scss';

const Input = ({ type, label, id, handleChange, value }) => {
  return (
    <div className='input-wrapper'>
      <input
        autoComplete='off'
        className='input'
        type={type}
        id={id}
        placeholder={label}
        onChange={handleChange}
        value={value}
      />
      <label className='label' htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
