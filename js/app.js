class CalorieTracker {
    constructor(){
        this._calorieLimit = 3000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];
        
        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
    }
    // Public methods

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        this._render()
    }

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        this._render();
    }

    // Private methods

    _displayCaloriesTotal(){
        const totalCaloriesEl = document.getElementById('calories-total');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _displayCaloriesLimit(){
        const CaloriesLimitEl = document.getElementById('calories-limit');
        CaloriesLimitEl.innerHTML = this._calorieLimit;
    }

    _render() {
        this._displayCaloriesTotal();
    }
}

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2)
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2)
        this.name = name;
        this.calories = calories;
    }
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
const lunch = new Meal('lunch', 300);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout('Morning Run', 250);
tracker.addWorkout(run);


console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._calorieLimit);