export default function TaskItem({ id, name, onTaskDeleted }) {
    return <li>
        <div className="flex justify-between align-center">
            {name}
            <span className="Delete-icon" onClick={(e) => onTaskDeleted(e, id)}>X</span>
        </div>
    </li>;
}
