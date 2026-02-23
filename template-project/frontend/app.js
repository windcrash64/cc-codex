const sections = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.18 });
sections.forEach((s) => obs.observe(s));

const easeOut = (t) => 1 - Math.pow(1 - t, 3);
document.querySelectorAll('[data-count]').forEach((el) => {
  const target = Number(el.dataset.count);
  let start;
  const dur = 1000;
  const frame = (ts) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = Math.round(target * easeOut(p)).toLocaleString();
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
});

const ranges = {
  7: [35, 41, 44, 43, 48, 49, 54],
  30: [22, 25, 27, 28, 30, 31, 34, 35, 38, 40, 42, 45],
  90: [15, 17, 20, 22, 24, 26, 31, 33, 36, 39, 41, 43],
  365: [10, 11, 12, 14, 17, 19, 20, 22, 25, 28, 31, 36],
};

function drawLine(canvas, values) {
  const c = canvas.getContext('2d');
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.strokeStyle = '#29456f'; c.lineWidth = 1;
  for (let i = 1; i < 5; i++) {
    const y = i * (canvas.height / 5);
    c.beginPath(); c.moveTo(0, y); c.lineTo(canvas.width, y); c.stroke();
  }
  c.strokeStyle = '#69dfff'; c.lineWidth = 3;
  c.beginPath();
  values.forEach((v, i) => {
    const x = (i / (values.length - 1)) * (canvas.width - 40) + 20;
    const y = canvas.height - ((v - 8) / 50) * (canvas.height - 40) - 20;
    i ? c.lineTo(x, y) : c.moveTo(x, y);
  });
  c.stroke();
}

function drawBars(canvas) {
  const vals = [82, 67, 52, 41];
  const labels = ['Rulesets', 'Skills', 'Agents', 'Workflows'];
  const c = canvas.getContext('2d');
  c.clearRect(0, 0, canvas.width, canvas.height);
  vals.forEach((v, i) => {
    const x = 40 + i * 150;
    const h = v * 2;
    c.fillStyle = ['#66a1ff', '#57d8ff', '#6effd3', '#9e86ff'][i];
    c.fillRect(x, canvas.height - h - 30, 90, h);
    c.fillStyle = '#9fb4d8';
    c.fillText(labels[i], x, canvas.height - 10);
  });
}

const trend = document.getElementById('trendChart');
const category = document.getElementById('categoryChart');
drawLine(trend, ranges[30]);
drawBars(category);

document.querySelectorAll('[data-range]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-range]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    drawLine(trend, ranges[btn.dataset.range]);
  });
});
