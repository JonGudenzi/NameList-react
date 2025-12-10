import { useState } from "react";
import NameItem from "./NameItem";

export default function NameListClassic() {

    const [names, setNames] = useState([]);
    const [inputText, setInputText] = useState("");

    function addNameHandler() {
        const newName = { id: Date.now(), name: inputText };
        setNames(prev => ([...prev, newName]));
        setInputText("");
    }

    function deleteHandler(idToDelete) {
        setNames((prev) => prev.filter((item) => item.id !== idToDelete));
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
                            onDelete={() => deleteHandler(item.id)}/>
                        ))
                )}

            </div>
        </div>
    );
}
