// 音乐链接
yylj = [
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7056719102466902815.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7056000800220580621.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7056349617094380296.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7050812321383320357.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7050419223077489445.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7049672527685733157.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7046693289419934500.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7058129749473856260.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7048102197476821797.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7017780550656101128.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7009959280229354270.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7009533167384136456.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7004772014947142436.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/b252062b495e411290f1e543b43f9024.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/1658151730993197.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/f8dcfa18a5094d94b8b30270f901b119',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/6992143915344284430.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7057863652535323429.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7057505165680462595.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7056744046169049869.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7055915787085073185.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7055261087289199373.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7042633153114114829.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7039324483584314120.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/1643631117378572.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6868863745485998861.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/00416591338ad21f18e94314ba06b80e.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6992143915344284430.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7057066415949351684.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/6933148324284205838.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/6939008554707815175.mp3',
	'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003QdSfC0Zj6yn.m4a?guid=undefined&vkey=B4EB562A7DA3C792251F04CA656D2CC91294E4FE0285E4D8556548DE0FB27C6B375A96D84912876EB7C962454060A322AEEAC292570EBC1F&uin=&fromtag=38',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7000926548345883399.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6911341770022980360.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/6900192427273964301.mp3',
	'https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/6861515191448881934.mp3',
	'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6998815360321374983.mp3'
];
// console.log(yylj);
let sjsz = Math.floor(Math.random() * yylj.length);
console.log('这是音乐列表内的第' + sjsz + '首音乐');
document.write('<audio' + ' src=' + '"' + yylj[sjsz] + '"' + ' id="music" autoplay>你的渣渣浏览器不支持</audio>');
document.write('<div class="music dh-xz"><i class="iconfont icon-yinle"></i></div>');
let yydh = document.getElementsByClassName('music')[0];
let yy = document.getElementById('music');

yy.onended = ()=> {
	let sjsz = Math.floor(Math.random() * yylj.length)
	yy.src = yylj[sjsz];
	console.log('这是音乐列表内的第' + sjsz + '首音乐');
};

// 音乐按钮
let sz = '0';
yydh.onclick = () => {
	sz++;
	// 暂停
	if (sz == '1') {
		yydh.className = 'music';
		yy.pause();
	};
	// 开始
	if (sz == '2') {
		yydh.className = 'music dh-xz';
		yy.play();
		sz = '0';
	};
};