import React, { Component } from 'react';

class DeleteDialog extends Component {
  constructor() {
    super();
  }
  closeDialog() {
    this.props.closeDeleteDialog();
  }

  handleDelete() {
    console.log("delete from the dialog!")
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.OnUpdateFilenName(this.state.fileName);
    this.props.closeDeleteDialog();
    this.props.onUpdateSaveAs();
  }
  render() {
    return (
      <div className="popup" >
        <div className='popup_inner'>
          <p className="float-right" onClick={() => this.closeDialog()}>[X]</p>
          <img alt="logo" src="https://www.aegisdentalnetwork.com/img/layout/general/da-logo-large.png" width="250" />
          <p className="popup-para">Are you sure you want to delete this file?</p>
          <div>
            <button onClick={() => this.closeDialog()} className="download-button">Cancel</button>
            <button onClick={() => this.handleDelete()} className="download-button">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DeleteDialog;