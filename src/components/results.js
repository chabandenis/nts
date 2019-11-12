import React from "react";


class Results extends React.Component {

    constructor(props) {
        super(props);
        //this.deleteNote = this.deleteNote.bind(this)
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

            notes = this.props.notes.map(function (item, index) {
//                notes = (props) => this.props.notes.map(function (item, index) {
                return (
                    <div key={item.idNote}> {/* используем id в качестве ключа */}

                        <div>
                            <p style={myStyle}>=====================================================================================================================</p>
                            <p style={myStyle}>ID сообщения: {item.idNote}</p>
                            <p style={myStyle}>Дата сообщения: {item.dateNote}</p>
                            <p style={myStyle}>Важность: {item.urgencyNote}</p>
                            <p style={myStyle}>Текст сообщения: {item.textNote}</p>


                            <form className="text__note">
                                <input style={{width: 80}} type="text" name="city" value={item.urgencyNote}
                                       placeholder="Важность"/>
                                <input style={{width: 500}} type="text" name="city" value={item.textNote}
                                       placeholder="Текст сообщения"/>
                                <button onClick={(e) => edtNote(e, item.idNote, 2, 3)}>Применить</button>
                            </form>

                            <button onClick={(e) => deleteNote(e, item.idNote)}>
                                Удалить
                            </button>
                            <button >
                                Изменить
                            </button>

                        </div>
                    </div>
                )
            })
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