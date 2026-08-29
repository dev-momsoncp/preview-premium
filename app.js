// =====================================================
// EXCLUSIVE SHOP — app.js v3 (BLINDADO)
// =====================================================

// =====================================================
// CONFIGURAÇÃO ÚNICA E EXCLUSIVA
// =====================================================
// ESTA É A ÚNICA CONFIGURAÇÃO QUE O BOT USA
// QUALQUER OUTRO SCRIPT QUE TENTE ALTERAR É IGNORADO

const CONFIG = {
  telegram : "wendyxrrr",
  zangi    : "6970835383",
  zangiUrl : "https://services.zangi.com/dl/conversation/6970835383",
};

// BLOQUEIA ALTERAÇÕES EXTERNAS
Object.freeze(CONFIG);

// SOBRESCREVE QUALQUER CONFIG EXISTENTE NO WINDOW
window.CONFIG = CONFIG;

// SE EXISTIR DMCONFIG, SOBRESCREVE TAMBÉM
if (window.DMCONFIG) {
  window.DMCONFIG.telegram = CONFIG.telegram;
}

// URLS FIXAS
const TG_URL    = `https://t.me/${CONFIG.telegram}`;
const ZANGI_URL = CONFIG.zangiUrl;

// CONGELA AS URLS PARA NINGUÉM ALTERAR
Object.freeze(TG_URL);
Object.freeze(ZANGI_URL);

console.log('🔒 CONFIGURAÇÃO BLOQUEADA:');
console.log(`   👤 Telegram: @${CONFIG.telegram}`);
console.log(`   🔗 URL: ${TG_URL}`);
console.log(`   ⚡ Zangi: ${ZANGI_URL}`);

// =====================================================
// FUNÇÕES TELEGRAM - USAM SEMPRE O CONFIG ACIMA
// =====================================================

// Função principal - NUNCA usa outro Telegram
function tgOpen(msg) {
  const url = `${TG_URL}?text=${encodeURIComponent(msg)}`;
  console.log('📤 Abrindo Telegram:', url);
  window.open(url, "_blank");
}

// Mensagem personalizada com o título do produto
function openTelegramProduct(title) {
  tgOpen(
    `Hello, I want to purchase this folder:\n\n` +
    `📂 Folder: "${title}"\n\n` +
    `Please guide me through the payment process.`
  );
}

function sendCustomFolder() {
  const val = document.getElementById("custom-folder-text").value.trim();
  if (!val) { alert("Please describe the folder and your price offer."); return; }
  tgOpen(
    `Hello, I would like to negotiate a custom folder.\n\n` +
    `📂 Request Details:\n${val}\n\n` +
    `Please let me know if this is possible.`
  );
}

function sendVipRequest() {
  const val = document.getElementById("vip-group-text").value.trim();
  if (!val) { alert("Please enter the VIP group name."); return; }
  tgOpen(
    `Hello, I am interested in joining a VIP group.\n\n` +
    `💎 VIP Group Name: ${val}\n\n` +
    `Please send me the payment details.`
  );
}

// =====================================================
// EXPORTA FUNÇÕES PARA O GLOBAL (COM BLOQUEIO)
// =====================================================

// Sobrescreve qualquer função existente
window.tgOpen = tgOpen;
window.openTelegramProduct = openTelegramProduct;
window.sendCustomFolder = sendCustomFolder;
window.sendVipRequest = sendVipRequest;

// Bloqueia para ninguém alterar
Object.freeze(window.tgOpen);
Object.freeze(window.openTelegramProduct);
Object.freeze(window.sendCustomFolder);
Object.freeze(window.sendVipRequest);

