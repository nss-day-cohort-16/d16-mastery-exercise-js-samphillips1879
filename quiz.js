// document.getElementById("treeHeight").addEventListener("click", fuction() {
// 	tree()
// });
// document.getElementById("treeCharacter").addEventListener("click", tree);



// var treeHeight = parseInt(document.getElementById("treeHeight").value) ;

// var treeCharacter = document.getElementById("treeCharacter").value;


// var specsObject = { 
// 	height: treeHeight,
// 	character: treeCharacter,

// }


// var treeOutputString = "";
// var spacesInFront = " ";

// function treeBuilder(specs) {
// 	for (i = 0; i < specs.height; i++)
// 	treeOutputString +=  spacesInFront.repeat(i) + specs.character.repeat(i + 2);
// 	console.log("treeOutputString", treeOutputString)

// }

// document.getElementById("growYourTree").addEventListener("click", treeBuilder(specsObject));


// document.getElementById("growYourTree").addEventListener("click", function() {
// 	treeBuilder(specsObject); });

// function tree() {
// 	treeHeight = parseInt(document.getElementById("treeHeight").value);
// 	treeCharacter = document.getElementById("treeCharacter").value;
// 	specsObject = { 
// 		height: treeHeight,
// 		character: treeCharacter,
// 	}
// }


var heightInput = document.getElementById("treeHeight")
var characterInput = document.getElementById("treeCharacter")

var treeHeight = parseInt(heightInput.value);
var treeCharacter = characterInput.value;


var specsObject = { 
	height: treeHeight,
	character: treeCharacter,
}


var treeOutputString = " ";
var spacesInFront = " ";

heightInput.addEventListener("keyup", function (e) {
  if (13 == e.keyCode) {
     tree();
  }
});

characterInput.addEventListener("keyup", function (e) {
  if (13 == e.keyCode) {
     tree();
  }
});


document.getElementById("growYourTree").addEventListener("click", tree);

function treeBuilder(specs) {


	for (i = 0; i < specs.height; i++) {
		treeOutputString =  spacesInFront.repeat(specs.height - i - 1) + specs.character.repeat((i * 2) +1);
		console.log("treeOutputString", treeOutputString);
		// document.getElementById("treeDOM").innerHTML = treeOutputString;           for inserting into DOM
	}
}

function tree() {
	if (heightInput.value === "" || characterInput.value === "") {
		alert("both input fields must have a value")
	}

	console.log("heightInput value", heightInput.value);


	treeHeight = parseInt(document.getElementById("treeHeight").value);
	treeCharacter = document.getElementById("treeCharacter").value;
	specsObject = { 
		height: treeHeight,
		character: treeCharacter,
	}
	treeBuilder(specsObject);
}	




	// var specsObject = { 
	// 	height: treeHeight,
	// 	character: treeCharacter,
	// }



	// tree() ;
	// 	treeHeight = parseInt(document.getElementById("treeHeight").value);
	// 	treeCharacter = document.getElementById("treeCharacter").value;
	// 	specsObject = { 
	// 	height: treeHeight,
	// 	character: treeCharacter,
	// 	}
	// }	


// document.getElementById("growYourTree").addEventListener("click", treeBuilder(specsObject));