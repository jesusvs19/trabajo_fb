let cuentas;
cuentas=[
    ["Jesús","jesus.19@gmail.com","lagalaxia123"],
    ["Julio","julio.14@gmail.com","solofree123"],
    ["Andrea","andrea.18@gmail.com","comida123"],
    ["Hilton","hilton.13@gmail.com","pilas123"],
    ["José","jose.24@gmail.com","uchiha123"]
]
 
let email= document.getElementById("correo")
let password =document.getElementById("contrasena")

function entrar(){
    
    
    for(let i=0; i < cuentas.length;i++){
        if(email.value==cuentas[i][1] && password.value==cuentas[i][2])
        {
            alert("Bienvenido "+cuentas[i][0])
            break
        }
    }
}
let boton_entrar=document.getElementById("boton-entrar");
boton_entrar.addEventListener("click",entrar)