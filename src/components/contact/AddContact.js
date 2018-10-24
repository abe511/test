import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
    disabled: false
  };

  onSubmit = async (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    // check input
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    this.setState({ disabled: true });

    const newContact = {
      name,
      email,
      phone
    };

    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: response.data });

    // clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
      disabled: false
    });

    this.props.history.push('/');
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: {
        [event.target.name]: ![event.target.value]
          ? this.state.errors[[event.target.name]]
          : null
      }
    });
  };

  render() {
    const { name, email, phone, errors, disabled } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-header">
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <TextInputGroup
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                      <TextInputGroup
                        label="Email"
                        type="text"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                      <TextInputGroup
                        label="Phone"
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-block"
                      value="Add Contact"
                      disabled={disabled}
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
