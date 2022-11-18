import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import New from "./pages/New";
import Customer from "./pages/Customer"
import EditOrder from "./pages/EditOrder";
import ViewOrder from "./pages/ViewOrder";
import { toLocalStorage, fromLocalStorage } from "./utils/localStorage";
import CreateOrder from "./pages/CreateOrder";



function App() {
  const [orderList, setOrderList] = useState(fromLocalStorage("orderList"));
  const [user, setUser] = useState(fromLocalStorage("loggedUser"));
  document.title = "Cibri";
  
  useEffect(() => {
    toLocalStorage("orderList", orderList);
  }, [orderList]);

  function addOrder(orderId, order_type, order_name, orderDateFull, note){
    setOrderList([
      {
        id: orderId,
        type: order_type,
        name: order_name,
        date: orderDateFull,
        owner: user.name,
        note: note,
      },
      ...orderList,
    ]);
  }

  function editOrder(orderId, order_type, order_name, orderDateFull, note){
    if(order_name === "") {
      deleteOrder(orderId);
    } else {
      setOrderList(
        orderList.map ((order) =>
          order.id === orderId ? {
            ...order,
            type: order_type,
            name: order_name,
            date: orderDateFull,
            owner: user.name,
            note: note,
          } : 
            order
        )
      );
    }
  }

  function deleteOrder(id){
    setOrderList(orderList.filter((order) => order.id !== id));
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index 
          element={<Login setUser={setUser}/>}
        />
        <Route
          path="home/:dateString"
          element={<Home  
            user={user}
            entries={orderList}/>}
        />
        <Route
          path="home"
          element={<Home  
            user={user}
            entries={orderList}/>}
        />
         <Route
          path="new/:dateString"
          element={<New />}
        />
        <Route
          path="createOrder/:dateString"
          element={<CreateOrder
            onHandleSubmit={addOrder}/>}
        />
        <Route
          path="viewOrder/:id"
          element={<ViewOrder 
            entries={orderList}/>}
        />
        <Route
          path="editOrder/:id"
          element={<EditOrder 
            user={user}
            entries={orderList}
            onHandleSubmit={editOrder}/>}
        />
        <Route
          path="createCustomer"
          element={<Customer />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
