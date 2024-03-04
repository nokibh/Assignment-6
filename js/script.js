const loadPost = async search => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`
  );

  const data = await res.json();
  const alls = data.posts;
  // console.log(allposts);
  postDisply(alls);
};
const postDisply = alls => {
  // console.log(allposts);
  const allContainer = document.getElementById('all-container');
  allContainer.textContent = '';
  alls.forEach(all => {
    console.log(all);
    const allCard = document.createElement('div');
    allCard.classList = `card card-side bg-[#e6e6fa]
    shadow-xl mb-5`;
    allCard.innerHTML = `
     <div class="avatar online">
  <div class="w-16 rounded-lg h-12">
    <img src="${all.image}" />
  </div>
</div>
            <div class="card-body">
              <div class="flex gap-4">
                <p>#${all.category}</p>
                <p>Author:${all.author.name}</p>
              </div>
              <h2 class="card-title">${all.title}</h2>
              <p>${all.description}</p>
              <hr />
              <div class="card-actions  ">
                <ul class="flex gap-16">
                  <li class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>${all.comment_count}
                  </li>
                  <li class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>${all.view_count}
                  </li>
                  <li class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>${all.posted_time}
                  </li>
                  <li>
                   <button onclick="addBtn('${all.title}','${all.view_count}')" id="sms" class="text-[#10B981] ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
</button>
                  </li>
                </ul>

              </div>
            </div>

    `;
    allContainer.appendChild(allCard);
  });
  // hide loading spinner
  toggleLoadingDot(false);
};
// loadPost();
// search option
const searchButton = () => {
  toggleLoadingDot(true);
  const searchFil = document.getElementById('search-field');
  const searchPost = searchFil.value;
  console.log(searchPost);
  loadPost(searchPost);
};
// loading funtion
const toggleLoadingDot = isDot => {
  const loadingDot = document.getElementById('loading-dot');
  if (isDot) {
    loadingDot.classList.remove('hidden');
  } else {
    loadingDot.classList.add('hidden');
  }
};
// loadPost();

// botton add
const titleAdd = document.getElementById('title-add');
const count = document.getElementById('count');
let incriment = parseInt(count.innerText.trim(), 10) || 0;
const addBtn = (title, view) => {
  const createDiv = document.createElement('div');
  createDiv.classList = `flex items-center justify-between bg-white rounded-lg`;
  createDiv.innerHTML = ` <p>${title}</p>
            <p class="flex gap-1 p-1"><i class="fa-regular fa-eye"></i>${view}</p>`;
  titleAdd.appendChild(createDiv);
  incriment++;
  count.innerText = incriment;
};

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
    postCard.classList = `card w-96 bg-base-100 shadow-xl mb-4 `;
    postCard.innerHTML = ` <figure>
                <img src="${post.cover_image}" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
    ${post.author.posted_date}</h2>
                <h1 class=font-extrabold>${post.title}</h1>
                <div class="card-actions ">
                <p> ${post.description}</p>
                </div>

                <div class="grid grid-cols-2">

                <div>
                <img class="w-16 rounded-full" src="${post.profile_image}" alt="">
                </div>

               <div>
                <p>${post.author.name}</p>
               <p>${post.author.designation}</p>
               </div>
                </div>
              </div>`;
    postContainer.appendChild(postCard);
  });
};

latestPost();
loadPost('');
