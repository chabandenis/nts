import React from "react";

class AddNote extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.noteAdd}>
                    <button>Добавить заметку</button>
                </form>
            </div>
        );
    }
}

export default AddNote;
