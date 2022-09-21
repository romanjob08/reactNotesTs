import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export type Note = {
    id: string
    image: IconDefinition
    name: string
    created: string
    category: string
    content: string
    dates: string
    active: boolean
    redact: boolean
}
