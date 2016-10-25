/*-------
		Purpose: On launch of the script this function is called, calls the reset function to reset everything
		Parameters: NONE
		Return: NONE
	-------*/
	function init (){
		reset();
	}
		
	/*-------
		Purpose: Resets the program to the original state
		Parameters: NONE
		Return: NONE
	-------*/
	function reset () {
		document.getElementById('question').value = "";
		document.getElementById('region').value = "region0";
		document.getElementById('catBreed').value = "catBreed0";
		document.getElementById('age').value = "age0";
		document.getElementById('weight').value = "weight0";
		document.getElementById('gender').value = "gender0";
		document.getElementById('height').value = "height0";
		document.getElementById('showResult2').innerHTML = "";
	}
	
	function isEmpty(str) {
    	return !str || !/[^\s]+/.test(str);
	}
	
	/*-------
		Purpose: Testing Jasmine Framework
		Parameters: NONE
		Return: "Hello world!"
	-------*/
	function generate(){
		// Reset Display - Demo purposes only
		document.getElementById('showResult2').innerHTML = "";
	
		// Get the slot of the question selected
		var shownVal = document.getElementById("question").value;
		alert(shownVal);
		
		// Catch any input in the question box that is not empty or a valid question and throw an error
		try {
   			var questionSelected = document.querySelector("#questions option[value='"+shownVal+"']").dataset.value;
		}
		catch (e) {
   			alert("Please enter a question from the drop-down menu.");
			return;
		}
		
		// Catch any input in the question box that is not empty or a valid question and throw an error
		//var questionSelected = document.querySelector("#questions option[value='"+shownVal+"']").dataset.value;
		//if (questionSelected == null){
			//alert("Please enter a question from the drop-down menu.");
			//return;
		//}
		
		// Setup JSON object based on the input from the user on the interface
		var input =	'{ "interface" : [' +
					'{ "question":"' + questionSelected + '" , "region":"'+ document.getElementById('region').value +'" , "catBreed":"'+ document.getElementById('catBreed').value +'" , "age":"'+ document.getElementById('age').value +'" , "weight":"'+ document.getElementById('weight').value +'" , "gender":"'+ document.getElementById('gender').value +'" , "height":"'+ document.getElementById('height').value +'" } ]}';
		

		if (questionSelected == "question0"){
			alert("Please enter a question from the drop-down menu.");
			return;
		}
				
		// Convert from String to JSON Object
   		var jsonObj = JSON.parse(input);
		
		// Display JSON object on the screen - Demo purposes only
		document.getElementById('showResult2').innerHTML = jsonObj.interface[0].question + " " + jsonObj.interface[0].region + " " + jsonObj.interface[0].catBreed + " " + jsonObj.interface[0].age + " " + jsonObj.interface[0].weight + " " + jsonObj.interface[0].gender + " " + jsonObj.interface[0].height;
	}