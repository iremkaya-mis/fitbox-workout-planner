function WorkoutCard({ workout, deleteWorkout, editItem }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold text-blue-600 mb-2">
        {workout.name}
      </h3>

      <p className="mb-1">
        <span className="font-semibold">Category:</span>{" "}
        {workout.category}
      </p>

      <p className="mb-1">
        <span className="font-semibold">Duration:</span>{" "}
        {workout.duration} min
      </p>

      <p className="mb-1">
        <span className="font-semibold">Level:</span>{" "}
        {workout.level}
      </p>

      <p className="mb-4">
        <span className="font-semibold">Note:</span>{" "}
        {workout.note}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => editItem(workout)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Edit
        </button>

        <button
          onClick={() => deleteWorkout(workout.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default WorkoutCard;