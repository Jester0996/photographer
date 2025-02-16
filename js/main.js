let selector = document.querySelector("#tel");
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

let validation = new JustValidate("form");

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа"
  },
]).addField("#tel", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон!'
  },
  {
     validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).addField("#msg", [
  {
    rule: "required",
    errorMessage: "Введите сообщение!"
  },
  {
    rule: "minLength",
    value: 12,
    errorMessage: "Минимум 12 символов"
  },
]).onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
    tel:  selector.inputmask.unmaskedvalue(),
    msg: document.getElementById("msg").value
  }

  let response = await fetch("main.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  let result = await response.text()

  alert(result)



})


// Бургер
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function(){
  nav.classList.toggle("nav--active")
  burger.classList.toggle("burger--active")
  document.body.classList.toggle("stop-scroll")
})


