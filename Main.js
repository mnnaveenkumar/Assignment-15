var FlightInfo = [
    {
    "name"      :   "Malta to Amsterdam",
    "time"      :   "08:45",
    "status"    :   1
    },
    {
    "name"      :   "Malta to London",
    "time"      :   "09:45",
    "status"    :   0
    },
    {
    "name"      :   "Malta to Poznan",
    "time"      :   "10:00",
    "status"    :   1
    },
    {
    "name"      :   "Malta to London",
    "time"      :   "11:45",
    "status"    :   1
    },
    {
    "name"      :   "Malta to Rome",
    "time"      :   "12:05",
    "status"    :   0
    },
    {
    "name"      :   "Malta to Paris",
    "time"      :   "12:35",
    "status"    :   1
    }    
];


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // registration failed
        console.log('ServiceWorker registration failed: ', err);
        });
    });
}

var continer = document.querySelector(".Continer");

//  Create Header Section
var newElementdiv = document.createElement('div');
var newElementh1 = document.createElement('h4');
newElementdiv.setAttribute('class','header');
newElementh1.setAttribute('id','title');
newElementdiv.appendChild(newElementh1);
continer.appendChild(newElementdiv);
newElementh1.innerHTML  =   "Arrival";

// Show Internet Offline /Online
if(!navigator.onLine) {
    var newElementdivStat = document.createElement('div');
    newElementdivStat.setAttribute('class','NetworkStatus');    
    continer.appendChild(newElementdivStat);
    newElementdivStat.innerHTML = "Offline..   Please Check your connections settings.";
}

FlightInfo.forEach(element => {
    //  Create the Flight infromation from json
    var newElementdiv = document.createElement('div');
    newElementdiv.setAttribute('class','flight-info');
    var newElementp = document.createElement('p');
    newElementp.setAttribute('class','flight-name');
    var newElementdiv2 = document.createElement('div');
    newElementdiv2.setAttribute('class','stat');
    var newElementp1 = document.createElement('p');
    newElementp1.setAttribute('class','flight-time');
    var newElementp2 = document.createElement('p');
    newElementp2.setAttribute('class','flight-status');

    continer.appendChild(newElementdiv);
    newElementdiv.appendChild(newElementp);
    newElementdiv.appendChild(newElementdiv2);
    newElementdiv2.appendChild(newElementp1);
    newElementdiv2.appendChild(newElementp2);

    newElementp.innerHTML   =   element.name;   //  FlightInfo[0].name;
    newElementp1.innerHTML  =   element.time + " hrs.";   //  FlightInfo[0].time;

    if(element.status){
        newElementp2.innerHTML  =   "ONTIME";  //  FlightInfo[0].status;
        newElementp2.setAttribute('style', 'color: green;');
    }
    else{
        newElementp2.innerHTML  =   "DELAYED";  //  FlightInfo[0].status;
        newElementp2.setAttribute('style', 'color: red;');
    }
});
