var city_states = Object();

city_states["Alberta"] = "|Calgary|Edmonton|Medicine Hat";
city_states["British Columbia"] = "|Abbotsford|Burnaby|Coquitlam|Kelowna|Langley|North Vancouver |Richmond|Surrey|Vancouver";
city_states["Manitoba"] = "|Brandon|Steinbach|Thompson|Winnipeg";
city_states["New Brunswick"] = "|Dieppe|Fredericton|Moncton|Saint John";
city_states["Newfoundland/Labrador"] = "|Corner Brook|Conception Bay South|Mount Pearl|Paradise|St.John's";
city_states["Nova Scotia  "] = "|Amherst|Cape Breton|Halifax|Turo";
city_states["Northwest Territories"] = "|Inuvik|Yellowknife";
city_states["Nunavut"] = "|Iqaluit";
city_states["Ontario"] = "|Brampton|Hamilton|London|Mississauga|Ottawa|Toronto";
city_states["Prince Edward Island"] = "|Charlottetown|Summerside";
city_states["Quebec"] = "|Gatineua|Laval|Longueuil|Quebec|Montreal";
city_states["Saskatchewan"] = "|Moose Jaw|Regina|Saskatoon";
city_states["Yukon"] = "|Whitehorse";


function logIn(event)
{
    var test=true;
    //*****Email **************//
    
      var email = document.getElementById("loginemail").value;
      var emailpat = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/;
     if (email === "" || email.length === 0) //checks if empty
    {
        document.getElementById("loginemail").className="errorBorderLong";  //add red borders-and text
        document.getElementById("label-loginemail").style.color = "red";
        event.preventDefault();  
        test= false;
    }
    else
    {
        document.getElementById("loginemail").className =("sminputs");  //if fixed applies old style
        document.getElementById("invalid-loginemail").innerHTML = "";
        document.getElementById("label-loginemail").style.color = "#000";
    }
    
    if(!email.match(emailpat))
    {
        document.getElementById("loginemail").className="errorBorderLong";  //add red borders-and text
        document.getElementById("label-loginemail").style.color = "red";
        document.getElementById("invalid-loginemail").innerHTML = "Please enter valid email (example@example.com/ca)";
        event.preventDefault();  
        test= false;
    }
    if(email.length>256)
    {
        document.getElementById("loginemail").className="errorBorderLong";  //add red borders-and text
        document.getElementById("label-loginemail").style.color = "red";
        document.getElementById("invalid-loginemail").innerHTML = "Email address is too long)";
        event.preventDefault();  
        test= false;
    }
    var password = document.getElementById("loginpassword").value;
      if (password === "" || password.length === 0) //checks if empty
        {
            document.getElementById("loginpassword").className="errorBorder";  //add red borders-and text
            document.getElementById("label-loginpassword").style.color = "red";
            event.preventDefault();  
            test=false;
        }
}
function createAccount(event)
{
    var test=true;
    //*****First Name **************//
    
    var first = document.getElementById("firstName").value;
    
     if (first === "" || first.length === 0) //checks if empty
    {
        document.getElementById("firstName").className="errorBorder";  //add red borders-and text
        document.getElementById("label-firstName").style.color = "red";
        event.preventDefault();  
        test=false;
    }
    else if(first.length <2)
    {                       
        document.getElementById("firstName").className="errorBorder";  //add red borders-and text
        document.getElementById("label-firstName").style.color = "red";
        document.getElementById("label-firstName").innerHTML = "First Name* At Least 2 characters";
        document.getElementById("label-firstName").style.fontSize = "8px";
        event.preventDefault(); 
        test=false;
    }
    else if(first.length >50)
    {
        document.getElementById("firstName").className="errorBorder";  //add red borders-and text
        document.getElementById("label-firstName").style.color = "red";
        document.getElementById("label-firstName").innerHTML = "Can not be greater then 50 characters";
        document.getElementById("label-firstName").style.fontSize = "8px";        
        
        event.preventDefault();
        test=false;
    }
    else
    {
        document.getElementById("firstName").className =("sminput");  //if fixed applies old style
        document.getElementById("label-firstName").innerHTML = "First Name*";   
        document.getElementById("label-firstName").style.color = "#000";
        document.getElementById("label-firstName").style.fontSize = "12px"; 
    }
    
    //*****Last Name **************//
     var last = document.getElementById("lastName").value;

     if (last === "" || last.length === 0) //checks if empty
    {
        document.getElementById("lastName").className="errorBorder";  //add red borders-and text
         document.getElementById("label-lastName").style.color = "red";
        event.preventDefault();  
        test=false;
    }
    else if(last.length <2)
    {
       document.getElementById("lastName").className="errorBorder";  //add red borders-and text
        document.getElementById("label-lastName").style.color = "red";
        document.getElementById("label-lastName").innerHTML = "Last Name* At least 2 characters";
        document.getElementById("label-lastName").style.fontSize = "8px";   
    }
    else if(last.length >50)
    {
        document.getElementById("lastName").className="errorBorder";  //add red borders-and text
        document.getElementById("label-lastName").style.color = "red";
        document.getElementById("label-lastName").innerHTML = "Can not be greater then 50 characters";
        document.getElementById("label-lastName").style.fontSize = "8px";   
    }
    else
    {
        document.getElementById("lastName").className =("sminputs");  //if fixed applies old style
        document.getElementById("label-lastName").innerHTML = "Last Name*";    
        document.getElementById("label-lastName").style.color = "#000";
    }
    //*****Birthdate **************//
    var month = document.getElementById("months").value;
    var day = document.getElementById("days").value;
    var year = document.getElementById("years").value;
    
    var daypat =/([1-9]|[12]\d|3[01])/;
    var monthpat =/^(0?[1-9]|1[012])$/;
    var yearpat =/^\d{4}$/;
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31]; 
    if (month === "0" || day==="0" || year==="0") //checks if empty
    {
        document.getElementById("label-birthdate").style.color="red";
        event.preventDefault();  
        test=false;
    }
    else
    {
        if(month.match(monthpat) && day.match(daypat) && year.match(yearpat))
        {
                if (month===01 || month>02)  
                {  
                    if (day>ListofDays[month-1])  
                    {  
                        document.getElementById("label-birthdate").style.color="red";
                        document.getElementById("label-birthdate").innerHTML = "Invalid Date";  
                        test= false;  
                    }  
                }  
                if (month==="02")  
                {  
                    var lyear = false;  
                    if ( (!(year % 4) && year % 100) || !(year % 400))   
                    {  
                        lyear = true;  
                    }  
                    if ((lyear===false) && (day>=29))  
                    {  
                        document.getElementById("label-birthdate").style.color="red";
                        document.getElementById("label-birthdate").innerHTML = "Invalid Date";  
                        test= false;   
                    }  
                    if ((lyear===true) && (day>29))  
                    {  
                        document.getElementById("label-birthdate").style.color="red";
                        document.getElementById("label-birthdate").innerHTML = "Invalid Date";  
                        test= false;  
                    }  
                }  
            }  
            else  
            {  
                document.getElementById("label-birthdate").style.color="red";
                document.getElementById("label-birthdate").innerHTML = "Enter Date in proper dd/mm/yyyy";  
                test= false;  
            }   
        }
    //*****Email **************//
    
      var email = document.getElementById("email").value;
      var emailpat = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/;
     if (email === "" || email.length === 0) //checks if empty
    {
        document.getElementById("email").className="errorBorderLong";  //add red borders-and text
        document.getElementById("label-email").style.color = "red";
        event.preventDefault();  
        test= false;
    }
   
    else if(email.length>256)
    {
        document.getElementById("email").className="errorBorderLong";  //add red borders-and text
        document.getElementById("label-email").style.color = "red";
        document.getElementById("label-email").innerHTML = "Email address is too long)";
        event.preventDefault();  
        test= false;
    }
    
     else
    {
        document.getElementById("email").className =("sminputs");  //if fixed applies old style
        document.getElementById("label-email").innerHTML = "Email*";
        document.getElementById("label-email").style.color = "#000";
    }
    
      
   if(!email.match(emailpat))
    {
        document.getElementById("email").className="errorBorderLong";  //add red borders-and text
        document.getElementById("label-email").style.color = "red";
        document.getElementById("label-email").innerHTML = "Please enter valid email (example@example.com/ca)";
        event.preventDefault();  
        test= false;
    }
     else
    {
        document.getElementById("email").className =("sminputs");  //if fixed applies old style
        document.getElementById("label-email").innerHTML = "Email*";
        document.getElementById("label-email").style.color = "#000";
    }
    
    //*****Country **************//
    var country = document.getElementById("country").value;
     if (country === "00" || country==="") //checks if empty
    {
        document.getElementById("label-location").innerHTML = "Please enter your country";
        document.getElementById("label-location").style.color = "red";
        event.preventDefault();  
        test=false;
    }
    //*****Reigon **************//
     var reigon = document.getElementById("province").value;
     if (reigon === "00"||reigon==="") //checks if empty
    {
        document.getElementById("label-location").innerHTML = "Please enter your province";
        document.getElementById("label-location").style.color = "red";
        event.preventDefault();  
        test=false;
    }
    //*****City **************//
    var city = document.getElementById("city").value;
     if (city === "00"||city===""||city.length===0) //checks if empty
    {
        document.getElementById("label-location").innerHTML = "Please enter your city";
        document.getElementById("label-location").style.color = "red";
        event.preventDefault();  
        test=false;
    }
    
    //*****Passwords  **************//
    
      var password = document.getElementById("password").value;
      if (password === "" || password.length === 0) //checks if empty
        {
           document.getElementById("label-password").style.color = "red";
            event.preventDefault();  
            test=false;
        }
      
      var password2 = document.getElementById("passwordRepeat").value;
      if (password2 === "" || password2.length === 0) //checks if empty
        {
            document.getElementById("label-passwordRepeat").style.color = "red";            event.preventDefault();  
            test=false;
        }
    
       if(password !== password2)
       {
            document.getElementById("label-password").innerHTML = "Passwords Do Not Match";
            document.getElementById("label-password").style.color = "red";
        document.getElementById("label-password").style.fontSize = "10px";
            event.preventDefault();  
            test=false;
       }
       else
       {
           if(password.length >=96)
            {
                document.getElementById("label-password").innerHTML = "Max Length Has Been Reached"
                document.getElementById("label-password").style.color = "red";
                document.getElementById("label-password").style.fontSize = "10px";
                event.preventDefault();  
                test=false;
            }
            else
            {
                var score = scorePassword(password);
                if(score<60)
                {
                    document.getElementById("label-password").innerHTML =  "Password is not Strong Enough";
                    document.getElementById("label-password").style.color = "red";
                    document.getElementById("label-password").style.fontSize = "10px";
                    event.preventDefault();  
                    test=false;
                }
            }  
       }
}

