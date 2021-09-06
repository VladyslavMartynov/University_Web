
function Email()
{
  let check = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let myEmail = document.getElementById('Emails').value;
  let valid = check.test(myEmail);
  if(valid) { 
     document.getElementById('incorrectEm').innerHTML='Email is incorrect';
     incorrectEm.style.color = '#00ff00';
    }
  else 
  {  
     document.getElementById('incorrectEm').innerHTML='Email is incorrect';
    incorrectEm.style.color = 'red';
  }
  return valid;
}

function Phone() {
  let check = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  let myPhone = document.getElementById('phoneNumber').value;
  let valid = check.test(myPhone);
  if(valid)  
  {
     document.getElementById('incorrectph').innerHTML='All is ok with your phone number';
    incorrectph.style.color = '#00ff00';
        document.getElementById("button").disabled = false;
  }
  else if(isNaN(myPhone) || myPhone.length == "")
  { 
     document.getElementById('incorrectph').innerHTML='Smth bad with your phone num';
     incorrectph.style.color = 'red';
         document.getElementById("button").disabled = true;
        return false;
  }
  else
  {
     document.getElementById('incorrectph').innerHTML='Smth bad with your phone num';
     incorrectph.style.color = 'red';
         document.getElementById("button").disabled = true;
        return false;
  }

  return valid;
}

function MainButton()
{
    let res = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let Email = document.getElementById('Emails').value;
    let tempo= re.test(Emails);
    let phoneNumber = document.getElementById('phoneNumber').value;
    let temporary = res.test(phoneNumber);
   if (Email.length != 0 && phoneNumber.length != 0 && res.test(phoneNumber) && re.test(Email))
    {
        document.getElementById('button').disabled = false;
        button.style.background = '#ff00ff';
    } else 
    {
        document.getElementById('button').disabled = true;              
    }
}