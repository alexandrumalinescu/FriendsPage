function fetchData() {
  let firstPage = "?page=1";
  fetch(`https://reqres.in/api/users${firstPage}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      //console.log(res.data)
      const html = res.data
        .map((item) => {
          return `
                <div class="user-item">
                    <img src="${item.avatar}" alt=""/>
                    <p> ${item.first_name} ${item.last_name}</p>
                </div>
                `;
        })
        .join("");
      //console.log(html)
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => console.log(error));

  takePageNumber = () => {
    document.addEventListener("click", (e) => {
      let arr = [];
      el = e.target.value;
      if (el !== undefined) {
        arr.push(el);
        if (arr.length > 1) {
          arr.shift();
        }
        let page = arr.join();
        let linkPage = `?page=${page}`;
        console.log(linkPage);
        
       

        fetch(`https://reqres.in/api/users${linkPage}`)
          .then((response) => {
            
            return response.json();
          })
          .then((res) => {
            //console.log(res.data)
            let htmln = res.data
              .map((item) => {
                document.querySelector("#app").innerHTML = " ";
                return `
                <div class="user-item">
                    <img src="${item.avatar}" alt=""/>
                    <p> ${item.first_name} ${item.last_name}</p>
                </div>
                `;
              })
              .join("");
            //console.log(html)
            document
              .querySelector("#app")
              .insertAdjacentHTML("afterbegin", htmln);
          })
          .catch((error) => console.log(error));
      }
    });
  };
}

fetchData();
