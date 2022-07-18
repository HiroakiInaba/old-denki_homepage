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


class Game extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = '<div class="game_">' +
			`		<img src = "${this.getAttribute("image")}" class="image_vw" alt = "" >` +
			'				<div class="discription">' +
			'					<h4>' +
			`						${this.getAttribute("title")}` +
			'					</h4>' +
			'					<div class="dis_game">' +
			'						<p class="title_game">' +
			'							ゲーム概要' +
			'						</p>' +
			'						<p class="content">' +
			`							${this.getAttribute("discription")}` +
			'							</p>' +
			'							</div>' +
			'							<div class="time_game">' +
			'								<p class="title_time">' +
			'									プレイ時間(目安)<br>' +
			'								</p>' +
			'								<p class="content">' +
			`									${this.getAttribute("time")}` +
			'								</p>' +
			`								<p class="game_link"><a href="${this.getAttribute("rink")}"` +
			'									target="_blank">リンクはこちら</a></p>' +
			'							</div>' +
			'					</div>' +
			'				</div>' +
			'<br><hr><br>';
	}
}

customElements.define('qa-component', Question_Answer);
customElements.define('game-component', Game);
