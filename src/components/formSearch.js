import React from "react";

class FormSearch extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="Фильтр"/>
                    <button>Список заметок</button>
                </form>
            </div>
        );
    }
}

export default FormSearch;
