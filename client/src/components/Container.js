import React from 'react';
import _ from 'lodash';
import axios from 'axios';

import RightSideDisplay from './RightSideDisplay';
import FormSection from './FormSection';
import LoadScreen from './LoadScreen';
import SaveDialog from './SaveDialog';

import { cced_thematic_initial_state } from '../templates/cced_thematic';
import { idt_thematic_initial_state } from '../templates/idt_thematic';
import { id_thematic_initial_state } from '../templates/id_thematic';
import { idt_reader_initial_state } from '../templates/idt_reader';
import { cced_reader_initial_state } from '../templates/cced_reader';
import { id_reader_initial_state } from '../templates/id_reader';
import { id_digital_initial_state } from '../templates/id_digital';
import { idt_digital_initial_state } from '../templates/idt_digital';
import { cced_digital_initial_state } from '../templates/cced_digital';
import { cdew_da_initial_state } from '../templates/cdew_da';
import { cdew_dds_initial_state } from '../templates/cdew_dds';
import { cdew_dh_initial_state } from '../templates/cdew_dh';
import { cdew_lab_initial_state } from '../templates/cdew_lab';
import { cdew_thematic_initial_state } from '../templates/cdew_thematic';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      showSaveDialog: false,
      showLoadScreen: false,
      selected_template: 'id_digital',
      cced_digital: cced_digital_initial_state,
      cced_reader: cced_reader_initial_state,
      cced_thematic: cced_thematic_initial_state,
      id_digital: id_digital_initial_state,
      id_reader: id_reader_initial_state,
      id_thematic: id_thematic_initial_state,
      idt_thematic: idt_thematic_initial_state,
      idt_reader: idt_reader_initial_state,
      idt_digital: idt_digital_initial_state,
      cdew_da: cdew_da_initial_state,
      cdew_dds: cdew_dds_initial_state,
      cdew_dh: cdew_dh_initial_state,
      cdew_lab: cdew_lab_initial_state,
      cdew_thematic: cdew_thematic_initial_state,
    };
  }

  //form-related functions
  handleFormDrag(startIndex, endIndex) {
    let stateClone = _.cloneDeep(this.state);
    let arrayOfRows = stateClone[this.state.selected_template];
    const removedRow = arrayOfRows.splice(startIndex, 1);
    arrayOfRows.splice(endIndex, 0, removedRow[0]);
    stateClone[this.state.selected_template] = arrayOfRows;
    this.setState(stateClone);
  }
  handleFormSwitch(formIndex, formToSwitch) {
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template].splice(formIndex, 1, formToSwitch);
    this.setState(stateClone);
  }
  handleFormDelete(field) {
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template].splice(field, 1);
    this.setState(stateClone);
  }
  handleFormAdd(formIndex, formToAdd) {
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template].splice(formIndex + 1, 0, formToAdd);
    this.setState(stateClone);
  }
  handleFieldChange(form, field, value) {
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template][form].fields[field].value = value;
    this.setState(stateClone);
  }
  handleTemplateChange(template) {
    //create a blank object for the template if it does not exist
    if (!this.state[template]) {
      this.setState({ template: {} });
    }
    this.setState({ selected_template: template });
  }
  //end form related functions


  updateFileName(fileName) {
    this.setState({ fileName });
    this.handleSave();
  }

  //When you hit the save button, there are two scenarios:
  //1. If you have saved before, this is updating the file
  //2. If this is your first save, you need to name the file
  handleSave() {
    if (this.state.fileName !== '') {
      axios.put('/api/update-email', { state: this.state });
    } else {
      this.handleSaveAs();
    }
  }
  handleSaveAs() {
    this.setState({ showSaveDialog: true })
  }
  async handleSaveNew() {
    let response = await axios.post('/api/save-new-email', { state: this.state });
    console.log(response.data);
    //alert the user that the 
  }

  //make a call to the backend to delete
  async handleDelete(fileName) {
    console.log(fileName);
    await axios.delete('/api/delete-email', { data: { fileName } });
  }

  handleOpen() {
    this.setState({ showLoadScreen: true })
  }
  handleFileSelection(fileState) {
    this.setState(fileState);
    this.setState({ showLoadScreen: false });
  }
  showHomeScreen() {
    this.setState({ showLoadScreen: false })
  }

  toggleDialog() {
    this.setState({ showSaveDialog: !this.state.showSaveDialog })
  }
  renderDialog() {
    return (
      <div>
        <SaveDialog closeSaveDialog={() => this.toggleDialog()} OnUpdateFilenName={(fileName) => this.updateFileName(fileName)} onUpdateSaveAs={() => this.handleSaveNew()} />
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.state.showSaveDialog ? this.renderDialog() : null}
        {this.state.showLoadScreen
          ?
          <div id="load-container">
            <LoadScreen
              onFileSelection={(fileState) => this.handleFileSelection(fileState)}
              backButton={() => this.showHomeScreen()}
              onDelete={(fileName) => this.handleDelete(fileName)}
            />
          </div>
          :
          <div>
            <div id="container">
              <FormSection
                info={this.state}
                onTemplateChange={value => this.handleTemplateChange(value)}
                onFieldChange={(form, field, value) => this.handleFieldChange(form, field, value)}
                onFormAdd={(formIndex, formToAdd) => this.handleFormAdd(formIndex, formToAdd)}
                onFormDelete={(field) => this.handleFormDelete(field)}
                onFormSwitch={(formIndex, formToSwitch) => this.handleFormSwitch(formIndex, formToSwitch)}
                onFormDrag={(startIndex, endIndex) => this.handleFormDrag(startIndex, endIndex)}
              />
              <RightSideDisplay
                info={this.state}
                onSave={() => this.handleSave()}
                onSaveAs={() => this.handleSaveAs()}
                onOpen={() => this.handleOpen()}
              />
            </div>
          </div>
        }
      </div>

    );
  }
}

export default Container;