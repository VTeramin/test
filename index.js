const button = document.getElementById("#free-try-button");
const modal = document.getElementById("#modal");
const close = document.getElementById("#close");

function toggleModal() {
    const isFlex = modal.style.display === "flex";
    modal.style.display = isFlex ? "none" : "flex";
}

button.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

const email = document.getElementById("#email");
const password = document.getElementById("#password");
const checkbox = document.getElementById("#checkbox");

const formData = {
    email: '',
    password: '',
    checkbox: false
};

function updateForm(e) {
    formData[e.target.id.slice(1)] = e.target.value;
}

function toggleCheckbox(e) {
    formData[e.target.id.slice(1)] = e.target.checked;
}

email.addEventListener("input", updateForm);
password.addEventListener("input", updateForm);
checkbox.addEventListener("click", toggleCheckbox);