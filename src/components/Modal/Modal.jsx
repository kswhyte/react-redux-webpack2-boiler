import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './modal.css';

const propTypes = {
  toggle: PropTypes.bool,
  modalType: PropTypes.oneOf(['danger', 'success', 'warning', 'info']),
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  closeButtonTitle: PropTypes.string,
  closButtonOnClick: PropTypes.func,
  buttons:  PropTypes.arrayOf(
      PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        buttonType: PropTypes.oneOf(['primary', 'default'])
      })
  )
};

class Modal extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.toggle ? `modal fade in ${this.props.modalType}` : `modal fade ${this.props.modalType}`} tabIndex="-1" role="dialog">
        <div className={"modal-dialog"} role="document">
          <div className={"modal-content"}>
            <div className={"modal-header"}>
              <button type="button" className={"close"} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className={"modal-title"}>{this.props.title}</h4>
            </div>
            <div className={"modal-body"}>
              <p>{this.props.content}</p>
            </div>
            <div className={"modal-footer"}>
              <button
                type="button"
                className="btn-default btn"
                onClick={() => this.props.closButtonOnClick()}
                data-dismiss="modal"
              >{this.props.closeButtonTitle}</button>

              {this.props.buttons.map((button, index) => {
               return <button
                id={`modal-button-${index}`}
                type="button"
                onClick={() => {
                  this.props.closButtonOnClick()
                  button.onclick()}}
                className={`btn-${button.buttonType} btn`}
                 >
                  {button.displayName}
                </button>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
