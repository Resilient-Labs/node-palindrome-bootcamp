document.querySelector('button').addEventListener('click', function () {
    let word = document.getElementById('input').value
  
    fetch(`/check?word=${encodeURIComponent(word)}`)
      .then(function (response) {
        return response.text()
      })
      .then(function (data) {
        document.getElementById('text').textContent = data
      })
  })
  