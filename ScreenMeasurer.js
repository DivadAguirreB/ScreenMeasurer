			
function startMeasuringWindow(){
				
	createInfoBar();
	displayInfo(window.innerWidth + "px", window.innerHeight + "px");
}
				
						
function createInfoBar() {
	var blockToDisplay = document.createElement("DIV");
	blockToDisplay.style.display = "block";
	blockToDisplay.style.textAlign = "center";
	blockToDisplay.style.position = "fixed";
	blockToDisplay.style.top = "0px";
	blockToDisplay.style.padding = "5px";
	blockToDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	blockToDisplay.style.color = "#4C4C4C";
	blockToDisplay.style.fontFamily = "sans-serif";
				
	var title = document.createElement("SPAN");
	title.style.display = "block";
	title.style.fontSize = "20px";
	title.innerHTML = "Current Screen Size";
				
	var infoBlock = document.createElement("div");
	infoBlock.style.marginTop = "5px";
	infoBlock.style.display = "inline-block";
	infoBlock.style.textAlign = "left";
				
	var info = document.createElement("SPAN");
	info.id = "info";
				
	infoBlock.appendChild(info);
	blockToDisplay.appendChild(title);
	blockToDisplay.appendChild(infoBlock);
				
	document.body.appendChild(blockToDisplay);
}

function changeDisplayedSize() {
	displayInfo(window.innerWidth + "px", window.innerHeight + "px");
}

function displayInfo(width, height) {
	document.getElementById("info").innerHTML = "Width: " + width + ' <br>Height: ' + height;	
}

window.addEventListener("resize", changeDisplayedSize);
window.addEventListener("load", startMeasuringWindow);
			
