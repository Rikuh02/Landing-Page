
//pega o botão selecione a plataforma
const btnplataforma = document.querySelector(".btn-plataforma");

//pega o conteudo que precisa ser monstrado
const elementoPlataforma =  document.querySelector(".btn-plataforma .plataforma");

//pega o click do ususario - paga a classe ativo e fazer aparecer
btnplataforma.addEventListener("click",()=>{

    //ativo desaparecer
    const botaoativo = elementoPlataforma.classList.contains("ativo");
  
    if(botaoativo){
        elementoPlataforma.classList.remove("ativo");
    }else {
        //ativo aparecer
        elementoPlataforma.classList.add("ativo");
    }

    //elementoPlataforma.classList.toggle("ativo");
})