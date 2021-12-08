const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    
  
    let update = () => {
        const target = +counter.getAttribute('data-target');
        let c = +counter.innerText;
        
        const increment = target/1500;
        if( c < target) {
            counter.innerText = `${c + Math.ceil(increment)}`;
            setTimeout(update, 10);
        } else {
            counter.innerText = `${target}`;
        }
        
    }
    update();
})