import React, { Component } from 'react';
import axios from 'axios';

class LoadScreen extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state.files[0].fileName);
  }
  async componentDidMount() {
    //Should get an array of objects
    let files = await axios.get('/api/file-load');
    this.setState({ files: files.data })
  }

  handleClickOnTableRow(key) {
    //lookup the proper object needed to populate state
    let fileState = this.state.files.find(file => {
      return file.fileName === key;
    });
    this.props.onFileSelection(fileState);
  }
  handleBackButton() {
    this.props.backButton();
  }

  renderTable() {
    return (
      <table className="load-table">
        <tbody>
          <tr>
            <th>File Name</th>
            <th>Last Updated</th>
          </tr>
          <tr key={'file.fileName'} onClick={(e) => this.handleClickOnTableRow(e.target.key)} >
            <td>{this.state.files[0].fileName ? this.state.files[0].fileName : ''}</td>
            {/* <td>Pl</td> */}
            <td>{this.state.files[0].lastUpdated ? this.state.files[0].lastUpdated : ''}</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
          </tr>
        </tbody>
      </table>
    )

  }
  render() {
    if (this.state.files) {
      return (
        <div className="load-screen">
          <h2>Select a File to Open.</h2>
          {this.renderTable()}
          <p onClick={this.handleBackButton}>&lt; Back</p>
        </div >
      )
    } else {
      return (
        <div className="load-screen">
          <h2>Loading...</h2>
          <p onClick={this.handleBackButton}>&lt; Back</p>
        </div >
      )
    }

  }
}

export default LoadScreen;