var encrypted;
var decrypted;
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
	var textVal = document.getElementById("numbersIn").value;
	var encrypted = encrypt(textVal);
	document.getElementById("result1").innerHTML = encrypted.join("&#10;");
}

function encryptAES(message, key) {
	if(CryptoJS) {
		return CryptoJS.AES.encrypt(message, key);
	} else {
		throw "CryptoJS is not loaded!";
	}
}
function decryptAES(message, key) {
	if(CryptoJS) {
		return CryptoJS.AES.decrypt(message, key);
	} else {
		throw "CryptoJS is not loaded!";
	}
}

document.getElementById("encrypt_aes").onclick = function() {
	var textVal = document.getElementById("aes").value;
	var key = document.getElementById("aes_key").value;
	document.getElementById("aes").value = encryptAES(textVal, key);
}
document.getElementById("decrypt_aes").onclick = function() {
	var textVal = document.getElementById("aes").value;
	var key = document.getElementById("aes_key").value;
	var bytes = decryptAES(textVal, key);
	document.getElementById("aes").value = bytes.toString(CryptoJS.enc.Utf8);
}