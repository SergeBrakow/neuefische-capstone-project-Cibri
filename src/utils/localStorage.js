

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
    if(storage === null && key==="users") {
      storage = [
        { id: 1, name: "User1", role:"user"}, 
        { id: 2, name: "Admin1", role: "admin"}
      ];
    }
        
    // example data for testing
    if(storage === null)
    {
      storage = [
      {
        id: "b5db267b-3275-4a86-a9f4-e7f927d33ed01",
        name: "Termin",
        date : {
          dateStamp: "16.11.2022",
          hour: 10,
          minute: 30,
        },
        owner: "user1",
        note: "clita kasd gubergren, no sea takimata",
        customer: "b5db267b-3275-4a86-a9f4-e7f927d233ed01",
      },
      {
        id: "8f76114b-c30c-411d-ad38-77ce69079eef1",
        name: "Termin",
        date : {
          dateStamp: "16.11.2022",
          hour: 10,
          minute: 45,
        },
        owner: "user1",
        note: "clita kasd gubergren, no sea takimata",
      },
    ];}

    return storage;
}
