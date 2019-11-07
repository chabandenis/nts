import React from "react";
import Info from "./components/info"
import Search from "./components/search"
import Results from "./components/results"
import Edit from "./components/edit"
import Create from "./components/create"
import FormSearch from "./components/formSearch";
import AddNote from "./components/addNote"

class App extends React.Component {

    state = {
        notes: null
    }

    // список заметок
    listOfNotes = async (e) => {
        e.preventDefault();
        const ddd = e.target.city.value;
        const api_url = await fetch(`http://127.0.0.1:8080/message`, {cache: 'no-cache'});
        const data = await api_url.json();

        this.setState({notes: data});
    }

    //method: 'POST', // *GET, POST, PUT, DELETE, etc.

    // добавить заметку
    addNote = async (e) => {
        e.preventDefault();
        const bodyMsg = {idNote: 40, dateNote: null, urgencyNote: null, textNote: null};
        const api_url = await fetch(`http://127.0.0.1:8080/message`,
            {
                method: 'POST', cache: 'no-cache',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bodyMsg)
            });

        const data = await api_url.json();
        console.log("after add" + data);

//        this.setState({notes: data});
    }

    render() {

        console.log("this.state.notes " + this.state.notes);

        return (
            <div>
                <Info/>
                <FormSearch weatherMethod={this.listOfNotes}/>
                <AddNote noteAdd={this.addNote}/>
                <Results notes={this.state.notes} />
                <Edit/>
                <Create/>
                <Search/>
            </div>
        )
    }

}
//deleteNote={this.deleteNote
export default App;
