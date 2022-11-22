
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomerViewSection from "../components/CustomerViewSection";

window.scrollTo = jest.fn();


test("render", () => {
    render(<CustomerViewSection  customer={dataItem}/>);

    const boltName = screen.getByText(/name/i);
    const boltAnschrift = screen.getByText(/anschrift/i);
    expect(boltName).toBeInTheDocument();
    expect(boltAnschrift).toBeInTheDocument();
});


const dataItem = [
    {
        id: "1",
        customer_name: "Neue Hasen GmbH",
        adress_street: "WalterWeg 2",
        adress_code: "44756",
        adress_city: "Nordberg",
        customer_note: "",
        contact_prson_name: "Hr. White",
        contact_prson_tel: "05974 963145",
        contact_prson_email: "hase@hasen.com",
        contact_prson_note: "Mag guten Kaffe.",
      },
];