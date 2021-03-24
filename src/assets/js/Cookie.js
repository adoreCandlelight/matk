const axios = require('axios');

function setCookie(username,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = username+"="+cvalue+"; "+expires;
}
function getCookie(username){
	var name = username + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}

function checkCookie(){
	// 清除cookie 将日期设置为之前就可以
	// document.cookie = "cname=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	// console.log('1111')
	var uid=getCookie("cname");
	if (uid==""){
		// console.log('nothing!!!')
		
		//   获取username
		axios.get("/php/get_cname.php").then(
			(res)=>{
				uid = res.data.cname 
				// console.log(uid);
				setCookie("cname", uid, 7);
			}) .catch(function(err) {
				console.log(err)
			}
		);
	}
	else {
		console.log(uid)
	}	
}

export default { setCookie, getCookie, checkCookie }