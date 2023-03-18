function fSwitch(){
        const circle1 = document.querySelector(".circle1");
        const circle2 = document.querySelector(".circle2");
        const circle3 = document.querySelector(".circle3");
        if(getComputedStyle(circle1).getPropertyValue("background-color")==="rgb(255, 0, 0)"){
                circle1.style.backgroundColor ="gray";
                circle2.style.background='yellow';
                console.log(circle1.style.backgroundColor)
        }
        if(getComputedStyle(circle2).getPropertyValue("background-color")==="rgb(255, 255, 0)"){
                circle2.style.background='gray';
                circle3.style.background='green';
        }
        if(getComputedStyle(circle3).getPropertyValue("background-color")==="rgb(0, 128, 0)"){
                circle3.style.background='gray';
                circle1.style.background='red';
        }
}