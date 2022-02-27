
import "../components/Button.style.css";

export const ButtonComponent = ({
  submitTodo,
  type,
  backgroundColor,
  padding,
  borderRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  marginLeft,
  children,
}) => {
  return (
    <button
      onClick={submitTodo}
      type={type}
      style={{
        backgroundColor: backgroundColor,
        padding: padding,
        borderRadius: borderRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        marginLeft: marginLeft,
      }}
    >
      {children}
    </button>
  );


};
