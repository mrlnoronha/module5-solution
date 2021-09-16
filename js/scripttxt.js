

    function inname(){
        console.log(Event);
        var name =
        document.getElementById("name").value;
        var message = "<h2>Your name " + name + "!</h2>";
        document
        .getElementById("contentname")
        .innerHTML = message;
  
        

    }
    function inidade(){
        var idade =
        document.getElementById("idade").value;
        var message = "<h2>A Sua idade " + idade + "!</h2>";
        document
        .getElementById("contentage")
        .innerHTML = message;
    
        

    }
    function incountry(){
        var pais =
        document.getElementById("pais").value;
        var message = "<h2>Your country " + pais + "!</h2>";
        document
        .getElementById("contentcountry")
        .innerHTML = message;
        return pais;

    }
    function parasaber(){
        console.log(Event);
        var name = document.getElementById("name").value;
        var pais = document.getElementById("pais").value;
        var idade = document.getElementById("idade").value;
        var message = "<h2>" + name + " você é do " + pais + " ,com " + idade + 
        " anos, descobriu um novo amor, e o seu amor é o Márcio Noronha</h2>";
        
        if (name === "Thais"){
            document.getElementById("islove")
            .innerHTML = message;

        }
    }


