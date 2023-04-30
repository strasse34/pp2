setInterval(function(){ 
    let timerElement = document.getElementById('timer');
    let currentTime = timerElement.innerHTML;
    currentTime++;
    timerElement.innerHTML = currentTime;
}, 1000);