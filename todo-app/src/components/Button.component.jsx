import "./Button.styles.css";
import addIcon from "../Assets/add-icon.png";
export const ButtonComponent = (props) => {
  const { submitTodo } = props;

  const buttonStyle = {
    width: "20px",
  };

  return (
    <>
      <button onClick={submitTodo}>
        <img src={addIcon} style={buttonStyle} />
      </button>
    </>
  );
};
