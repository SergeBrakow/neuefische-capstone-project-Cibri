

export function toLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
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
    if(storage === null)
          {storage = [
        {
          id: "b5db267b-3275-4a86-a9f4-e7f927d33ed01",
          name: "Termin",
          hour: 10,
          minute: 0,
          owner: "user1",
          note: "clita kasd gubergren, no sea takimata",
          customer: "b5db267b-3275-4a86-a9f4-e7f927d233ed01",
        },
        {
          id: "8f76114b-c30c-411d-ad38-77ce69079eef1",
          name: "Termin",
          hour: 10,
          minute: 10,
          owner: "user1",
          note: "clita kasd gubergren, no sea takimata",
        },
      ];}

    return storage;
}
