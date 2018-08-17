var invalidClassName = 'invalid'
var buttonClassName = 'valid'
var inputs = document.querySelectorAll('input')
var button = document.querySelector('.continue')
console.log(button)
console.log(inputs[3])
inputs.forEach(function (input) {
  // Add a css class on submit when the input is invalid.
  input.addEventListener('invalid', function () {
    input.classList.add(invalidClassName)
    button.classList.add(invalidClassName)
  })

  // Remove the class when the input becomes valid.
  // 'input' will fire each time the user types
  input.addEventListener('input', function () {
    if (input.validity.valid) {
      input.classList.remove(invalidClassName)

    }
  })
  function checkValidity() {
    const message = input.validity.valid
      ? null
      : getCustomMessage(input.type, input.validity, customMessages)
    input.setCustomValidity(message || '')
  }
  input.addEventListener('input', checkValidity)
  input.addEventListener('invalid', checkValidity)
})
const customMessages = {
  valueMissing: 'Please fill out this field!',       // `required` attr
  emailMismatch: 'Invalid value!',  // Invalid email
  patternMismatch: 'Custom pattern mismatch',// `pattern` attr
}

function getCustomMessage(type, validity) {
  if (validity.typeMismatch) {
    return customMessages[`${type}Mismatch`]
  } else {
    for (const invalidKey in customMessages) {
      if (validity[invalidKey]) {
        return customMessages[invalidKey]
      }
    }
  }
}

