let i = 0;
let j =0;
let k =0;
let wlcm = `Welcome!`; 
let lin1= "I am Saurabh Datta.";
let lin2= "Programmer | Developer | Writer | Leader";
let speed = 100; 
document.getElementById("welcome").innerHTML= null;
document.getElementById("line1").innerHTML=null;
document.getElementById("line2").innerHTML=null;
function typeWriter1() {
  if (i < wlcm.length) {
    document.getElementById("welcome").innerHTML += wlcm.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}

typeWriter1();

function typeWriter2() {
    if (j < lin1.length) {
      document.getElementById("line1").innerHTML += lin1.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  }

typeWriter2();


function typeWriter3() {
    if (k < lin2.length) {
      document.getElementById("line2").innerHTML += lin2.charAt(k);
      k++;
      setTimeout(typeWriter3, speed);
    }
  }

  typeWriter3();