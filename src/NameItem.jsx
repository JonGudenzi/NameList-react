import { useState } from "react";

export default function NameItem({ name, onDelete, onStartEdit, isEditing, onSave }) {

    const [editText, setEditText] = useState(name);

    return (
        <div>
            {!isEditing ? (
                <p>{name}
                    {isEditing && " (editing)"}
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
                </>
            )}
        </div>
    );
}
