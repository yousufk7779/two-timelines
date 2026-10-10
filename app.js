/**
 * THE TWO TIMELINES SIMULATOR (LUXURY EDITION)
 * Official Companion Engine for "Digital Dad, Traditional Dad" (10 Complete Chapters)
 * Authored by SAMEER SIR, Founder JiGUU
 */

// STATE
const state = {
  currency: 'USD',
  salary: 3500,
  expenses: 2400,
  shiftHours: 1.0,    // 0.5, 1.0, 1.5, 2.0, 3.0
  age: 28,
  engine: 'content',
  inflation: 7.5,
  activeYears: 5
};

const CURRENCIES = {
  USD: {
    symbol: '$', rate: 1.0, step: 100,
    minSal: 500, maxSal: 15000, minExp: 400, maxExp: 12000,
    ticksSal: ['$500', '$5K', '$10K', '$15K'],
    ticksExp: ['$400', '$4K', '$8K', '$12K'],
    presets: {
      starter: { sal: 2500, exp: 1800, hours: 1.0 },
      mid: { sal: 4500, exp: 3200, hours: 1.5 },
      senior: { sal: 7500, exp: 5000, hours: 2.0 }
    }
  },
  INR: {
    symbol: '₹', rate: 85.0, step: 2000,
    minSal: 15000, maxSal: 400000, minExp: 10000, maxExp: 350000,
    ticksSal: ['₹15K', '₹1.2L', '₹2.5L', '₹4L'],
    ticksExp: ['₹10K', '₹1L', '₹2L', '₹3.5L'],
    presets: {
      starter: { sal: 35000, exp: 25000, hours: 1.0 },
      mid: { sal: 75000, exp: 55000, hours: 1.5 },
      senior: { sal: 150000, exp: 95000, hours: 2.0 }
    }
  },
  GBP: {
    symbol: '£', rate: 0.79, step: 100,
    minSal: 400, maxSal: 12000, minExp: 350, maxExp: 9500,
    ticksSal: ['£400', '£4K', '£8K', '£12K'],
    ticksExp: ['£350', '£3K', '£6K', '£9.5K'],
    presets: {
      starter: { sal: 2000, exp: 1500, hours: 1.0 },
      mid: { sal: 3800, exp: 2700, hours: 1.5 },
      senior: { sal: 6500, exp: 4200, hours: 2.0 }
    }
  },
  EUR: {
    symbol: '€', rate: 0.92, step: 100,
    minSal: 500, maxSal: 14000, minExp: 400, maxExp: 11000,
    ticksSal: ['€500', '€5K', '€10K', '€14K'],
    ticksExp: ['€400', '€4K', '€7.5K', '€11K'],
    presets: {
      starter: { sal: 2200, exp: 1600, hours: 1.0 },
      mid: { sal: 4000, exp: 2900, hours: 1.5 },
      senior: { sal: 7000, exp: 4500, hours: 2.0 }
    }
  }
};

