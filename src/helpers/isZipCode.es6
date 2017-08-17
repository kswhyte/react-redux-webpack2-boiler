import matchRegexp from './util/matchRegexp';

const isZipCode = function(value) {
    return matchRegexp(value, /^\d{5}(?:[-\s]\d{4})?$/);
};

export default isZipCode;