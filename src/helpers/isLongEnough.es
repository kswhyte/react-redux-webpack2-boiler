const isLongEnough = (word, minLength) => {
    if (word.length > minLength) {
        return true;
    }
    return false;
}

export default isLongEnough;