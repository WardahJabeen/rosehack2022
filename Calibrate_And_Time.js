// class Sink {
//     constructor(sink_rate, sink_unit){
//         this._sink_rate = sink_rate;
//         this._sink_unit = sink_unit;
//     }

//     // getter
//     get_sink_rate(){
//         return this._sink_rate;
//     }
//     get_sink_unit(){
//         return this._sink_unit;
//     }
//     // setter
//     set_sink_rate(new_rate){
//         this._sink_rate = new_rate;
//     }
//     set_sink_unit(new_unit){
//         this._sink_unit = new_unit;
//     }
    
// }

/* ---------------------    CALIBRATION     ------------------------ */
var button_start_c = document.getElementById("start_c");
var button_stop_c = document.getElementById("stop_c");
var button_confirm_c = document.getElementById("confirm_c");

// Variables
var start_time_c;
var Time_Elapsed_c;
var rate;
var sink_rate;

function check_time(){
    var Change = Date.now() - start_time_c;
    Time_Elapsed_c = Math.floor(Change / 1000);
    console.log(Math.floor(Change / 1000));
}

// Button Actions for Calibration
button_start_c.onclick = function(){
    start_time_c = Date.now(); 
    console.log("Started Timer")
    // interval = setInterval(check_time(), 1000);
} // Updates ~every second

button_stop_c.onclick = function(){
    var Change = Date.now() - start_time_c;
    Time_Elapsed_c = Math.floor(Change / 1000);
    console.log("Time Elapsed: ", Time_Elapsed_c);
    rate = (1/Time_Elapsed_c);
    rate = Math.round(rate*100)/100;
    console.log(rate);
};

button_confirm_c.onclick = function(){
    if(!isNaN(rate)){
        sink_rate = rate;
    }
    var msg = "Sink Rate is "
    console.log(msg + sink_rate);
    //document.getElementById("water rate").innerHTML = msg + sink_rate;
}
/* ---------------------    TIME    ------------------------ */
// Timer Buttons
var button_start_t = document.getElementById("start_t");
var button_stop_t = document.getElementById("stop_t");
var button_confirm_t = document.getElementById("confirm_t");

// Variables
var start_time_t;
var Time_Elapsed_t;
function check_time(){
    var Change = Date.now() - start_time_t;
    Time_Elapsed_t = Math.floor(Change / 1000);
    console.log(Math.floor(Change / 1000));
}

// Button Actions
button_start_t.onclick = function(){
    start_time_t = Date.now(); 
    console.log("Started Timer")
    // interval = setInterval(check_time(), 1000);
} // Updates ~every second

button_stop_t.onclick = function(){
    var Change = Date.now() - start_time_t;
    Time_Elapsed_t = Math.floor(Change / 1000);
    console.log("Time Elapsed: ", Time_Elapsed_t);
    Time_Elapsed_t = Time_Elapsed_t.toFixed();
    console.log(Time_Elapsed_t);
};

button_confirm_t.onclick = function(){
    // Calculating Water Consumption
    var water_consumption = sink_rate * Time_Elapsed_t;
    var msg_1 = "You have consumed "
    var msg_2 = " Metric Cup(s) of water."
    console.log(msg_1 + water_consumption + msg_2);
}