function validateFirstName(event)
{
    var form = event.currentTarget.id;
    var name = "invalid-"+form;
    var label= "label-"+form;
    var first = event.currentTarget.value;
     if (first === "" || first.length === 0) //checks if empty
    {
        event.currentTarget.className="errorBorder";  //add red borders-and text
        document.getElementById(label).style.color = "red";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById(name).innerHTML = "";    
        document.getElementById(label).style.color = "#000";
    }
}
function validateLastName(event) //Level One
{
    var form = event.currentTarget.id;
    var name = "invalid-"+form;
    var label= "label-"+form;
    alert(label);
    var last = event.currentTarget.value;
     if (last === "" || last.length === 0) //checks if empty
    {
        event.currentTarget.className="errorBorder";  //add red borders-and text
        document.getElementById(label).style.color = "red";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById(name).innerHTML = "";
        document.getElementById(label).style.color = "#000";
    }
}

function validateMonth(event) //Level One
{
     var form = event.currentTarget.id;
     var name = "invalid-"+form.name;
     var label= "label-"+form;
     var month = event.currentTarget.value;
     if (month === "00") //checks if empty
    {
        event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById(name).innerHTML = "Please enter your birth month";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById(name).innerHTML = "";    
    }
}

function validateDay(event) //Level One
{
     var form = this;
     var name = "invalid-"+form.name;
     var day = event.currentTarget.value;
     if (day === "00") //checks if empty
    {
        event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById(name).innerHTML = "Please enter your birth month";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById(name).innerHTML = "";    
    }
}
function validateYear(event) //Level One
{
     var form = this;
     var name = "invalid-"+form.name;
     var year = event.currentTarget.value;
     if (year === "00") //checks if empty
    {
        event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById(name).innerHTML = "Please enter your birth year";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById(name).innerHTML = "";    
    }
}

