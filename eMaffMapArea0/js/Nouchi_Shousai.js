jQuery(function ($) {
	$.getJSON("../json/Map_dataList.json", function(val){

		let i = 0;
		var wak = "";
		wak += "<tr>\r\n";
		wak += "<th>申請年度</th><td>" + val[i]["year"] + "</td>";
		wak += "<th>農地の番号(耕地番号)</th><td>" + val[i]["kouchiId"] + "</td>";
		wak += "</tr>\r\n<tr>\r\n";
		wak += "<th>農地の番号（分筆番号）</th><td>" + val[i]["BunhitsuId"] + "</td>";
		wak += "<th>地名・地番、大字、字、集落地番</th><td>" + val[i]["groundNumber"][1] + "</td>";
		wak += "</tr>\r\n<tr>\r\n";
		wak += "<th>住所コード</th><td>" + val[i]["addressCode"] + "</td>";
		wak += "<th>交付対象農地区分</th><td>" + val[i]["nouchiKubun"] + "</td>";
		wak += "</tr>\r\n<tr>\r\n";
		wak += "<th>作期</th><td>" + val[i]["Sakuki"] + "</td>";
		wak += "<th>作物</th><td>" + val[i]["SakumotsuMei"] + "</td>";
		wak += "</tr>\r\n<tr>\r\n";
		wak += "<th>地目</th><td>" + val[i]["Chimoku"] + "</td>";
		wak += "<th>収量等級</th><td>" + val[i]["rank"] + "</td>";
		wak += "</tr>\r\n<tr>\r\n";
		wak += "<th>水稲品種区分</th><td>" + val[i]["riceType"] + "</td>";
		wak += "<th>面積（本地面積）(a)</th><td>" + val[i]["localArea"] + "</td>";
		wak += "</tr>\r\n<tr>\r\n";
		wak += "<th>作物作付面積(a)</th><td>" + val[i]["cropArea"] + "</td>";
        wak += "<th>要注意農地</th>";
		wak += "<td style='height: 29px; padding:0px'>";
        wak += "<select class='custom-select d-block' style='height: 29px; padding:0px;' id='select1' required>";

		if(val[i]["attention"] == "要注意"){
			wak += "<option selected>要注意</option>";
			wak += "<option>-</option>";
		} else{
			wak += "<option>要注意</option>";
			wak += "<option selected>-</option>";
		}
		wak += "</select>";
        wak += "</td>";
		wak += "</tr>\r\n<tr>\r\n";
        wak += "<th>・・・</th>";
        wak += "<td>・・・</td>";
        wak += "<th>・・・</th>";
        wak += "<td>・・・</td>";
        wak += "</tr>\r\n";

        $("#nouchi_shousai").append(wak);
	});     
});