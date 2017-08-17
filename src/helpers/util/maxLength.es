import isExisty from './isExisty';

const	maxLength = function (value, length) {
    console.log("Value Length:", value.length);
	return !isExisty(value) || value.length <= length;
};

export default maxLength;