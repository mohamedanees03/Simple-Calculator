let Output_Screen=document.getElementById('input-box');

function Display(num){
    Output_Screen.value=Output_Screen.value+num;
}

function Calculate(){
    try{
        Output_Screen.value=eval(Output_Screen.value);
    }
    catch(err){
        alert('Operation is invalid');
    }
}

function Clear(){
    Output_Screen.value="";
}

function Del(){
    Output_Screen.value=Output_Screen.value.slice(0,-1);
}