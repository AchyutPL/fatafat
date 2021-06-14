import Header from "./components/Header";
import Category from "./components/Category";
import Sliding from "./components/Sliding";
import Newarrival from "./components/Rows/Newarrival";
import Footer from "./components/Footer";
import Cartscreen from "./components/Cartscreen";
import Smallphotos from "./components/Smallphotos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="formode">
        <BrowserRouter>
          <Header />
          <Category />
          <Switch>
            <Router exact path="/">
              <Sliding />
              <Smallphotos />
              <Newarrival />
            </Router>
            <Route
              path="/product/:id"
              render={(props) => <Product {...props} />}
            />
            <Route path="/cart/:id?" component={Cartscreen}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