const TOOLKIT_RESOURCES = {
  shift: {
    title: "Action Checklist #1: The 90-Minute Morning Routine (From Chapter 7)",
    content: `
      <div style="background: rgba(15,23,42,0.85); padding: 20px; border-radius: 14px; border: 1px solid rgba(229,147,34,0.4);">
        <h4 style="color: #f59e0b; font-size: 1.05rem; margin-bottom: 12px;">The Morning Asset Routine (5:30 AM – 7:00 AM)</h4>
        <ul style="line-height: 1.75; padding-left: 20px; font-size: 0.9rem; color: #cbd5e1;">
          <li><strong style="color: #fff;">Rule 1 (Airplane Mode Firewall):</strong> Corporate notifications and social apps stay off until your morning asset block is shipped.</li>
          <li><strong style="color: #fff;">Rule 2 (Build & Ship Daily):</strong> Allocate your focus to Code, Content, Distribution, or Automation (never passive scrolling).</li>
          <li><strong style="color: #fff;">Rule 3 (The 7-Day Velocity Rule):</strong> Ship one live digital asset or checklist every single week.</li>
          <li><strong style="color: #fff;">Rule 4 (Compounding Log):</strong> Track cumulative monthly recurring revenue (MRR) every Sunday night.</li>
        </ul>
        <div style="margin-top: 16px; padding: 12px; background: rgba(37,99,235,0.15); border-radius: 8px; font-size: 0.85rem; color: #93c5fd;">
          💡 <em>"You do not need to quit your job to become sovereign. You only need to reclaim the first 90 minutes of your morning." — SAMEER SIR</em>
        </div>
      </div>
    `
  },
  notion: {
    title: "Notion Template #2: Sovereign Personal Balance Sheet (From Chapter 3 & 8)",
    content: `
      <div style="background: rgba(15,23,42,0.85); padding: 20px; border-radius: 14px; border: 1px solid rgba(37,99,235,0.4);">
        <h4 style="color: #60a5fa; font-size: 1.05rem; margin-bottom: 12px;">What This Notion Workspace Tracks:</h4>
        <ul style="line-height: 1.75; padding-left: 20px; font-size: 0.9rem; color: #cbd5e1;">
          <li><strong style="color: #fff;">The OpEx Liability Audit:</strong> Classifies rent, car loans, and EMIs into true financial burn.</li>
          <li><strong style="color: #fff;">Hard Currency Inflow:</strong> Real-time tracking of USD/EUR revenue earned via Stripe, Gumroad, and Substack.</li>
          <li><strong style="color: #fff;">Freedom Runway Counter:</strong> Exact count of months you can live with zero 9-to-5 corporate income.</li>
        </ul>
        <div style="margin-top: 18px; text-align: center;">
          <a href="#" onclick="alert('Duplicating Sovereign Notion Workspace Template to your Notion account...'); return false;" style="display: inline-block; background: #2563eb; color: #fff; padding: 12px 22px; border-radius: 10px; font-weight: 700; text-decoration: none; font-size: 0.88rem; box-shadow: 0 4px 14px rgba(37,99,235,0.4);">
            🔗 Duplicate Official JiGUU Notion Template
          </a>
        </div>
      </div>
    `
  },
  worksheets: {
    title: "Audit Manual #3: 10 Chapter Forensic Worksheets (Complete 10 Chapters)",
    content: `
      <div style="background: rgba(15,23,42,0.85); padding: 20px; border-radius: 14px; border: 1px solid rgba(16,185,129,0.4);">
        <h4 style="color: #34d399; font-size: 1.05rem; margin-bottom: 12px;">Includes 10 Applied Strategy Labs from the Book:</h4>
        <ol style="line-height: 1.65; padding-left: 20px; font-size: 0.88rem; color: #cbd5e1;">
          <li><strong style="color: #fff;">Lab 1:</strong> The Degree vs AI Reality Check</li>
          <li><strong style="color: #fff;">Lab 2:</strong> Real Inflation vs Salary Decay Calculator</li>
          <li><strong style="color: #fff;">Lab 3:</strong> Asset vs Liability Reclassification Diagnostic</li>
          <li><strong style="color: #fff;">Lab 4:</strong> Code & AI Leverage Deployment Blueprint</li>
          <li><strong style="color: #fff;">Lab 5:</strong> Global Currency Arbitrage Worksheet</li>
          <li><strong style="color: #fff;">Lab 6:</strong> Zero-Cost Digital Asset Engine Plan</li>
          <li><strong style="color: #fff;">Lab 7:</strong> Morning Shift Deep Work Protocol</li>
          <li><strong style="color: #fff;">Lab 8:</strong> The Two Timelines Divergence Model</li>
          <li><strong style="color: #fff;">Lab 9:</strong> Sovereign Corporate Exit Checklist</li>
          <li><strong style="color: #fff;">Lab 10 (Epilogue):</strong> Sovereign Architect's Manifesto Affirmation</li>
        </ol>
      </div>
    `
  }
};

