function changeRecommendation(option) {
    let recommendationText = '';
    let buttonLink = '';
  
    switch(option) {
      case 'opcao1':
        recommendationText = 'Você selecionou JavaScript!';
        buttonLink = 'paginas/js.html';
        break;
      case 'opcao2':
        recommendationText = 'Você selecionou Servidor http!';
        buttonLink = 'paginas/servidor_http.html';
        break;
      case 'opcao3':
        recommendationText = 'Você selecionou Docker!';
        buttonLink = 'paginas/docker.html';
        break;
      default:
        recommendationText = 'Escolha uma opção para recomendação.';
        buttonLink = '#';
    }
  
    document.querySelector('#recommendation p').textContent = recommendationText;
  
    document.querySelector('#recommendationButton').setAttribute('onclick', `window.location.href='${buttonLink}'`);
  }

  