

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
  if(storage === null && key==="userList") {
    storage = [
      { id: 1, name: "Peter", role:"user"}, 
      { id: 2, name: "Nicole Schmidt", role: "admin"}
    ];
  }
      
  if(storage === null && key==="orderList")
  {
    storage = [
    {
      id: "b5db267b-3275-4a86-a9f4-e7f927d33ed01",
      name: "Termin",
      date : {
        dateString: "16.11.2022",
        hour: 10,
        minute: 30,
      },
      owner: "user1",
      note: "clita kasd gubergren, no sea takimata",
      customer: "b5db267b-3275-4a86-a9f4-e7f927d233ed01",
      type: "Eintrag",
    },
    {
      id: "8f76114b-c30c-411d-ad38-77ce69079eef1",
      name: "Termin",
      date : {
        dateString: "16.11.2022",
        hour: 10,
        minute: 45,
      },
      owner: "user1",
      note: "clita kasd gubergren, no sea takimata",
      type: "Termin",
    },
  ];}

  if(storage === null && key==="customerList")
  {
    storage = [
    {
      id: "b5db267b-3275-4a2d33ed01",
      customer_name: "Neue Hasen GmbH",
      adress_street: "WalterWeg 2",
      adress_code: "44756",
      adress_city: "Nordberg",
      customer_note: "",
      contact_prson_name: "Hr. White",
      contact_prson_tel: "",
      contact_prson_email: "",
      contact_prson_note: "",
    },
    {
      id: "b5db267b33ed01",
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
