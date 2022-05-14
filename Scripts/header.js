"use strict"

function header(){
	let url = location.href;
	let result = url.split("denki_homepage");
	let pass;
	let backpass;
	if (result[1].indexOf("html/") > -1){
		pass = "./";
		backpass = "../";
	} else {
		pass = "./html/";
		backpass = "./";
	}
	// alert(backpass);
	document.getElementById("header").innerHTML = '<header>'+
'	<div class="header_1">'+
`		<img src="${backpass}photos/header_.png"} class="header">`+
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
'</header>"'
}
header();