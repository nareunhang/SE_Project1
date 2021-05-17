function fnCalCount(type, ths){
    var $input = $(ths).parents("div").find("input[name='amount']");
    var tCount = Number($input.val());
    
    if(type=='p'){
        if(tCount) $input.val(Number(tCount)+1);
        
    }else{
        if(tCount >1) $input.val(Number(tCount)-1);    
        }
}

function sum()  {
    const name = document.getElementById('num').value;
    document.getElementById("price1").innerText = (name * 3000);
  }

  function captureReturnKey(e) {
      if(e.keyCode==13 && SVGCircleElement.type != 'textarea')
      return false;
  }

  function price() {
      const name = document.getElementById("price1").value;
      document.getElementById("price2").innerText = name;
  }