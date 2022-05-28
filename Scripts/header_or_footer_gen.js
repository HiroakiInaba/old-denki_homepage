"use strict"

function header(){
	let url = location.href;//今いるとこのURLを取得する。
	let result = url.split("denki_homepage");//denki_homepageでsplitする。
	let pass;
	let backpass;
	//https://hiropen1414.github.io/denki_homepage/html/game.htmlこんな感じのurl
	if (result[1].indexOf("html/") > -1){//もしsplitした結果、urlの後ろが/html/(htmlはディレクトリ)なら、if分が０以上を返す。
		pass = "./";//即ちいまいる場所はhtmlディレクトリの中にいるので、他のファイルを参照するときには./~.htmlを、
		backpass = "../";//photoディレクトリやらindex.htmlは一つ上のディレクトリにあるので"../"を設定する。
	} else {
		pass = "./html/";//さっきの逆。今はhtmlディレクトリにいないので、参照するファイルのpassに./html/を追加する。
		backpass = "./";
	}
	// alert(backpass);
	document.getElementById("header").insertAdjacentHTML('afterbegin',
'<header>'+
'	<div class="header_1">'+
`		<img src="${backpass}photos/header_.png" alt="[Get Picture]"} class="header">`+
'		<ul class="ddmenu">'+
`			<li><a href="${backpass}index.html" target="_self">HOME</a></li>`+
'			<li><a href="#" target="_self">作品一覧</a>'+
'				<ul type="sqare">'+
`					<li><a href="${pass}game.html" target="_self">ゲーム作品</a></li>`+
`					<li><a href="${pass}music.html" target="_self">メディア作品</a></li>`+
`					<li><a href="${pass}else.html" target="_self">その他作品</a></li>`+
'				</ul>'+
'			</li>'+
'			<li><a href="#" target="_self">未定</a>'+
'				<ul type="sqare">'+
'					<li><a href="#">ハードウェア</a></li>'+
'					<li><a href="#">ソフトウェア</a></li>'+
'					<li><a href="#">ウェブサービス</a></li>'+
'				</ul>'+
'			</li>'+
'			<li><a href="#" target="_self">未定</a>'+
'				<ul type="sqare">'+
'					<li><a href="#">会社概要</a></li>'+
'					<li><a href="#">社長挨拶</a></li>'+
'					<li><a href="#">沿革</a></li>'+
'					<li><a href="#">所在地</a></li>'+
'				</ul>'+
'			</li>'+
'			<li><a href="#">お問い合わせ</a>'+
'				<ul type="sqare">'+
'					<li><a href="#">よくあるご質問</a></li>'+
'					<li><a href="#">お問い合わせ先</a></li>'+
'				</ul>'+
'			</li>'+
'		</ul>'+
'	</div>'+
'</header>');
}

function footer(){
	let url = location.href;//今いるとこのURLを取得する。
	let result = url.split("denki_homepage");//denki_homepageでsplitする。
	let pass;
	let backpass;
	//https://hiropen1414.github.io/denki_homepage/html/game.htmlこんな感じのurl
	if (result[1].indexOf("html/") > -1){//もしsplitした結果、urlの後ろが/html/(htmlはディレクトリ)なら、if分が０以上を返す。
		pass = "./";//即ちいまいる場所はhtmlディレクトリの中にいるので、他のファイルを参照するときには./~.htmlを、
		backpass = "../";//photoディレクトリやらindex.htmlは一つ上のディレクトリにあるので"../"を設定する。
	} else {
		pass = "./html/";//さっきの逆。今はhtmlディレクトリにいないので、参照するファイルのpassに./html/を追加する。
		backpass = "./";
	}
	// alert(backpass);
	document.getElementById("footer").insertAdjacentHTML('afterbegin',
'<footer>'+
'	<div class="footer_1">'+
'		<ul class="list">'+
`			<li><a href="${backpass}index.html" target="_self">・トップページ</a></li>`+
`			<li><a href="#" target="_self">・サイトマップ</a></li>`+
`			<li><a href="${pass}inquiry.html" target="_self">・お問い合わせ</a></li>`+
`			<li><p>SNS</p></li>`+
'		</ul>'+
`		<img src="${backpass}photos/download.jpg"} class="footer_">`+
'		<a href="https://twitter.com/meisei_denkibu" target="_blank">'+
`			<img src="${backpass}photos/twitter_logo.png"} title="Twitterへジャンプする" class="tw">`+
'		</a>'+
'		<a href="https://www.youtube.com/channel/UC8mW4b5AgJsmDdX_oxM6t-w" target="_blank">'+
`			<img src="${backpass}photos/youtube.png"} title="Youtubeへジャンプする" class="you">`+
'		</a>'+
'		<p class = "op">〒191-8506 東京都日野市程久保2-1-1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gmail:meisei.denkibu@gmail.com<br>Ponte棟	325号室</p>'+
'	</div>'+
'</footer>');
}

footer();
header();