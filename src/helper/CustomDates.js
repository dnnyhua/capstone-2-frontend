import dayjs from "dayjs";

class CustomDateTime {
    static getFormattedDate = (date) => {
        return dayjs(date).format('M-D-YYYY');
    };
    static getFormattedTime = (time) => {
        return dayjs(`1970-01-01T${time}`).format('h:mm A');
    };
    static getDayOfWeek = (date) => {
        return dayjs(date).format('dddd');
    };
}

export default CustomDateTime;