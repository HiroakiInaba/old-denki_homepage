"use strict"

let url = location.href;//今いるとこのURLを取得する。
let result = url.split("denki_homepage");//denki_homepageでsplitする。
let pass;
let backpass;
//https://hiropen1414.github.io/denki_homepage/html/game.htmlこんな感じのurl
if (result[1].indexOf("html/") > -1) {//もしsplitした結果、urlの後ろが/html/(htmlはディレクトリ)なら、if分が０以上を返す。
	pass = "./";//即ちいまいる場所はhtmlディレクトリの中にいるので、他のファイルを参照するときには./~.htmlを、
	backpass = "../";//photoディレクトリやらindex.htmlは一つ上のディレクトリにあるので"../"を設定する。
} else {
	pass = "./html/";//さっきの逆。今はhtmlディレクトリにいないので、参照するファイルのpassに./html/を追加する。
	backpass = "./";
}

/*webコンポーネント*/

class Myheader extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = '<header>' +
			'	<div class="header_1">' +
			`		<img src="${backpass}photos/other/header_.png" alt="[Get Picture]"} class="header">` +
			'		<ul class="ddmenu">' +
			`			<li><a href="${backpass}index.html" target="_self">HOME</a></li>` +
			'			<li><a href="#" target="_self">作品一覧</a>' +
			'				<ul type="sqare">' +
			`					<li><a href="${pass}game.html" target="_self">ゲーム作品</a></li>` +
			`					<li><a href="${pass}media.html" target="_self">メディア作品</a></li>` +
			`					<li><a href="${pass}else.html" target="_self">その他作品</a></li>` +
			'				</ul>' +
			'			</li>' +
			'			<li><a href="#" target="_self">未定</a>' +
			'				<ul type="sqare">' +

			'				</ul>' +
			'			</li>' +
			'			<li><a href="#" target="_self">未定</a>' +
			'				<ul type="sqare">' +

			'				</ul>' +
			'			</li>' +
			'			<li><a href="#">お問い合わせ</a>' +
			'				<ul type="sqare">' +
			`					<li><a href="${pass}qa.html">よくあるご質問</a></li>` +
			`					<li><a href="${pass}inquiry.html" target="_self">お問い合わせ先</a></li>` +
			'				</ul>' +
			'			</li>' +
			'		</ul>' +
			'	</div>' +
			'</header>'
	}

}

class Myfooter extends HTMLElement {
	constructor() {
		super();
		this.innerHTML =
			'<footer>' +
			'	<div class = "footer_sns">' +
			'	<p class = "sns">・SNS</p>' +
			'		<a href="https://twitter.com/meisei_denkibu" target="_blank">' +
			`		<img src="${backpass}photos/other/twitter_logo.png"} title="Twitterへジャンプする" class="tw" alt="">` +
			'		</a>' +
			'		<a href="https://www.youtube.com/channel/UC8mW4b5AgJsmDdX_oxM6t-w" target="_blank">' +
			`		<img src="${backpass}photos/other/youtube.png"} title="Youtubeへジャンプする" class="you" alt="">` +
			'		</a>' +
			'	</div>' +
			'	<div class="footer_link">' +
			'		<ul class="list">' +
			`			<li><a href="${backpass}index.html" target="_self">・トップページ</a></li>` +
			`			<li><a href="#" target="_self">・サイトマップ</a></li>` +
			`			<li><a href="${pass}inquiry.html" target="_self">・お問い合わせ</a></li>` +
			'		</ul>' +
			'	</div>' +

			`	<img src="${backpass}photos/other/download.jpg"} class="footer_" alt="">` +
		'	<p class = "op">〒191-8506 東京都日野市程久保2-1-1 Gmail:meisei.denkibu@gmail.com<br>Ponte棟325号室</p>' +
			'	</di>' +
			'</footer>'
	}

}
customElements.define('my-header', Myheader);
customElements.define('my-footer', Myfooter);