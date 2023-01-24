// JS FÖR FEATURES/SIDA:

const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", postText);

function postText(event){
    event.preventDefault();
    const inputPost = document.querySelector("#user-message");
    const userMessage = inputPost.value;
    // document.querySelector("#message-container").innerText = userMessage;

    const divs = document.createElement('div');
    document.querySelector("#message-container").append(divs);
    divs.append(userMessage);

    // displayPost(userMessage);
}

// function displayPost(){
//     const divs = document.createElement('div');
//     document.querySelector("#message-container").append(divs);
//     divs.append(userMessage);
// }


// Submit popup:
// function submitConfirm(){
// 	alert("Thank you for your submition!")
// }