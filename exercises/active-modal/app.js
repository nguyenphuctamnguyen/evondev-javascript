const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";

const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea, voluptatem aliquid adipisci labore maxime voluptatibus maiores perspiciatis enim commodi!";

const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");

const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent = "Submit";

const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent = "Cancel";

modal.appendChild(modalContent);
modalContent.appendChild(modalClose);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalAction);
modalAction.appendChild(modalSubmit);
modalAction.appendChild(modalCancel);
document.body.appendChild(modal);

// const template = `
// <div class="modal">
//     <div class="modal-content">
//         <i class="fa fa-times modal-close">X</i>
//         <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea, voluptatem aliquid
//             adipisci labore maxime voluptatibus maiores perspiciatis enim commodi!</div>
//         <div class="modal-action">
//             <button class="modal-submit">Confirm</button>
//             <button class="modal-cancel">Cancel</button>
//         </div>
//     </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

if (modal) {
    setTimeout(function () {
        modal.classList.add("is-show");
    }, 3000);
}
