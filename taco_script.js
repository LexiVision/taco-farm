//Script file for Taco Farm application
   
// event listener on the <div> for the click event 

document.getElementById("button").addEventListener("click", addTaco);

// global variable which start the taco count oat zero 

let tacoNum = 0;

// write that zero value from the variable into the <span> element 

document.getElementById("tacoCount").textContent = tacoNum;

// definition of the addTaco() function

function addTaco(){
	//increment the tacoNum variable value by one 

	tacoNum++;

	//analyze how many tacos we currently have 

	if (tacoNum) <=10 {

		//add a taco image into the document using nodes

		let newImg = document.creatElement("img");
		newImg.setAttribute("src", "taco.png");

		//attach the new image node to the document 
		document.getElementByID("TacoFarm").appendChild(newImg);

		//update the tacoCount of the document 

		document.getElementByID("tacoCount").textContent = tacoNum;

	} else {

		document.getElementsByTagName("h1")[0].textContent = "Woah! That's Too Many Tacos!";

		document.getElementById("button").style.display = "none";

	}
}

