import {Categories, images} from "../common";

export const getImageType = (item: string) => {
    switch (item) {
        case Categories.IDEA:
            return images.idea
        case Categories.TASK:
            return images.task
        case Categories.RANDOM_THOUGHT:
            return images.randomThought
        default:
            return images.task
    }
}