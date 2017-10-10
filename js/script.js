function timer(){

                var objS=document.getElementById('second');
                var objM=document.getElementById('minute');
                var objH=document.getElementById('hour');
                var objD=document.getElementById('day');


                objS.innerHTML--;

                if(objS.innerHTML==-1){objS.innerHTML = 59; objM.innerHTML-- ;
                    if (objM.innerHTML==-1){objM.innerHTML=59 ; objH.innerHTML--;
                       if (objH.innerHTML==-1){objH.innerHTML=23; objD.innerHTML--;
                         if (objD.innerHTML==-1){alert("Let's get ready to rumble!!!!!")
                         }
                       }
                    }setTimeout(timer,1000)
                }

                else{setTimeout(timer,1000);}

            }

            setTimeout(timer,1000);

/*function buttonClick(){
    let button = document.getElementsByClassName("toBook");
    var i=2;
    [].forEach.call(button,function (el) {
        el.addEventListener("mousedown" , function () {
         if((i%2)!=0){   this.style.borderRight = "1px solid orange";}
         else {   this.style.borderRight = "none";}
         i++ ;

    });

    });
}
buttonClick();*/


//$( "block1" ).replaceWith( "<h2>New heading</h2>" );

