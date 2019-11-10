import React from "react";


class Results extends React.Component {

    constructor(props) {
        super(props);
        //this.deleteNote = this.deleteNote.bind(this)
    }

//onClick={this.props.deleteNote()}

    render() {

        let myStyle = {
            color: 'red',
            fontsize: "29"
        }

        let value;

        const handleClick = (e) => {
            prompt("введите значение", value)
        }

        //  console.log("qq1q1 " + this.props.deleteNote());

        let notes = null;
        //  <button>Редактировать</button>
        if (this.props.notes) {
            let props = this.props;
            let deleteNote = this.props.deleteNote;

            notes = this.props.notes.map(function (item, index) {
//                notes = (props) => this.props.notes.map(function (item, index) {
                return (
                    <div key={item.idNote}> {/* используем id в качестве ключа */}

                        <div>
                            <p>=====================================================================================================================</p>
                            <p>ID сообщения: {item.idNote}</p>
                            <p style={myStyle}>Дата сообщения: {item.dateNote}</p>
                            <p>Важность: {item.urgencyNote}</p>
                            <p>Текст сообщения: {item.textNote}</p>

                            {/*                            <input style={myStyle} type="text" name="city" value={item.textNote}
                                   placeholder="Текст сообщения"/>
*/}
                            <button onClick={(e) => deleteNote(e, item.idNote)}>
                                Удалить
                            </button>
                            <button onClick={(e) => deleteNote(e, item.idNote)}>
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