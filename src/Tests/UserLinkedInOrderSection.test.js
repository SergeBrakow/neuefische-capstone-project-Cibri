
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLinkedInOrderSection from "../components/UserLinkedInOrderSection";

window.scrollTo = jest.fn();
test("render", () => {
  render(
    <BrowserRouter>
      <Routes>  
        <Route path="*" element={<UserLinkedInOrderSection user={user} orderList={orderList} />} />
      </Routes>
    </BrowserRouter>
  );

    const boltName = screen.getByText(/ist verlinkt in/i);
    expect(boltName).toBeInTheDocument();
});

const user = [
  { 
    id: "1",
    name: "Tom",
    role: "user",
    rights : [ 
      { id: 1,
        name: "createOrder",
        value: true,
      },
      { 
        id: 2,
        name: "deleteOrder",
        value: true,
      },
      { id: 3,
        name: "createCustomer",
        value: true,
      },
      { id: 4,
        name: "deleteCustomer",
        value: false,
      },
      { id: 5, 
        name: "createUser",
        value: false,
      },
      { id: 6,
        name: "deleteUser",
        value: false,
      },
    ],
    linked: ["1"],
  },
];

const orderList = [
  {
    id: "1",
    name: "Drucker Papier bestellen!",
    date : {
      dateString: "24.11.2022",
      hour: 14,
      minute: 0,
    },
    createDate: "15.11.2022",
    owner: "Anna",
    note: "Tom bitte kümere dich drum.",
    type: "Eintrag",
    linkedUser: ["1"],
    linkedCustomer: [],
  },
];