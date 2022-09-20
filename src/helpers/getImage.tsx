import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export const getImage = (src: IconProp) => {
  return <FontAwesomeIcon icon={src}></FontAwesomeIcon>
}