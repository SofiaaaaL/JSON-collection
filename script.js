let gridContent = document.getElementById('contentGrid');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let myJson = [
  {
    "MBTI" : "ISFJ",
    "imageURL" : "isfj.png",
    "Role" : "Defender",
    "Strengths" : "Supportive, Reliable, Observant, Enthusiastic, Hardworking, Good Practical Skills"
  },
  {
    "MBTI" : "ISTJ",
    "imageURL" : "istj.png",
    "Role" : "Logistician",
    "Strengths" : "Honest and Direct, Strong-willed and Dutiful,  Responsible, Calm and Practical, Create and Enforce Order, Jacks-of-all-trades"
  },
  {
    "MBTI" : "ISFP",
    "imageURL" : "isfp.png",
    "Role" : "Adventurer",
    "Strengths" : "Charming, Sensitive to Others, Imaginative, Passionate, Curious, Artistic"
  },
  {
    "MBTI" : "ISTP",
    "imageURL" : "istp.png",
    "Role" : "Virtuoso",
    "Strengths" : "Optimistic and Energetic, Creative and Practical, Spontaneous and Rational, Know How to Prioritize, Great in a Crisis, Relaxed"
  },
  {
    "MBTI" : "INTJ",
    "imageURL" : "intj.png",
    "Role" : "Architect",
    "Strengths" : "Rational, Informed, Independent, Determined, Curious, Original"
  },
  {
    "MBTI" : "INTP",
    "imageURL" : "intp.png",
    "Role" : "Logician",
    "Strengths" : "Analytical, Original, Open-Minded, Curious, Objective"
  },
  {
    "MBTI" : "INFJ",
    "imageURL" : "infj.png",
    "Role" : "Advocate",
    "Strengths" : "Creative, Insightful, Principled, Passionate, Altruistic"
  },
  {
    "MBTI" : "INFP",
    "imageURL" : "infp.png",
    "Role" : "Mediator",
    "Strengths" : "Empathetic, Generous, Open-Minded, Creative, Passionate, Idealistic"
  }
]

for (var i = 0; i < myJson.length; i++) {
  createElements(myJson[i]);
}

function createElements (incomingJSON) {
  //items
  let contentElement = document.createElement("DIV");
  contentElement.classList.add('items');

  //heading for each mbti
  let contentHeading = document.createElement("H2");
  contentHeading.classList.add('contentTitle');
  contentHeading.innerText = incomingJSON['MBTI'];
  contentElement.appendChild(contentHeading);

  //image for each mbti
  let contentImg = document.createElement("IMG");
  contentImg.classList.add('contentImage');
  contentImg.src = incomingJSON['imageURL'];
  contentElement.appendChild(contentImg);

  let pContainer = document.createElement("DIV");
  pContainer.classList.add('pContain');
  contentElement.appendChild(pContainer);

  //role for each mbti
  let roleMBTI = document.createElement("P");
  roleMBTI.classList.add('roles');
  roleMBTI.innerText = "Role: " + incomingJSON['Role'];
  pContainer.appendChild(roleMBTI);

  //strengths for each MBTI
  let strengths = document.createElement("P");
  strengths.classList.add('strength');
  strengths.innerText = "Strengths: " + incomingJSON ['Strengths'];
  pContainer.appendChild(strengths);

  gridContent.appendChild(contentElement);
}
