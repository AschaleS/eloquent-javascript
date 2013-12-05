function validInfo(form) {
  return form.elements.name.value != "" &&
    /^.+@.+\.\w{2,3}$/.test(form.elements.email.value);
}

show(validInfo(document.forms.userinfo));




userForm.elements.send.onclick = function() {
  
  if (validInfo(userForm))
    userForm.submit();
  
  else
    alert("Give us a name and a valid e-mail address!");
};


