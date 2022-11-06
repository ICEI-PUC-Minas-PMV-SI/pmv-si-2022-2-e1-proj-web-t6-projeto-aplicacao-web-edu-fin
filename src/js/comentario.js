const comentarios = document.getElementById("comentarios");
const container = document.querySelector(".comment");

const nameInput = comentarios["nome"];
const commentInput = comentarios["comentario"];

const comment = JSON.parse(localStorage.getItem("comment")) || [];

const addComment = (nome, comentario) => {
    comment.push({
        nome,
        comentario
    });

    localStorage.setItem("comment", JSON.stringify(comment));

    return { nome , comentario };
}

const createCommentaryElement = ({nome, comentario}) => {
    //cria o elemento
    const commentDiv = document.createElement('div');
    const userName = document.createElement('h3');
    const userComment = document.createElement('p');
    const lines = document.createElement('hr');

    //preenche o conteudo
    userName.innerText = nome;
    userComment.innerText = comentario;

    
    //adiciona a DOM
    commentDiv.append(userName, userComment, lines);
    container.appendChild(commentDiv);

};

comment.forEach(createCommentaryElement);

comentarios.onsubmit = e => {
    e.preventDefault();

    const newComment = addComment(
        nameInput.value,
        commentInput.value
    );

    createCommentaryElement(newComment)
    nameInput.value = "";
    commentInput.value = "";
};