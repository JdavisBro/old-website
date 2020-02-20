var firebaseConfig = {
    apiKey: "AIzaSyAYYZzZdfsQv_5uOXaAGKui3qnzoIoF55g",
    authDomain: "animalcrossingdesigns-70ee9.firebaseapp.com",
    databaseURL: "https://animalcrossingdesigns-70ee9.firebaseio.com",
    projectId: "animalcrossingdesigns-70ee9",
    storageBucket: "animalcrossingdesigns-70ee9.appspot.com",
    messagingSenderId: "837274960395",
    appId: "1:837274960395:web:de7472466e4314a4cabd0e"
};
firebase.initializeApp(firebaseConfig);

var designs = [{"name": "design!","qrCode": "qr.png","image":"image.png","tags":["tag1","tag2","tag3","tag4"]},{"name": "design!","qrCode": "qr.png","image":"image.png","tags":["tag1","tag2","tag3","tag4"]}];

function loadDesigns() {
    var database = firebase.database();
    database.ref("/designs").once("value").then(function(dataSnapshot){
        designs = dataSnapshot.toJSON();
        loadContinue();
    });
}
function loadContinue() {
    document.getElementById("designs").innerHTML = "";
    for (var key in designs) {
        var x = designs[key]
        var divElement = document.createElement("DIV");
        divElement.classList.add("design");

        var titleElement = document.createElement("P");
        titleElement.classList.add("designName");
        titleElement.innerHTML = x["name"];
        titleElement.title = x["name"];
        divElement.appendChild(titleElement);

        var qrCodeElement = document.createElement("IMG");
        qrCodeElement.classList.add("imgOne");
        qrCodeElement.src = x["qrCode"];
        divElement.appendChild(qrCodeElement);

        var imageElement = document.createElement("IMG");
        imageElement.classList.add("imgTwo");
        imageElement.src = x["image"];
        divElement.appendChild(imageElement);

        var tagNumber = 0;
        for (var tagKey in x["tags"]) {
            tagNumber++;
            var tagElement = document.createElement("H5");
            tagElement.classList.add("tag")
            var className = "";
            switch(tagNumber) {
                case 1:
                    className = "tone";
                    break;
                case 2:
                    className = "ttwo";
                    break;
                case 3:
                    className = "tthree";
                    break;
                case 4:
                    className = "tfour";
                    break;
                }
            tagElement.classList.add(className);
            tagElement.innerHTML = x["tags"][tagKey];
            tagElement.title = x["tags"][tagKey];
            divElement.appendChild(tagElement);
            }
        document.getElementById("designs").appendChild(divElement);
    }
}

function writeDesign(name, qrcode, image, tags) {
    var newPostRef = firebase.database().ref("/designs").push();
    newPostRef.set({
      "name": name,
      "qrCode": qrcode,
      "image": image,
      "tags": tags
    });
  }

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function submit() {
    var name = document.getElementById("name").value;
    var qrcodeurl = document.getElementById("qrcodeurl").value;
    //if (qrcodeurl.match(/\.(jpeg|jpg|gif|png)$/) != true) {
    //     document.getElementById("status").innerHTML = "URL MUST BE IMAGE";
    //}
    var imageurl = document.getElementById("imageurl").value;
    //if (imageurl.match(/\.(jpeg|jpg|gif|png)$/) != true) {
    //    document.getElementById("status").innerHTML = "URL MUST BE IMAGE";
    //}
    var tags = document.getElementById("tags").value.split(" ")
    if (tags.length > 4) {
        document.getElementById("status").innerHTML = "ONLY 4 TAGS";
        return;
    }
    writeDesign(name,qrcodeurl,imageurl,tags);
    document.getElementById("status").innerHTML = "SUCCESS";
    setTimeout(reload,2000)
}

function reload() {
    location.reload();
}