// Importing the "React" library - necessary for all React components
import React from "react";
// importing the "BrowserRouter" component from the "react-router-dom" library
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing the individual components we want to use as pages
// Each of these components should be defined in separate files
import Register from "./Register";
import Login from "./Login";
import DocumentList from "./DocumentList";
import DocumentView from "./DocumentView";

// the main "App" component
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/documents" component={DocumentList} />
                <Route exact path="/documents/:id" component={DocumentView} />
            </Switch>
        </Router>
    );
}

export default App;