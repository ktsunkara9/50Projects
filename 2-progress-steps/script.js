const steps = document.querySelectorAll('.progress-steps');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentStep = 1;

next.addEventListener('click', () => {
    currentStep++;
    if(currentStep > steps.length) {
        currentStep = steps.length;
    }
    update(); 
});


prev.addEventListener('click', () => {
    currentStep--;
    if(currentStep < 1) {
        currentStep = 1;
    }
    update();
});

function update() {
    steps.forEach((step, index) => {
        if(index < currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1)/(steps.length-1) * 100 + '%';
    if(currentStep == 1) {
        prev.disabled = true;
    } else if(currentStep == steps.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
    
}