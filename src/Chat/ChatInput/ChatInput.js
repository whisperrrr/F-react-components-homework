import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  sendCustomerMessage = () => {
    const customerMessage = {
      text: this.state.inputValue,
      role: ROLE.CUSTOMER,
    };
    this.props.onSend(customerMessage);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <button type="button" onClick={this.sendCustomerMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
