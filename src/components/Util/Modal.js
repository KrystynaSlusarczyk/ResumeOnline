import React, {Component} from 'react';

export default class Modal extends Component {

  render() {
    return (
      <div id={this.props.id} className="modal fade" role="dialog" >
        <div className="modal-dialog">
          <div className="modal-content bg-light">
            <div className="modal-body">
              <p>{this.props.text}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
