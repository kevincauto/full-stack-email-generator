import React, { Component } from 'react';
import axios from 'axios';

class LoadScreen extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state.files);
  }
  async componentDidMount() {
    //Should get an array of objects
    let files = await axios.get('/api/file-load');
    this.setState({ files: files.data })
  }

  handleClickOnTableRow(file) {
    //lookup the proper object needed to populate state
    console.log(file);
    this.props.onFileSelection(file)
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
          {this.state.files.map((file, i) => {
            return (
              <tr key={i} onClick={() => this.handleClickOnTableRow(file.state)} >
                <td>{file.fileName}</td>
                <td>{file.lastUpdated}</td>
              </tr>
            )
          })}
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