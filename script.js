const Templates = [
  {
    img: "./assets/Templates/Resume1.webp",
    name: "Basic",
    ResumeNum: 1
  },
  {
    img: "./assets/Templates/Resume1.webp",
    name: "1-Column Resume",
    ResumeNum: 2
  },
  {
    img: "./assets/Templates/Resume1.webp",
    name: "Two-Column Professional Resume",
    ResumeNum: 3
  },
  {
    img: "./assets/Templates/Resume1.webp",
    name: "Modern Dark Mode Resume",
    ResumeNum: 4
  },
  {
    img: "./assets/Templates/Resume1.webp",
    name: "Colorful Side Header Resume",
    ResumeNum: 5
  }
];


let UserInfo = {
  Photo:"",
  choice: 1,
  Name:"",
  Mobile:"",
  Email:"",
  Address:"",
  City:"",
  State:"",
  Linkedin:"",
  Portfolio:"",
  GitHub:"",
  Education:"",
  Skills:"",
  Language:"",
  Intrests:"",
  Cocurricular:"",
  Certification:""
};

function setResumeTemplateNum(TemplateNum){
  let SavedData = localStorage.getItem("ResumeData");
  
  if(SavedData){
    UserInfo=JSON.parse(SavedData);
  }else{
    let resume=document.getElementById("resumeOutPut");

    resume.innerHTML = `<div>
        <a href="ResumeTemplates.html">
          <h4>Please Select the Template</h4>
        </a>
    </div>`;
    return;
  }

  UserInfo.choice=TemplateNum;
  console.log("Resume Selected "+UserInfo.choice);
  localStorage.setItem("ResumeData",JSON.stringify(UserInfo));
}


function SaveTheInput(){
  console.log("Resume Selected "+UserInfo.choice);
  UserInfo.Name=document.getElementById("name").value;
  UserInfo.Mobile=document.getElementById("mobile").value;
  UserInfo.Email=document.getElementById("email").value;
  UserInfo.Address=document.getElementById("homeA").value;
  UserInfo.City=document.getElementById("City").value;
  UserInfo.State=document.getElementById("State").value;

  UserInfo.Linkedin=document.getElementById("Linkedin").value;
  UserInfo.Portfolio=document.getElementById("Portfolio").value;
  UserInfo.GitHub=document.getElementById("GitHub").value;

  UserInfo.Education=document.getElementById("education").value;
  UserInfo.Skills=document.getElementById("skills").value;
  UserInfo.Language=document.getElementById("language").value;
  UserInfo.Intrests=document.getElementById("intrests").value;
  UserInfo.Cocurricular=document.getElementById("co-curricular").value;
  UserInfo.Certification=document.getElementById("certifications").value;

  const fileInput = document.getElementById("profilePhoto");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      UserInfo.Photo = e.target.result;
      localStorage.setItem("ResumeData", JSON.stringify(UserInfo));
      alert("Info Saved");
    };
    reader.readAsDataURL(file);
  } else {
    UserInfo.Photo = "";
    localStorage.setItem("ResumeData", JSON.stringify(UserInfo));
    alert("Info Saved");
  }

  
  localStorage.setItem("ResumeData",JSON.stringify(UserInfo));
  alert("Info Saved");
}

function ResumeOutPutButton(){
  let SavedData=localStorage.getItem("ResumeData");

  if(!SavedData || SavedData === "undefined")
  {
    let resume=document.getElementById("resumeButton");

    resume.innerHTML = `
        <a href="inputForm.html">
          <h4>Please Fille The Info Form</h4>
        </a>`;
    return;
  }

  UserInfo=JSON.parse(SavedData);

  console.log(UserInfo.choice);

  let Dir_Resume=document.getElementById("resumeButton");

  Dir_Resume.innerHTML = `
                  <a href="ResumeOutPut.html">
                      <input type="button" value="My Resume" id="TemplateButton">
                  </a>`;
}

function ResumeOutPut(){
  let SavedData=localStorage.getItem("ResumeData");

  if(!SavedData || SavedData === "undefined")
  {
    let resume=document.getElementById("resumeOutPutNotSaved");

    resume.innerHTML = `<div>
        <a href="inputForm.html">
          <h4>Please Fille The Info Form</h4>
        </a>
    </div>`;
    return;
  }

  UserInfo=JSON.parse(SavedData);

  console.log(UserInfo.choice);
  const choice=parseInt(UserInfo.choice);

  switch(choice){
    case 0 : console.log("0");break;
    case 1 : resume1Out();break;
    case 2 : resume2Out();break;
    case 3 : resume3Out();break;
    case 4 : resume4Out();break;
    case 5 : resume5Out();break;
    default : console.log("nothing");
  }
}


