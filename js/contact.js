type="text/javascript"
timerID = setInterval('clock()',500); // 0.5秒毎にclock()を実行
function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}
function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth() + 1; // 月の値は0から始まるので1を加える
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	// 日時の文字列を作成
	var s = year + "年" + mon + "月" + day + "日 " + hour + "時" + min + "分" + sec + "秒"; 
	return s;
}