// DOM ELEMENTS
const dom = {
  btnUsd: document.getElementById('btn-usd'),
  btnInr: document.getElementById('btn-inr'),
  btnGbp: document.getElementById('btn-gbp'),
  btnEur: document.getElementById('btn-eur'),

  presetStarter: document.getElementById('preset-starter'),
  presetMid: document.getElementById('preset-mid'),
  presetSenior: document.getElementById('preset-senior'),

  inputSalary: document.getElementById('input-salary'),
  inputExpenses: document.getElementById('input-expenses'),
  inputShiftHours: document.getElementById('input-shift-hours'),

  valSalary: document.getElementById('val-salary'),
  valExpenses: document.getElementById('val-expenses'),
  valShiftHours: document.getElementById('val-shift-hours'),

  ticksSalary: document.getElementById('ticks-salary'),
  ticksExpenses: document.getElementById('ticks-expenses'),

  // Advanced
  inputAge: document.getElementById('input-age'),
  valAge: document.getElementById('val-age'),
  selectEngine: document.getElementById('select-engine'),
  inputInflation: document.getElementById('input-inflation'),
  valInflation: document.getElementById('val-inflation'),

  // Output cards
  tradCashflow: document.getElementById('trad-cashflow'),
  tradWealth: document.getElementById('trad-wealth'),
  tradHours: document.getElementById('trad-hours'),

  digCashflow: document.getElementById('dig-cashflow'),
  digWealth: document.getElementById('dig-wealth'),
  digHours: document.getElementById('dig-hours'),
  digScore: document.getElementById('dig-score'),
  verdictMonth: document.getElementById('verdict-month'),

  shareExitMonth: document.getElementById('share-exit-month'),
  shareDeltaVal: document.getElementById('share-delta-val'),
  btnCopyShare: document.getElementById('btn-copy-share'),
  copyToast: document.getElementById('copy-toast'),

  chartCanvas: document.getElementById('timelineChart'),

  // Modal
  modal: document.getElementById('toolkit-modal'),
  modalTitle: document.getElementById('modal-title'),
  modalBody: document.getElementById('modal-body-content')
};

// FORMAT MONEY
function formatMoney(amount, currency = state.currency) {
  const sym = CURRENCIES[currency].symbol;
  const rounded = Math.round(amount);
  const abs = Math.abs(rounded);

  let formatted = '';
  if (currency === 'INR') {
    if (abs >= 10000000) formatted = `${(abs / 10000000).toFixed(2)} Cr`;
    else if (abs >= 100000) formatted = `${(abs / 100000).toFixed(2)} Lakh`;
    else formatted = abs.toLocaleString('en-IN');
  } else {
    if (abs >= 1000000) formatted = `${(abs / 1000000).toFixed(1)}M`;
    else formatted = abs.toLocaleString();
  }

  if (rounded < 0) return `-${sym}${formatted}`;
  return `${sym}${formatted}`;
}

// CALCULATION
function calculate() {
  const years = state.activeYears;
  const annualInflation = state.inflation / 100;
  const corporateRaise = 0.03;

  // Traditional
  const tradSalYearN = state.salary * Math.pow(1 + corporateRaise, years);
  const tradExpYearN = state.expenses * Math.pow(1 + annualInflation, years);
  const tradNet = tradSalYearN - tradExpYearN;

  let tradAccumulated = 0;
  for (let y = 1; y <= years; y++) {
    const s = state.salary * Math.pow(1 + corporateRaise, y);
    const e = state.expenses * Math.pow(1 + annualInflation, y);
    const net = (s - e) * 12;
    if (net > 0) tradAccumulated = (tradAccumulated + net) * 1.05;
    else tradAccumulated = Math.max(0, tradAccumulated + net);
  }

  const tradHours = years * 52 * 40;

  // Digital
  const dailyShiftMins = Math.round(state.shiftHours * 60);
  const totalDigitalHours = Math.round(state.shiftHours * 365 * years);
  const baseMonthlyDigital = (Math.max(state.salary, state.expenses) * 0.14) * (state.shiftHours / 1.0);

  let crossoverMonth = null;
  const monthlyData = [];

  let currentDigitalMonthly = 0;
  let digitalCumulative = 0;

  for (let m = 1; m <= 120; m++) {
    const yr = m / 12;
    const tExp = state.expenses * Math.pow(1 + annualInflation, yr);

    let dMonthly = 0;
    if (m <= 6) {
      dMonthly = (baseMonthlyDigital * 0.35) * (m / 6);
    } else {
      const growthFactor = 1.35;
      const monthsCompounded = m - 6;
      dMonthly = (baseMonthlyDigital * 0.35) + (baseMonthlyDigital * Math.pow(1 + (growthFactor * 0.042), monthsCompounded));
    }

    if (dMonthly >= tExp && crossoverMonth === null) {
      crossoverMonth = m;
    }

    if (m <= years * 12) {
      currentDigitalMonthly = dMonthly;
      digitalCumulative += dMonthly;
    }

    monthlyData.push({ month: m, digitalMonthly: dMonthly, tradExpenses: tExp });
  }

  if (!crossoverMonth) crossoverMonth = Math.round(30 * (1.0 / state.shiftHours));

  const digitalValuation = (currentDigitalMonthly * 12 * 3.2) + digitalCumulative;
  const coverage = currentDigitalMonthly / Math.max(1, tradExpYearN);
  const freedomScore = Math.min(100, Math.round(coverage * 48 + 15));
  const wealthDelta = digitalValuation - tradAccumulated;

  return {
    tradNet,
    tradAccumulated,
    tradHours,
    currentDigitalMonthly,
    digitalValuation,
    totalDigitalHours,
    crossoverMonth,
    freedomScore,
    wealthDelta,
    dailyShiftMins,
    monthlyData
  };
}

