fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((post) => {
      document.getElementById("posts").innerHTML += `
      <div class="card">
        <h2>${post.title}</h2>
        <p>${post.id}</p>
      </div>
      `;
    });
  });
