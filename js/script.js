const columns = document.getElementById(`columns`);


for (let i = 0; i < 6; i++) {
  axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
    console.log(response.data);
    columns.innerHTML += `<div class="img text-center">
            ${response.data}
          </div>
          <div class="text pt-1 ps-3">
            ${response.data}
          </div>`
  })
}