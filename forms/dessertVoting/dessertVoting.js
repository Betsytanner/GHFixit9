
var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']


dessertVoting.onshow=function(){
    drpDesserts.clear()   
  // add a loop here that adds all the desserts in the array 
    // to the dropdown.
  
  for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
}

drpDesserts.onclick=function(){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else { 
       drpDesserts.value = s   // make dropdown show choice user made
    
    lblPrompt.value = `You picked ${s} and it is a great choice  ${drpDesserts.selection}.`)
  }


btnChange.onclick=function(){
changeform(describeYou)
  
}


      // the user picked something
 
