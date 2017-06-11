import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { load as loadData } from '../routes/Counter/modules/counter';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const data = {};
for (let i = 0; i < 500; i++) {
  data['field'+i] = {};
  data['field'+i]['firstName'] = 'Jane'+i;
  data['field'+i]['lastName'] = 'Doe'+i;
  data['field'+i]['email'] = i + 'joe@gmail.com';
}

const renderCustom = (field) => (
  <div>
    <div>
      <label htmlFor={`${field.input.name}.firstName`}>First Name</label>
      <Field name={`${field.input.name}.firstName`} component="input" type="text" />
    </div>
    <div>
      <label htmlFor={`${field.input.name}.lastName`}>Last Name</label>
      <Field name={`${field.input.name}.lastName`} component="input" type="text" />
    </div>
    <div>
      <label htmlFor={`${field.input.name}.email`}>Email</label>
      <Field name={`${field.input.name}.email`} component="input" type="email" />
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
          new Array(500).fill(1).map((it, index) => (
            <div key={index}>
              <Field name={`field${index}`} component={renderCustom} />
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