function validateEmail(event) //Level One
{
    var email = event.currentTarget.value;
    var label= "label-"+event.currentTarget.id;
     if (email === "" || email.length === 0) //checks if empty
    {
        event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById(label).style.color = "red";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById("invalid-email").innerHTML = "";
        document.getElementById(label).style.color = "#000";
    }
}

function validateCountry(event) //Level One
{
     var form = this;
     var name= "invalid-"+form.name;
     var country = event.currentTarget.value;
     var select = document.getElementById("reigon");
     var i;
     var city_stateArr;
    
     if (country === "00") //checks if empty
    {
        event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById("invalid-locaton").style.color = "red";
        event.preventDefault();  
    }
    else 
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById(name).innerHTML = "";  
        
    }
}

function validateReigon(event) //for province selection
{
    var reigon = event.currentTarget.value;
    var country = event.currentTarget.value;
    var select = document.getElementById("city");
    var i;
     var city_stateArr;
     if (reigon === "" || reigon.length === 0 || reigon === "00") //checks if empty
    {
         event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById("invalid-locaton").style.color = "red";
        event.preventDefault();  
    }
    else
    {
        
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById("invalid-location").innerHTML = ""; 
         for(i=select.options.length-1;i>=0;i--)
        {
        select.remove(i);
        }
        
        select.options[select.options.length] = new Option("City", "00");
       city_stateArr = city_states[country].split("|");
        
       for (var i = 1; i <= city_stateArr.length; i++)
        {
            if(city_stateArr[i] !== "" || city_stateArr[i].length != 00)
            {
			     select.options[i] = new Option(city_stateArr[i],city_stateArr[i]);
            }
        }
        document.getElementById("city").addEventListener("blur", validateCity);
    }
}


