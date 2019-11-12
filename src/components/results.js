import React from "react";


class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userUrgencyNote: '',
            userTextNote: ''
        };

        this.handleUrgenncy = this.handleUrgenncy.bind(this)
        this.handleText = this.handleText.bind(this)
    }

    handleSubmit() {
        console.log('form is submited');
    }

    handleUrgenncy(e, index) {
        console.log('urgency change', e.target.value, index, this.props.notes[index].urgencyNote);
        this.props.notes[index].urgencyNote = e.target.value;
        this.setState({userUrgencyNote: e.target.value})
    }

    handleText(e, index) {
        console.log('urgency change', e.target.value);
        this.props.notes[index].textNote = e.target.value;
        this.setState({userTextNote: e.target.value})
    }

//onClick={this.props.deleteNote()}

    render() {

        let myStyle = {
            fontSize: 13,
            color: 'black',
            background: "LightCyan",
            margin: 0
        }

        let value;

        const handleClick = (e) => {
            prompt("введите значение", value)
        }

        let notes = null;
        //  <button>Редактировать</button>
        if (this.props.notes) {
            let props = this.props;
            let deleteNote = this.props.deleteNote;
            let edtNote = this.props.edtNote;

            let userTestNote;
            let userUrgencyNote;
            let inputValue;

            let handleSubmit = this.handleSubmit;
            let handleUrgenncy = this.handleUrgenncy;
            let handleText = this.handleText;


            userUrgencyNote = this.state.userUrgencyNote;
            userTestNote = this.state.userTextNote;

            notes = this.props.notes.map(function (item, index) {
//                notes = (props) => this.props.notes.map(function (item, index) {
                return (
                    <div key={item.idNote}> {/* используем id в качестве ключа */}

                        <div>
                            <p style={myStyle}>=====================================================================================================================</p>
                            <p style={myStyle}>ID сообщения: {item.idNote}</p>
                            <p style={myStyle}>Дата сообщения: {item.dateNote}</p>
                            {/*<p style={myStyle}>Важность: {item.urgencyNote}</p>}
                                 <p style={myStyle}>Текст сообщения: {item.textNote}</p>*/}


                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>
                                        Важность:
                                        <input style={{width: 80}} type="text" name="city"
                                               value={item.urgencyNote || ''}
                                               onChange={(e) => {
                                                   handleUrgenncy(e, index)
                                               }}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Текст сообщения:
                                        <input style={{width: 500}} type="text" name="city"
                                               value={item.textNote || ''}
                                               onChange={(e) => {
                                                   handleText(e, index)
                                               }}
                                        />
                                    </label>
                                </div>
                                <button
                                    onClick={(e) => edtNote(e, item.idNote, item.urgencyNote, item.textNote)}>Обновить
                                </button>
                                <button onClick={(e) => deleteNote(e, item.idNote)}>
                                    Удалить
                                </button>

                            </form>


                            {/*<button onClick={() => {
                                inputValue = true
                            }}>
                                Изменить
                            </button>
                            */}
                        </div>
                    </div>
                )
            }, this)
        } else {
            notes = <div>Заметкт отсутствуют</div>;
        }

        return (
            <div>
                {notes}
            </div>
        );
    }
}

export default Results;


/*
<form className="text__note">
    <input style={{width: 50}} type="text" name="city" value={item.idNote}
           placeholder="ID сообщения"/>
    <input style={{width: 50}} type="text" name="city" value={item.dateNote}
           placeholder="Дата сообщения"/>
    <input style={{width: 50}} type="text" name="city" value={item.urgencyNote}
           placeholder="Важность"/>
    <input style={{width: 500}} type="text" name="city" value={item.textNote}
           placeholder="Текст сообщения"/>
    <button>Применить</button>
</form>
*/