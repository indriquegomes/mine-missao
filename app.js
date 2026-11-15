const themeButton = document.querySelector('#theme');
function applyTheme(light) { document.documentElement.dataset.theme = light ? 'light' : 'dark'; themeButton.textContent = light ? '☾' : '☼'; themeButton.setAttribute('aria-label', light ? 'Ativar tema escuro' : 'Ativar tema claro'); }
let storedTheme; try { storedTheme = localStorage.getItem('mine-theme'); } catch {}
applyTheme(storedTheme === 'light');
themeButton.addEventListener('click', () => { const light = document.documentElement.dataset.theme !== 'light'; applyTheme(light); try { localStorage.setItem('mine-theme', light ? 'light' : 'dark'); } catch {} });
let toastTimer; document.querySelectorAll('.pending').forEach(button => button.addEventListener('click', () => { const toast = document.querySelector('#toast'); toast.textContent = button.dataset.message; toast.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 6500); }));
