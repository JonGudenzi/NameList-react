import { useState } from "react";
import NameItem from "./NameItem";

export default function NameListClassic() {

    const [names, setNames] = useState([]);
    const [inputText, setInputText] = useState("");
    const [editingId, setEditingId] = useState(null);

    function addNameHandler() {
        const newTitle = { id: Date.now(), title: inputText, status: "open" };
        setNames(prev => ([...prev, newTitle]));
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
                return { ...item, title: newName }
            }
            return item;
        });
        setNames(updatedList);
        setEditingId(null);
    }

    function toggleStatusHandler(id) {
  setNames(prev =>
    prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === "open" ? "closed" : "open"
        };
      }
      return item;
    })
  );
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
                            name={item.title}
                            onDelete={() => deleteHandler(item.id)}
                            onStartEdit={() => startEditHandler(item.id)}
                            isEditing={item.id === editingId}
                            onSave={(newName) => saveEditHandler(item.id, newName)}
                            status={item.status}
                            onToggleStatus={() => toggleStatusHandler(item.id)}
                            />
                        ))
                )}

            </div>
        </div>
    );
}
