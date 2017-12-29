import React, {Component} from 'react';
import Modal from '../Util/Modal'

export default class ContactMe extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      senderName: '',
      message: '',
      senderAddress: ''
    };

    this.validationStatuses = {};
    this.resetState = this.resetState.bind(this);

    this.inputEmptyMessage = "Please fill this field";
    this.invalidEmailMessage = "This is not a valid email address.";
  }

  render() {

    return (
      <div>
        <section id="contactMe">
          <div className="container text-light">
            <h1 className="display-3">Contact me</h1>
            <div className="contactBox p-3">
              <form onSubmit={(event) => {
                event.preventDefault();
              }}>
                <div className="form-group">
                  <label >Your name</label>
                  <input id="senderName" onInvalid={() => this.onFieldInvalid("senderName")} required type="text" className="form-control" value={this.state.senderName} onChange={(event) => this.onChange(event.target.value, 'senderName')}/>
                </div>
                <div className="form-group">
                  <label >Your email</label>
                  <input id="senderAddress" onInvalid={() => this.onFieldInvalid("senderAddress")} required type="text" className="form-control" value={this.state.senderAddress} onChange={(event) => this.onChange(event.target.value, 'senderAddress')}/>
                </div>
                <div className="form-group">
                  <label >Message</label>
                  <textarea id="message" onInvalid={() => this.onFieldInvalid("message")} required className="form-control" value={this.state.message} onChange={(event) => this.onChange(event.target.value, 'message')}></textarea>
                </div>
                <button className="btn btn-dark btn-block" onClick={(event) => this.sendMessage(event)}>
                  Send
                </button>
              </form>
            </div>
            <footer id="main-footer" className="text-center p-4 mt-4">
              <div className="row">
                <div className="col">
                  <p>Copyright &copy; 2018 Krystyna Ślusarczyk</p>
                </div>
              </div>
            </footer>
          </div>
        </section>
        <Modal id="messageHasBenSentModal" text="Your message has been sent."/>
      </div>
    );
  }

  onFieldInvalid(domElementId)
  {
    if (!this.validationStatuses[domElementId]) {
      this.validationStatuses[domElementId] = this.inputEmptyMessage
    }
    document.getElementById(domElementId).setCustomValidity(this.validationStatuses[domElementId]);
  }
  sendMessage(event)
  {
    if (this.isValidEmail(this.state.senderAddress) && this.state.senderName.length > 0 && this.state.message.length > 0) {

      $.post("/sendMessage", {
        senderName: this.state.senderName,
        message: this.state.message,
        senderAddress: this.state.senderAddress
      }, function(result) {
        if (result.status === 'success') {
          $('#messageHasBenSentModal').modal('show');
        } else {
          console.log("Error: " + result.status)
        }
      }).done(() => {
        this.resetState();
      });
    }
  }

  resetState()
  {
    this.setState({senderName: '', message: '', senderAddress: ''});
  }

  onChange(value, propertyName)
  {
    this.setState({[propertyName]: value});

    if (propertyName === "senderAddress" && !this.isValidEmail(value)) {
      this.setInputValidationMessage(propertyName, this.invalidEmailMessage)
    } else if (value.length === 0) {
      this.setInputValidationMessage(propertyName, this.inputEmptyMessage)
    } else {
      this.setInputValidationMessage(propertyName, "")
    }
  }

  setInputValidationMessage(propertyName, errorMessage)
  {
    this.validationStatuses[propertyName] = errorMessage;
    document.getElementById(propertyName).setCustomValidity(this.validationStatuses[propertyName]);
  }

  isValidEmail(email) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.toLowerCase());
  }
}
