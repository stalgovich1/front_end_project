document.getElementById('submit-button').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/submit-phone-number', true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert('Ваш номер телефону був успішно відправлений');
        }
      };
      xhr.send(JSON.stringify({ phone: phoneNumber }));
      
      document.getElementById('phone-number').value = '';
      document.getElementById('callback-form').style.display = 'none';
    } else {
      alert('Будь ласка, введіть ваш номер телефону');
    }
  });
  