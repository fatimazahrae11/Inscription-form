document.getElementById('btn').addEventListener('click', function(a)
{
    a.preventDefault();
    if(validateName()===false && validateEmail()===false && gender()===false && validateNumber()===false  && selection()===false)
    {
        document.getElementById('recheck').innerHTML="Please fill out the form";
    }
    else
    {
      document.getElementById('recheck').innerHTML="";
    window.open("./confirmation.html","_self");
    }
})

    
function validateName()
{
    var name = document.getElementById("name").value;
    var output = document.getElementById("output");

    if( name.length <= 30 && name.length>0 )
    {
        output.innerHTML=""; 
    }
    else
    {
        output.innerHTML = 'Please insert a valid name';
        output.style.color= "ff0000";
         return false;
    }    
}

function validateEmail()
{
    var email = document.getElementById("email");
    var output = document.getElementById("output2");

    if( email.value.match(/[A-z]\.[a-z]*[@][ofppt]*\.[a-z]/) )
    {
        output.innerHTML="";
    }
    else
    {
        output.innerHTML = 'Oops! your email is invalid';
        output.style.color= "ff0000";
        email.style.color= "ff0000";
        return false;
    }
}

function validateNumber()
{
    var num = document.getElementById("number");
    var output = document.getElementById("output3");  

    if( num.value.match(/(06)\d{8}$|(05)\d{8}$|(07)\d{8}$/) )
    {
        output.innerHTML="";
    }
    else
    {
        output.innerHTML = 'Oops! your number is invalid';
        output.style.color= "ff0000";
        num.style.color= "ff0000";
        return false;
    }
}

function gender()
{
    var rdb1 = document.getElementById("mal").value;
    var rdb2 = document.getElementById("fem").value;
    var output = document.getElementById("output4");

    if(rdb1.checked == true)
    {
        output.innerHTML="";
    }
    else if(rdb2.checked ==  true)
    {
        output.innerHTML="";
    }
    else
    {
        output.innerHTML = 'Please select an option!';
        output.style.color= "#f41919";
        return false;
    }   
}


function group()
{
    var grp = document.getElementsByName("opt").value;
    var output = document.getElementById("output5");
    
    if(grp.selected==true)
    {
        output.innerHTML="";
    }
    else
    {
        output.innerHTML='Please select your group!';
        output.style.color= "#ff0000";
        return false;
    }
}


function selection()
{
var input = document.getElementsByName("check");
var select = 0;
var count;
var output = document.getElementById("output6");

for(count=0; count <input.length; count++)
{
    if(input[count].checked==true)
    {
    select+= 1;
    }
}
if(select > 3)
{
    output.innerHTML='Please select 3 clubs only!';
    output.style.color="#ff0000"
    return false;
}
}