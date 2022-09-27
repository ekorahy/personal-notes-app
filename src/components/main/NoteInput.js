import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            arhived: false,
            createdAt: '',
        }

        // binding
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
            <div id='NoteInput'>
              <h2 className='fs-2 text-center fw-bold' style={{ color: '#3E619B' }}>Add New Note</h2>
              <form className='mb-5' onSubmit={this.onSubmitChangeEventHandler}>
                  <div className='container w-75'>
                    <div class="mb-3">
                        <label for="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">Body</label>
                        <textarea class="form-control" id="body" rows="3" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    </div>
                    <button className='btn btn-primary px-4' style={{ backgroundColor: '#3E619B'}}>Submit</button>
                  </div>
              </form>
            </div>
        );
    }
}

export default NoteInput;