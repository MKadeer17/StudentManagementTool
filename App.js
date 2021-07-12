import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import AddStudent from './components/AddStudent';
import Details from './components/Details';
import UpdateStudent from './components/UpdateStudent';
import StudentsTable from './components/StudentsTable';
import NoMatchFound from './components/NoMatchFound';

function App() {
  const [studentList, setStudentList] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:3007/api/get').then((res) => {
        setStudentList(res.data);
      })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/details/:id">
              <Details />
          </Route>
          <Route exact path="/update/:id">
            <UpdateStudent />
          </Route>
          <Route exact path="/add">
            <AddStudent />
          </Route>
          <Route exact path="/">
            <StudentsTable studentList={studentList} />
          </Route>
          <Route>
            <NoMatchFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
