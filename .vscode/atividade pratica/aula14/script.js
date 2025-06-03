const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
//recuperando os elementos do html

function addTask() { //aqui estamos criando uma função para ser atribuida dentro do botão "adicionar"

    if(input.value !==  "" ){ //aqui informamos que se (if) input.value (valor do campo) for diferente (!==) de vazio (""), ele irá criar um elemento (createElement) de "li", o texto que possui é igual o input value , ou seja o valor do input que sera digitado.
        const li = document.createElement("li");
        //
        li.textContent = input.value;// traduzindo esta linha está recebendo a criação da LI declarada na linha 8, que será criada e o seu valor textual será de acordo com o valor (value) do input.


        const removerBotao = document.createElement("button"); // aqui estamos criando um botão(button) para remover esses itens de (li);

        removerBotao.textContent = "remover"; //chamamos nossas const "removerBotao" e atribuindo a ele um texto / nome chamado: "remover";

        removerBotao.onclick = function() {//criamos uma função que ao clicar neste botão ele ira executar uma função especifa
            ul.removeChild(li);// a função é pegar o elemento FILHO da ul, qie no caso é a "li" e remove-lo.
        };

        ul.appendChild(li);// estamos add um filho a nossa UL, quando clicar sobre ela 
        li.appendChild(removerBotao); // aqui chamamos nossa const "li" e estamos add a ela um filho (appendChild)

        input.value = ""; //usado para limpar o input , depois de add o item em questão.
    }else{
        alert("calma jovem, insiria uma tarefa!."); // caso o campo de input estiver vazio, ira aparece esta menssagem
    }

    }
