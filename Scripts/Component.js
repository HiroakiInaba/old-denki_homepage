"use strict"

/*Q＆Aコンポーネント*/

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
			'	</dl>';
	}
}

customElements.define('qa-component', Question_Answer);
