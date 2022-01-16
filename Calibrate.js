class Sink {
    constructor(sink_rate, sink_unit){
        this._sink_rate = sink_rate;
        this._sink_unit = sink_unit;
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

// Timer Buttons
var button_start = document.getElementById("start");
var button_stop = document.getElementById("stop");
var button_confirm = document.getElementById("confirm");

// Variables
var start_time;
var Time_Elapsed;
var rate;

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
    rate = (1/Time_Elapsed);
    rate = rate.toFixed();
};

button_confirm.onclick = function(){
    if(!isNaN(rate)){
        var new_sink = new Sink(rate, "Metric Cup");
    }
    console.log('confirmed');
    var msg = "Sink Rate:"
    document.getElementById("water rate").innerHTML = msg + new_sink.get_sink_rate();
}
