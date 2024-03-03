// latest post
const latestPost = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  );
  const data = await res.json();
  const posts = data;
  // console.log(post);
  displyPost(posts);
};
const displyPost = posts => {
  // console.log(post);
  const postContainer = document.getElementById('post-container');
  posts.forEach(post => {
    console.log(post);
    //  create a div
    const postCard = document.createElement('div');
    postCard.classList = `card w-96 bg-base-100 shadow-xl`;
    postCard.innerHTML = ` <figure>
            <img src="${post.cover_image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title"></h2>
            <p>${post.description}</p>
            <div class="card-actions ">
            <p> ${post.profile_image}</p>
            </div>
          </div>`;
    postContainer.appendChild(postCard);
  });
};
latestPost();
