(function() {
    const button = document.createElement('button');
    button.textContent = 'Download PDF';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '10000';
    button.style.padding = '15px';
    button.style.border = '2px solid rgb(42, 70, 189)';
    button.style.backgroundColor = 'rgb(42, 70, 189)';
    button.style.color = 'white';
    button.style.borderRadius = '15px';
    button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    button.style.fontFamily = '"Open Sans", sans-serif';
    button.style.fontSize = '18px';
    button.style.textAlign = 'center';
    button.style.cursor = 'pointer';
    button.style.fontWeight = 'bold';

    button.addEventListener('click', () => {
        const url = window.location.href;
        const knowIdMatch = url.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
        if (knowIdMatch) {
            const knowId = knowIdMatch[0];
            const api_url = `https://apiedge-eu-central-1.knowunity.com/knows/${knowId}`;
            fetch(api_url)
                .then(response => response.json())
                .then(data => {
                    const contentUrl = data.documents[0]['contentUrl'];
                    if (contentUrl) {
                        chrome.runtime.sendMessage({contentUrl});
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    });

    document.body.appendChild(button);
})();