import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavItem } from "../../types/NavItem";

const SidebarItem = (props: NavItem) => {
  return (
    <div className={props.class}>
      <FontAwesomeIcon icon={props.icon as IconProp} />
      <Link to={props.route}>{props.text}</Link>
    </div>
  );
};

export default SidebarItem;
