import './InputDate.scss';

const InputDate = ({ id, label, handleChange, value }) => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className='input-date-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input
        className='date-input'
        type='date'
        id={id}
        onChange={handleChange}
        value={value ? value : today}
      />
    </div>
  );
};

export default InputDate;