// UPDATE UI
function updateUI() {
  const d = calculate();

  // Displays
  dom.valSalary.textContent = formatMoney(state.salary);
  dom.valExpenses.textContent = formatMoney(state.expenses);
  
  if (state.shiftHours === 1.0) dom.valShiftHours.textContent = "1 Hour / Day";
  else if (state.shiftHours === 0.5) dom.valShiftHours.textContent = "30 Mins / Day";
  else dom.valShiftHours.textContent = `${state.shiftHours} Hours / Day`;

  if (dom.valAge) dom.valAge.textContent = state.age;
  if (dom.valInflation) dom.valInflation.textContent = `${state.inflation}%`;

  document.querySelectorAll('.stat-years').forEach(el => el.textContent = `${state.activeYears} Yrs`);

  // Traditional Card
  if (d.tradNet <= 0) {
    dom.tradCashflow.textContent = `-${formatMoney(Math.abs(d.tradNet))} / mo (Deficit)`;
    dom.tradCashflow.classList.add('red-text');
  } else {
    dom.tradCashflow.textContent = `${formatMoney(d.tradNet)} / mo`;
    dom.tradCashflow.classList.remove('red-text');
  }

  dom.tradWealth.textContent = formatMoney(d.tradAccumulated);
  dom.tradHours.textContent = `${d.tradHours.toLocaleString()} Hours`;

  // Digital Card
  dom.digCashflow.textContent = `+${formatMoney(d.currentDigitalMonthly)} / mo`;
  dom.digWealth.textContent = formatMoney(d.digitalValuation);
  dom.digHours.textContent = `${d.totalDigitalHours.toLocaleString()} Hours`;
  dom.digScore.textContent = `${d.freedomScore} / 100`;
  dom.verdictMonth.textContent = `Month ${d.crossoverMonth}`;

  // Share Box
  dom.shareExitMonth.textContent = `Month ${d.crossoverMonth}`;
  dom.shareDeltaVal.textContent = `+${formatMoney(d.wealthDelta)}`;

  drawChart(d);
}

