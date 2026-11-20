/* Portfolio 3 enhancements — all original content and handlers remain. */
(()=>{document.addEventListener('DOMContentLoaded',()=>{
 const certGrid=document.querySelector('.cert-big-grid');
 if(certGrid){const wrapper=document.createElement('div');wrapper.className='cert-search-wrap';const search=document.createElement('input');search.className='cert-search';search.type='search';search.setAttribute('aria-label','Search certificates');search.placeholder=localStorage.getItem('lang')==='ar'?'ابحثي عن شهادة أو جهة...':'Search certificates or providers...';wrapper.append(search);certGrid.parentNode.insertBefore(wrapper,certGrid);search.addEventListener('input',()=>{const q=search.value.trim().toLocaleLowerCase();certGrid.querySelectorAll('.cert-big-card').forEach(card=>{const searchable=[card.textContent,...Array.from(card.querySelectorAll('[data-ar],[data-en]')).flatMap(el=>[el.dataset.ar||'',el.dataset.en||''])].join(' ').toLocaleLowerCase();card.classList.toggle('search-hidden',!searchable.includes(q))})});}
 // Add visible keyboard support to existing clickable project and certificate cards.
 document.querySelectorAll('.tl-item[onclick],.cert-big-card[onclick]').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}})});
 // Prevent scroll reveal elements from remaining hidden if JS observers are unavailable.
 });})();
