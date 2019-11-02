import React from "react";

class Results extends React.Component {

    render() {

        let notes = null;

        if (this.props.notes) {
            notes = this.props.notes.map(function (item, index) {
                return (
                    <div key={item.idNote}> {/* используем id в качестве ключа */}
                        <p className="begin__note">_____</p>
                        <p className="id__note">ID сообщения: {item.idNote}</p>
                        <p className="data__note">Дата сообщения: {item.dateNote}</p>
                        <p className="urgency__note">Важность: {item.urgencyNote}</p>
                        <p className="text__note">Текст сообщения: {item.textNote} </p>
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