// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const vendedor = urlParams.get('v');

    if (vendedor) {
        const whatsappLink = document.getElementById('whatsappLink');
        const mensagemInicial = `Olá, vim através do código do vendedor: ${vendedor}`;
        const numeroWhatsApp = '5581999999999'; // Substitua pelo número da empresa no formato internacional
        const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemInicial)}`;
        whatsappLink.href = link;
    }
});
