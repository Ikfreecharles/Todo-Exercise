import "./Button.styles.css";

export const ButtonComponent = (props) => {
   console.log(props);
   const { background, backgroundColor, title, color } = props;
   return (
      <button
         style={{
            backgroundColor: background ? backgroundColor : "none",
            color: color,
         }}
      >
         {title}
      </button>
   );
};
