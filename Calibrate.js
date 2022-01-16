class Sink {
    constructor(){
        this._sink_rate = 1;
        this._sink_unit = "Metric Cup";
    }

    // getter
    get_sink_rate(){
        return this._sink_rate;
    }
    get_sink_unit(){
        return this._sink_unit;
    }
    // setter
    set_sink_rate(new_rate){
        this._sink_rate = new_rate;
    }
    set_sink_unit(new_unit){
        this._sink_unit = new_unit;
    }
    
}

// Timer will utilise Date() to measure an accurate elapsed time through difference between start & end. 
var button_start = document.getElementById("start");
var button_stop = document.getElementById("stop");
var interval;
var start_time;
var Time_Elapsed;

function check_time(){
    var Change = Date.now() - start_time;
    Time_Elapsed = Math.floor(Change / 1000);
    console.log(Math.floor(Change / 1000));
}

button_start.onclick = function(){
    start_time = Date.now(); 
    console.log("Starting")
    // interval = setInterval(check_time(), 1000);
} // Updates ~every second

button_stop.onclick = function(){
    var Change = Date.now() - start_time;
    Time_Elapsed = Math.floor(Change / 1000);
    console.log("Time Elapsed: ", Time_Elapsed);
    Sink_1.set_sink_rate(1/Time_Elapsed);
    // clearInterval(interval); 
};

var Sink_1 = new Sink;

if(isNaN(Sink_1.sink_rate) == false){
    console.log("Sink Rate: ", Sink_1._sink_rate);
}