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
import Mobcategory from "./components/Mobcategory";
import Onlyformobile from "./components/Onlyformobile";
import ShippingScreen from "./components/ShippingScreen";
import Payment from "./components/Payment";
import Placeorder from "./components/Placeorder";
import Ordersuccess from "./components/Ordersuccess";
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
        <Onlyformobile />
        <BrowserRouter>
          <Header />
          <Switch>
            <Router path="/" exact>
              <Category />
              <Sliding />
              <Smallphotos />
              <Meter />
              <Newarrival />
            </Router>
            <Route path="/product/:id" component={Product}></Route>
            <Route path="/cart/:id?" component={Cartscreen}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/shipping" component={ShippingScreen}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/placeorder" component={Placeorder}></Route>
            <Route path="/orderplaced" component={Ordersuccess}></Route>

            <Route path="/search/:term" component={Searchscreen}></Route>
            <Route path="/category" component={Mobcategory}></Route>
            <Route path="*" exact component={Notfound}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>

        <MessengerCustomerChat
          pageId="100684861940648"
          appId="925944014919620"
          themeColor="#ff4500"
          minimized="true"
        />
      </div>
    </>
  );
}

export default App;
