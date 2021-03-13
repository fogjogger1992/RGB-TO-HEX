const rgbColorR = document.querySelector('.sliderR')
const rgbColorG = document.querySelector('.sliderG')
const rgbColorB = document.querySelector('.sliderB')
const hexColor = document.querySelector('.hex').firstElementChild

// RGB to HEX
function rgb2hex() {
  let rHex = Number(rgbColorR.value).toString(16)
  let gHex = Number(rgbColorG.value).toString(16)
  let bHex = Number(rgbColorB.value).toString(16)

  return hexColor.innerHTML = `
  <p>#${rHex.padStart(2, '0')}${gHex.padStart(2, '0')}${bHex.padStart(2, '0')}</p>
  `
}

// Change Background Color
function bgColor() {
  return document.body.style.backgroundColor = hexColor.firstElementChild.innerText
}

// addEventListener
const controller = document.querySelector('.controller')
controller.addEventListener('input', function (event) {
  const target = event.target
  if (target.matches('.custom-range')) {
    rgb2hex()
    bgColor()
    target.nextElementSibling.innerText = target.value
  }
})