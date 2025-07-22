const cards = document.getElementById(`columns`);



for (let i = 0; i < 6; i++) {
  axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
    cards.innerHTML += `<div class="col-3 ps- 3 bg-white pt-4">
          <div class="img text-center">
            ${response.data}
          </div>
          <div class="text pt-1 ps-3">
            ${response.data}
          </div>
        </div>`
  })
  cards.innerHTML
}