function validateCity(event) //Level One
{
    var city = event.currentTarget.value;
     if (city === "" || city.length === 0) //checks if empty
    {
        event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById("invalid-locaton").style.color = "red";
        event.preventDefault();  
    }
    else
    {
        event.currentTarget.className =("sminputs");  //if fixed applies old style
        document.getElementById("invalid-location").innerHTML = "";    
    }
}

function scorePassword(pass) 
{
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) 
    {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = 
    {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) 
    {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

function passwordStrength(event) 
{
    var current = event.currentTarget.value;
    var score = scorePassword(current);
    var warning = document.getElementById("passwordStrength");
   
    if (score >= 100)
    {
        warning.className = "veryGood";
        warning.innerHTML ="";
        warning.innerHTML ="Very Strong";
        
    }
    else if (score >= 80)
    {
        warning.className = "veryGood";
        warning.innerHTML ="";
        warning.innerHTML ="Strong";
    }
    else if (score >= 60)
    {
        warning.className = "good";
        warning.innerHTML ="";
        warning.innerHTML ="Good";
    }
    else if (score >= 30)
    {
        warning.className = "weak";
        warning.innerHTML ="";
        warning.innerHTML ="Weak";
    }
    else if (score < 30)
    {
        warning.className = "weak";
        warning.innerHTML ="";
        warning.innerHTML ="Very Weak";
    }
    return "";
}

function validatePassword(event)
{
    var form = event.currentTarget.id;
    var name = "invalid-"+form;
    var label= "label-"+form;
    var password = event.currentTarget;
      if (password.value === "" || password.value.length === 0) //checks if empty
        {
             event.currentTarget.className="errorBorderLong";  //add red borders-and text
        document.getElementById(label).style.color = "red";
        event.preventDefault(); 
        }
        else
        {
            event.currentTarget.className =("sminputs");  //if fixed applies old style
            document.getElementById(label).innerHTML = "";    
        }
}
/**********************For Home Calendar Page**************/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
function addAppointment(event)
{
    var first = document.getElementById("appointmentName").value; //for appointment name
     if (first === "" || first.length === 0) //checks if empty
    {
        document.getElementById("label-appointmentName").style.color = "red";
        event.preventDefault();  
    }
    else if(first>60)
    {
        document.getElementById("label-appointmentName").style.color = "red";
        document.getElementById("label-appointmentName").innerHTML = "Name less then 60 characters";
        event.preventDefault();  
    }
    else
    {
       document.getElementById("label-appointmentName").innerHTML = "Appointment Title";
        document.getElementById("label-appointmentName").style.color = "#000";
    }
    
    //Appointment Description
     var first = document.getElementById("appointmentDetails").value; //for appointment name
    if(first>150)
    {
        document.getElementById("label-appointmentDetails").style.color = "red";
        document.getElementById("label-appointmentDetails").innerHTML = "Name less then 60 characters";
        event.preventDefault();  
    }
    else
    {
        document.getElementById("label-appointmentDetails").innerHTML = "Appointment Description";
        document.getElementById("label-appointmentDetails").style.color = "#000";
    }
    
    //Appointment start date
    var start =document.getElementById("start").value; //for appointment start date/time
    if(!start.match(/^(([0]?[1-9]|1[0-2])([0-2]?[0-9]|3[0-1])[1-2]d{3}) (20|21|22|23|[0-1]?d{1}):([0-5]?d{1})$/))
    {
        document.getElementById("label-start").style.color = "red";document.getElementById("label-start").innerHTML = "Enter valid date yyyy-mm-dd-hh-mm";
        event.preventDefault(); 
    }
    else
    {
        document.getElementById("label-start").innerHTML = "Start Date";
        document.getElementById("label-start").style.color = "#000";
    }
    
    //Appointment end date
    var end =document.getElementById("end").value; //for appointment end date/time
    if(!end.match(/^(([0]?[1-9]|1[0-2])([0-2]?[0-9]|3[0-1])[1-2]d{3}) (20|21|22|23|[0-1]?d{1}):([0-5]?d{1})$/))
    {
        document.getElementById("label-end").style.color = "red";document.getElementById("label-end").innerHTML = "Enter valid date yyyy-mm-dd-hh-mm";
        event.preventDefault(); 
    }
    else
    {
        document.getElementById("label-end").innerHTML = "End Date";
        document.getElementById("label-end").style.color = "#000";
    }
    
    /**********SEND DATE TO BACKEND********************************///
    /*********************************************************************
    ****************************************************************/
}

/**********************For Stylist Profile Page**************/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

function swapProfileInfo(event)
{
    var id = this.id;
    document.getElementById("p-lgm-1").className = "hide";
    document.getElementById("p-lgm-2").className =  "hide";
    document.getElementById("p-lgm-3").className =  "hide";
    document.getElementById("lgm-1").className = "unactive";
    document.getElementById("lgm-2").className = "unactive";
    document.getElementById("lgm-3").className = "unactive";
    document.getElementById(id).className = "active";
    document.getElementById("p-"+id).className = "stylemod_tab show";
}
function hoverProfilePic(event)
{
    document.getElementById("editProfilePic").style.display = "block";
    
}
function offhoverProfilePic(event)
{
    document.getElementById("editProfilePic").style.display = "none";
    
}
function editOverview(event)
{
    var place = document.getElementById("p-lgm-1");
    var text = place.textContent;
    place.innerHTML="";
    var r = document.createElement('span');
     r.setAttribute("id", "overviewForm__wrapper");
    var y = document.createElement("TEXTAREA");
    
      y.setAttribute("value", text);
    y.setAttribute("cols", "160");
    y.setAttribute("rows", "15");
    y.setAttribute("Name", "textelement_overview");
    y.setAttribute("id", "textelement_overview");
    r.appendChild(y);
  

   
    
     var z = document.createElement("BUTTON");
    z.setAttribute("type", "button");
    z.setAttribute("id", "overviewCancel");
    z.setAttribute("class", "sumbit");
    z.className="sumbit";
    var t = document.createTextNode("Cancel");       
    z.appendChild(t)
    r.appendChild(z);
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "submit");
    //x.setAttribute("", "submit");
    x.setAttribute("class", "sumbit");
    x.setAttribute("id", "overviewSubmit");
    x.className="sumbit";
    r.appendChild(x);
    place.appendChild(r);
    document.getElementById("textelement_overview").value= text;
    document.getElementById("overviewCancel").className= "cancel";
      document.getElementById("overviewSubmit").className= "save";
    document.getElementById("overviewCancel").addEventListener("click",closeEditOverview);
}

function closeEditOverview()
{
    document.getElementById("overviewForm__wrapper").style.display="none";
    
    //NEED TO MAKE AJAX CALL TO GET INFO PREVIOUSLY WRITTEN 
    
    
    
    
    
    
}

function editEducation(event)
{
    var place = document.getElementById("p-lgm-2");
    var text = place.textContent;
    place.innerHTML="";
    var r = document.createElement('span');
    r.setAttribute("Name", "educationForm__wrapper");
    r.setAttribute("id", "educationForm__wrapper");
    var y = document.createElement("TEXTAREA");
    
      y.setAttribute("value", text);
    y.setAttribute("cols", "160");
    y.setAttribute("rows", "15");
    y.setAttribute("Name", "textelement_education");
    y.setAttribute("id", "textelement_education");
    r.appendChild(y);
  
    
     var z = document.createElement("BUTTON");
    z.setAttribute("type", "button");
    z.setAttribute("id", "cancelEducation");
    //x.setAttribute("", "submit");
    z.setAttribute("class", "sumbit");
    z.className="sumbit";
    var t = document.createTextNode("Cancel");       
    z.appendChild(t)
    r.appendChild(z);
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "submit");
    //x.setAttribute("", "submit");
    x.setAttribute("class", "sumbit");
    x.setAttribute("id", "saveEducation");
    x.className="sumbit";
    r.appendChild(x);
    place.appendChild(r);
    document.getElementById("textelement_education").value= text;
     document.getElementById("cancelEducation").className= "cancel";
      document.getElementById("saveEducation").className= "save";
    document.getElementById("cancelEducation").addEventListener("click",closeEditEducation);
    
}

