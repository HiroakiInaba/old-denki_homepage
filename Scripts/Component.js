"use strict"

/*Q＆Aコンポーネント*/
class Question_Answer extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = '<dl class="q_a">' +
			'		<label>' +
			'			<input type="checkbox" id="QA_6">' +
			`			<dt><span class="q_sign">Q<!--<span class="num">--></span>: </span>${this.getAttribute("question")}</dt>` +//問題番号を表示させたかったらここのコメントアウトを消す。
			'			<label class="dum">' +
			`				<dd><span class="a_sign">A: </span>${this.getAttribute("answer")}</dd>` +
			'			</label>' +
			'		</label>' +
			'	</dl>';
	}
}

/*gameコンポーネント*/
class Game extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = '<div class="game_">' +
			`		<img src = "${this.getAttribute("image")}" class="image_vw" alt = "" >` +
			'				<div class="description">' +
			'					<h4>' +
			`						${this.getAttribute("title")}` +
			'					</h4>' +
			'					<div class="dis_game">' +
			'						<p class="title_game">' +
			'							ゲーム概要' +
			'						</p>' +
			'						<p class="content">' +
			`							<span>[ジャンル:${this.getAttribute("genre")}]</span><br/>${this.getAttribute("description")}` +
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

/*mediaコンポーネント*/
class Media extends HTMLElement {
	constructor() {
		super();
		this.innerHTML =
			`<div class="Work"> ` +
			`	<div class="description" color="${this.getAttribute('color')}"}> ` +
			`	  <p class="title"> ` +
			`			Title` +
			`		</p> ` +
			`		<h4> ` +
			`			${this.getAttribute("title")}` +
			`		</h4> ` +
			`		<p class="dis"> ` +
			`			Content` +
			`		</p> ` +
			`		<h5 class="text"> ` +
			`     ${this.getAttribute("description")}` +
			`		</h5>` +
			`	</div>` +
			`	<div class="movie">` +
			`	  <iframe src="${this.getAttribute('link')}" title="YouTube video player"` +
			`		  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"` +
			`			allowfullscreen class="image_vw"></iframe>` +
			`	</div>` +
			`</div> `;
	}
}
customElements.define('qa-component', Question_Answer);
customElements.define('game-component', Game);
customElements.define('media-component', Media);