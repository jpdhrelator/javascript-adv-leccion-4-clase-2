const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlayText');
const divMensaje = document.getElementById('mensajeStatus');
const steps = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    3: document.getElementById('step3'),
    4: document.getElementById('step4')
};
function mostrarOverlay(mostrar, texto="") {
    if (mostrar) {
        overlay.classList.remove('d-none');
        overlay.classList.add('d-flex');
        overlayText.textContent = texto;
    } else {
        overlay.classList.remove('d-flex');
        overlay.classList.add('d-none');
    }
}

function updateStepUI(stepNum, estado) {
    const li = steps[stepNum];
    if (estado === 'active') {
        li.classList.add('step-active');
        li.classList.remove('step-pending');
    } else if (estado === 'done') {
        li.classList.remove('step-active');
        li.classList.add('step-done');
    }
}
function resetSteps() {
    for (let i = 1; i <= 4; i++) {
        steps[i].className = 'list-group-item step-pending';
    }
}
function marcarErrorActual() {
    // Busca cuál estaba activo y lo marca como error
    for (let i = 1; i <= 4; i++) {
        if (steps[i].classList.contains('step-active')) {
            steps[i].classList.remove('step-active');
            steps[i].classList.add('step-error');
        }
    }
}
function mostrarAlerta(msg, tipo) {
    divMensaje.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            <strong>${tipo === 'success' ? 'Éxito:' : 'Falló:'}</strong> ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}
