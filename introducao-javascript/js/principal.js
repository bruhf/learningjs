console.log("Fui carregado de um arquivo externo.");
var titulo = document.querySelector(".titulo"); //Função querySelector permite buscar pequenas partes do documento para alterar, não é muito bom procurar por tag ex "h1", mas sim por classes, ID ou por seletor CSS, no caso a .titulo pq o meu "h1" transformei em uma classe. //document (DOM, document JS) se trata do "arquivo" mestre do navegador e dentro dele está tudo referente ao HTML da página toda do site. Ele repesenta todo conteúdo da página. E ele que será  ponte entre o HTML e o JS.
titulo.textContent = "Aparecida Nutricionista"; //texcontent pega o texto da tag que a gente quer alterar e nela podemos manipular as palavras.