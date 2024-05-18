


    const lamps = new Map();

    function setupLamps() {
        const lampElements = document.querySelectorAll('.lamp');
        lampElements.forEach(lamp => {
            lamps.set(lamp, false); 
            lamp.onclick = () => toggleLamp(lamp);
        });
    }
    
    function toggleLamp(lamp) {
        const isOn = lamps.get(lamp);
        lamps.set(lamp, !isOn); 
        updateLampState(lamp);
    }
    
    function updateLampState(lamp) {
        const isOn = lamps.get(lamp);
        const bulb = lamp.querySelector('.bulb');
        if (isOn) {
            bulb.style.backgroundColor = 'white';
            bulb.style.boxShadow = '0 0 150px 75px white';
        } else {
            bulb.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            bulb.style.boxShadow = 'none';
        }
    }
    
    function illuminate(lamp) {
        if (!lamps.get(lamp)) { 
            var bulb = lamp.querySelector('.bulb');
            bulb.style.boxShadow = '0 0 100px 50px white';
        }
    }
    
    function dim(lamp) {
        if (!lamps.get(lamp)) { 
            var bulb = lamp.querySelector('.bulb');
            bulb.style.boxShadow = '0 0 0 rgba(255, 255, 255, 0)';
        }
    }
    
    window.onload = setupLamps;
    
    
    
    function enterSite() {
        window.location.href = 'indexx.html';
    }
    

















    

// function enterSite() {
// }

// function illuminate(element) {
//     element.querySelector('.bulb').style.backgroundColor = 'rgba(255, 255, 255, 1)';
// }

// function dim(element) {
//     element.querySelector('.bulb').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
// }

// function toggleColor(element) {
//     let bulb = element.querySelector('.bulb');
//     if (bulb.style.backgroundColor === 'rgba(255, 255, 255, 1)') {
//         bulb.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
//     } else {
//         bulb.style.backgroundColor = 'rgba(255, 255, 255, 1)';
//     }
// }

const numStars = 100;
for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 5}s`; // زيادة الوميض
    document.body.appendChild(star);
}

function createShootingStar() {
    let shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = `${0 * 50}vh`;
    shootingStar.style.left = `${Math.random() * 100}vw`;
    shootingStar.style.animationDuration = '4s'; // تقليل سرعة الشهاب
    document.body.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 7000); 
}

setInterval(createShootingStar, 2000);

