// Display resume Templates
function displayResumeTemplates() {
  let ResumeTemplatesContainer = document.getElementById("ResumeTemplatesContainer");

  for (let i = 0; i < Templates.length; i++) {
    let Template = Templates[i];

    let card = document.createElement("div");
    card.className = "card";

    let content = `
                    <img id="TempletImg" src="${Template.img}" alt="${Template.name}">
                    <h3>${Template.name}</h3>
                    <a href="ResumeOutPut.html">
                        <input type="button" onclick="setResumeTemplateNum(${Template.ResumeNum})" value="Select Template" id="TemplateButton">
                    </a>
                `;
    card.innerHTML = content;
    ResumeTemplatesContainer.appendChild(card);
  }
}

function show_downlode_And_Change_Temp_Button(){
  let buttonShow = document.getElementById("downlode_and_Change_Temp_Button");

  buttonShow.innerHTML = `
                  <a href="ResumeTemplates.html">
                    <button id="Button">Change Resume Template</button>
                  </a>
                  <button id="Button" onclick="downloadResumePDF()">Download Resume As PDF</button>
    `
}

//The resume Output Part
function resume1Out()
{
  console.log("out1");
  let resume=document.getElementById("resumeOutPut");

  resume.innerHTML = `
        <div class="ResumeOutPut1">
            <h2 id="ResumeHead">Resume</h2>
            <div class="bar"></div>
            <h3 id="Resume1Name">Name : ${UserInfo.Name}</h3>
            <h3 id="Resume1Modile">Mobile No : ${UserInfo.Mobile}</h3>
            <h3 id="Resume1Email">Email ID : ${UserInfo.Email}</h3>
            <h3 id="Resume1Linkedin">Linkedin : ${UserInfo.Linkedin}</h3>
            <h3 id="Resume1address">Home Address : ${UserInfo.Address}, ${UserInfo.City}, ${UserInfo.State}</h3>
            <h3 id="Resume1Education">Educations : <br>${UserInfo.Education}</h3>
            <h3 id="Resume1Skills">Skills : <br>${UserInfo.Skills}</h3>
            <h3 id="Resume1Language">Language Known : ${UserInfo.Language}</h3>
            <h3 id="Resume1Intrest">Intrests : ${UserInfo.Intrests}</h3>
            <h3 id="Resume1Co-Curricular">Co-Curricular : <br>${UserInfo.Cocurricular}</h3>
            <h3 id="Resume1certification">Certifications : <br>${UserInfo.Certification}</h3>
        </div>
      `;
  show_downlode_And_Change_Temp_Button();
}

function resume2Out() {
  let resume = document.getElementById("resumeOutPut");

  resume.innerHTML = `
    <div class="ResumeOutPut2">
      ${UserInfo.Photo ? `<img src="${UserInfo.Photo}" alt="Profile Photo">` : ""}

      <h2>${UserInfo.Name}</h2>
      <p><strong>Mobile :</strong> ${UserInfo.Mobile}</p>
      <p><strong>Email :</strong> ${UserInfo.Email}</p>
      <p><strong>Address :</strong> ${UserInfo.Address}</p>
      <p><strong>Linkedin :</strong> ${UserInfo.Linkedin}</p>
      <p><strong>GitHub :</strong> ${UserInfo.GitHub}</p>
      <a href="${UserInfo.Portfolio}">Portfolio</a>
      <p><strong>Portfolio :</strong> ${UserInfo.Portfolio}</p>

      <hr>

      <h3>Education</h3>
      <p>${UserInfo.Education}</p>

      <h3>Skills</h3>
      <p>${UserInfo.Skills}</p>

      <h3>Languages</h3>
      <p>${UserInfo.Language}</p>

      <h3>Interests</h3>
      <p>${UserInfo.Intrests}</p>

      <h3>Co-Curricular Activities</h3>
      <p>${UserInfo.Cocurricular}</p>

      <h3>Certifications</h3>
      <p>${UserInfo.Certification}</p>
    </div>
  `;
  show_downlode_And_Change_Temp_Button();
}

