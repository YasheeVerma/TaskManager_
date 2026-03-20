import { useEffect, useState } from "react";
import { API } from "../api";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return alert("Title required");

    await API.post("/", { title, description });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await API.patch(`/${id}/toggle`);
    fetchTasks();
  };

  // 👉 Start editing
  const startEdit = (task) => {
    setEditId(task._id);
    setEditTitle(task.title);
    setEditDesc(task.description || "");
  };

  // 👉 Save edit
  const saveEdit = async (id) => {
    if (!editTitle) return alert("Title required");

    await API.put(`/${id}`, {
      title: editTitle,
      description: editDesc,
    });

    setEditId(null);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">

        <h1 className="text-2xl font-bold text-center mb-4">
          ✨ Task Manager
        </h1>

        {/* Add Task */}
        <input
          className="w-full mb-2 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <input
          className="w-full mb-2 p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <button
          onClick={addTask}
          className="w-full bg-purple-500 text-white p-2 rounded mb-4"
        >
          Add Task
        </button>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((t) => (
            <li key={t._id} className="bg-gray-100 p-3 rounded shadow">

              {editId === t._id ? (
                <>
                  {/* EDIT MODE */}
                  <input
                    className="w-full mb-2 p-2 border rounded"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />

                  <input
                    className="w-full mb-2 p-2 border rounded"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                  />

                  <button
                    onClick={() => saveEdit(t._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditId(null)}
                    className="bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {/* VIEW MODE */}
                  <div
                    onClick={() => toggleTask(t._id)}
                    className={`font-semibold cursor-pointer ${
                      t.status ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {t.title}
                  </div>

                  <div className="text-sm text-gray-600">
                    {t.description}
                  </div>

                  <div className="text-xs text-gray-400">
                    Created: {new Date(t.created_at).toLocaleString()}
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => startEdit(t)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTask(t._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}

            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}