function closeEditEducation()
{
    document.getElementById("educationForm__wrapper").style.display="none";
    
    //NEED TO MAKE AJAX CALL TO GET INFO PREVIOUSLY WRITTEN 
    
    
    
    
    
    
}
function editGallery(event)
{
    var place = document.getElementById("addPhoto");
    var r = document.createElement('span');
     r.setAttribute("id", "galleryForm__wrapper");
    r.setAttribute("name", "gallleryForm__wrapper");
    var y = document.createElement("INPUT");
    
      y.setAttribute("type", "file");

    y.setAttribute("Name", "file_gallery");
    y.setAttribute("id", "file_gallery");
    r.appendChild(y);
  

   
     var z = document.createElement("BUTTON");
    z.setAttribute("type", "button");
    z.setAttribute("id", "cancelGallery");
    //x.setAttribute("", "submit");
    z.setAttribute("class", "sumbit");
    z.className="sumbit";
    var t = document.createTextNode("Cancel");       
    z.appendChild(t)
    r.appendChild(z);
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "submit");
    x.setAttribute("id", "saveGallery");
    //x.setAttribute("", "submit");
    x.setAttribute("class", "sumbit");
    x.className="sumbit";
    r.appendChild(x);
    place.appendChild(r);
    
    document.getElementById("cancelGallery").className= "cancel";
      document.getElementById("saveGallery").className= "save";
    
    document.getElementById("cancelGallery").addEventListener("click",closeEditGallery);
    
    var container;
    var items;
    var pics;
    container = document.getElementById("og-grid");
    items = container.getElementsByClassName("deletePhoto");
    pics = container.getElementsByTagName("li");
   alert(items.length);
    for (var j = 0; j < items.length; j++) 
    {
     items[j].style.display = "block";
     items[j].addEventListener("click", photoDelete);
    }
}
function closeEditGallery(event)
{
    document.getElementById("galleryForm__wrapper").style.display="none";
    var container;
    var items;
    var pics;
    container = document.getElementById("og-grid");
    items = container.getElementsByClassName("deletePhoto");
    pics = container.getElementsByTagName("li");
    alert(items.length);
    for (var j = 0; j < items.length; j++) 
    {
     items[j].style.display = "none";
     items[j].removeEventListener("click", photoDelete);
    }
}
function editProfilePic(event)
{
    var modal = document.getElementById("popup");
    modal.style.display = "block";
    var inner = document.getElementById("popup__content");
     var r = document.createElement('span');
    var y = document.createElement("INPUT");
    
      y.setAttribute("type", "file");

    y.setAttribute("Name", "file_profile");
    y.setAttribute("id", "file_profile");
    r.appendChild(y);
  

    r.setAttribute("id", "picForm__wrapper");
    r.setAttribute("id", "picForm__wrapper");
     var z = document.createElement("BUTTON");
    z.setAttribute("type", "button");
    z.setAttribute("id", "cancelProfilePic");
    //x.setAttribute("", "submit");
    z.setAttribute("class", "sumbit");
    z.className="sumbit";
    var t = document.createTextNode("Cancel");       
    z.appendChild(t)
    r.appendChild(z);
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "submit");
    x.setAttribute("id", "saveProfilePic");
    //x.setAttribute("", "submit");
    x.setAttribute("class", "sumbit");
    x.className="sumbit";
    r.appendChild(x);
    inner.appendChild(r);
    
    document.getElementById("cancelProfilePic").className= "cancel";
      document.getElementById("saveProfilePic").className= "save";
    
    document.getElementById("cancelProfilePic").addEventListener("click",closeEditProfilePic);  
    
}
function closeEditProfilePic(event)
{
     var modal = document.getElementById("popup");
     modal.style.display = "none";
}
function photoDelete(event)
{
    alert("helllo");
    parentDiv = event.currentTarget.parentNode;
    parentDiv.style.display="none";
    var arr = parentDiv.getElementsByTagName("a");
    alert(arr.length)
    arr.style.display="none";
    arr.src = "#";
    arr.href="#";
    
    //ADD JAVASCRIPT TO SEND SERVER WHICH PICTURE TO REMOVE FROM ACCOUNT
    
}
