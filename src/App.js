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

  function addOrder(newId, newName, newDate, newNote){
    setOrderList([
      {
        id: newId,
        name: newName,
        date: newDate,
        owner: user.name,
        note: newNote,
      },
      ...orderList,
    ]);
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
          path="new"
          element={<New />}
        />
        <Route
          path="createOrder/:dateString"
          element={<CreateOrder
            onHandleSubmit={addOrder}/>}
        />
        <Route
          path="viewOrder"
          element={<ViewOrder />}
        />
        <Route
          path="editOrder"
          element={<EditOrder />}
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
