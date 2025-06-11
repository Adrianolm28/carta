const carta = document.getElementById('carta');
const mensaje = document.getElementById('mensaje');
let mostrado = false;

// Animación del lazo de Hello Kitty
function animarLazo() {
    const lazo1 = document.querySelector('.lazo1');
    const lazo2 = document.querySelector('.lazo2');
    const lazo3 = document.querySelector('.lazo3');
    let t = 0;
    setInterval(() => {
        t += 0.08;
        if (lazo1 && lazo2 && lazo3) {
            lazo1.setAttribute('rx', 13 + Math.sin(t) * 1.5);
            lazo1.setAttribute('ry', 10 + Math.cos(t) * 1.2);
            lazo2.setAttribute('rx', 10 + Math.cos(t + 1) * 1.2);
            lazo2.setAttribute('ry', 13 + Math.sin(t + 1) * 1.5);
            lazo3.setAttribute('r', 8 + Math.abs(Math.sin(t)) * 0.7);
        }
    }, 60);
}
animarLazo();

carta.addEventListener('click', function() {
    if (!mostrado) {
        carta.classList.add('mostrar');
        mostrado = true;
        setTimeout(() => {
            if (!document.getElementById('btn-ok')) {
                mensaje.innerHTML += '<br><button class="btn-ok" id="btn-ok">disculpame</button>';
                document.getElementById('btn-ok').onclick = function(e) {
                    e.stopPropagation();
                    carta.classList.remove('mostrar');
                    mostrado = false;
                    mensaje.innerHTML = 'Lamento mucho lo sucedido.<br>¿Me disculpas? Martha 💖';
                }
            }
        }, 900);
    }
});