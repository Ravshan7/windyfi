export const capitalizeFirstLetter = (word: string | undefined) => {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
        "Title not found"
    }
}