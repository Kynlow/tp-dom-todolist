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
	let checkboxList = document.createElement("input");
	let divList = document.createElement("div");
	let $h2 = document.createElement("h2");
	let btnList = document.createElement("button");
	let $p = document.createElement("p");
    let isOn = false
	sectionList.classList.add("list");
	checkboxList.classList.add("list-input");
	divList.classList.add("red");
	btnList.classList.add("darkgreen");
	checkboxList.setAttribute("type", "checkbox");
	divList.textContent = "TODO";
	$h2.textContent = thename.value;
	btnList.textContent = "Supprimer";
	$p.textContent = radios

	sectionList.appendChild(checkboxList);
	sectionList.appendChild(divList);
	sectionList.appendChild($h2);
	sectionList.appendChild($p);
	sectionList.appendChild(btnList);

	checkboxList.addEventListener("change", (event) => {
		if (isOn == false) {
			divList.classList.remove("red");
			divList.classList.add("green");
			divList.textContent = "DONE";
            isOn = true
		} else {
			divList.classList.remove("green");
			divList.classList.add("red");
			divList.textContent = "TODO";
            isOn = false
		}
	});
    btnList.addEventListener("click", () => {
        sectionList.remove()
    })

	return sectionList;
}
$submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	$dialog.showModal();
});
$form.addEventListener("submit", (r) => {
	r.preventDefault();
	const $newElement = createList();
	$main2.prepend($newElement);

	$dialog.close();
});
