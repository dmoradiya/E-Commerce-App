import { combineReducers } from "redux";
import CartReducer from "./Cart.jsx";
import BillingInfoReducer from "./Billing-info.jsx";
import CreditCardReducer from "./Credit-card.jsx";
import BrowsingHistoryReducer from "./Browsing-history.jsx";
import ShoppingNavigationReducer from "./Shopping-navigation.jsx";

const UserDataReducer = combineReducers({
  BillingInfo: BillingInfoReducer,
  CreditCardInfo: CreditCardReducer,
});

const GlobalReducer = combineReducers({
  ShopNav: ShoppingNavigationReducer,
  Cart: CartReducer,
  UserData: UserDataReducer,
  BrowsingHistory: BrowsingHistoryReducer,
});

export default GlobalReducer;
