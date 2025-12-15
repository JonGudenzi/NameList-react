import { useState } from "react";
import TaskItem from "./TaskItem";
import FilterButtons from "./FilterButtons";
import TaskSummary from "./TaskSummary";
import AddTaskForm from "./AddTaskForm";

export default function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [viewFilter, setViewFilter] = useState("all");

    function addTaskHandler(title) {
        const newTitle = { id: Date.now(), title, status: "open" };
        setTasks(prev => ([...prev, newTitle]));
    }

    function deleteHandler(idToDelete) {
        setTasks((prev) => prev.filter((item) => item.id !== idToDelete));
    }

    function startEditHandler(id) {
        setEditingId(id);
    }

    function saveEditHandler(id, newTask) {
        const trimmed = newTask.trim();
        if (trimmed === "") return;

        const updatedList = tasks.map(item => {
            if (item.id === id) {
                return { ...item, title: trimmed }
            }
            return item;
        });
        setTasks(updatedList);
        setEditingId(null);
    }

    function cancelEditHandler() {
        setEditingId(null);
    }

    function toggleStatusHandler(id) {
        setTasks(prev =>
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

    function clearClosedTasksHandler() {
        if (!hasClosedTasks) return;
        const confirmed = window.confirm(
            "Are you sure you want to clear all closed tasks?"
        );
        if (!confirmed) return;

        setTasks((prev) => prev.filter((item) => item.status !== "closed"));
        setViewFilter("all");
    }

    const visibleTasks =
        viewFilter === "all"
            ? tasks
            : tasks.filter((item) => item.status === viewFilter);

    const hasClosedTasks =
        tasks.some((item) => item.status === "closed");

    return (
        <div>
            <button onClick={clearClosedTasksHandler}
                disabled={!hasClosedTasks}>Clear all closed tasks</button>
            <h2>Task List</h2>

            <AddTaskForm
            onAddTask={addTaskHandler} />

            <FilterButtons 
            viewFilter={viewFilter}
            setViewFilter={setViewFilter}/>

            <TaskSummary 
            visibleCount={visibleTasks.length}
            totalCount={tasks.length}/>
            
            <div>
                {visibleTasks.length === 0 ? (<p>No tasks yet</p>) : (
                    visibleTasks.map((item) => (
                        <TaskItem
                            key={item.id}
                            task={item.title}
                            onDelete={() => deleteHandler(item.id)}
                            onStartEdit={() => startEditHandler(item.id)}
                            isEditing={item.id === editingId}
                            onCancel={cancelEditHandler}
                            onSave={(newTask) => saveEditHandler(item.id, newTask)}
                            status={item.status}
                            onToggleStatus={() => toggleStatusHandler(item.id)}
                            disableEdit={editingId !== null && editingId !== item.id}
                        />
                    ))
                )}

            </div>
        </div>
    );
}
