import { CarType } from "../../types/Car";

const Input = (props: { text: string; Options: CarType[]; action: any }) => {
  return (
    <div className="form__control">
      <label>{props.text}</label>
      <br />
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => props.action(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          {props.text}
        </option>
        {props.Options?.map((item, i) => {
          return (
            <option value={item.VIN} key={i}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Input;
