/* 
  Relacionar cada imagem com a sua descrição. Para isso, vamos fazer um menu de navegação relacionando cada li com sua section de descrição
*/ 

/* Função para isolar o código */
function initTabNav()
{
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
}

initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  /* Programação defensiva: Só rodará o código abvaixo se houver elementos em accordionList */
  if (accordionList.length)
  {
    /* Adicionando a classe ativo no primeiro elemento para que quando o site seja carregado, o primeiro elemento esteja visível. */
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();