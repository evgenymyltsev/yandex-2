function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

const modal1 = document.getElementById('Modal1');
const modal2 = document.getElementById('Modal2');
const modal3 = document.getElementById('Modal3');

const devicesArrayTemp = document.querySelectorAll(".Device__icon-temp");

const devicesArraySun = document.querySelectorAll(".Device__icon-sun");

const devicesArrayTime = document.querySelectorAll(".Device__icon-time");

const buttons = document.querySelectorAll(".Modal__actions__button");

devicesArrayTemp.forEach((dev, i) =>
	dev.parentNode.onclick = function() {
         // modal1.style.display = "block";
         modal1.classList.add('Modal--open');
	}
)

devicesArraySun.forEach((dev, i) =>
	dev.parentNode.onclick = function() {
         // modal2.style.display = "block";
         modal2.classList.add('Modal--open');
	}
)

devicesArrayTime.forEach((dev, i) =>
	dev.parentNode.onclick = function() {
         // modal3.style.display = "block";
         modal3.classList.add('Modal--open');
	}
)

buttons.forEach(button =>
    button.onclick = function() {
        // modal1.style.display = "none";
        modal1.classList.remove('Modal--open');
        // modal2.style.display = "none";
        modal2.classList.remove('Modal--open');
        // modal3.style.display = "none";
        modal3.classList.remove('Modal--open');
    }
)

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
