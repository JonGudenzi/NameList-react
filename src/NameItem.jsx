export default function NameItem({ name, onDelete }) {
    return (
        <div>
            <p>{name}
                <button
                    onClick={onDelete}>Delete</button>
            </p>
        </div>
    );
}
