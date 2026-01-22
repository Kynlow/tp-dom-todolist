const $submitButton = document.querySelector("#submit-btn");
const $dialog = document.querySelector("dialog");
const $form = document.querySelector("form");
const $main2 = document.querySelector(".main2");
const prio = document.querySelector("#prio");
const thename = document.querySelector("#thename");
function createList() {
	let data = new FormData($form);
	let radios = data.get("radios");
	let sectionList = document.createElement("section");
	sectionList.classList.add("list");
	$main2.prepend(sectionList);
	let checkboxList = document.createElement("input");
	checkboxList.setAttribute("type", "checkbox");
	checkboxList.classList.add("list-input");
	sectionList.appendChild(checkboxList);
	let divList = document.createElement("div");
	divList.classList.add("red");
	sectionList.appendChild(divList);
	divList.textContent = "TODO";
	let $h2 = document.createElement("h2");
	$h2.textContent = thename.value;
	sectionList.appendChild($h2);
	let $p = document.createElement("p");
	if (radios == "Longue") {
		$p.textContent = "Longue";
	} else {
		$p.textContent = "Courte";
	}
	sectionList.appendChild($p);
	let btnList = document.createElement("button");
	btnList.classList.add("darkgreen");
	sectionList.appendChild(btnList);
	btnList.textContent = "Supprimer";
}
$submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	$dialog.showModal();
});
$form.addEventListener("submit", (r) => {
	r.preventDefault();
    createList()
	$dialog.close();
});
