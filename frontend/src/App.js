import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivatePage from "./components/PrivateRoute";
import SignIn from "./components/LoginScreen";
import SignUp from "./components/RegisterScreen";
import Album from "./components/AlbumScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ResetPasswordScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivatePage exact path="/" component={Album} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
        <Route
          path="/resetpassword/:resetToken"
          component={ResetPasswordScreen}
        />
      </Switch>
    </Router>
  );
};

export default App;
