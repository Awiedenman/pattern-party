const dropDownButton = document.querySelector('.search_bar--button')

const dropDown = event => {
  const linksContainer = document.querySelector('.search_links--container')

  linksContainer.classList.toggle('shown');
}

dropDownButton.addEventListener('click', dropDown)