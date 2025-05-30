//aqui estamos recuperando nosso ID que esta no HTML
let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle");// adiciono uma class para arredondar o quadrado
    meuElemento.classList.remove("square");// removo uma class para arredondar a caixa
    }

    function tornarQuadrado(){
        meuElemento.classList.add ("square");
        meuElemento.classList.remove("circle");
    }


function altenarFormato(){
    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square");
}

//toggle é respomsavel por verificar o elemento atual (funciona como se fosse um vigia)





