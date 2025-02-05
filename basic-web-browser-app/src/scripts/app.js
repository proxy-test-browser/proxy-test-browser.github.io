document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const goButton = document.getElementById('go-button');
    const iframe = document.getElementById('web-view');

    goButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            alert('Please enter a valid URL starting with http:// or https://');
            return;
        }
        iframe.src = url;
    });
});