const Input = (props: { placeholder: string; type: string; action: any }) => {
  return (
    <div className="form__control">
      <input
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => props.action(e.target.value)}
      />
    </div>
  );
};
export default Input;
