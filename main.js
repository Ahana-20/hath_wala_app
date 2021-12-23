prediction = "";
prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(dataURL){
        document.getElementById("result").innerHTML = "<img id= 'storedImg' src = '"+dataURL+ "'>"

        })
};

console.log("ml5version - ", ml5.version);

function speak(){
    var Syth = window.speechSynthesis;
    speak1 = "The first prediction is"+prediction1;
    speak2 = "The second prediction is "+prediction2;
    utterThis = new SpeechSynthesisUtterance(speak1+speak2);
    Synth.speak(utterThis);
}

function check(){
    var image = document.getElementById("storedImg");
    classifier.classify(image,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log("error");
    }
    else{
        console.log("results");
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;

    speak();

    if(result[0].label=="happy"){
        document.getElementById("update_emoji").innerHTML = "✌"
    }

    if(result[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML = "👌"
    }
    
    if(result[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML = "🤙"
    }

     
    if(result[1].label=="happy"){
        document.getElementById("update_emoji2").innerHTML = "✌"
    }

     
    if(result[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML = "👌"
    }

     
    if(result[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML = "🤙"
    }
}
}