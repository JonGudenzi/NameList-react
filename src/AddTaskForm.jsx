import { useState } from "react";
export default function AddTaskForm({ onAddTask }) {
    const [inputText, setInputText] = useState("");

    function handleAddClick() {
        const trimmed = inputText.trim();
        if (trimmed === "") return;
        onAddTask(trimmed);
        setInputText("");
    }

    return (
        <>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)} />
            <button
                onClick={handleAddClick}>Add</button>
        </>
    )
}