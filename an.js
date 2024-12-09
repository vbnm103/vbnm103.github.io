function loadHtml(url, isBase64 = false) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            if (text) {
                document.open();
                document.writeln(isBase64 ? decodeURIComponent(atob(text)) : text);
                document.close();
            }
        });
}

loadHtml('https://images.cubox.pro/vMLLeLVvQ/file/2024100713335244319/xd.css');
