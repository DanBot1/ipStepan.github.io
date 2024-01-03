function submitForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  console.log("Submitting form..."); // Добавьте эту строку для отладки

  var xhr = new XMLHttpRequest();
  var url = "process_form.php"; // Путь к вашему PHP-скрипту

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Обработка успешной отправки данных
  xhr.onload = function () {
    console.log("Form submitted successfully."); // Добавьте эту строку для отладки

    if (xhr.status == 200) {
      // Добавьте здесь код для обработки ответа от сервера, если необходимо
      alert("Форма успешно отправлена!");
    } else {
      displayError(
        "Произошла ошибка при отправке формы. Пожалуйста, повторите попытку позже."
      );
    }
  };

  // Обработка ошибок при отправке
  xhr.onerror = function () {
    console.error("Error submitting form."); // Добавьте эту строку для отладки
    displayError(
      "Произошла ошибка при отправке формы. Пожалуйста, повторите попытку позже."
    );
  };

  // Собираем данные для отправки на сервер
  var data =
    "name=" +
    encodeURIComponent(name) +
    "&phone=" +
    encodeURIComponent(phone) +
    "&email=" +
    encodeURIComponent(email) +
    "&message=" +
    encodeURIComponent(message);

  // Отправляем данные на сервер
  xhr.send(data);
}
