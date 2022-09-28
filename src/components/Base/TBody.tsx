import { CarType } from "../../types/Car";
import { useLocation, Link } from "react-router-dom";

const TBody = (props: { item: CarType[] }) => {
  const location = useLocation();
  const List = props.item;
  return (
    <tbody>
      {List.map((item: any, i: any) => {
        const _key = Object.keys(item);
        return (
          <tr key={i}>
            {Object.keys(_key).map((key: any, i: any) => {
              if (i < _key.length / 2) {
                return <td key={key}>{item[_key[key]]}</td>;
              }
              if (
                i - 1 === _key.length / 2 - 1 &&
                location.pathname === "/view-car"
              ) {
                return (
                  <td key={_key.length}>
                    <Link to={`/car-details/${item["VIN"]}`}>View Car</Link>
                  </td>
                );
              } else {
                return null;
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TBody;
