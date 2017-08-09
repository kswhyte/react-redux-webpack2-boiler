import React from 'react';
import propTypes from 'prop-types';

import './modal.css';

const ModalWrapper = props => {

  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };



  return (
  <section>
    <div onClick={handleBackgroundClick} className={`modal fade in ${props.modalType}`} tabIndex="-1" role="dialog">
      <div className={"modal-dialog"} role="document">
        <div className={"modal-content"}>
          <div className={"modal-header"}>
            <button onClick={props.hideModal} type="button" className={"close"} aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className={"modal-title"}>{props.title}</h4>
          </div>
          <div className={"modal-body"}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
    <div className="modal-background"></div>
  </section>
  );
};

ModalWrapper.propTypes = {
  // props
  title: propTypes.string,
  showOk: propTypes.bool,
  okText: propTypes.string,
  modalType: propTypes.string,
  okDisabled: propTypes.bool,
  width: propTypes.number,
  style: propTypes.object,
  children: propTypes.oneOfType([
    propTypes.array,
    propTypes.element,
    propTypes.string,
  ]).isRequired,

  // methods
  hideModal: propTypes.func
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  hideModal: () => {}
};

export default ModalWrapper;
