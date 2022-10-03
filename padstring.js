export const generate = (num, size) => {
    try {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    } catch (e) {
        return num
    }
};