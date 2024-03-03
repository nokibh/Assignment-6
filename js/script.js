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
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>`;
    postContainer.appendChild(postCard);
  });
};
latestPost();
