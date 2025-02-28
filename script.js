document.addEventListener('DOMContentLoaded', function() {
    const produtoDetalhes = document.querySelector('.produto-detalhes');
    const imagemProduto = produtoDetalhes.querySelector('img');
    const zoom = produtoDetalhes.querySelector('.zoom');

    produtoDetalhes.addEventListener('mousemove', function(e) {
        const { left, top, width, height } = produtoDetalhes.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const zoomWidth = zoom.offsetWidth;
        const zoomHeight = zoom.offsetHeight;

        const scaleX = imagemProduto.naturalWidth / width;
        const scaleY = imagemProduto.naturalHeight / height;

        const bgX = (x * scaleX) - (zoomWidth / 2);
        const bgY = (y * scaleY) - (zoomHeight / 2);

        zoom.style.display = 'block';
        zoom.style.left = `${x + 20}px`;
        zoom.style.top = `${y + 20}px`;
        zoom.style.backgroundImage = `url('${imagemProduto.src}')`;
        zoom.style.backgroundPosition = `-${bgX}px -${bgY}px`;
    });

    produtoDetalhes.addEventListener('mouseleave', function() {
        zoom.style.display = 'none';
    });
});