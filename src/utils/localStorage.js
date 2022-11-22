

export function toLocalStorage(key, value){
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}

export function deleteFromLocalStorage(key){
  localStorage.removeItem(key);
  return true;
}

export function fromLocalStorage(key){
  let storage;
  try {
      storage  = JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error.message);
  }


  // example data for testing
  if(storage === null && key==="loggedUser") {
    storage = "";
  }

  if(storage === null && key==="userList") {
    storage = [
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
      { 
        id: "2",
        name: "Peter",
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
        linked: ["1", "2"]
      },
      { 
        id: "3",
        name: "Anna",
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
        linked: [],
      }, 
      { 
        id: "4",
        name: "Dieter",
        role: "admin",
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
        linked: [],
      }
    ];
  }
      
  if(storage === null && key==="orderList")
  {
    storage = [
    {
      id: "b5db267b-3275-4a86-a9f4-e7f927d33ed01",
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
      linkedUser: ["1", "3"],
      linkedCustomer: [],
    },
    {
      id: "8f76114b-c30c-411d-ad38-77ce69079eef1",
      name: "Gruppen Meeting!",
      date : {
        dateString: "25.11.2022",
        hour: 16,
        minute: 0,
      },
      createDate: "24.11.2022",
      owner: "Anna",
      note: "bitte alle da sein. Der Hr. White kommt dazu.",
      type: "Termin",
      linkedUser: ["1", "2", "3", "4"],
      linkedCustomer: ["1"],
    },
  ];}

  if(storage === null && key==="customerList")
  {
    storage = [
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
    {
      id: "2",
      customer_name: "Alte Hasen AG",
      adress_street: "Frankenweg 22",
      adress_code: "44256",
      adress_city: "Südberg",
      customer_note: "",
      contact_prson_name: "Hr. Black",
      contact_prson_tel: "",
      contact_prson_email: "",
      contact_prson_note: "",
    },
  ];}
  
  return storage;
}
