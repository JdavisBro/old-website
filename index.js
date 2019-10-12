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
            document.getElementById('pagestyle1').setAttribute('href','/dstyle.css');
            document.getElementById('pagestyle').setAttribute('href','/style.css');
            document.getElementById('toggleStyle').innerHTML = 'Light';
        } 
        else {
            document.getElementById('pagestyle1').setAttribute('href','/style.css');
            document.getElementById('pagestyle').setAttribute('href','/dstyle.css');
            document.getElementById('toggleStyle').innerHTML = 'Dark';
        }
    }

function swapStyleSheet(){
    if (document.getElementById('pagestyle1').getAttribute("href") === '/style.css') {
        setCookie('theme','1')
        document.getElementById('pagestyle1').setAttribute('href','/dstyle.css');
        document.getElementById('pagestyle').setAttribute('href','/style.css');
        document.getElementById('toggleStyle').innerHTML = 'Light';
    } else {
        setCookie('theme','0')
        document.getElementById('pagestyle1').setAttribute('href','/style.css');
        document.getElementById('pagestyle').setAttribute('href','/dstyle.css');
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

getStyle()