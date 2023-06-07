function play(){
    navigator.mediaDevices.getUserMedia({audio:true});
    sound_model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HK62OM4pa/model.json",model_loaded);
    
}
function model_loaded(){
sound_model.classify(get_results);
}

function get_results(e,r){
    if(e){
        console.error(e);
    }
else{
    console.log(r);
}
}

