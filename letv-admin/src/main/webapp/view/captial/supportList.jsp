<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib  prefix="security" uri="http://www.springframework.org/security/tags" %>
<%
String path = request.getContextPath();
%>
<script type="text/javascript">
	var path = "<%=path%>";
</script>
<script type="text/javascript" src="<%=path%>/js/captial/supportList.js"></script>
	<form id="list_search">
		<div class="seach_div">
			<div><label>投资单号:</label><input id="orderId" name="orderIdLike" type="text"/></div>
 			<div><label>领投人:</label><input id="leadInvestorName" name="leadInvestorName" type="text"/></div>
 			<div><label>投资人:</label><input id="s_support_user" name="supportUserLike" type="text"/></div>
			<div><label>投资人真实姓名:</label><input id="s_support_user_name" name="supportUserName" type="text"/></div>
			<div><label>投资状态:</label>
			<input id="payState" type="text" style="height: 24px;" name="payState" class="easyui-combobox" url="<%=path %>/dictionary/crowdfund_paystate.html" panelHeight="auto"/>
			</div>
			<div><label>订单状态:</label>
			<input id="searchState" type="text" style="height: 24px;" name="searchState" class="easyui-combobox" url="<%=path %>/dictionary/crowdfund_orderstate.html" panelHeight="auto"/>
			</div>
			<div><label>项目编号:</label><input name="loanNo" type="text"/></div>
			<div><label>投资时间:</label><input type="text" name="startInvestTime" class="Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',readOnly:true})"/> &nbsp;~ <input type="text" name="endInvestTime" class="Wdate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',readOnly:true})"/></div>
			
			<div class="psb" style="float:right;"><a id="searchBtn" class="easyui-linkbutton searchBtn">查询</a><input type="reset" class="easyui-linkbutton searchBtn" style="width:104px;height:28px;" value="重置"/></div>
		</div>
	</form>
	
	<table id="progectTable"></table>
	
	<security:authorize access="hasPermission(null, 'security.operation.finance_capitalManage_invest_export')">
		<input type="hidden" id="finance_capitalManage_invest_export"/>
	</security:authorize>