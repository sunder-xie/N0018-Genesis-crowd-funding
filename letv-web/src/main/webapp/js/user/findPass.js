$(function(){
	$("#username").blur(function(){
		checkPhone($(this).val(), $(this).attr("id"));
	});
	$("#getVertify").click(getPhoneVali);//发送手机验证码
	$("#password").blur(function(){
		checkPass($(this).val(), $(this).attr("id"));
	});
	$("#password2").blur(function(){
		checkRePass($("#password").val(), $(this).val(), $(this).attr("id"));
	});
	$("#findPwdSubmit").click(findPass);//找回密码确认按钮事件
	
	$("#viliBtn").click(getPhoneVali);
});

//加载时图片更新
window.onload=function(){
	$("#imageStream2").click();
}
//验证手机号
function checkPhone(phone, id){
//	var isPhoneReg = /^1[3|4|5|8][0-9]{9}$/;
	var isPhoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
	if(!phone){
		AlertDialog.show("手机号不能为空", id, 0, 20);
		return false;
	}
	if(isPhoneReg.exec(phone)){
		AlertDialog.hide();
		return true;
	}else{
		AlertDialog.show("手机号不正确", id, 0, 20);
		return false;
	}
}
//验证密码
function checkPass(str,id){
	if(!str){
		AlertDialog.show("密码长度应该为6~16位", id, 0, 20);
		return false;
	}
	if(!/^(\w){6,16}$/.exec(str)){
		AlertDialog.show("密码长度应该为6~16位", id, 0, 20);
		return false;
	}else{
		AlertDialog.hide();
		return true;
	}
}
//验证重复密码
function checkRePass(str, str1, id){
	if(!str1){
		AlertDialog.show("两次输入密码不一致", id, -10, 20);
		return false;
	}
	if(str != str1){
		AlertDialog.show("两次输入密码不一致", id, -10, 20);
		return false;
	}else{
		AlertDialog.hide();
		return true;
	}
}
/*//获取手机验证码
function getPhoneVali(){
	if(checkPhone($("#username").val(), "username")){
		$.ajax({
			url: path + "/verifycode/checkMobileFindPwd.html",
			type: "post",
			dataType: "json",
			data: {"sendTarget": $("#username").val()},
			success: function(data){
				if(data["success"]){
					AlertDialog.hide();
					$("#regeter2Svali").show("slow");
					
					$("#sendViliimgBtn").unbind("click").click(function(){
						$("#getVertify").unbind("click").css({"cursor":"default","color":"#888"}).text("稍后可重发");
						$.ajax({
							url: path + "/verifycode/sendFindPwdVerifyCode.html",
							type: "post",
							dataType: "json",
							data: {
								"sendTarget": $("#username").val(),
								"valiCode": $("#regiterValiCode").val()
							},
							success: function(data){
								if(data["success"]){
									$("#regeter2Svali").fadeOut();
									$("#regiterValiCode").val("");
									$("#imageStream2").attr("src",path + "/security/securityCodeImage.html?" + new Date().getTime());
									$("#getVertify").unbind("click").css({"cursor":"default","color":"#888"}).text("60 秒后可重发");
									countDown(60, "getVertify", overFn);
									AlertDialog.hide();
									$("#findUserId").val(data["userId"]);
								}else{
									$("#getVertify").text("获取").css({"cursor":"pointer","color":"#55acef"});
									$("#regiterValiCode").val("");
									$("#imageStream2").attr("src",path + "/security/securityCodeImage.html?" + new Date().getTime());
									AlertDialog.show(data["msg"], "phoneCode", -10, 20);
								}
							},
							error: function(request){
								conosle.log("发送手机验证码异常");
							}
						});
					});
				}else{
					AlertDialog.show("手机号不存在！", "username", 0, 20);
//					$("#regiterTip").css("visibility","visible").text(data["msg"]);
				}
			},
			error: function(request){
				$("#regiterTip").css("visibility","visible").text("发送异常，请稍后再试");
				conosle.log("判断手机号重复异常");
			}
		});
	}
}*/

