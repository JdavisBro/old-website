function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";}

function setCookie(cname, cvalue) {;
        document.cookie = cname + "=" + cvalue + ";path=/";
    }

function getStyle(){
        theme = getCookie('theme')
        if (theme==="1") {
            document.getElementById('pagetheme').setAttribute('href','/dark.css');
            document.getElementById('toggleStyle').innerHTML = 'Light';
        } 
        else {
            document.getElementById('pagetheme').setAttribute('href','/light.css');
            document.getElementById('toggleStyle').innerHTML = 'Dark';
        }
    }

function swapStyleSheet(){
    if (document.getElementById('pagetheme').getAttribute("href") === '/light.css') {
        setCookie('theme','1')
        document.getElementById('pagetheme').setAttribute('href','/dark.css');
        document.getElementById('toggleStyle').innerHTML = 'Light';
    } else {
        setCookie('theme','0')
        document.getElementById('pagetheme').setAttribute('href','/light.css');
        document.getElementById('toggleStyle').innerHTML = 'Dark';      
        }
   }

function setJdavis(){
    document.getElementById('jdavis').value = getCookie('jdavis')
}

function changeJdavis(){
    setCookie('jdavis',document.getElementById('jdavis').value)
} 

function setJdavisBox(){
    if (getCookie('jdavisBox')==="1") {
        document.getElementById('jdavisBox').checked = true;
    }
    else {
        document.getElementById('jdavisBox').checked = false;
    }
}

function changeJdavisBox(){
    if (getCookie('jdavisBox')==='1') {
        setCookie('jdavisBox','0')
    }
    else {
        setCookie('jdavisBox','1')
    }
}

function setPage(name){
    document.getElementsByTagName("title")[0].innerHTML = name + " - JdavisBro"
    document.getElementsByClassName(name)[0].id = "currentmenu"
}

function bigLion(size,plmi){
    var bigspeed = 25
    if (plmi == 0) {
        size = size + 1
        if (size < 0) {swapStyleSheet
            document.getElementById("biglion").style.width = size * -1 + '%';
            document.getElementById("biglion").style.transform = "scaleX(-1)";
        } else {  
            document.getElementById("biglion").style.width = size + '%';
            document.getElementById("biglion").style.transform = "scaleX(1)";
        }
    } else {
        size = size -1
        if (size < 0) {
            document.getElementById("biglion").style.width = size * -1 + '%';
            document.getElementById("biglion").style.transform = "scaleX(-1)";
        } else {
            document.getElementById("biglion").style.width = size + '%';
            document.getElementById("biglion").style.transform = "scaleX(1)";
        }
    }
    if (size > 99) {
        plmi = 1
    } else if (size < -99) {
        plmi = 0
    }
    setTimeout(bigLion,bigspeed,size,plmi)
}

function uhohfunction(size,plmi){
    var uhOhStinky = document.getElementById("uhOhStinky");
    var uhspeed = 100;
    if (plmi == 0) {
        size = size + 1
        if (size < 0) {swapStyleSheet
            document.getElementById("uhoh").style.width = size * -1 + '%';
            uhOhStinky.volume=size*-1/100;
            document.getElementById("uhoh").style.transform = "scaleX(-1)";
        } else {  
            document.getElementById("uhoh").style.width = size + '%';
            uhOhStinky.volume=size/100;
            document.getElementById("uhoh").style.transform = "scaleX(1)";
        }
    } else {
        size = size -1
        if (size < 0) {
            document.getElementById("uhoh").style.width = size * -1 + '%';
            uhOhStinky.volume=size*-1/100;
            document.getElementById("uhoh").style.transform = "scaleX(-1)";
        } else {
            document.getElementById("uhoh").style.width = size + '%';
            uhOhStinky.volume=size/100;
            document.getElementById("uhoh").style.transform = "scaleX(1)";
        }
    }
    if (size > 99) {
        plmi = 1
    } else if (size < -99) {
        plmi = 0
    }
    setTimeout(uhohfunction,uhspeed,size,plmi)
}
