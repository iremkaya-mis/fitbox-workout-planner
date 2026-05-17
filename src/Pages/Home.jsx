import { useState } from "react";
import WorkoutForm from "../Components/WorkoutForm";
import WorkoutList from "../Components/WorkoutList";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(null);

  const addWorkout = (workout) => {
    if (editWorkout) {
      setWorkouts(
        workouts.map((item) =>
          item.id === editWorkout.id ? workout : item
        )
      );
      setEditWorkout(null);
    } else {
      setWorkouts([...workouts, workout]);
    }
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((item) => item.id !== id));
  };

  const editItem = (workout) => {
    setEditWorkout(workout);
  };

  return (
    <div className="min-h-screen bg-black-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
        FitBox Workout Planner
      </h1>

      <WorkoutForm
        addWorkout={addWorkout}
        editWorkout={editWorkout}
      />

      <WorkoutList
        workouts={workouts}
        deleteWorkout={deleteWorkout}
        editItem={editItem}
      />
    </div>
  );
}

export default Home;