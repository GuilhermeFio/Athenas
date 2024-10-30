function classToggle() {
    const navs = document.querySelectorAll('.opcoes')
    
    navs.forEach(nav => nav.classList.toggle('Cabecalho__ToggleShow'));
  }
  
  document.querySelector('.Link-toggle')
    .addEventListener('click', classToggle);