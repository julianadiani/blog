document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            img: "https://via.placeholder.com/500x400",
            title: "Post 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu interdum nulla. Nulla eleifend, arcu nec pulvinar sodales, dolor augue tincidunt metus, et maximus est libero sit amet augue. Cras turpis lectus, tristique sed metus dignissim, semper pellentesque dolor. Vivamus non lectus sodales, auctor nunc ut, lobortis ligula. Vestibulum eu varius eros, non feugiat nibh. Nulla non rutrum felis. Donec blandit condimentum magna, non condimentum velit lobortis et."
        },
        {
            img: "https://via.placeholder.com/500x400",
            title: "Post 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu interdum nulla. Nulla eleifend, arcu nec pulvinar sodales, dolor augue tincidunt metus, et maximus est libero sit amet augue. Cras turpis lectus, tristique sed metus dignissim, semper pellentesque dolor. Vivamus non lectus sodales, auctor nunc ut, lobortis ligula. Vestibulum eu varius eros, non feugiat nibh. Nulla non rutrum felis. Donec blandit condimentum magna, non condimentum velit lobortis et."
        },
        {
            img: "https://via.placeholder.com/500x400",
            title: "Post 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu interdum nulla. Nulla eleifend, arcu nec pulvinar sodales, dolor augue tincidunt metus, et maximus est libero sit amet augue. Cras turpis lectus, tristique sed metus dignissim, semper pellentesque dolor. Vivamus non lectus sodales, auctor nunc ut, lobortis ligula. Vestibulum eu varius eros, non feugiat nibh. Nulla non rutrum felis. Donec blandit condimentum magna, non condimentum velit lobortis et."
        }
    ];

    const postsContainer = document.getElementById("posts-container");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        // Cria o elemento da imagem
        const imgElement = document.createElement("img");
        imgElement.src = post.img;
        imgElement.alt = post.title; // Texto alternativo para a imagem

        // Cria o contêiner para o conteúdo do post
        const postContent = document.createElement("div");
        postContent.className = "post-content";

        // Cria o elemento do título
        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        // Cria o elemento do conteúdo
        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        // Adiciona os elementos ao conteúdo do post
        postContent.appendChild(titleElement);
        postContent.appendChild(contentElement);

        // Adiciona a imagem e o conteúdo ao post
        postElement.appendChild(imgElement);
        postElement.appendChild(postContent);

        // Adiciona o post ao container
        postsContainer.appendChild(postElement);
    });
});
