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

export function getTimeAsString(hour, minute){
  return [hour.toString().padStart(2, '0'), minute.toString().padStart(2, '0')].join(':');
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
  return (getDateString (searchedDate));
}
  
export function getDateStringNext(showDate){
  const searchedDate = getDateNext(showDate);
  return getDateString (searchedDate);
}

export function getDateString(toDate, format ="yyyy.mm.dd"){
  if(format ==="yyyy.mm.dd"){
    return [toDate.getDate().toString().padStart(2, '0'), (toDate.getMonth()+1).toString().padStart(2, '0'), toDate.getFullYear()].join('.');
  } 
  // YYYY.MM.dd
  return  [toDate.getFullYear(), (toDate.getMonth()+1).toString().padStart(2, '0'), toDate.getDate().toString().padStart(2, '0')].join('.');
}

export function getDateFromString(dateString, format ="yyyy.mm.dd") {
  if(format ==="yyyy.mm.dd"){
    return new Date(Number(dateString.slice(6, 10)),
                              (Number((dateString.slice(3, 5)-1))), 
                                Number(dateString.slice(0, 2)));
  } 
}