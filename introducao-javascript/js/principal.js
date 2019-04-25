console.log("Fui carregado de um arquivo externo.");
var titulo = document.querySelector(".titulo"); //Função querySelector permite buscar pequenas partes do documento para alterar, não é muito bom procurar por tag ex "h1", mas sim por classes, ID ou por seletor CSS, no caso a .titulo pq o meu "h1" transformei em uma classe. //document (DOM, document JS) se trata do "arquivo" mestre do navegador e dentro dele está tudo referente ao HTML da página toda do site. Ele repesenta todo conteúdo da página. E ele que será  ponte entre o HTML e o JS.
titulo.textContent = "Aparecida Nutricionista"; //texcontent pega o texto da tag que a gente quer alterar e nela podemos manipular as palavras.

var pacientes = document.querySelectorAll(".paciente"); //criei uma variavel paciente que vai ter a função de dentro do meu document procurar a ID do primeiro paciente. Pra procurar ID usa #, classes é .

for (var i = 0; i < pacientes.length; i++){ //length é a propriedade que ja tem a informação de quantos objetos tenho dentro de um array
       
        var paciente = pacientes[i];
    
        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;
    
        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;
    
        var tdImc = paciente.querySelector(".info-imc");
    
        var pesoEhValido = true;
        var alturaEhValida = true;
    
        if (peso <= 0 || peso >= 1000) {
            console.log("Peso inválido!");
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido"); //posso usar paciente.style.color ou .style.backgroundColor (quando queremos modificar um estilo com duas palavras, o hífen (-) não é aceito pela linguagem JavaScript. Teremos que utilizar o padrão Camel Case - no qual as palavras compostas ou frases são iniciadas com maiúsculas e unidas sem espaços), fontSize, enfim, altera o estilo do que eu quero porém, não é uma boa pratica alterar no codigo js, enão criamos uma classe no CSS chamada paciente-invalido e aplicamos.
        }
    
        if (altura <= 0 || altura >= 3.00) {
            console.log("Altura inválida!");
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido"); //teremos a classList para acessarmos as classes. E usando o método add, adicionaremos a classe desejada, no caso, paciente-invalido.
        }
    
      if (alturaEhValida && pesoEhValido) {
            var imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2); //tofixed fica a quantidade de casas decimais que quero exibir.
        }
    }

console.log(paciente);//apresenta td (paciente)
console.log(tdPeso);//tag peso
console.log(peso);//100




