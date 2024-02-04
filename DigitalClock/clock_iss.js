var flag=1;
function clock(){
    const now = new Date();
    //getHours gives us 24-hour time
    let hour=now.getHours();
    let ampm;
    if (hour>=12)ampm="PM";
    else ampm="AM";
    hour=hour.toString().padStart(2,'0');
    // padding the time with 0s on either side if a length of 2 is not reached
    const min= now.getMinutes().toString().padStart(2, '0');
    const sec=now.getSeconds().toString().padStart(2, '0');
    let time_string;
    if (flag==1){time_string=`${hour}:${min}:${sec}`;}
    else {time_string=`${(hour%12 || 12).toString().padStart(2,'0')}:${min}:${sec} ${ampm}`;} //converting to non-military time
    document.getElementById('clock').textContent = time_string;
    //we're looking for an element in the HTML page of type clock (we user-defined this class in the CSS) and we're setting the 
    //text content of that class to be our time string, which is a formatted string
    
}
function init(){
    clock();
    setInterval(clock,1000);
    const military = document.getElementById('switch_button');
    military.addEventListener('click',function(){flag=!flag;});
}
window.onload=init;