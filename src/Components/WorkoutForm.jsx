import { useEffect, useState } from "react";
import { workoutCategories } from "../Interfaces/workout";

function WorkoutForm({ addWorkout, editWorkout }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Fitness");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("Easy");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (editWorkout) {
      setName(editWorkout.name);
      setCategory(editWorkout.category);
      setDuration(editWorkout.duration);
      setLevel(editWorkout.level);
      setNote(editWorkout.note);
    }
  }, [editWorkout]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !duration) {
      alert("Please fill in workout name and duration.");
      return;
    }

    const workout = {
      id: editWorkout ? editWorkout.id : Date.now(),
      name,
      category,
      duration,
      level,
      note,
    };

    addWorkout(workout);

    setName("");
    setCategory("Fitness");
    setDuration("");
    setLevel("Easy");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 max-w-3xl mx-auto p-6 rounded-2xl shadow-2xl mb-8 border border-red-500"
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">
        {editWorkout ? "Update Workout" : "Add New Workout"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Workout name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg"
        >
          {workoutCategories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Duration in minutes"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <textarea
        placeholder="Workout note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg w-full mt-4"
      />

      <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-red-600">
        {editWorkout ? "Update Workout" : "Add Workout"}
      </button>
    </form>
  );
}

export default WorkoutForm;