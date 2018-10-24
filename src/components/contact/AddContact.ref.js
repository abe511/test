import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    this.setState({ contact });

    console.log(contact);
  };

  static defaultProps = {
    name: 'john',
    email: 'john@jackson.com',
    phone: '234-23423-3454'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-header">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  defaultValue={name}
                  ref={this.nameInput}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Email"
                  defaultValue={email}
                  ref={this.emailInput}
                />
                <label htmlFor="name">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Phone"
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <input
                type="submit"
                className="btn btn-block"
                value="Add Contact"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
