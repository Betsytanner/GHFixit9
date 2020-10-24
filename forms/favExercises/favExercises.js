/*
let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

let allExercises = " " ///to make this global
//create varaibles for Plank and pushups 
let userPushUps = "pushups"
let userSitUps = "situps"

//shows a list of all listed exercises 
//user selects 2 exercises 
favExercises.onshow=function(){
  for (i = 0; i <= allExercises.length - 1; i++) 
       selExercises.addItem(allExercises[i])
}

selExercises.onclick=function(click){
    allExercises = exercises.concat(coreExercises)
    //lets identify what tyoe of click this is
    //just click on the control to open it - is pointing to the whole control which is called an object
    //if an object means that its the click on the whole control - not an actual user choice 
    if (typeof(click) == "object")
      return   
      //but if the click is a choice 
    else 
    selExercises.value = click   // highlights the users choice 
      console.log(`You picked ${click}`)
      if (click.length ==2)
          if (coreExercises.includes(click[0]) && coreExercises.includes(click[1]))
            alert(`you choose 2 exercises`)
          else 
            alert(`not core`)
}



btnNext.onclick=function(){
  changeform(describeYou)
}

//Only appStudio controls can be used in the app for interaction with the user, and for I & O (Input and Output). No alerts, popups, prompts, etc. 
//Use template literals for all output. 
//Complete the favExercises.onshow event handler so it populates the select list from both the 'exercises' and 'coreExercises' arrays when the form loads/starts. 
//Add a button so when the user has chosen their two exercises, it shows them in a control this output in this format: //  write these are two core exercises 


// the user will choose two excerises
//if the user selects situps and plank -- write these are two core exercises 
//else - write these are not two core excerises 
  //how to - create variables that hold situps and core 
  //
//        You chose situps and planks - those are the two core exercises. 
//OR 
 //      You did not pick the two core exercises. 
//Add a button on the right bottom corner of the form that, when clicked, goes to the next page - the mobileNav page.

*/
