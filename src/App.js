
// Router
import { Route, Switch } from "react-router-dom";

// Components
import IndexTemplate from "./pages/home/IndexTemplate";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component= { Dashboard } />
        <Route path='/' component= { IndexTemplate } />
      </Switch>
    </div>
  );
}

export default App;
