import React from 'react';
import PropTypes from 'prop-types';

const HgStub = (props) => {
    return (
        <div>
            {props.children || []}
        </div>
    );
};

HgStub.propTypes = {
    children: PropTypes.array
}

export default HgStub;