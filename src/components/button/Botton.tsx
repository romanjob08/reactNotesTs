import {FC} from "react";

type Props = {
    className?: string
    cullBack: (value: boolean) => any
    cullBackValues: boolean
    textValue?: string
}

export const Button: FC<Props> = ({className= '', cullBack, cullBackValues, textValue = ''}) => {
    return <button className={className}
        onClick={() => cullBack(cullBackValues)}>
        {textValue}
    </button>
}