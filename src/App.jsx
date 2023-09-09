// import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header"
import Footer from "./components/Footer"
// // import Tasks from "./components/Tasks"
// // import AddTask from "./components/AddTask"
import About from "./components/About"

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show "
              )}
            </>
          )}
        />
  */}
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
