import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const getImage = (src: IconProp) => {
  return <FontAwesomeIcon className={'icon-img'} icon={src}></FontAwesomeIcon>
}