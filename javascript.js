    var turn = "x"
    let gameover = false
    var move =0;
    function changeturn()
    {
        return turn === "x"?"0":"x"
    }
    function checkwin()
    {
        let boxtext = document.getElementsByClassName("info");
        let wins = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]        
        wins.forEach((e)=>{
            if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!=='')
            {
                document.querySelector(".turn").innerText=boxtext[e[0]].innerText + " won the game🎉";
                gameover = true;
            }
        })

    }
    function reset()
   {
    document.querySelector(".reset").addEventListener('click',()=>
        {
            let boxtexts = document.querySelectorAll(".info");
            Array.from(boxtexts).forEach((e)=>
            {
                e.innerText="";
            })
            gameover = false
            turn="x";
            move=0;
            document.querySelector(".turn").innerText="Turn for " + turn;
        }) 
   }
    
    document.querySelector(".turn").innerText="Turn for "+ turn;
    let boxes = document.querySelectorAll(".box")
    Array.from(boxes).forEach((e)=>
    {
        let boxtext = e.querySelector(".info")
        e.addEventListener('click',()=>
        {
            if(boxtext.innerText==='')
            { 
                boxtext.innerText=turn;
                checkwin();
                move++;
                console.log(move);
                
                if(!gameover)
                {
                     if (move==9)
                        {
                        let boxtexts = document.querySelectorAll(".info");
                        document.querySelector(".turn").innerText="draw match"
                        setTimeout(() => {
                        Array.from(boxtexts).forEach((e)=>
                            {
                               e.innerText="";
                               document.querySelector(".turn").innerText="turn for "+ turn;
                            })
                          }, 2000); 
                          turn="x";
                          gameover = false;
                          move=0;
                        }
                    else{
                        turn=changeturn();
                        document.querySelector(".turn").innerText="Turn for "+ turn;
                    }    
                       
                }
            }
            
        })
    })
   function autoReset(){
    Array.from(boxes).forEach((e)=>{
        if(move==9)
            {
                 let boxtext=document.querySelector(".info");
                 Array.from(boxtext).forEach((e)=>
                 {
                     e.innerText="";
                 })
                 gameover=false;
                 turn="x";
            }
    })
   }
    

    