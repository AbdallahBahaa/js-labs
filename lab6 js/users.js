let userTableBody = document.querySelector("#userTable tbody");
async function fetchData() {
  try {
    let [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);
    let users = await usersRes.json();
    let posts = await postsRes.json();
    let comments = await commentsRes.json();
    users.forEach(user => {
      let userPosts = posts.filter(post => post.userId === user.id);
      let ul = document.createElement("ul");
      userPosts.forEach(post => {
        let li = document.createElement("li");
        let commentCount = comments.filter(comment => comment.postId === post.id).length;
        li.textContent = `${post.title} (${commentCount} comments)`;
        ul.appendChild(li);
      });
      let row = document.createElement("tr");
      let usernameCell = document.createElement("td");
      usernameCell.textContent = user.username;

      let emailCell = document.createElement("td");
      emailCell.textContent = user.email;

      let companyCell = document.createElement("td");
      companyCell.textContent = user.company.name;

      let geoCell = document.createElement("td");
      geoCell.textContent = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;

      let postsCell = document.createElement("td");
      postsCell.appendChild(ul);

      row.append(usernameCell, emailCell, companyCell, geoCell, postsCell);
      userTableBody.appendChild(row);
    });
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }
}
fetchData();
