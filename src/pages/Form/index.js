
    const inputs = document.querySelectorAll("input,select");
      for (var i = 0 ; i < inputs.length; i++) {
         inputs[i].addEventListener("keypress", function(e){
            if (e.which == 13) {
              e.preventDefault();
              var nextInput = document.querySelectorAll('[tabIndex="' + (this.tabIndex + 1) + '"]');
              if (nextInput.length === 0) {
                  nextInput = document.querySelectorAll('[tabIndex="1"]');
               }
               nextInput[0].focus();
            }
        })
      }


     const cep = document.querySelector("#cep")
     const showData = (result)=>{
         for(const campo in result){
            if(document.querySelector("#"+campo)){
                 document.querySelector("#"+campo).value = result[campo]
            }
        }

     }

    
    cep.addEventListener("blur",(e)=>{
          let search = cep.value.replace("-","")

         fetch(`http://localhost:3333/${search}`)
          .then(response =>{ response.json()
                .then( data => showData(data))

           }).catch(e => console.log('Deu Erro: '+ e,message))

       })
   const button = document.querySelector('#div_button');
   button.addEventListener("onclick", (e) => {
      alert.message("Cadastro realizado com sucesso")
   })
