//getattiibute - Obter o valor do atributo (valor da linha)
//setAttribute - definir ou modificar o valor 

function changeImage() {
    const img = document.getElementById("myImage");
    //aqui conseguimos armazenar o conteudo da imagem 

    const currentSrc = img.getAttribute("src");
    //aqui pegamos o tributo SRC da imagem, responsavel pela alteração da img.


    if (currentSrc === "imagem/imagem01.png" ) {//se (if)a origem atual da imagem for igual a "imagem01.png"
        img.setAttribute("src", "imagem/imagem02.png");
        //usando a setAttribute vamos modificar o valor da src, especificanddi a outra imagem.
        img.setAttribute("alt","imagem desenho animado verde");
    
    } else {//se não, fazer o processo inverso basicamente 
    img.setAttribute("src", "imagem/imagem01.png");
    img.setAttribute("alt", "imagem desenho animado preto");    
    }

}

// if = se acondição for valida execute a algo
// else = caso contrario / se não 