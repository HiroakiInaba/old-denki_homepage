"use strict"

class Question_Answer extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = '<dl class="q_a">' +
			'		<label>' +
			'			<input type="checkbox" id="QA_6">' +
			`			<dt><span class="q_sign">Q: </span>${this.getAttribute("question")}</dt>` +
			'			<label class="dum">' +
			`				<dd><span class="a_sign">A: </span>${this.getAttribute("answer")}</dd>` +
			'			</label>' +
			'		</label>' +
			'	</dl>'
	}

	// get Qustion() {
	// 	return String(this.getAttribute('question'));
	// }

	// get Answer() {
	// 	return String(this.getAttribute('answer'));
	// }

	// set Question(value_a) {
	// 	this.setAttribute('question', value_a);
	// }

	// set Answer(value_b) {
	// 	this.setAttribute('answer', value_b);
	// }

	// connectedCallback() {
	// 	'<dl class="q_a">' +
	// 		'		<label>' +
	// 		'			<input type="checkbox" id="QA_6">' +
	// 		`			<dt><span class="q_sign">Q: </span>${value_a}</dt>` +
	// 		'			<label class="dum">' +
	// 		'				<dd><span class="a_sign">A: </span>~~~~~~~~~~~~~~~~~</dd>' +
	// 		'			</label>' +
	// 		'		</label>' +
	// 		'	</dl>'
	// }
}

customElements.define('qa-component', Question_Answer);
