import Header from "./components/Header";
import Category from "./components/Category";
import Sliding from "./components/Sliding";
import Newarrival from "./components/Rows/Newarrival";
import Footer from "./components/Footer";
import Cartscreen from "./components/Cartscreen";
import Smallphotos from "./components/Smallphotos";
import Hello from "./components/Hello";
import Producttest from "./components/Producttest";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Product from "./components/Product";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      <div className="formode">
        <BrowserRouter>
          <Header />
          <Category />
          <Switch>
            <Router path="/" exact>
              <Sliding />
              <Smallphotos />
              <Newarrival />
            </Router>
            <Route
              path="/product/:id"
              render={(props) => (
                <Product {...props} key={props.match.params.id} />
              )}
            ></Route>
            <Route path="/cart/:id?" component={Cartscreen}></Route>
            <Route path="/hello" exact component={Producttest}></Route>
            <Route path="*" exact component={Notfound}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
