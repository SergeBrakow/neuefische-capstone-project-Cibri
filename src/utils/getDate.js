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