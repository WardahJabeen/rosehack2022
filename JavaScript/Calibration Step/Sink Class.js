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

var start_time = Date.now();
function check_time(){
    var Change = Date.now() - start_time;
    console.log(math.floor(Change / 1000));
}

setInterval(check_time(), 1000); // Updates ~every second