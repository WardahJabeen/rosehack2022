// Timer Buttons
var button_start = document.getElementById("start");
var button_stop = document.getElementById("stop");
var button_confirm = document.getElementById("confirm");

// Variables
var start_time;
var Time_Elapsed;
import {sink_rate} from "./Calibrate";
function check_time(){
    var Change = Date.now() - start_time;
    Time_Elapsed = Math.floor(Change / 1000);
    console.log(Math.floor(Change / 1000));
}

// Button Actions
button_start.onclick = function(){
    start_time = Date.now(); 
    console.log("Started Timer")
    // interval = setInterval(check_time(), 1000);
} // Updates ~every second

button_stop.onclick = function(){
    var Change = Date.now() - start_time;
    Time_Elapsed = Math.floor(Change / 1000);
    console.log("Time Elapsed: ", Time_Elapsed);
    Time_Elapsed = Time_Elapsed.toFixed();
    console.log(Time_Elapsed);
};

// Calculating Water Consumption
var water_consumption = sink_rate * Time_Elapsed;
console.log(water_consumption);