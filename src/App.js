import Header from "./components/Header";
import Category from "./components/Category";
import Sliding from "./components/Sliding";
import Newarrival from "./components/Rows/Newarrival";
import Footer from "./components/Footer";
import Cartscreen from "./components/Cartscreen";
import Smallphotos from "./components/Smallphotos";
import Searchscreen from "./components/Searchscreen";
import Meter from "./components/Meter";
import Signin from "./components/Signin";
import Register from "./components/Register";
import MessengerCustomerChat from "react-messenger-customer-chat";
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
              <Meter />
              <Newarrival />
            </Router>
            <Route
              path="/product/:id"
              render={(props) => (
                <Product {...props} key={props.match.params.id} />
              )}
            ></Route>
            <Route path="/cart/:id?" component={Cartscreen}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/search/:term" component={Searchscreen}></Route>
            <Route path="*" exact component={Notfound}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
        <MessengerCustomerChat
          pageId="100684861940648"
          appId="925944014919620"
          themeColor="#ff4500"
        />
      </div>
    </>
  );
}

export default App;
