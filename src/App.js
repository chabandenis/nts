import React from "react";
import Info from "./components/info"
import Search from "./components/search"
import Results from "./components/results"
import Edit from "./components/edit"
import Create from "./components/create"
import Form from "./components/form";

class App extends React.Component {

    state = {
        notes: null
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const ddd = e.target.city.value;
        const api_url = await fetch(`http://127.0.0.1:8080/message`, {cache: 'no-cache'});
        const data = await api_url.json();

        this.setState({notes: data});

        /*        const listNotes =
                    data.map((postDetail, index) => {
                        return console.log("куку", postDetail.idNote)
                    });*/
    }

    render() {

        console.log("this.state.notes " + this.state.notes);

        return (
            <div>
                <Info/>
                <Form weatherMethod={this.gettingWeather}/>
                <Results notes={this.state.notes}/>
                <Edit/>
                <Create/>
                <Search/>
            </div>
        )
    }

}

export default App;
