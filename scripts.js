// JavaScript Document
/*
 *  scripts.js
 *  for WiFi Disk & FTP On The Go
 *
 *  Copyright 2008-2009 Headlight Software, Inc. All rights reserved.
 *
 */
 
function doOnError() {
   return true;
}
window.onerror = doOnError;

//Hide upload items if it's an iPhone or iPod.
function doOnLoaded() {
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
		if (document.getElementById("tab-view")) {
			document.getElementById("tab-view").innerHTML = "Download";
			document.getElementById("tab-upload").innerHTML = "Upload";
			document.getElementById("uploadbutton").value = "Upload Unavailable";	
			document.getElementById("uploadbutton").disabled = "disabled";	
		} else if (document.getElementById("uploadblock")) {
			document.getElementById("uploadblock").innerHTML = "";
		}
	}
}


//Switching Tabs.
function show1() {
	document.getElementById("filestable").className = "visible";
	document.getElementById("upload").className = "hidden";
	document.getElementById("tab-view").className = "tab-on";
	document.getElementById("tab-upload").className = "tab-off";
	document.getElementById("pathpre").innerHTML = "Path ";
	document.getElementById("uparrow").className = "visible";
}
function show2() {
	document.getElementById("filestable").className = "hidden";
	document.getElementById("upload").className = "visible";
	document.getElementById("tab-view").className = "tab-off";
	document.getElementById("tab-upload").className = "tab-on";
	document.getElementById("pathpre").innerHTML = "Upload to ";
	document.getElementById("uparrow").className = "hidden";
}

//Showing Help
function showhelp() {
	document.getElementById("helpwindow").className = "visible";
}
function hidehelp() {
	document.getElementById("helpwindow").className = "hidden";
}
