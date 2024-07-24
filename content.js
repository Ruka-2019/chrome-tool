chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.text) {
    let navbar = document.getElementById('echoNavbar');
    if (!navbar) {
      navbar = document.createElement('div');
      navbar.id = 'echoNavbar';
      navbar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: #333;
                color: white;
                text-align: center;
                padding: 10px;
                z-index: 10000;
            `;
      document.body.appendChild(navbar);
    }
    navbar.textContent = message.text;
  }
});
