export const capFirstLetter = (string) => {
    if (typeof string === 'string' && string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
}
