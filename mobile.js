const mobileSection = document.getElementById('mobileSection');
mobileSection.value = location.hash.slice(1) || 's1';
mobileSection.addEventListener('change', event => showPage(event.target.value));
document.querySelectorAll('[data-page], [data-next]').forEach(button => {
  button.addEventListener('click', () => { mobileSection.value = location.hash.slice(1) || 's1'; });
});

document.querySelectorAll('.prose table').forEach(table => {
  const labels = [...table.querySelectorAll('thead th')].map(th => th.textContent.trim());
  table.querySelectorAll('tbody tr').forEach(row => {
    [...row.querySelectorAll('td')].forEach((cell, index) => {
      cell.dataset.label = labels[index] || '';
    });
  });
});

function addFlow(id, heading, steps, footer = '') {
  const items = steps.map(([zh, en], index) =>
    `<li class="${index === steps.length - 1 ? 'last' : ''}"><b>${String(index + 1).padStart(2, '0')}</b><span>${zh}<small>${en}</small></span></li>`
  ).join('');
  document.querySelector(`#${id} .diagram-frame`).insertAdjacentHTML('beforeend',
    `<div class="mobile-diagram" role="img" aria-label="${heading}"><div class="mobile-diagram-title">${heading}</div><ol class="flow-list">${items}</ol>${footer ? `<p>${footer}</p>` : ''}</div>`);
}

addFlow('s1', 'THE MARKETING PROCESS · 营销五步', [
  ['理解市场', 'Understand'], ['选择战略', 'Strategy'], ['整合方案', 'Marketing mix'],
  ['建立关系', 'Relationships'], ['获取回报', 'Capture value']
], '前四步创造价值，第五步获取回报。');

document.querySelector('#s2 .diagram-frame').insertAdjacentHTML('beforeend',
  `<div class="mobile-diagram" role="img" aria-label="环境三层与 SWOT 分类">
    <div class="mobile-diagram-title">ENVIRONMENT → SWOT · 环境到诊断</div>
    <div class="layer-list"><span>外圈 · Macro 宏观</span><span>中圈 · Micro 微观</span><span>内圈 · Internal 内部</span></div>
    <div class="swot-mini"><span><b>S</b> 内部优势</span><span><b>W</b> 内部劣势</span><span><b>O</b> 外部机会</span><span><b>T</b> 外部威胁</span></div>
  </div>`);

addFlow('s3', 'BUYER JOURNEY · 购买旅程', [
  ['发现问题', 'Recognize'], ['寻找信息', 'Search'], ['比较选择', 'Evaluate'],
  ['购买', 'Buy'], ['购后反应', 'Post-buy']
]);

addFlow('s4', 'FROM DATA TO DECISION · 从数据到行动', [
  ['数据', '发生了什么'], ['信息', '有什么规律'], ['洞察', '为什么重要'],
  ['决策', '做什么改变'], ['再学习', '检验并调整']
]);
