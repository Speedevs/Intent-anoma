feather.replace();

// Force wallet icon white
document.querySelectorAll('.wallet-btn svg').forEach(svg => svg.setAttribute('stroke', '#fff'));

// Screen switching
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('[data-next]').forEach(btn => {
  btn.addEventListener('click', () => show(btn.dataset.next));
});

// Hamburger toggle
const hamBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
hamBtn?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Rates (mock values for demo)
const rates = { BTC: 60000, ETH: 2500, USDC: 1 };
const els = {
  btc: document.getElementById('btcInput'),
  eth: document.getElementById('ethInput'),
  usdc: document.getElementById('usdcInput'),
  min: document.getElementById('minStableInput'),
  btcUsd: document.getElementById('btcUsd'),
  ethUsd: document.getElementById('ethUsd'),
  usdcUsd: document.getElementById('usdcUsd'),
  totalUsd: document.getElementById('totalUsd'),
  create: document.getElementById('btnCreateSIT'),
  sitBal: document.getElementById('sitBalance'),
  cast: document.getElementById('btnCastIntent'),
  msg: document.getElementById('settleMsg'),
  unwrap: document.getElementById('btnUnwrap'),
  recipient: document.getElementById('recipientInput')
};

let state = { sit: 0, lastTotal: 0 };

// Format helper
const fmtUSD = n => `$${n.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}`;

// Recalc function (instant USD conversion)
function recalc() {
  const btc = parseFloat(els.btc.value || 0);
  const eth = parseFloat(els.eth.value || 0);
  const usdc = parseFloat(els.usdc.value || 0);

  const btcVal = btc * rates.BTC;
  const ethVal = eth * rates.ETH;
  const usdcVal = usdc * rates.USDC;
  const total = btcVal + ethVal + usdcVal;

  els.btcUsd.textContent = fmtUSD(btcVal);
  els.ethUsd.textContent = fmtUSD(ethVal);
  els.usdcUsd.textContent = fmtUSD(usdcVal);
  els.totalUsd.textContent = fmtUSD(total);

  state.lastTotal = total;
}
['input','change'].forEach(evt => {
  els.btc.addEventListener(evt, recalc);
  els.eth.addEventListener(evt, recalc);
  els.usdc.addEventListener(evt, recalc);
});
recalc();

// Toast helper
function toast(msg) {
  alert(msg); // simple demo alert, replace with fancy popup if needed
}

// Create SIT
els.create.addEventListener('click', () => {
  state.sit += 1;
  els.sitBal.textContent = state.sit;
  toast(`✅ Successfully locked and minted ${fmtUSD(state.lastTotal)} of assets`);
  show('screen-declare');
});

// Cast Intent
els.cast.addEventListener('click', () => {
  if (state.sit <= 0) return toast("❌ No SIT available");
  const user = els.recipient.value || "anon";
  toast(`✅ Successfully paid Recipient as "${user}" 36 $XAN`);
  state.sit -= 1;
  els.sitBal.textContent = state.sit;
  show('screen-tracking');
  els.msg.textContent = `Paid ${user} 36 $XAN`;
});

// Unwrap SIT
els.unwrap.addEventListener('click', () => {
  toast("✅ Successfully unwrapped");
});
