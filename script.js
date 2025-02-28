document.addEventListener('DOMContentLoaded', function() {
    const imagemContainer = document.querySelector('.imagem-container');
    const imagemProduto = imagemContainer.querySelector('img');
    const zoom = imagemContainer.querySelector('.zoom');

    imagemContainer.addEventListener('mousemove', function(e) {
        const { left, top, width, height } = imagemContainer.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const zoomWidth = zoom.offsetWidth;
        const zoomHeight = zoom.offsetHeight;

        const scaleX = imagemProduto.naturalWidth / width;
        const scaleY = imagemProduto.naturalHeight / height;

        const bgX = (x * scaleX) - (zoomWidth / 2);
        const bgY = (y * scaleY) - (zoomHeight / 2);

        // Verifica se o cursor está dentro dos limites da imagem
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
            zoom.style.display = 'block';
            zoom.style.left = `${x + 20}px`;
            zoom.style.top = `${y + 20}px`;
            zoom.style.backgroundImage = `url('${imagemProduto.src}')`;
            zoom.style.backgroundPosition = `-${bgX}px -${bgY}px`;
        } else {
            zoom.style.display = 'none';
        }
    });

    imagemContainer.addEventListener('mouseleave', function() {
        zoom.style.display = 'none';
    });
});
