import {months} from "../common";

export const getSpecialData = () => {
    const wholeDate = new Date(Date.now());
    const Year = wholeDate.getFullYear();
    const Month = months[wholeDate.getMonth() - 1];
    const Day = () => {
        const day = wholeDate.getDay()
        return day < 10 ? `0${day}` : day
    };
    return `${Month} ${Day()},${Year}`
}