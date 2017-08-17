import isExisty from './isExisty';
import isEmpty from './isEmpty'

const	matchRegexp = function (value, regexp) {
	return !isExisty(value) || isEmpty(value) || regexp.test(value);
};

export default matchRegexp