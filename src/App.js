import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import New from "./pages/New";
import Customer from "./pages/Customer"
import NewOrder from "./pages/NewOrder";
import EditOrder from "./pages/EditOrder";
import ViewOrder from "./pages/ViewOrder";
import { toLocalStorage, fromLocalStorage } from "./utils/localStorage";



function App() {
  const [orderList, setOrderList] = useState(fromLocalStorage("orderList"));
  const [user, setUser] = useState(fromLocalStorage("loggedUser"));
  document.title = "Cibri";
  
  useEffect(() => {
    toLocalStorage("orderList", orderList);
  }, [orderList]);

  function createOrder(newId, newName, newDate, newNote){
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
          path="newOrder"
          element={<NewOrder 
            onHandleSubmit={createOrder}/>}
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
          path="newCustomer"
          element={<Customer />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
