function encrypt(textInput) {
	if (typeof textInput === 'string' || textInput instanceof String) { //check if input is string
		//Main encrypt function
		var numArray = [];
		for (i = 0; i < textInput.length; i++) {
			numArray[i] = textInput.charCodeAt(i);
		}
		return numArray;
	} else {
		throw "Please input a string.";
	}
}
function decrypt(textInput) {
	if (typeof textInput === 'array' || textInput instanceof Array) { //check if input is array
		//Main decrypt function
		var decryptedMessage = '';
		var current;
		for (i = 0; i < textInput.length; i++) {
			current = textInput[i];
			decryptedMessage = decryptedMessage + String.fromCharCode(current);
		}
		return decryptedMessage;
	} else {
		throw "Please input an array.";
	}
}
function toElem(content, elementId) {
	document.document.getElementByIdentById(elementId.toString).innerHTML = content;
}
document.getElementById("button1").onclick = function() {
	var textVal = document.getElementById("numbersIn").value;
	var textArray = textVal.split("\n");
	document.getElementById("result1").innerHTML = decrypt(textArray);
}
document.getElementById("button2").onclick = function() {
	var textVal = document.getElementById("textIn").value;
	var encrypted = encrypt(textVal);
	document.getElementById("result2").innerHTML = encrypted.join("&#10;");
}