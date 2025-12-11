import { useState } from "react";
import NameItem from "./NameItem";

export default function NameListClassic() {

    const [names, setNames] = useState([]);
    const [inputText, setInputText] = useState("");
    const [editingId, setEditingId] = useState(null);

    function addNameHandler() {
        const newName = { id: Date.now(), name: inputText };
        setNames(prev => ([...prev, newName]));
        setInputText("");
    }

    function deleteHandler(idToDelete) {
        setNames((prev) => prev.filter((item) => item.id !== idToDelete));
    }

    function startEditHandler(id) {
        setEditingId(id);
    }

    function saveEditHandler(id, newName) {
        const updatedList = names.map(item => {
            if (item.id === id) {
                return { ...item, name: newName }
            }
            return item;
        })
    }

    return (
        <div>
            <h2>Name List</h2>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button onClick={addNameHandler}>Add</button>
            <div>
                {names.length === 0 ? (<p>No Names yet</p>) : (
                        names.map((item) => (
                            <NameItem 
                            key={item.id}
                            name={item.name}
                            onDelete={() => deleteHandler(item.id)}
                            onStartEdit={() => startEditHandler(item.id)}
                            isEditing={item.id === editingId}
                            onSave={(newName) => saveEditHandler(item.id, newName)}
                            />
                        ))
                )}

            </div>
        </div>
    );
}