// DRAW LUXURY CHART WITH GLOWING GRADIENTS
function drawChart(d) {
  const canvas = dom.chartCanvas;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const pad = { top: 30, right: 30, bottom: 40, left: 75 };

  ctx.clearRect(0, 0, w, h);

  const tradPoints = [];
  const digPoints = [];

  for (let y = 0; y <= 10; y++) {
    const m = Math.min(120, y * 12);
    const item = d.monthlyData[Math.max(0, m - 1)] || d.monthlyData[0];
    
    let tVal = 0;
    if (state.salary > state.expenses) {
      tVal = (state.salary - state.expenses) * 12 * y * 0.95;
    }
    const dVal = item.digitalMonthly * 12 * 2.8;

    tradPoints.push(Math.max(0, tVal));
    digPoints.push(Math.max(0, dVal));
  }

  const maxVal = Math.max(...digPoints, ...tradPoints, 10000) * 1.15;

  // Grid lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 1;
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748b';

  const rows = 4;
  for (let r = 0; r <= rows; r++) {
    const yPos = pad.top + ((h - pad.top - pad.bottom) / rows) * r;
    const val = maxVal - (maxVal / rows) * r;
    ctx.beginPath();
    ctx.moveTo(pad.left, yPos);
    ctx.lineTo(w - pad.right, yPos);
    ctx.stroke();

    ctx.textAlign = 'right';
    ctx.fillText(formatMoney(val), pad.left - 10, yPos + 3);
  }

  // X Axis (Years)
  for (let i = 0; i <= 10; i += 2) {
    const xPos = pad.left + ((w - pad.left - pad.right) / 10) * i;
    ctx.textAlign = 'center';
    ctx.fillText(`Year ${i}`, xPos, h - pad.bottom + 22);
  }

  // 1. Digital Gradient Fill Area
  const digGradient = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
  digGradient.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
  digGradient.addColorStop(0.6, 'rgba(245, 158, 11, 0.08)');
  digGradient.addColorStop(1, 'rgba(245, 158, 11, 0.0)');

  ctx.beginPath();
  digPoints.forEach((val, i) => {
    const x = pad.left + ((w - pad.left - pad.right) / 10) * i;
    const y = h - pad.bottom - (val / maxVal) * (h - pad.top - pad.bottom);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(pad.left + (w - pad.left - pad.right), h - pad.bottom);
  ctx.lineTo(pad.left, h - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = digGradient;
  ctx.fill();

  // 2. Trad Line (Slate)
  ctx.beginPath();
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 2.5;
  tradPoints.forEach((val, i) => {
    const x = pad.left + ((w - pad.left - pad.right) / 10) * i;
    const y = h - pad.bottom - (val / maxVal) * (h - pad.top - pad.bottom);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // 3. Digital Curve (Glowing Gold)
  ctx.beginPath();
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3.8;
  ctx.shadowColor = 'rgba(245, 158, 11, 0.6)';
  ctx.shadowBlur = 12;
  digPoints.forEach((val, i) => {
    const x = pad.left + ((w - pad.left - pad.right) / 10) * i;
    const y = h - pad.bottom - (val / maxVal) * (h - pad.top - pad.bottom);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.shadowBlur = 0; // reset shadow

  // 4. Green Crossover Pulsar Point
  const crossYear = d.crossoverMonth / 12;
  if (crossYear <= 10) {
    const cx = pad.left + ((w - pad.left - pad.right) / 10) * crossYear;
    const cIndex = Math.floor(crossYear);
    const cRatio = crossYear - cIndex;
    const interp = digPoints[cIndex] + (digPoints[Math.min(10, cIndex + 1)] - digPoints[cIndex]) * cRatio;
    const cy = h - pad.bottom - (interp / maxVal) * (h - pad.top - pad.bottom);

    // Multi-Ring Pulsar
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.5)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    // Callout Tag
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Freedom (M${d.crossoverMonth})`, cx, cy - 18);
  }
}

// UPDATE SLIDER TICKS
function updateSliderTicks() {
  const cfg = CURRENCIES[state.currency];
  if (dom.ticksSalary && cfg.ticksSal) {
    dom.ticksSalary.innerHTML = cfg.ticksSal.map(t => `<span>${t}</span>`).join('');
  }
  if (dom.ticksExpenses && cfg.ticksExp) {
    dom.ticksExpenses.innerHTML = cfg.ticksExp.map(t => `<span>${t}</span>`).join('');
  }
}

// APPLY PRESET
function applyPreset(name) {
  const cfg = CURRENCIES[state.currency];
  const p = cfg.presets[name];
  if (!p) return;

  state.salary = p.sal;
  state.expenses = p.exp;
  state.shiftHours = p.hours;

  dom.inputSalary.value = state.salary;
  dom.inputExpenses.value = state.expenses;
  dom.inputShiftHours.value = state.shiftHours;

  document.querySelectorAll('.preset-pill').forEach(btn => btn.classList.remove('active'));
  if (name === 'starter') dom.presetStarter.classList.add('active');
  if (name === 'mid') dom.presetMid.classList.add('active');
  if (name === 'senior') dom.presetSenior.classList.add('active');

  updateUI();
}

// SET CURRENCY
function setCurrency(newCurr) {
  if (state.currency === newCurr) return;

  const cfg = CURRENCIES[newCurr];
  state.currency = newCurr;

  dom.inputSalary.min = cfg.minSal;
  dom.inputSalary.max = cfg.maxSal;
  dom.inputSalary.step = cfg.step;

  dom.inputExpenses.min = cfg.minExp;
  dom.inputExpenses.max = cfg.maxExp;
  dom.inputExpenses.step = cfg.step;

  updateSliderTicks();

  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.currency === newCurr);
  });

  // Re-apply current preset
  applyPreset('starter');
}

// MODAL
window.openToolkitModal = function(type) {
  const res = TOOLKIT_RESOURCES[type];
  if (!res) return;
  dom.modalTitle.textContent = res.title;
  dom.modalBody.innerHTML = res.content;
  dom.modal.classList.remove('hidden');
};

window.closeToolkitModal = function() {
  dom.modal.classList.add('hidden');
};

// INITIALIZE
function init() {
  // Currency buttons
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', () => setCurrency(btn.dataset.currency));
  });

  // Presets
  dom.presetStarter.addEventListener('click', () => applyPreset('starter'));
  dom.presetMid.addEventListener('click', () => applyPreset('mid'));
  dom.presetSenior.addEventListener('click', () => applyPreset('senior'));

  // Sliders
  dom.inputSalary.addEventListener('input', (e) => {
    state.salary = parseFloat(e.target.value);
    document.querySelectorAll('.preset-pill').forEach(b => b.classList.remove('active'));
    updateUI();
  });

  dom.inputExpenses.addEventListener('input', (e) => {
    state.expenses = parseFloat(e.target.value);
    document.querySelectorAll('.preset-pill').forEach(b => b.classList.remove('active'));
    updateUI();
  });

  dom.inputShiftHours.addEventListener('input', (e) => {
    state.shiftHours = parseFloat(e.target.value);
    updateUI();
  });

  // Advanced inputs
  if (dom.inputAge) {
    dom.inputAge.addEventListener('input', (e) => {
      state.age = parseInt(e.target.value);
      updateUI();
    });
  }
  if (dom.selectEngine) {
    dom.selectEngine.addEventListener('change', (e) => {
      state.engine = e.target.value;
      updateUI();
    });
  }
  if (dom.inputInflation) {
    dom.inputInflation.addEventListener('input', (e) => {
      state.inflation = parseFloat(e.target.value);
      updateUI();
    });
  }

  // Horizon tabs
  document.querySelectorAll('.easy-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.easy-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeYears = parseInt(btn.dataset.years);
      updateUI();
    });
  });

  // Copy share button
  dom.btnCopyShare.addEventListener('click', () => {
    const d = calculate();
    const text = `The Industrial Script Is Dead. Stop Renting Your Life By The Hour. 🚀\n\n` +
      `My Two Timelines Calculation:\n` +
      `⏱️ Freedom Month: Month ${d.crossoverMonth}\n` +
      `📈 Extra 5-Year Net Worth: +${formatMoney(d.wealthDelta)}\n` +
      `⚡ Daily Digital Focus: ${d.dailyShiftMins} mins/day\n\n` +
      `From the Book: Digital Dad, Traditional Dad by Sameer Sir (Complete 10 Chapters).\n` +
      `Calculate yours in 60 seconds at: https://twotimelines.app`;

    navigator.clipboard.writeText(text).then(() => {
      dom.copyToast.style.display = 'block';
      setTimeout(() => { dom.copyToast.style.display = 'none'; }, 3500);
    });
  });

  window.addEventListener('resize', updateUI);
  window.addEventListener('click', (e) => {
    if (e.target === dom.modal) closeToolkitModal();
  });

  updateSliderTicks();
  updateUI();
}

document.addEventListener('DOMContentLoaded', init);
