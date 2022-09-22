import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export const getImage = (src: IconProp) => {
  return <FontAwesomeIcon className={'icon-img'} icon={src}></FontAwesomeIcon>
}