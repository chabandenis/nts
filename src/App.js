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
        notes: [],
        testValue: "значение 1"
    }

    // modify
    /*    modify = (e) =>{
            this.setState({testValue:"wwwww""});
        }
    */
    // список заметок
    listOfNotes = async (e) => {
        e.preventDefault();
        const ddd = e.target.city.value;
        const api_url = await fetch(`http://127.0.0.1:8080/message`, {cache: 'no-cache'});
        const data = await api_url.json();

        data.sort((a, b) => {
            return b.idNote - a.idNote
        });

        this.setState({notes: data});
    }

    // добавить заметку
    addNote = async (e) => {
        console.log("добавим");
        e.preventDefault();
        const bodyMsg = {idNote: 40, dateNote: null, urgencyNote: null, textNote: null};
        const api_url = await fetch(`http://127.0.0.1:8080/message`,
            {
                method: 'POST', cache: 'no-cache',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bodyMsg)
            });

        const data = await api_url.json();
        this.state.notes.push(data);
        this.state.notes.sort((a, b) => {
            return b.idNote - a.idNote
        });

        this.setState(this.state.notes);

//        this.setState({notes: [data]});
    }

    // удалить заметку
    // строка для тестирования:
    // fetch('http://127.0.0.1:8080/message/1', {method: 'DELETE', hearders: {'Content-Type': 'application/json'}}).then(result=>console.log(result))
    deleteNote = async (e, idNoteToDel) => {
        //  deleteNote(e) {
        // e.preventDefault();
        console.log("delete ", this, e, idNoteToDel);

        const api_url = await fetch("http://127.0.0.1:8080/message/" + idNoteToDel,
            {
                method: 'DELETE', cache: 'no-cache',
                headers: {'Content-Type': 'application/json'}
            });

        //console.log("index" + index);
        let notes = this.state.notes;

        this.state.notes.forEach(function (item, index, array) {
            console.log("index" + index + "; " + item.idNote);
            if (item.idNote == idNoteToDel) {
                console.log(" удалю index" + index + "; " + item.idNote);
                 notes.splice(index, 1);
            }


        });

        notes.forEach(function (item, index, array) {
            console.log("index" + index + "; " + item.idNote);
        });

        this.setState(notes);

        //this.setState({notes: null});
//                const data =  api_url.json();
        //              console.log("after delete" + data);
    }

    render() {

        console.log("5555this.state.notes " + this.state.notes);
        console.log("this.state.v" + this.state.testValue);

        return (
            <div>
                <Info/>
                <FormSearch weatherMethod={this.listOfNotes}/>
                <AddNote noteAdd={this.addNote} valueTest={this.state.testValue}/>

                <Edit/>
                <Create/>
                <Search/>
                <Results notes={this.state.notes} deleteNote={this.deleteNote}/>
            </div>
        )
    }

}

//deleteNote={this.deleteNote
export default App;
