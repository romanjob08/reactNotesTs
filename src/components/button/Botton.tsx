import {FC} from "react";

type Props = {
    className?: any
    cullBack?: (value: boolean) => any
    cullBackValues?: boolean
    textValue?: string

}

export const Button: FC<Props> = ({className= '', cullBack=() => {}, cullBackValues=true, textValue = ''}) => {
    return <button className={className}
        onClick={() => cullBack(cullBackValues)}>
        {textValue}
    </button>
}