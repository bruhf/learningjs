console.log("Fui carregado de um arquivo externo.");
var titulo = document.querySelector(".titulo"); //Função querySelector permite buscar pequenas partes do documento para alterar, não é muito bom procurar por tag ex "h1", mas sim por classes, ID ou por seletor CSS, no caso a .titulo pq o meu "h1" transformei em uma classe. //document (DOM, document JS) se trata do "arquivo" mestre do navegador e dentro dele está tudo referente ao HTML da página toda do site. Ele repesenta todo conteúdo da página. E ele que será  ponte entre o HTML e o JS.
titulo.textContent = "Aparecida Nutricionista"; //texcontent pega o texto da tag que a gente quer alterar e nela podemos manipular as palavras.

var paciente = document.querySelector("#primeiro-paciente"); //criei uma variavel paciente que vai ter a função de dentro do meu document procurar a ID do primeiro paciente.
var tdPeso = paciente.querySelector(".info-peso"); // criei a variavel tdPeso pra dentro da minha variavel paciente ele procurar pela td info-peso pra trazer essa informação. 

var peso = tdPeso.textContent; //criei a variavel peso pra que ela buscasse somente o valor em texto da variavel tdPeso

console.log(paciente);//apresenta td (paciente)
console.log(tdPeso);//tag peso
console.log(peso);//100

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(tdAltura);
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");

var pesoevalido = true;
var alturaevalida = true;

if (peso < 0 || peso > 1000){
    alert("Peso Inválido!);
    pesoevalido = false;
}
if (altura < 0 || altura > 3.00){
    alert("Altura Inválida!);
    alturaevalida = false;
}
if (pesoevalido && alturaevalida){
    var imc = peso / (altura * altura);
    tdImc.textContent = ímc;
}


