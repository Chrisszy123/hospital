const Button = (props: { text: string; action: any; disabled: boolean }) => {
  return (
    <div className="form__control">
      <button onClick={props.action} disabled={props.disabled}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
