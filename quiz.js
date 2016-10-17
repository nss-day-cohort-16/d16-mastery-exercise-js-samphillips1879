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

// function growTree(specs) {
// 	for (i = 0; i < specs.height; i++)
// 	treeOutputString +=  spacesInFront.repeat(i) + specs.character.repeat(i + 2);
// 	console.log("treeOutputString", treeOutputString)

// }




// document.getElementById("growYourTree").addEventListener("click", growTree(specsObject));








var treeHeight = parseInt(document.getElementById("treeHeight").value);
var treeCharacter = document.getElementById("treeCharacter").value;


var specsObject = { 
	height: treeHeight,
	character: treeCharacter,
}
document.getElementById("growYourTree").addEventListener("click", function() {
	growTree(specsObject); });

var treeOutputString = " ";
var spacesInFront = "-";

function growTree(specs) {
	// var specsObject = { 
	// 	height: treeHeight,
	// 	character: treeCharacter,
	// }
	for (i = 0; i < specs.height; i++) {
		treeOutputString =  spacesInFront.repeat(specs.height - i) + specs.character.repeat((i * 2) +1);
		console.log("treeOutputString", treeOutputString);
	}
}




// document.getElementById("growYourTree").addEventListener("click", growTree(specsObject));