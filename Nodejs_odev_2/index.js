posts = [
    { number:1, author:"Ali" },
    { number:2, author:"Veli" },
    { number:3, author:"Cemal" },
    { number:4, author:"Can" },
    { number:5, author:"Baris" },
]

function listPosts(posts) {
    posts.forEach( post => console.log(post.number, post.author) )
}

function addPost(postList, newPost, callback) {
    postList.push(newPost);
    callback(postList);
}

addPost(posts, {number:6, author:"Ahmet"}, listPosts);
addPost(posts, {number:7, author:"John"}, listPosts);
addPost(posts, {number:8, author:"Jack"}, listPosts);