//获取手机验证码
function getPhoneVali(){
	if(checkPhone($("#username").val(), "username")){
		$.ajax({
			url: path + "/verifycode/checkMobileFindPwd.html",
			type: "post",
			dataType: "json",
			data: {"sendTarget": $("#username").val()},
			success: function(data){
				if(data["success"]){
					AlertDialog.hide();
//					$("#regeter2Svali").show("slow");
						if(Valify.isNull($("#regiterValiCode").val(),"regiterValiCode",0,10)){
//						$("#sendViliimgBtn").unbind("click").click(function(){
							$("#getVertify").unbind("click").css({"cursor":"default","color":"#888"}).text("稍后可重发");
							$.ajax({
								url: path + "/verifycode/sendFindPwdVerifyCode.html",
								type: "post",
								dataType: "json",
								data: {
									"sendTarget": $("#username").val(),
									"valiCode": $("#regiterValiCode").val()
								},
								success: function(data){
									if(data["success"]){
//										$("#regeter2Svali").fadeOut();
//										$("#regiterValiCode").val("");
//										$("#imageStream2").attr("src",path + "/security/securityCodeImage.html?" + new Date().getTime());
										$("#getVertify").unbind("click").css({"cursor":"default","color":"#888"}).text("60 秒后可重发");
										countDown(60, "getVertify", overFn);
										AlertDialog.hide();
										$("#findUserId").val(data["userId"]);
									}else{
										$("#getVertify").text("获取验证码").css({"cursor":"pointer","color":"#55acef"});
//									    $("#regiterValiCode").val("");
//										$("#imageStream2").attr("src",path + "/security/securityCodeImage.html?" + new Date().getTime());
										AlertDialog.show(data["msg"], "phoneCode", 0, 10);
									}
								},
								error: function(request){
									conosle.log("发送手机验证码异常");
								}
							});
//					    });
					}
				}else{
					AlertDialog.show("手机号不存在！", "username", 10, 20);
//				    $("#regiterTip").css("visibility","visible").text(data["msg"]);
				}
			},
			error: function(request){
				$("#regiterTip").css("visibility","visible").text("发送异常，请稍后再试");
				conosle.log("判断手机号重复异常");
			}
		});
	}
}






function overFn(){
	$("#getVertify").text("获取验证码").css({"cursor":"pointer","color":"#54ABE0"});
	$("#getVertify").click(getPhoneVali);
}
//找回密码
function findPass(){
	if(checkPhone($("#username").val(), "username")){
		if(Valify.valiCode2($("#regiterValiCode").val(),false,"regiterValiCode")){
			if(checkVertifyCode($("#phoneCode").val(), "phoneCode")){
				if(checkPass($("#password").val(), "password")){//密码验证
					if(checkRePass($("#password").val(), $("#password2").val(), "password2")){//重复密码验证
						$.ajax({
							url: path + "/user/findPassword.html",
							type: "post",
							dataType: "json",
							data: {
									"userId": $("#findUserId").val(),
									"verifyCode": $("#phoneCode").val(),
									"password1": $("#password").val(),
									"password2": $("#password2").val(),
									"sendTarget": $("#username").val()
								},
							success: function(data){
								if(data["msg"] == "success"){
									//后台注册验证成功，跳转
									AlertDialog.tip("修改成功！");
									setTimeout(function(){
										window.location.href = path + "/common/index.html";
									},2000);
								}else{
									AlertDialog.tip(data["msg"]);
								}
							},
							error: function(){
								console.log("变更密码异常");
							}
						});
					}
				}
			}
		}
	}
}
function checkVertifyCode(code, id){
	if(!code){
		AlertDialog.show("验证码不能为空", id, 10, 10);
		return false;
	}
	if(code.length != 6){
		AlertDialog.show("验证码应该为6位数字", id, 10, 10);
		return false;
	}
	if(!isNaN(code)){
		AlertDialog.hide();
		return true;
	}else{
		AlertDialog.show("验证码应该为纯数字", id, 10, 10);
		return false;
	}
}