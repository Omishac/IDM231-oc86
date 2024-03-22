document.addEventListener('DOMContentLoaded', function () {
    const zodiacContent = {
        'aries': { text: "This image and sound represent an Aries", image: "./img/Aries.png", audio: "./audio/aries.mp3" },
        'taurus': { text: "This image and sound represent an Taurus", image: "./img/Taurus.png", audio: "./audio/taurus.mp3"},
        'gemini': { text: "This image and sound represent an Gemini", image: "./img/Gemini.png", audio: "./audio/gemini.mp3" },
        'cancer': { text: "This image and sound represent an Cancer", image: "./img/Cancer.png", audio: "./audio/cancer.mp3" },
        'leo': { text: "This image and sound represent an Leo", image: "./img/Leo.png", audio: "./audio/leo.mp3"},
        'virgo': { text: "This image and sound represent an Virgo", image: "./img/Virgo.png", audio: "./audio/virgo.mp3" },
        'libra': { text: "This image and sound represent an Libra", image: "./img/Libra.png", audio: "./audio/libra.mp3" },
        'scorpio': { text: "This image and sound represent an Scorpio", image: "./img/Scorpio.png", audio: "./audio/scorpio.mp3"},
        'sagittarius': { text: "This image and sound represent an Sagittarius", image: "./img/Sagittarius.png", audio: "./audio/sagittarius.mp3" },
        'capricorn': { text: "This image and sound represent an Capricorn", image: "./img/Capricorn.png", audio: "./audio/capricorn.mp3" },
        'aquarius': { text: "This image and sound represent an Aquarius", image: "./img/Aquarius.png", audio: "./audio/aquarius.mp3" },
        'pisces': { text: "This image and sound represent an Pisces", image: "./img/Pisces.png", audio: "./audio/pisces.mp3" }
    };


    var modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';
    document.body.appendChild(modal);

    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    var closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.appendChild(document.createTextNode('Close')); 
    closeButton.type = 'button'; 
    modalContent.appendChild(closeButton);

    var modalText = document.createElement('div');
    modalText.setAttribute('id', 'modalText');
    modalContent.appendChild(modalText);


    var modalImage = document.createElement('img');
    modalImage.setAttribute('id', 'modalImage');
    modalContent.appendChild(modalImage);    

    var audioElement = new Audio(); 

    
    var buttons = document.querySelectorAll('.button');

  
    for (var i = 0; i < buttons.length; i++) {
    
        buttons[i].addEventListener('click', function () {
            var sign = this.getAttribute('data-sign');
            var content = zodiacContent[sign];
            modalText.textContent = content.text;
            modalImage.src = content.image;
            modal.style.display = 'block';

            audioElement.src = content.audio;
            audioElement.play();

        },false);
    }

    closeButton.onclick = function () {
        modal.style.display = 'none';
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    window.onclick = function (event) {
        if (event.target === closeButton) {
            modal.style.display = 'none';
        }
    }

    /**
     @param {Array} birthday
     @return {Object}
     */

    function log_birthday(birthday) {
        const date = {
            year: birthday[0],
            month: birthday[1],
            day: birthday[2],
        };
        return date;
    }

    /**
    @param {number} month 
    @param {number} day 
    @returns {string} 
     */

    
    function getZodiacSign(month, day) {
        let astrological_sign;
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            astrological_sign = 'capricorn'
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            astrological_sign = 'sagittarius'
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            astrological_sign = 'scorpio'
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
            astrological_sign = 'libra'
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            astrological_sign = 'virgo'
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            astrological_sign = 'leo'
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            astrological_sign = 'cancer'
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            astrological_sign = 'gemini'
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            astrological_sign = 'taurus'
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            astrological_sign = 'aries'
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            astrological_sign = 'pisces'
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            astrological_sign = 'aquarius'
        } else {
            return null;
        }
        return astrological_sign; 
    }

    /** 
    @param {Object} event 
    @return {boolean} 
     */

    function handle_submit(event) {
        event.preventDefault();

        const errors = [];

       
        if (form.elements['birthday'].value.length === 0) {
            errors.push('Please enter a valid birthday.');
            form.elements['birthday'].focus();
        }

       
        if (errors.length) {
            errors.forEach((error) => {
                const li = document.createElement('li');
                const text = document.createTextNode(error);

                li.appendChild(text);
                error_list.appendChild(li);
                error_list.hidden = false;
            });
            return false;
        } else {
            error_list.hidden = true;
            error_list.innerHTML = '';
        }

        const date_object = log_birthday(form.elements['birthday'].value.split('-'));
        console.log('date_object', date_object);

        const zodiacSign = getZodiacSign(Number(date_object.month), Number(date_object.day));
        
        if (zodiacSign) {
            modalText.textContent = zodiacContent[zodiacSign].text;
            modalImage.src = zodiacContent[zodiacSign].image;
            modal.style.display = "block";

            audioElement.src = zodiacContent[zodiacSign].audio;
            audioElement.play();

        } else {
            console.log('Invalid birthdate or zodiac sign.');
        }
    }

    const form = document.querySelector('form');
    const error_list = document.querySelector('.errors');

    if (form) {
        form.addEventListener('submit', handle_submit, false);
    }
});
