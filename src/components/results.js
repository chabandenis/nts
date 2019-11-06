import React from "react";

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this)
    }

    // удалить заметку
    // строка для тестирования:
    // fetch('http://127.0.0.1:8080/message/1', {method: 'DELETE', hearders: {'Content-Type': 'application/json'}}).then(result=>console.log(result))
    deleteNote() {
        // console.log("delete " + this);
        //e.preventDefault();
        /*
                const api_url = await fetch(`http://127.0.0.1:8080/message/1`,
                    {
                        method: 'DELETE', cache: 'no-cache',
                        headers: {'Content-Type': 'application/json'}
                    });

                const data = await api_url.json();
                console.log("after delete" + data);

         */
    }

//onClick={this.props.deleteNote()}

    render() {

        //  console.log("qq1q1 " + this.props.deleteNote());

        let notes = null;
        //  <button>Редактировать</button>
        if (this.props.notes) {
            notes = this.props.notes.map(function (item, index) {
                return (
                    <div key={item.idNote}> {/* используем id в качестве ключа */}

                        <form>
                            <p className="begin__note">======================================================================================================================</p>
                            <p className="id__note">ID сообщения: {item.idNote}</p>
                            <p className="data__note">Дата сообщения: {item.dateNote}</p>
                            <p className="urgency__note">Важность: {item.urgencyNote}</p>
                            <p className="text__note">Текст сообщения: {item.textNote}</p>

                            <button>
                                Удалить
                            </button>

                        </form>

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
                    </div>
                )
            })
        } else {
            notes = <div>Заметки отсутствуют</div>;
        }

        return (
            <div>


            </div>
        );
    }
}

//{notes}
/*                <form>
                    <input>
                        type="test"
                        placeholder = "E-mail"


                    </input>
                </form>
                */

export default Results;