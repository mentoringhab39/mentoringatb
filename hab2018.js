  var data = [];
  //var data = new Firebase('https://hab2018-d0734.firebaseio.com/');
  var ref = firebase.database().ref('/');

function run(){
  //just makrune a variable to keep track of the data coming from Firebase
  
  //create a new connection to firebase
  
  
  //listen to data updates from firebase
  ref.on("value", function(snapshot){
    //when data updates at Firebase, put it in the data variable
    data = snapshot.val() ?? [];
  });



  $('#newActivity').submit(function(event){
    var form = $(this);
    console.log("submit to Firebase");

    //make the submit disabled
    $form.find("#saveForm").prop('disabled', true);

    //get the actual values that we will send to firebase
    var titleToSend = document.getElementById('activityTitle');

    console.log(titleToSend);
    
    var descriptionToSend = document.getElementById("activityDescription");

    console.log(descriptionToSend);

    var categoryToSend = document.getElementById('activityCatagory');

    console.log(categoryToSend);
    
    //take the values from the form, and put them in an object
    var newActivity = {
      "description": descriptionToSend,
      "title":titleToSend,
      "type": categoryToSend
    }
    //put the new object into the data array
    data.push(newActivity);
    console.log(data);
    //send the new data to Firebase
    ref.set(data);

    return false;
  })
}

run();