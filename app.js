function clickAction() {
            let lblH1 = document.getElementById("h1Lbl");
            let inputText = document.getElementById("txtInput");
            let randomMsg = document.getElementById("randomMsg");

            lblH1.innerText = "Hello " + inputText.value;

            
            let rand = Math.floor(Math.random() * 5) + 1;

           
            randomMsg.innerText = "Your lucky number is: " + rand;
        }

       
        // document.getElementById("h1Lbl").append(" - Welcome Game!");
        // document.write("This will overwrite the whole page!");
