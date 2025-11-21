
/* async function loadHTML(filePath, elementId) {
  const response = await fetch(filePath);
  const html = await response.text();
  document.getElementById(elementId).innerHTML = html;
}

loadHTML('components/navbar.html', 'navbar');
loadHTML('components/footer.html', 'footer');

// function to load page based on the hash

const loadPage = () => {
  const hash = window.location.hash.substring || 'home';
  loadHTML(`pages/${hash}.html`, 'app');
}

//First Load
loadPage();

// Listen for hash changes
window.addEventListener('hashchange', loadPage); */