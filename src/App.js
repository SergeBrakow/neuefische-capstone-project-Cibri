import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./utils/UserContext";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import New from "./pages/New";
import Customer from "./pages/Customer"
import OrderCreate from "./pages/OrderCreate";
import OrderView from "./pages/OrderView";
import OrderEdit from "./pages/OrderEdit";
import { toLocalStorage, fromLocalStorage } from "./utils/localStorage";
import UserView from "./pages/UserView";
import UserLinkedOrderView from "./pages/UserLinkedOrderView";



function App() {
  const [orderList, setOrderList] = useState(fromLocalStorage("orderList"));
  const [customerList, setCustomerList] = useState(fromLocalStorage("customerList"));
  const [userList, setUserList] = useState(fromLocalStorage("userList"));
  const [user, setUser] = useState(fromLocalStorage("loggedUser"));
  const [idPosInHome, setIdPosInHome] = useState(0);
  document.title = "Cibri";
  
  useEffect(() => {
    toLocalStorage("orderList", orderList);
  }, [orderList]);

  useEffect(() => {
    toLocalStorage("customerList", customerList);
  }, [customerList]);

  useEffect(() => {
    toLocalStorage("userList", userList);
  }, [userList]);

  useEffect(() => {
    toLocalStorage("loggedUser", user);
  }, [user]);

  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userList,
        setUserList,
        customerList,
        setCustomerList,
        orderList,
        setOrderList,
        idPosInHome,
        setIdPosInHome,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index 
            element={<Login />}
          />
            <Route
              path="home"
              element={<Home/>}
            />
          <Route
            path="home/:dateString"
            element={<Home/>}
          />
          <Route
            path="new/:dateString"
            element={<New />}
          />
          <Route
              path="orderView/:id"
              element={<OrderView/>}
            />
          <Route
            path="orderCreate/:dateString"
            element={<OrderCreate/>}
          />
          <Route
            path="orderEdit/:id"
            element={<OrderEdit/>}
          />
          <Route
              path="userView/:id"
              element={<UserView/>}
          />
          <Route
              path="userLinked/"
              element={<UserLinkedOrderView/>}
          />
          <Route
              path="userLinked/:id"
              element={<UserLinkedOrderView/>}
          />
          <Route
            path="customerView"
            element={<Customer action={"view"}/>}
          />
          <Route
            path="customerCreate"
            element={<Customer action={"create"} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
