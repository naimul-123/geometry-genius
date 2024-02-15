function calculateArea (type, id1, id2){
    const val1 = parseFloat(document.getElementById(id1).value);
    const val2 = parseFloat(document.getElementById(id2).value);
    if((type ==="triangle")|| (type === "rhombus") || (type === "pentagon")){
        area =0.5 * val1 * val2;
    }
    else if (type === "ellipse"){
        area = (val1 * val2 * Math.PI).toFixed(2);
    }

    else{
        area = val1 * val2; 
    }
    
    const li = document.createElement('li');
    li.innerText= `Area of the ${type}: ${area}`;
    document.getElementById("areaContainer").appendChild(li);
    document.getElementById(id1).value = '';
    document.getElementById(id2).value = '';

}

console.log(document.getElementById('para').value)