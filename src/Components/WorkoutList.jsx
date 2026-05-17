import WorkoutCard from "./WorkoutCard";

function WorkoutList({ workouts, deleteWorkout, editItem }) {
  if (workouts.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No workouts added yet.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          deleteWorkout={deleteWorkout}
          editItem={editItem}
        />
      ))}
    </div>
  );
}

export default WorkoutList;