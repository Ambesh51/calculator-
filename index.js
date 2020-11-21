function ADD(){
    let val1 =Number(document.calc.first.value);//anyvalue covert a number
    let val2= Number(document.calc.second.value);//anyvalue covert a number
    let c= val1+val2;
    document.calc.result.value=c;
    //console.log(document.calc.result.value);
    
}

function SUB(){
    let val1 =Number(document.calc.first.value);//anyvalue covert a number
    let val2= Number(document.calc.second.value);//anyvalue covert a number
    let c= val1-val2;
    document.calc.result.value=c;
    //console.log(document.calc.result.value);
}

function MUL(){
    let val1 =Number(document.calc.first.value);//anyvalue covert a number
    let val2= Number(document.calc.second.value);//anyvalue covert a number
    let c= val1*val2;
    document.calc.result.value=c;
    //console.log(document.calc.result.value);
}

function DIV(){
    let val1 =Number(document.calc.first.value);//anyvalue covert a number
    let val2= Number(document.calc.second.value);//anyvalue covert a number
    let c= val1/val2;
    document.calc.result.value=c;
    //console.log(document.calc.result.value);
}

function MOD(){
    let val1 =Number(document.calc.first.value);//anyvalue covert a number
    let val2= Number(document.calc.second.value);//anyvalue covert a number
    let c= val1%val2;
    document.calc.result.value=c;
  console.log(c);
}

function Clear(){
    document.calc.first.value="";//clear
    document.calc.second.value="";
    document.calc.result.value="";
    
}