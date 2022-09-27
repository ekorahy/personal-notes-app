import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            arhived: false,
            createdAt: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div id="NoteInput" style={{marginTop: "150px", marginBottom: "150px"}}>
              <h2 className="fs-2 text-center fw-bold text-info">Add New Note</h2>
              <form className="mb-5" onSubmit={this.onSubmitChangeEventHandler}>
                  <div className="container w-75">
                    <div class="mb-3">
                        <label for="title" className="form-label">Title</label>
                        <input type="text"
                         className="form-control" 
                         id="title" 
                         value={this.state.title} 
                         onChange={this.onTitleChangeEventHandler} 
                         required />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">Body</label>
                        <textarea
                         class="form-control"
                         id="body" 
                         rows="3" 
                         value={this.state.body} 
                         onChange={this.onBodyChangeEventHandler}
                         required ></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info p-2 text-white w-100">Submit</button>
                    </div>
                  </div>
              </form>
            </div>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;