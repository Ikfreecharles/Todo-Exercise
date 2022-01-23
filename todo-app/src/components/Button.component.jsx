import "./Button.styles.css";

export const ButtonComponent = ({ submitTodo, type, backgroundColor, children }) => {

  return (
    <button onClick={submitTodo} type={type} style=
    {{backgroundColor:backgroundColor}}>
      {children}
    </button>
  );


};
