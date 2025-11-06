
// BOTÓN VOLVER ARRIBA - Las Timar
  const btn = document.getElementById('btn-volver-arriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // === EVITAR SALTO EN "LEER MÁS" ===
document.querySelectorAll('.blog-readmore').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // ← Esto detiene el salto al top
    // Aquí puedes agregar más tarde la función de expandir
  });
});