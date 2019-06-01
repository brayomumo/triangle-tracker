function tracker(){
    var sideA =parseInt(document.getElementById("sideA").value);
    var sideB = parseInt(document.getElementById("sideB").value);
    var sideC =parseInt(document.getElementById("sideC").value);

    var results=document.querySelector("#final");
    if(sideA <=0 || sideB<=0 || sideC <=0){
        results.innerHTML="values cannot be zero";
    }else if (sideA ==sideB && sideB==sideC) {
        results.innerHTML="Equilateral";
    }else if((sideA+sideB)<=sideC || (sideB+sideC)<=sideA || (sideA+sideC)<=sideB ){
            results.innerHTML= "cannot form a triangle"
    }else if((sideA==sideB && sideB!=sideC ) || (sideA!=sideB && sideC==sideA) || (sideC==sideB && sideC!=sideA)){
            results.innerHTML="isosceles";
    }else{
            results.innerHTML="scalene";
    }   
}
function refresh() {
    location.reload();
  }
