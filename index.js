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
		modal1.style.display = "block";
	}
)

devicesArraySun.forEach((dev, i) =>
	dev.parentNode.onclick = function() {
		modal2.style.display = "block";
	}
)

devicesArrayTime.forEach((dev, i) =>
	dev.parentNode.onclick = function() {
		modal3.style.display = "block";
	}
)

buttons.forEach(button =>
    button.onclick = function() {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";

    }
)


window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
