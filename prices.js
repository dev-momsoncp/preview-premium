// =====================================================
// prices.js
// Injeta precos aleatorios (30-70$) ENTRE os botoes
// Buy Now e Free Folder (fora do botao, bem visivel,
// nao clicavel) - e inclui o preco na mensagem do Telegram.
//
// Le o utilizador do Telegram directamente de CONFIG.telegram
// (definido no app.js). Se mudares la, aplica-se aqui tambem
// automaticamente - nao precisas mudar nada neste ficheiro.
//
// Inclui DEPOIS do app.js no index.html:
//   <script src="app.js"></script>
//   <script src="prices.js"></script>
// =====================================================

(function () {
  'use strict';

  var PRICE_STEPS = [25, 30, 35, 40, 45];

  // guarda o preco de cada produto pelo titulo, para NAO
  // mudar sempre que o card e re-renderizado (ex: troca de idioma)
  var priceMap = {};

  function getPrice(title) {
    if (!priceMap[title]) {
      priceMap[title] = PRICE_STEPS[Math.floor(Math.random() * PRICE_STEPS.length)];
    }
    return priceMap[title];
  }

  function buildMessage(title, price) {
    return (
      'Hello, I want to purchase this folder:\n\n' +
      '\uD83D\uDCC2 Folder: "' + title + '"\n\n' +
      '\uD83D\uDCB5 Price: $' + price + '\n\n' +
      'Please guide me through the payment process.'
    );
  }

  // Le CONFIG.telegram directamente (a variavel do app.js,
  // nao window.CONFIG - const/let top-level nao vai para
  // window, mas fica acessivel como identificador global)
  function getTelegramUser() {
    try {
      if (typeof CONFIG !== 'undefined' && CONFIG.telegram) return CONFIG.telegram;
    } catch (e) { /* CONFIG nao existe ainda, usa fallback */ }
    return 'JuliaSeller62'; // fallback, so usado se CONFIG nao for encontrado
  }

  function injectPrices() {
    document.querySelectorAll('.product-card').forEach(function (card) {
      if (card._priceInjected) return;

      // remove o botao Free Folder de todos os cards
      var freeBtn = card.querySelector('.btn-free');
      if (freeBtn) freeBtn.remove();

      var actions = card.querySelector('.card-actions');
      var oldBtn  = actions ? actions.querySelector('.btn-buy') : null;
      if (!actions || !oldBtn) return;

      // marca ja para nao reprocessar (evita loop com o MutationObserver
      // quando inserimos o badge de preco mais abaixo)
      card._priceInjected = true;

      var titleEl = card.querySelector('.card-title');
      var title = titleEl ? titleEl.textContent.trim() : 'this folder';
      var price = getPrice(title);

      // clona o botao Buy para remover o listener original do app.js
      // (que abria a mensagem sem preco)
      var newBtn = oldBtn.cloneNode(true);
      oldBtn.parentNode.replaceChild(newBtn, oldBtn);

      newBtn.addEventListener('click', function () {
        var msg = buildMessage(title, price);
        var url = 'https://t.me/' + getTelegramUser() + '?text=' + encodeURIComponent(msg);
        window.open(url, '_blank');
      });

      // badge de preco FORA do botao, entre Buy Now e Free Folder,
      // nao clicavel, bem visivel
      var priceBadge = document.createElement('span');
      priceBadge.className = 'price-badge-external';
      priceBadge.textContent = '$' + price;
      priceBadge.style.pointerEvents = 'none';
      newBtn.insertAdjacentElement('afterend', priceBadge);
    });
  }

  // Observa o container e reaplica os precos sempre que
  // o app.js re-renderizar os cards (ex: troca de idioma)
  function observe() {
    injectPrices();
    var container = document.getElementById('products-container');
    if (!container || !window.MutationObserver) return;
    var observer = new MutationObserver(function () {
      injectPrices();
    });
    observer.observe(container, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }

  console.log('[prices.js] Carregado - precos visiveis entre os botoes.');
})();