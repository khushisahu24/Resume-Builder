// alert("loading")
function addNewWEField()
{
    // console.log("adding new field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
     newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Work Experience Here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
   

  weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
     newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Academic Qualification Here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
   

 aqOb.insertBefore(newNode,aqAddButtonOb);
}
function addNewAField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aField');
     newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Achievements Here");

    let aOb=document.getElementById("a");
    let aAddButtonOb=document.getElementById("aAddButton");
   

 aOb.insertBefore(newNode,aAddButtonOb);
}
function addNewPPField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('ppField');
     newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Projects Here");

    let ppOb=document.getElementById("pp");
    let ppAddButtonOb=document.getElementById("ppAddButton");
   

 ppOb.insertBefore(newNode,ppAddButtonOb);
}

//Generate Resume function

function generateResume()
{
  let nameField=document.getElementById("nameField").value;
  let nameT1=document.getElementById("nameT1");

  nameT1.innerHTML=nameField;

  //direct

  document.getElementById("nameT2").innerHTML=nameField;

  //contact

  document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML=document.getElementById("addressField").value

  //Github
  document.getElementById("githubT").innerHTML=document.getElementById("githubField").value
  //linkedin
  document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value
  //insta
  document.getElementById("instaT").innerHTML=document.getElementById("instaField").value
  //objective
  document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value
//work experience
let wes=document.getElementsByClassName("weField")
let str=''
for(let e of wes)
{
  str=str+`<li> ${e.value} </li>`

}
document.getElementById("weT").innerHTML=str;



//academic qualification

let aqs=document.getElementsByClassName("aqField");
let str1=''
for(let e of aqs)
{
  str1=str1+`<li> ${e.value} </li>`;
}

document.getElementById("aqT").innerHTML=str1;



//personal projects

let pps=document.getElementsByClassName("ppField");
let str2=''
for(let e of pps)
{
  str2=str2+`<li> ${e.value} </li>`;
}

document.getElementById("ppT").innerHTML=str2;



//internships and achievements
let as=document.getElementsByClassName("aField");
let str3=''
for(let e of as)
{
  str3=str3+`<li> ${e.value} </li>`;
}

document.getElementById("aT").innerHTML=str3;
//code for setting image
let file=document.getElementById('imgField').files[0];

let reader=new FileReader();

reader.readAsDataURL(file);

//set the image in template
reader.onloadend=function()
{
  document.getElementById("imgTemplate").src=reader.result;
}

document.getElementById('resume-form').style.display='none';
document.getElementById('resume-template').style.display='block';


}


//Print Resume

function printResume()
{
  window.print();
}