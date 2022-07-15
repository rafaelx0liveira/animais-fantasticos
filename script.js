/* 
  Relacionar cada imagem com a sua descrição. Para isso, vamos fazer um menu de navegação relacionando cada li com sua section de descrição
*/ 

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabConteudo = document.querySelectorAll('.js-tabconteudo section');

/* Programação defensiva: Só rodará o código abvaixo se houver elementos em tabMenu e tabConteudo */
if(tabMenu.length && tabConteudo.length)
{
  /* Adicionando a classe ativo no primeiro elemento para que quando o site seja carregado, o primeiro elemento esteja visível. */
  tabConteudo[0].classList.add('ativo');
  
  /* 
    Ativar tab de acordo com o index. Para isso, adicionamos a classe 'ativo' na section de acordo com o index, e 
    removemos essa classe das outras sections
  */
  function activeTab(index){
    tabConteudo.forEach((section) => {
      section.classList.remove('ativo');
    })
    tabConteudo[index].classList.add('ativo');
  }
  
  /* Loop para cada tab li. De argumentos, temos o itemMenuu e o index, que se refere a cada posição da imagem. Para cada item é adicionado um evento de clique. E a partir desse evento, quando for clicado, vai ser acionada a função anônima para passar para a função activeTab o index da imagem  */
  tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
