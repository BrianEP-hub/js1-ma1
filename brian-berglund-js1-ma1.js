//Question 1
const cat = {
      complain: function();{
        console.log("Meow!");
      }
};
cat.complain();

//Question 2
const heading = document.querySelector("h3");

//Question 3
heading.querySelector("h3").style.fontSize = 2rem;

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer("p").innerHTML = "New paragraph";

//Question 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];
function kittyCat(catArray){
  for(let i = 0; i < catArray.length; i++){
      console.log(catArray[i].name);
  }
}
kittyCat(cats);
//Question 8
function kittyCatAttack(catArray){
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++){
    catHTML += `<h5>${catArray[i].name}</h5>`;
  }

  return catHTML;
}
//Question 9
const cHTML = kittyCatAttack(cats);

resultsContainer.innerText = cHTML;


//Question 10
function kittyCatAttack(catArray){
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++){

    let catAge = "Age unkown";

    if (catArray[i].age){
      catAge = catArray[i].age;
    }

    catHTML += `<div>
                <h5>${catArray[i].name}</h5>
                <p>${catAge}</p>
                </div>`;
  }

  return catHTML;
}
kittyCat(cats)
console.log(catHTML);
