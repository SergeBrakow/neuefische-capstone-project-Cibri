export default function getDate(value){
    let newDate = new Date()

    
    if(value === "day") {
        return ( (newDate.getDate() <10 ? "0" + newDate.getDate() : newDate.getDate()) +"." + (newDate.getMonth() + 1)  + "."+ newDate.getFullYear()) 
    }

    if(value === "dayName") {
        const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        return ( days[newDate.getDay()]); 
    }

    if(value === "timeNow") {
        return ( newDate.getHours() +":" + newDate.getMinutes())
    }

    if(value === "hour") {
        return ( newDate.getHours())
    }
}

export function getDayNameLong(date) {
    const location = 'de-DE';
    return date.toLocaleDateString(location, {weekday: 'long'})
}

export function getDayNameShort(date) {
    const location = 'de-DE';
    return date.toLocaleDateString(location, {weekday: 'short'})
}

 function getDaysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

export function getDateBefore (dateString){
    let searchedYear   = Number(dateString.slice(6, 10));
    let searchedMonth = Number((dateString.slice(3, 5)));
    let searchedDay = Number(dateString.slice(0, 2));
    
    if(searchedDay ===1 ){
      if(searchedMonth ===1 ){
        searchedMonth = 12;
        searchedYear = searchedYear -1;
        searchedDay = getDaysInMonth(searchedMonth, searchedYear);
      } else {
        searchedMonth = searchedMonth -1;
        searchedDay = getDaysInMonth(searchedMonth, searchedYear);
      }
    } else { 
      searchedDay = searchedDay -1;
    } 
    searchedDay.toString().padStart(2, '0');
    searchedMonth.toString().padStart(2, '0');

    return new Date(searchedYear, searchedMonth-1, searchedDay);
  }
  
  export function getDateAfter(dateString) {
    let searchedYear   = Number(dateString.slice(6, 10));
    let searchedMonth = Number((dateString.slice(3, 5)));
    let searchedDay = Number(dateString.slice(0, 2));
    
    if(searchedDay === getDaysInMonth(searchedMonth+1, searchedYear) ){
      if(searchedMonth ===12 ){
        searchedMonth = 1;
        searchedYear = searchedYear +1;
        searchedDay = getDaysInMonth(searchedMonth, searchedYear);
      } else {
        searchedMonth = searchedMonth +1;
        searchedDay = getDaysInMonth(searchedMonth, searchedYear);
      }
    } else { 
      searchedDay = searchedDay +1;
    } 
    searchedDay.toString().padStart(2, '0');
    searchedMonth.toString().padStart(2, '0');

    return new Date(searchedYear, searchedMonth-1, searchedDay);
  }