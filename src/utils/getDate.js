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

export function getTimeNowString(){
  const newDate = new Date();
  return [newDate.getHours().toString().padStart(2, '0'), newDate.getMinutes().toString().padStart(2, '0')].join(":");
}

export function getDayNameLong(date) {
    const location = 'de-DE';
    return date.toLocaleDateString(location, {weekday: 'long'})
}

export function getDayNameShort(date) {
    const location = 'de-DE';
    return date.toLocaleDateString(location, {weekday: 'short'})
}

export function getDatePrevious (showDate){
  const searchedDay = new Date(showDate.getTime());
  searchedDay.setDate(searchedDay.getDate() -1);
  return searchedDay;
}
  
export function getDateNext(showDate) {
  const searchedDay = new Date(showDate);
  searchedDay.setDate(searchedDay.getDate() +1);
  return searchedDay;
}

export function getDateStringPrevious(showDate){
  const searchedDate = getDatePrevious(showDate);
  return [searchedDate.getDate().toString().padStart(2, '0'), (searchedDate.getMonth()+1).toString().padStart(2, '0'), searchedDate.getFullYear()].join('.');

}
  
export function getDateStringNext(showDate){
  const searchedDate = getDateNext(showDate);
  return [searchedDate.getDate().toString().padStart(2, '0'), (searchedDate.getMonth()+1).toString().padStart(2, '0'), searchedDate.getFullYear()].join('.');
}

export function getDateString(toDate){
  return [toDate.getDate().toString().padStart(2, '0'), (toDate.getMonth()+1).toString().padStart(2, '0'), toDate.getFullYear()].join('.');
}