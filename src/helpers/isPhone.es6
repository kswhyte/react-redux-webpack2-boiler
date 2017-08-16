import matchRegexp from './util/matchRegexp';
import maxLength from './util/maxLength';

const isPhone = (value) => {
    let isPhoneNumber = matchRegexp(value, /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im);
    let isTenDigits = maxLength(value.replace(/[-.() ]/g, ''), 10);
    return isPhoneNumber && isTenDigits;
};

export default isPhone;