/**
 * Created by liuyanhao on 17/5/16.
 */
var xmlhttp;
function testAjax() {
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    // xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4&&xmlhttp.status ==200){
            console.log(console.responseText)
        }
    }
    xmlhttp.open("GET","package.json",true);
    xmlhttp.send();
}
testAjax();