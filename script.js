
  document.querySelectorAll('.price-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('priceModal').style.display = 'block';
    });
  });
  document.querySelector('.close').onclick = () => {
    document.getElementById('priceModal').style.display = 'none';
  };
  window.onclick = e => {
    if (e.target == document.getElementById('priceModal')) {
      document.getElementById('priceModal').style.display = 'none';
    }
  };