// =====================================================
// PRODUCTS
// =====================================================
const products = [
  {
    title: "RAPE TEENS HD",
    video: "https://dev-bitly-stripe-cxpppp.pantheonsite.io/wp-content/uploads/2026/08/IMG_3546.mp4",
    desc: "* MORE THAN 409 VIDEOS 7.5GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1694,
  },

  {
    title: "🔥FULL CP GAY 🥵",
    video: "https://files.catbox.moe/l0knrj.mp4",
    desc: "* MORE THAN 600 VIDEOS 15GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["10GB+", "NOVO", "EXCLUSIVO"],
    badges: [{ label: "🚀 TRENDING", cls: "hot" }, { label: "✅ VERIFIED", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 2259,
  },

  {
    title: "TEENS 13-17",
    video: "https://dev-bitly-terra-cpppp.pantheonsite.io/wp-content/uploads/2026/08/cWfA3.mp4",
    desc: "* MORE THAN 320 VIDEOS 10GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["5GB+", "TRENDING", "FRESH"],
    badges: [{ label: "⚡ INSTANT", cls: "new" }, { label: "🏆 BEST VALUE", cls: "bestseller" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1846,
  },

  {
    title: "🔥FULL CP",
    video: "https://files.catbox.moe/4d4am8.mp4",
    desc: "* 🔥 PREMIUM CONTENT BUNDLE 🔥",
    chips: ["12GB+", "FEATURED", "BEST"],
    badges: [{ label: "💎 VIP", cls: "premium" }, { label: "🚀 NEW DROP", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1981,
  },

  {
    title: "NEW PREMIUM CP",
    video: "https://dev-bitly-stripe-cxpppp.pantheonsite.io/wp-content/uploads/2026/08/jbjfj9.mp4",
    desc: "* CP NEW PREMIUM",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1618,
  },

  {
    title: "DESIREE GARCIA",
    video: "https://files.catbox.moe/wf2dw9.mp4",
    desc: "* MORE THAN 200 VIDEOS 5.2GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["10GB+", "NOVO", "EXCLUSIVO"],
    badges: [{ label: "🚀 TRENDING", cls: "hot" }, { label: "✅ VERIFIED", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 2208,
  },

  {
    title: "HOT CP",
    video: "https://dev-cp-promo-click.pantheonsite.io/wp-content/uploads/2026/06/HMM-Lea-and-Rona-Xmas-1.mp4",
    desc: "* 🔥 MORE THAN 250 VIDEOS! 🔥 📁 6.59GB of exclusive content ✅ Complete and well-organized folder 💎 Premium quality content 🎬 Instant access for the best experience!",
    chips: ["5GB+", "TRENDING", "FRESH"],
    badges: [{ label: "⚡ INSTANT", cls: "new" }, { label: "🏆 BEST VALUE", cls: "bestseller" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 2001,
  },

  {
    title: "EXCLUSIVE CP",
    video: "https://files.catbox.moe/5cmcqx.mp4",
    desc: "* MORE THAN 400 VIDEOS 6GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["8GB+", "VERIFIED", "INSTANT"],
    badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1293,
  },

  {
    title: "CP PARADISE",
    video: "https://dev-bitly-stripe-cxpppp.pantheonsite.io/wp-content/uploads/2026/08/paradise1.mp4",
    desc: "* MORE THAN 203 Videos 2GB IN TOTAL",
    chips: ["25GB+", "VIP", "POPULAR"],
    badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 939,
  },

  {
    title: "BOYS",
    video: "https://files.catbox.moe/y3yfx7.mp4",
    desc: "* MORE THAN 500 VIDEOS 8.25GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["15GB+", "PREMIUM", "VIP"],
    badges: [{ label: "⭐ TOP SELLER", cls: "bestseller" }, { label: "💎 PREMIUM", cls: "premium" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 818,
  },

  {
    title: "BLACK CP",
    video: "https://dev-cp-promo-click.pantheonsite.io/wp-content/uploads/2026/06/VID_20260515_101919_501.mp4",
    desc: "* MORE THAN 700 VIDEOS 8GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["20GB+", "TOP", "2026"],
    badges: [{ label: "💥 EXCLUSIVE", cls: "hot" }, { label: "🔑 VIP", cls: "premium" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1131,
  },

  {
    title: "🔥MIX TEENS",
    video: "https://files.catbox.moe/4ugkm1.mp4",
    desc: "* MORE THAN 200+ VIDEOS 5.5GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["8GB+", "VERIFIED", "INSTANT"],
    badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1318,
  },

  {
    title: "✅C#P IND COLLETION🔥",
    video: "https://files.catbox.moe/loetp6.mp4",
    desc: "* Premium quality content<br>* Instant access for the best experience!<br>* Well-organized files",
    chips: ["25GB+", "VIP", "POPULAR"],
    badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 2246,
  },

  {
    title: "INCEST LIZZY AND BRO",
    video: "https://files.catbox.moe/w8nsn0.mp4",
    desc: "* Premium quality content<br>* Instant access for the best experience!<br>* Well-organized files",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 608,
  },

  {
    title: "AMERICAN TEENS",
    video: "https://files.catbox.moe/fd94bm.mp4",
    desc: "* MORE THAN 279 VIDEOS 8.5GB IN TOTAL MY COMPLETE FOLDER",
    chips: ["15GB+", "PREMIUM", "VIP"],
    badges: [{ label: "⭐ TOP SELLER", cls: "bestseller" }, { label: "💎 PREMIUM", cls: "premium" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1150,
  },

  {
    title: "PREMIUM CP - PEDO MOM",
    video: "https://files.catbox.moe/btp4bv.mp4",
    desc: "* PREMIUM CP PEDOM",
    chips: ["20GB+", "TOP", "2026"],
    badges: [{ label: "💥 EXCLUSIVE", cls: "hot" }, { label: "🔑 VIP", cls: "premium" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1804,
  },

  {
    title: "MOM AND SON CP🔥",
    video: "https://files.catbox.moe/ld25nz.mp4",
    desc: "* MOM AND SON CP AVAILABLE",
    chips: ["8GB+", "VERIFIED", "INSTANT"],
    badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 2302,
  },

  {
    title: "FATHER AND DAUGHTER CP",
    video: "https://dev-bitly-stripe-cxpppp.pantheonsite.io/wp-content/uploads/2026/08/father1.mp4",
    desc: "* FATHER AND DAUGHTER",
    chips: ["25GB+", "VIP", "POPULAR"],
    badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 790,
  },

  {
    title: "🔥C#P 9-13 PEDO FATHER🔥",
    video: "https://dev-cp-promo-click.pantheonsite.io/wp-content/uploads/2026/06/VID_20260424_142458_211-1.mp4",
    desc: "* MORE THAN 100 VIDEOS",
    chips: ["15GB+", "PREMIUM", "VIP"],
    badges: [{ label: "⭐ TOP SELLER", cls: "bestseller" }, { label: "💎 PREMIUM", cls: "premium" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1240,
  },

  {
    title: "🔥C#P BRO AND SIS🔥",
    video: "https://files.catbox.moe/cqqy24.mp4",
    desc: "* SIS AND BRO",
    chips: ["20GB+", "TOP", "2026"],
    badges: [{ label: "💥 EXCLUSIVE", cls: "hot" }, { label: "🔑 VIP", cls: "premium" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1299,
  },

  {
    title: "✅AMELIA BLONDE🔥",
    video: "https://files.catbox.moe/ddpfmo.mp4",
    desc: "* Amelia Teen Leaks",
    chips: ["5GB+", "TRENDING", "FRESH"],
    badges: [{ label: "⚡ INSTANT", cls: "new" }, { label: "🏆 BEST VALUE", cls: "bestseller" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1346,
  },

  {
    title: "HIGH SCHOOL THOTS🔥",
    video: "https://files.catbox.moe/gvt7hf.mov",
    desc: "* Premium quality content<br>* Instant access for the best experience!<br>* Well-organized files",
    chips: ["8GB+", "VERIFIED", "INSTANT"],
    badges: [{ label: "🌟 FEATURED", cls: "premium" }, { label: "🔥 HOT", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1715,
  },

  {
    title: "T33NS LEAKS FOLDER📁",
    video: "https://files.catbox.moe/sbivmg.mp4",
    desc: "* 5GB IN TOTAL",
    chips: ["25GB+", "VIP", "POPULAR"],
    badges: [{ label: "🎯 POPULAR", cls: "bestseller" }, { label: "⚡ FAST", cls: "hot" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 437,
  },

  {
    title: "🔥ENGLISH TEENS🥵",
    video: "https://files.catbox.moe/w48saq.mp4",
    desc: "* OVER 500 VIDEOS 5.19GB IN TOTAL MORE THAN 200 BLACKMAIL VIDEOS Incest MY COMPLETE FOLDER",
    chips: ["7GB+", "HOT", "2025"],
    badges: [{ label: "🔥 HOT", cls: "hot" }, { label: "NEW", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 1617,
  },

  {
    title: "ALL CONTENT+VIP GROUP",
    video: "https://dev-bitly-stripe-cxpppp.pantheonsite.io/wp-content/uploads/2026/08/VIP-CHANNEL-1536x864-1.jpg",
    desc: "* MORE THAN 6TB OF MEGA FOLDER",
    chips: ["10GB+", "NOVO", "EXCLUSIVO"],
    badges: [{ label: "🚀 TRENDING", cls: "hot" }, { label: "✅ VERIFIED", cls: "new" }],
    proof: ["/proof/1.jpg", "/proof/2.jpg", "/proof/3.jpg"],
    proofCaption: "Sales proof",
    freeLink: "",
    views: 2042,
  }
];

// =====================================================
// BUYERS
// =====================================================
const buyers = [
  { name: "Lucas R.",   product: "Mentoria 2025", location: "São Paulo, BR" },
  { name: "Emma T.",    product: "Mentoria VIP",  location: "London, UK" },
  { name: "Michael B.", product: "Custom Pack",   location: "New York, US" },
  { name: "Sarah J.",   product: "VIP Access",    location: "Toronto, CA" },
  { name: "Ana M.",     product: "Mentoria 2025", location: "Lisboa, PT" },
  { name: "João F.",    product: "Pack Premium",  location: "Porto, PT" },
  { name: "Carlos S.",  product: "Mentoria 2025", location: "Rio de Janeiro, BR" },
  { name: "Mia K.",     product: "VIP Folder",    location: "Berlin, DE" },
];

// =====================================================
// i18n
// =====================================================
let currentLang = "en";

const i18n = {
  en: {
    featured_label       : "FEATURED",
    featured_title       : "Featured Videos",
    more_options         : "More Options",
    custom_folder_title  : "Custom Folder Request",
    custom_folder_desc   : "Describe what you are looking for and your budget.",
    custom_folder_ph     : "Example: I need niche X, approx 5GB. Budget $20...",
    vip_title            : "Join VIP Group",
    vip_desc             : "Enter the specific VIP group name you want to join.",
    vip_ph               : "Group Name...",
    send_request         : "Send Request",
    join_now             : "Join Now",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Premium digital content. Instant delivery.",
    contact              : "Contact",
    quick_links          : "Quick Links",
    back_top             : "↑ Back to Top",
    products             : "Products",
    buy_now              : "Buy Now",
    free_folder          : "Free Folder",
    show_less            : "Show less",
    show_more            : "Show more",
    views_live           : "watching",
    playing              : "Playing",
    free_available_title : "Free Folder Available!",
    free_available_desc  : "Access the free folder now",
    free_access_btn      : "🚀 Access Free Folder",
    free_unavail_title   : "Free Folder Not Available",
    free_unavail_desc    : "This product has no free folder. Contact us for access.",
    contact_telegram     : "Telegram Support",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 OFFICIAL & UNIQUE PAGE — YOUR PRIVACY IS FULLY PROTECTED",
  },
  pt: {
    featured_label       : "DESTACADOS",
    featured_title       : "Vídeos Destacados",
    more_options         : "Mais Opções",
    custom_folder_title  : "Pedido de Pasta Personalizada",
    custom_folder_desc   : "Descreve o que procuras e o teu orçamento.",
    custom_folder_ph     : "Exemplo: Preciso de nicho X, aprox 5GB. Orçamento $20...",
    vip_title            : "Entrar no Grupo VIP",
    vip_desc             : "Escreve o nome do grupo VIP que desejas entrar.",
    vip_ph               : "Nome do Grupo...",
    send_request         : "Enviar Pedido",
    join_now             : "Entrar Agora",
    telegram             : "Telegram",
    zangi                : "Zangi",
    footer_tagline       : "Conteúdo digital premium. Entrega imediata.",
    contact              : "Contacto",
    quick_links          : "Links Rápidos",
    back_top             : "↑ Voltar ao Topo",
    products             : "Produtos",
    buy_now              : "Comprar",
    free_folder          : "Pasta Grátis",
    show_less            : "Mostrar menos",
    show_more            : "Mostrar mais",
    views_live           : "a ver",
    playing              : "A Reproduzir",
    free_available_title : "Pasta Grátis Disponível!",
    free_available_desc  : "Acesse a pasta gratuita agora",
    free_access_btn      : "🚀 Aceder à Pasta Grátis",
    free_unavail_title   : "Pasta Gratuita Não Disponível",
    free_unavail_desc    : "Este conteúdo não possui pasta gratuita. Entre em contacto para obter acesso.",
    contact_telegram     : "Contactar no Telegram",
    contact_zangi        : "Zangi Support",
    proof_prev           : "‹",
    proof_next           : "›",
    official_notice      : "🔒 PÁGINA OFICIAL E ÚNICA — A SUA PRIVACIDADE ESTÁ TOTALMENTE PROTEGIDA",
  }
};

function t(key) { return (i18n[currentLang] || i18n.en)[key] || key; }

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    el.placeholder = t(el.dataset.placeholderI18n);
  });
  document.getElementById("products-container").innerHTML = "";
  renderProducts();
}

// =====================================================
// FREE FOLDER MODAL
// =====================================================
function openFreeModal(idx) {
  const p = products[idx];
  const inner = document.getElementById("free-modal-inner");
  if (p.freeLink) {
    inner.innerHTML = `
      <div class="free-available">
        <div class="modal-icon">🎁</div>
        <h3>${t("free_available_title")}</h3>
        <p>${t("free_available_desc")}</p>
        <button class="btn-access-folder" onclick="window.open('${p.freeLink}','_blank')">${t("free_access_btn")}</button>
      </div>`;
  } else {
    inner.innerHTML = `
      <div class="free-unavailable">
        <div class="modal-icon">🔒</div>
        <h3>${t("free_unavail_title")}</h3>
        <p>${t("free_unavail_desc")}</p>
        <div class="free-contact-btns">
          <button class="btn-contact-tg" onclick="openTelegramProduct('${p.title}')">💬 ${t("contact_telegram")}</button>
          <button class="btn-contact-zangi" onclick="window.open('${ZANGI_URL}','_blank')">📱 ${t("contact_zangi")}</button>
        </div>
      </div>`;
  }
  document.getElementById("free-folder-modal").classList.add("open");
}

function closeFreeModal() {
  document.getElementById("free-folder-modal").classList.remove("open");
}

// =====================================================
// PROOF MODAL
// =====================================================
let proofImages  = [];
let proofCurrent = 0;

function openProof(idx) {
  const p = products[idx];
  if (!p || !p.proof || !p.proof.length) return;
  proofImages  = Array.isArray(p.proof) ? p.proof : [p.proof];
  proofCurrent = 0;
  document.getElementById("proof-caption").textContent = p.proofCaption || "Proof of sales";
  renderProofSlide();
  document.getElementById("proof-modal").classList.add("open");
}

function renderProofSlide() {
  const img     = document.getElementById("proof-img");
  const counter = document.getElementById("proof-counter");
  img.src = proofImages[proofCurrent];
  if (proofImages.length > 1) {
    counter.textContent = `${proofCurrent + 1} / ${proofImages.length}`;
    counter.style.display = "block";
    document.getElementById("proof-prev").style.display = "flex";
    document.getElementById("proof-next").style.display = "flex";
  } else {
    counter.style.display = "none";
    document.getElementById("proof-prev").style.display = "none";
    document.getElementById("proof-next").style.display = "none";
  }
}

function proofNav(dir) {
  proofCurrent = (proofCurrent + dir + proofImages.length) % proofImages.length;
  renderProofSlide();
}

function openProofFullscreen() {
  const src = proofImages[proofCurrent];
  document.getElementById("proof-fs-img").src = src;
  document.getElementById("proof-fullscreen").classList.add("open");
}

function closeProofFullscreen() {
  document.getElementById("proof-fullscreen").classList.remove("open");
}

function closeProof() {
  document.getElementById("proof-modal").classList.remove("open");
  closeProofFullscreen();
}

// =====================================================
// LIVE VIEWS
// =====================================================
const liveViews = {};

function initViews() {
  products.forEach((p, i) => {
    liveViews[i] = p.views || Math.floor(Math.random() * 2000 + 400);
  });
}

function tickViews() {
  products.forEach((_, i) => {
    liveViews[i] = Math.max(100, liveViews[i] + Math.floor(Math.random() * 9) - 3);
    const el = document.getElementById(`views-${i}`);
    if (el) el.textContent = `${liveViews[i].toLocaleString()} ${t("views_live")}`;
  });
}

// =====================================================
// RENDER PRODUCTS
// =====================================================
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;

  products.forEach((p, idx) => {

    const badgesHtml = (p.badges || []).map((b, i) =>
      `<span class="vid-badge ${b.cls}" style="animation-delay:${i * .1}s">${b.label}</span>`
    ).join("");

    const chipsHtml = (p.chips || []).map(c =>
      `<span class="card-chip">${c}</span>`
    ).join("");

    const proofArr = Array.isArray(p.proof) ? p.proof : (p.proof ? [p.proof] : []);
    const proofBtn = proofArr.length
      ? `<button class="proof-btn" onclick="openProof(${idx})">🏆 Proof</button>`
      : "";

    const mediaHtml = p.video ? `
      <div class="video-wrapper">
        <video class="product-video" src="${p.video}" autoplay muted loop playsinline controlslist="nodownload" poster="${p.poster || ''}"></video>
        <div class="video-overlay"></div>
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
        <div class="vid-center-hud">
          <div class="vid-views">
            <span class="views-dot"></span>
            <span id="views-${idx}">${(liveViews[idx] || p.views || 0).toLocaleString()} ${t("views_live")}</span>
          </div>
          <div class="vid-playing">
            <div class="eq-bars">
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div><div class="eq-bar"></div>
              <div class="eq-bar"></div>
            </div>
            ${t("playing")}
          </div>
        </div>
      </div>` : p.img ? `
      <div style="position:relative;">
        <img class="product-video" src="${p.img}" alt="${p.title}" loading="lazy" style="aspect-ratio:16/9;object-fit:cover;width:100%;">
        ${proofBtn}
        <div class="vid-badges">${badgesHtml}</div>
      </div>` : "";

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${idx * .12}s`;
    card.innerHTML = `
      ${mediaHtml}
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc-wrap">
          <div class="card-desc" id="desc-${idx}">${p.desc || ""}</div>
          <button class="desc-toggle" id="toggle-${idx}" onclick="toggleDesc(${idx})">${t("show_more")}</button>
        </div>
        ${chipsHtml ? `<div class="card-chips">${chipsHtml}</div>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn-buy" type="button">🛒 ${t("buy_now")}</button>
        <button class="btn-free" type="button">📂 ${t("free_folder")}</button>
      </div>
    `;

    // ── BUY NOW → USA SEMPRE O openTelegramProduct DO APP ──
    card.querySelector(".btn-buy").addEventListener("click", () => {
      openTelegramProduct(p.title);
    });

    card.querySelector(".btn-free").addEventListener("click", () => openFreeModal(idx));
    container.appendChild(card);
  });
}

function toggleDesc(idx) {
  const desc = document.getElementById(`desc-${idx}`);
  const btn  = document.getElementById(`toggle-${idx}`);
  const expanded = desc.classList.toggle("expanded");
  btn.textContent = expanded ? t("show_less") : t("show_more");
}

// =====================================================
// PARTICLES
// =====================================================
function initParticles() {
  const wrap = document.getElementById("headerParticles");
  if (!wrap) return;
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
  wrap.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() { W = canvas.width = wrap.offsetWidth; H = canvas.height = wrap.offsetHeight; }

  function makeParticle() {
    return {
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.6+.3,
      dx: (Math.random()-.5)*.45, dy: (Math.random()-.5)*.3,
      a: Math.random()*.55+.15,
      color: Math.random()>.5 ? "66,165,245" : "211,47,47"
    };
  }

  function init() { resize(); particles = Array.from({length:80}, makeParticle); }

  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`; ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>W) p.dx*=-1;
      if(p.y<0||p.y>H) p.dy*=-1;
    });
    requestAnimationFrame(draw);
  }

  init(); draw();
  window.addEventListener("resize", resize);
}

// =====================================================
// VIEWER COUNT
// =====================================================
let viewerCount = Math.floor(Math.random()*300+120);

function updateViewerCount() {
  viewerCount = Math.max(80, Math.min(600, viewerCount + Math.floor(Math.random()*5)-2));
  const el = document.getElementById("viewerCount");
  if (el) el.textContent = `${viewerCount} live viewers`;
}

// =====================================================
// NOTIFICATIONS
// =====================================================
function showNotification() {
  const buyer = buyers[Math.floor(Math.random()*buyers.length)];
  const el = document.createElement("div");
  el.className = "notification-item";
  el.innerHTML =
    `🛒 <strong>${buyer.name}</strong> purchased <strong>${buyer.product}</strong><br>` +
    `<small>📍 ${buyer.location} &nbsp;•&nbsp; Just now</small>`;
  const wrap = document.getElementById("live-notifications");
  if (wrap) { wrap.prepend(el); setTimeout(() => el.remove(), 5000); }
}

function startNotifications() {
  setTimeout(showNotification, 2400);
  setInterval(showNotification, Math.floor(Math.random()*12000)+14000);
}

// =====================================================
// LINK INJECTION
// =====================================================
function injectLinks() {
  ["hdr-telegram-btn","footer-telegram"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = TG_URL;
  });
  ["hdr-zangi-btn","footer-zangi"].forEach(id => {
    const el = document.getElementById(id); if(el) el.href = ZANGI_URL;
  });
}

// =====================================================
// VERIFICAÇÃO FINAL - IMPEDE SOBRESCRITAS
// =====================================================
// A cada 2 segundos, verifica se o CONFIG foi alterado
setInterval(() => {
  if (window.CONFIG && window.CONFIG.telegram !== CONFIG.telegram) {
    console.warn('⚠️ ALGUÉM TENTOU ALTERAR O TELEGRAM!');
    console.warn(`   Tentaram mudar para: ${window.CONFIG.telegram}`);
    console.warn('   A RESTAURAR PARA @MEGASELLERpx...');
    
    // Restaura a configuração correta
    window.CONFIG.telegram = CONFIG.telegram;
    window.CONFIG = CONFIG;
    
    // Restaura as funções
    window.tgOpen = tgOpen;
    window.openTelegramProduct = openTelegramProduct;
    window.sendCustomFolder = sendCustomFolder;
    window.sendVipRequest = sendVipRequest;
    
    console.log('✅ CONFIGURAÇÃO RESTAURADA: @MEGASELLERpx');
  }
}, 2000);

// =====================================================
// INIT
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log('🚀 Exclusive Shop iniciado!');
  console.log(`🔒 Telegram BLOQUEADO: @${CONFIG.telegram}`);
  console.log(`🔗 URL: ${TG_URL}`);
  console.log('⚠️ NENHUM OUTRO SCRIPT PODE ALTERAR ESTA CONFIGURAÇÃO!');
  
  initViews();
  injectLinks();
  renderProducts();
  initParticles();
  startNotifications();
  updateViewerCount();
  setInterval(updateViewerCount, 3500);
  setInterval(tickViews, 4000);

  ["free-folder-modal","proof-modal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => {
      if (e.target === el) { closeFreeModal(); closeProof(); }
    });
  });

  const fs = document.getElementById("proof-fullscreen");
  if (fs) fs.addEventListener("click", e => { if(e.target===fs) closeProofFullscreen(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeFreeModal(); closeProof(); }
    if (e.key === "ArrowRight" && document.getElementById("proof-modal").classList.contains("open")) proofNav(1);
    if (e.key === "ArrowLeft"  && document.getElementById("proof-modal").classList.contains("open")) proofNav(-1);
  });
});