import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Layout>
            <ProtectedRoute exact path="/chat" Component={Chat} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
