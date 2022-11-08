import { Routes, Route } from "react-router-dom";
import { useId, useState } from "react";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import New from "./pages/New";
import Customer from "./pages/Customer"
import Order from "./pages/NewOrder";
import { toLocalStorage, fromLocalStorage } from "./utils/localStorage";



function App() {
  const [orderList, setOrderList] = useState(fromLocalStorage("orderList"));
  const user = localStorage.getItem(`user`);

  function createOrder(newId, newName, newHour, newMinute, newNote){
    setOrderList([
      {
        id: newId,
        name: newName,
        hour: parseInt(newHour),
        minute: parseInt(newMinute),
        owner: user,
        note: newNote,
      },
      ...orderList,
    ]);
    toLocalStorage("orderList", orderList);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="home"
          element={<Home  
            entries={orderList}/>}
        />
         <Route
          path="new"
          element={<New />}
        />
        <Route
          path="newOrder"
          element={<Order 
            onHandleSubmit={createOrder}/>}
        />
        <Route
          path="newCustomer"
          element={<Customer />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