function resume3Out()
{
  const resume = document.getElementById("resumeOutPut");

  resume.innerHTML = `
    <div class="resume-container-3">
      <div class="left-column">
        ${UserInfo.Photo ? `<img src="${UserInfo.Photo}" alt="Profile">` : ""}
        <h2>${UserInfo.Name}</h2>
        <p><strong>Mobile:</strong><br>${UserInfo.Mobile}</p>
        <p><strong>Email:</strong><br>${UserInfo.Email}</p>
        <p><strong>Address:</strong><br>${UserInfo.Address}</p>
        <p><strong>Languages:</strong><br>${UserInfo.Language}</p>
        <p><strong>Interests:</strong><br>${UserInfo.Intrests}</p>
      </div>
      <div class="right-column">
        <h3>Education</h3>
        <p>${UserInfo.Education}</p>

        <h3>Skills</h3>
        <p>${UserInfo.Skills}</p>

        <h3>Co-Curricular</h3>
        <p>${UserInfo.Cocurricular}</p>

        <h3>Certifications</h3>
        <p>${UserInfo.Certification}</p>
      </div>
    </div>
  `;
  show_downlode_And_Change_Temp_Button();
}

function resume4Out() {
  const resume = document.getElementById("resumeOutPut");

  resume.innerHTML = `
    <div class="resume-4-dark">
      ${UserInfo.Photo ? `<img src="${UserInfo.Photo}" alt="Profile">` : ""}
      <h1>${UserInfo.Name}</h1>
      <p>📞 ${UserInfo.Mobile} | ✉️ ${UserInfo.Email}</p>
      <p>📍 ${UserInfo.Address}</p>
      <hr>
      <h3>🎓 Education</h3>
      <p>${UserInfo.Education}</p>
      <h3>💼 Skills</h3>
      <p>${UserInfo.Skills}</p>
      <h3>🗣️ Languages</h3>
      <p>${UserInfo.Language}</p>
      <h3>🎯 Interests</h3>
      <p>${UserInfo.Intrests}</p>
      <h3>🏅 Co-Curricular</h3>
      <p>${UserInfo.Cocurricular}</p>
      <h3>📜 Certifications</h3>
      <p>${UserInfo.Certification}</p>
    </div>
  `;
  show_downlode_And_Change_Temp_Button();
}

function resume5Out() {
  const resume = document.getElementById("resumeOutPut");

  resume.innerHTML = `
    <div class="resume-5-colorful">
      <div class="side-header">
        ${UserInfo.Photo ? `<img src="${UserInfo.Photo}" alt="Profile">` : ""}
        <h2>${UserInfo.Name}</h2>
        <p>${UserInfo.Email}</p>
        <p>${UserInfo.Mobile}</p>
      </div>
      <div class="main-info">
        <h3>Education</h3>
        <p>${UserInfo.Education}</p>
        <h3>Skills</h3>
        <p>${UserInfo.Skills}</p>
        <h3>Languages</h3>
        <p>${UserInfo.Language}</p>
        <h3>Interests</h3>
        <p>${UserInfo.Intrests}</p>
        <h3>Co-Curricular</h3>
        <p>${UserInfo.Cocurricular}</p>
        <h3>Certifications</h3>
        <p>${UserInfo.Certification}</p>
      </div>
    </div>
  `;
  show_downlode_And_Change_Temp_Button();
}


//Downlode Functionality
function downloadResumePDF(){
  if(typeof html2pdf === 'undefined'){
    alert("Please Check Internet or Try Again.");
    return;
  }

  let resumeElement = document.getElementById("resumeOutPut");
  if(!resumeElement){
    alert("Resume Not Generated Yet!!");
    return;
  }
  const opt = {
    margin      : 0,
    filename    : UserInfo.Name+"_Resume.pdf",
    image       : { type : 'jpeg', quality : 0.98 },
    html2canvas : { scale : 2, useCORS:true, scrolly: 0},
    jsPDF       : { unit : 'pt', format : 'a4', orientation : 'portrait' }
  };

  html2pdf().set(opt).from(resumeElement).save().then(()=>{
    console.log("PDF Saved Successfully....");
  });
  show_downlode_And_Change_Temp_Button();
}

// Load correct function based on page
window.onload = function () {
  const path = window.location.pathname;

  if(path.includes("index.html")){
    ResumeOutPutButton();
  }else if(path.includes("ResumeTemplates.html")) {
    displayResumeTemplates();
  }else if(path.includes("ResumeOutPut.html")){
    ResumeOutPut();
  }
};

