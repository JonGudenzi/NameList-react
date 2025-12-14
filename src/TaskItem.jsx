import { useEffect, useState } from "react";

export default function TaskItem({ task, onDelete, onStartEdit, isEditing, onSave, onCancel, status, onToggleStatus }) {

    const [editText, setEditText] = useState(task);

    useEffect(() => {
        if (isEditing) {
            setEditText(task);
        }
    }, [isEditing, task]);

    return (
        <div>
            {!isEditing ? (
                <p>{task}{" - "}{status}

                    <button onClick={onToggleStatus}>{status === "open" ? "close" : "reopen"}</button>
                    <button
                        onClick={onStartEdit}>Edit</button>
                    <button
                        onClick={onDelete}>Delete
                    </button>
                </p>
            ) : (
                <>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} />
                    <button
                        onClick={() => onSave(editText)}>Save</button>
                    <button onClick={() => {
                        setEditText(task);
                        onCancel();
                    }}>Cancel</button>
                </>
            )}
        </div>
    );
}
