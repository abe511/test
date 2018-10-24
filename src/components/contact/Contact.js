import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Contact extends Component {
  constructor() {
    super();
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.state = {
      contactInfoOpen: false
    };
  }

  async deleteClickHandler(id, dispatch) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  }

  handleMenuToggle(name, e) {
    this.setState({ contactInfoOpen: !this.state.contactInfoOpen });
  }

  render() {
    const { id, name, phone, email } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div
              className="card card-body mb-3"
              style={{
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex' }}>
                <i
                  onClick={this.handleMenuToggle}
                  className={
                    this.state.contactInfoOpen
                      ? 'fas fa-caret-down'
                      : 'fas fa-caret-right'
                  }
                  style={{ cursor: 'pointer' }}
                />
                <h4
                  className="card-title"
                  onClick={this.handleMenuToggle}
                  style={{
                    cursor: 'pointer',
                    marginLeft: 'auto',
                    marginRight: '3rem'
                  }}
                >
                  {name}
                </h4>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      color: 'black',
                      marginRight: '1rem',
                      cursor: 'pointer'
                    }}
                  />
                </Link>
                <i
                  className="fas fa-times"
                  onClick={this.deleteClickHandler.bind(this, id, dispatch)}
                  style={{ cursor: 'pointer', flexGrow: 'auto', color: 'red' }}
                />
              </div>
              {this.state.contactInfoOpen ? (
                <ul className="list-group">
                  <li className="list-group-item">Name: {name}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                  <li className="list-group-item">Email: {email}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
