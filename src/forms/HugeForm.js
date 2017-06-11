import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { load as loadData } from '../routes/Counter/modules/counter';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const data = {};
for (let i = 0; i < 300; i++) {
  data['field'+i] = {};
  data['field'+i]['firstName'+i] = 'Jane'+i;
  data['field'+i]['lastName'+i] = 'Doe'+i;
  data['field'+i]['email'+i] = i + 'joe@gmail.com';
}

const renderCustom = (index) => (field) => (
  <div>
    <div>
      <label htmlFor={`${field.input.name}.firstName${index}`}>First Name</label>
      <Field name={`${field.input.name}.firstName${index}`} component="input" type="text" />
    </div>
    <div>
      <label htmlFor={`${field.input.name}.lastName${index}`}>Last Name</label>
      <Field name={`${field.input.name}.lastName${index}`} component="input" type="text" />
    </div>
    <div>
      <label htmlFor={`${field.input.name}.email${index}`}>Email</label>
      <Field name={`${field.input.name}.email${index}`} component="input" type="email" />
    </div>
  </div>
)

export class HugeForm extends Component {
  render() {
    const {
      handleSubmit,
      load,
      initialValues
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {
          new Array(300).fill(1).map((it, index) => (
            <div key={index}>
              <Field name={`field${index}`} component={renderCustom(index)} />
              <hr/>
            </div>
          ))
        }
        <button type="submit">Submit</button>
      </form>
    );
  }
}

HugeForm.propTypes = propTypes;
HugeForm = reduxForm({
  form: 'HugeForm'
})(HugeForm);

HugeForm = connect(
  state => ({
    initialValues: data // pull initial values from account reducer
  }),
  { load: loadData } // bind account loading action creator
)(HugeForm)

export default HugeForm;
