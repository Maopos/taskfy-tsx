import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a text..." className="input__box" />
      <button className="input_submit" type="submit">
        Save
      </button>
    </form>
  );
};

export default InputField;
