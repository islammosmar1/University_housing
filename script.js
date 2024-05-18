document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.onclick = function() {
            this.parentElement.parentElement.style.display = 'none';
        };
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

  

    // Navigation links event handling
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showPage(pageId);
        });
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
        currentSlide = (currentSlide + 1) % totalSlides;
    }
    setInterval(changeSlide, 2000); // Change slide every 2 seconds
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => page.style.display = 'none');
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
}






function showThankYouMessage(username) {
    const messageBox = document.getElementById('messageBox');
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = `شكراً ${username}، سنقوم باعلامك قريباً 👐`;
    messageBox.style.display = 'block';
}



document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Show the modal initially

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.onclick = function() {
            this.parentElement.parentElement.style.display = 'none';
        };
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = this.querySelector('input[type="text"]').value;
            if (this.id === "housingForm") {
                showThankYouMessage(username);
            } else {
                validateForm(this);
            }
        });
    });
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showPage(pageId);
        });
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        page.style.display = 'none'; // Hide all pages
    });
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block'; // Show the requested page
}

function showThankYouMessage(username) {
    const messageBox = document.getElementById('messageBox');
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = `Thanks ${username} , I will let you know soon ❤️👐 \n Your request will be visible to all users, you can cancel it`;
    messageBox.style.display = 'block';
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            alert('Please fill out all fields');
            isValid = false;
        }
    });
    if (isValid) {
        form.submit();
    }
}

function clearTable() {
    const table = document.getElementById('responseTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; 
    document.getElementById('noData').style.display = 'block'; // يعرض رسالة "لا يوجد معلومات حتى اللحظة"
}

document.addEventListener('DOMContentLoaded', function() {
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.onclick = function() {
            this.parentElement.parentElement.style.display = 'none';
        };
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

    // const forms = document.querySelectorAll('form');
    // forms.forEach(form => {
    //     form.addEventListener('submit', function(event) {
    //         event.preventDefault();
    //         if (this.id === "housingForm") {
    //             collectAndDisplayResponses(this);
    //         } else {
    //             validateAndSubmitForm(this);
    //         }
    //     });
    // });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showPage(pageId);
        });
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => page.style.display = 'none');
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
}

function collectAndDisplayResponses(form) {
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    displayDataInTable(data);
    showThankYouMessage(data.fullname);
}

function displayDataInTable(data) {
    const table = document.getElementById('responseTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    Object.values(data).forEach(text => {
        let cell = newRow.insertCell();
        cell.textContent = text;
    });
    document.getElementById('noData').style.display = 'none';
}

function validateAndSubmitForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            alert('Please fill out all fields');
            isValid = false;
        }
    });
    if (isValid) {
        form.submit();
    }
}



function closeMessageBox() {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
}



















particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});




document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeButton = modal.querySelector('.close');

    modal.style.display = 'block';

    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    if (sessionStorage.getItem('modalShown') !== 'true') {
        modal.style.display = 'block';
        sessionStorage.setItem('modalShown', 'true'); 
    } else {
        modal.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    updateTable();
});

function getCurrentUserId() {
    return 'currentUserId'; 
}

document.getElementById('housingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var currentUserId = getCurrentUserId();
    var formData = {
        userId: currentUserId, 
        fullname: document.getElementById('fullname').value,
        city: document.getElementById('city').value,
        services: document.getElementById('services').value,
        rooms: document.getElementById('rooms').value,
        location: document.getElementById('location').value,
        phone: document.getElementById('phone').value
    };

    var existingData = JSON.parse(localStorage.getItem('housingData')) || [];
    if (!Array.isArray(existingData)) {
        existingData = [];
    }
    existingData.push(formData);
    localStorage.setItem('housingData', JSON.stringify(existingData));

    updateTable();
    showThankYouMessage("Data saved successfully!");
});

function updateTable() {
    let data = JSON.parse(localStorage.getItem('housingData')) || [];
    if (!Array.isArray(data)) {
        data = [];
    }
    displayDataInTable(data);
}

function displayDataInTable(data) {
    const table = document.getElementById('responseTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; 

    var currentUserId = getCurrentUserId();
    data.forEach((item, index) => {
        const newRow = table.insertRow();
        Object.values(item).forEach((text, i) => {
            if (i !== 0) { 
                let cell = newRow.insertCell();
                cell.textContent = text;
            }
        });

        if (item.userId === currentUserId) {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = function() {
                deleteEntry(index);
            };
            const deleteCell = newRow.insertCell();
            deleteCell.appendChild(deleteButton);
        }
    });

    document.getElementById('noData').style.display = data.length === 0 ? 'block' : 'none';
}

function deleteEntry(index) {
    let data = JSON.parse(localStorage.getItem('housingData')) || [];
    if (!Array.isArray(data)) {
        data = [];
    }

    var currentUserId = getCurrentUserId();
    if (data[index].userId === currentUserId) { 
        data.splice(index, 1);
        localStorage.setItem('housingData', JSON.stringify(data));
        updateTable();
    }
}

function clearUserInformation() {
    let data = JSON.parse(localStorage.getItem('housingData')) || [];
    if (!Array.isArray(data)) {
        data = [];
    }

    var currentUserId = getCurrentUserId();
    data = data.filter(item => item.userId !== currentUserId); 

    localStorage.setItem('housingData', JSON.stringify(data));
    updateTable();
}

















