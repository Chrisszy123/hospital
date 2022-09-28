import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Card(props: {
  icon: string;
  figure: string;
  title: string;
  color: string;
}) {
  return (
    <div className="card">
      <FontAwesomeIcon icon={props.icon as IconProp} className={props.color} />
      <div className="card_inner">
        <p className="text-primary-p">{props.title}</p>
        <span className="font-bold text-title">{props.figure}</span>
      </div>
    </div>
  );
}

export default Card;
