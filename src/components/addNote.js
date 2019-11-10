import React from "react";

class AddNote extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        const handleClick = (e, num) => {
            e.preventDefault();
            console.log("testValue000 " + num);
            console.log("testValue" + this.props.valueTest);

//            this.props.valueTest = "test555";
            //this.setState({notes: data});
//            console.log("testValue2 " + this.props.valueTest);

        }

        return (

            <div>

                <form onSubmit={this.props.noteAdd}>
                    <button>Добавить заметку</button>
                </form>
            </div>
        )
            ;
    }
}
//this.props.noteAdd
export default AddNote;
