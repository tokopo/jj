function get_calc(btn) {
  if(btn.value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
  } else if (btn.value == "C") {
    document.dentaku.display.value = "";
  } 
  else {
    if (btn.value == "×") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    } 
    document.dentaku.display.value += btn.value;
    document.dentaku.multi_btn.value = "×";
    document.dentaku.div_btn.value = "÷";
  }
}





function edit(elem) {

  if (document.dentaku.display.value.slice(-1) === '+' ){
  
  return;
  
  } else if (document.dentaku.display.value.slice(-1) === '-' ){
  
  return;
  
  } else if (document.dentaku.display.value.slice(-1) === '*' ){
  
  return;
  
  } else if (document.dentaku.display.value.slice(-1) === '/' ){
  
  return;
  
  } else {
  
  







