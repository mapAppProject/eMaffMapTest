jQuery(function ($) {

	// 検索条件の表示
	$(function(){
		$.getJSON("../json/searchOption.json", function(val){
			var wak = "";
			wak += "<div class='row search_form_row'>\r\n";
			for (i = 0; i < val["Category"].length; i++) {

				if(val["Category"][i]["type"] == "checkbox"){
					wak += "<div class='col-lg-1 text-right'><label for='" + val["Category"][i]["id"] +"'>" + val["Category"][i]["name"] + "</label></div>\r\n";
					wak += "<div class='col-lg-11'>\r\n";
					const formid = val["Category"][i]["id"];
					for (j = 0; j < val[formid].length; j++) {
						wak += "<label><input type='checkbox' name='" + val["Category"][i]["id"] +"' value='" + val[formid][j]["value"] + "'>" + val[formid][j]["text"] +"</label>\r\n";
					}
				} else if(val["Category"][i]["type"] == "select"){
					wak += "<div class='col-lg-1 text-right'><label for='" + val["Category"][i]["id"] +"'>" + val["Category"][i]["name"] + "</label></div>\r\n";
					wak += "<div class='col-lg-5'>\r\n";
					wak += "<select class='custom-select d-block w-100 search_form_item' id='" + val["Category"][i]["id"] + "' required>\r\n";
					wak += "<option value=''></option>\r\n";
					const formid = val["Category"][i]["id"];
					for (j = 0; j < val[formid].length; j++) {
						wak += "<option value='" + val[formid][j]["value"] + "'>" + val[formid][j]["text"] +"</option>\r\n";
					}
					wak += "</select>\r\n";
				}else if(val["Category"][i]["type"] == "text"){
					wak += "<div class='col-lg-1 text-right'><label for='" + val["Category"][i]["id"] +"'>" + val["Category"][i]["name"] + "</label></div>\r\n";
					wak += "<div class='col-lg-5'>\r\n";
					wak += "<input type='text' class='form-control search_form_item' id='" + val["Category"][i]["id"] + "'>\r\n";
				}else{
					wak += "<div class='col-lg-1 text-right'><label for='" + val["Category"][i]["id"] +"'>" + val["Category"][i]["name"] + "</label></div>\r\n";
					wak += "<div class='col-lg-11'>\r\n";
					wak += "<input type='text' class='form-control search_form_item search_form_item_area' id='area1-1' placeholder='' value='' style='width: 6em; display: inline-block;' required>\r\n";
					wak += "<label for='area1-2'>～</label>\r\n";
					wak += "<input type='text' class='form-control search_form_item search_form_item_area' id='area1-2' placeholder='' value='' style='width: 6em; display: inline-block;' required>\r\n";
				}

				wak += "</div>\r\n";

			}

			wak += "</div>\r\n";

			wak += "<div class='text-center'>\r\n";
			wak += "<button type='button' class='btn-dark rounded-pill search_button disabled' style='margin: 10px auto 20px;'>検索</button>\r\n";
			wak += "</div>\r\n";


			$(".search_area_input").append(wak);

		});
	});

	$(document).on('click', '.chiban', function(){
		location.href="現地確認地図機能.html";
	});

	// 検索結果の表示
	$.getJSON("../json/Map_dataList.json", function(val){

		// hiddenフォームの値を取得
		let resultStatus = document.getElementById("result_Taisyo_Nouchi_Status").value;
		let resultgroundNumber = document.getElementById("result_Taisyo_Nouchi_groundNumber").value;

		// status[resultStatus]が「非表示」であるデータを結果に含めない
		var table_result = val.filter(function(item, index){
			if (item.status[resultStatus] != "非表示") return true;
		});

		var wak = "";

		wak += "<thead>";
		wak += "<tr>";
		wak += "<th><div>操作</div></th>";
		wak += "<th class='data_list operation'><label><input type='checkbox' id='all'>地番</label></th>";
		wak += "<th>確認状況</th>";
		wak += "<th>申請年度</th>";
		wak += "<th>農地の番号（耕地番号）</th>";
		wak += "<th>農地の番号（分筆番号）</th>";
		wak += "<th>住所コード</th>";
		wak += "<th>交付対象農地区分</th>";
		wak += "<th>作期</th>";
		wak += "<th>作物</th>";
		wak += "<th>地目</th>";
		wak += "<th>収量等級</th>";
		wak += "<th>水稲品種区分</th>";
		wak += "<th>面積（本地面積）(a)</th>";
		wak += "<th>作物作付面積(a)</th>";
		wak += "<th>要注意農地</th>";
		wak += "<th>写真</th>";
		wak += "</tr>";
		wak += "</thead>";
		wak += "<tbody>";

		for (i = 0; i < table_result.length; i++) {
			wak += "<tr>";
			wak += "<td class='data_list'>";
			wak += "<a href='AppImage.html' target='_blank' id='irai" + (i + 1) + "' value='" + (i + 1) + "' type='button' class='btn btn-dark syashin_irai rounded-pill' style='text-decoration: none;'>現地写真撮影依頼</a>";
//      wak += "<button id='irai" + (i + 1) + "' value='" + (i + 1) + "' type='button' class='btn btn-dark syashin_irai rounded-pill'>現地写真撮影依頼</button>";
			wak += "</td>\r\n";

			wak += "<td class='data_list operation'>";
			wak += "<input type='checkbox' name='list_chk' value='" + table_result[i]["mapDataId"] + "'>";

			// 地番はresultgroundNumber番目を表示
			wak += "<a href='4_03_002_現地確認_結果詳細.html'>" + table_result[i]["groundNumber"][resultgroundNumber] + "</a>";
			wak += "<input type='image' src='../image/chiban.svg' class='chiban'>";
			wak += "</td>\r\n";

			// 確認状況はresultStatus番目を表示
			wak += "<td id='kakunin_jyoukyou" + (i + 1) +"' class='data_list'>" + table_result[i]["status"][resultStatus] + "</td>\r\n";

			wak += "<td class='data_list'>" + table_result[i]["year"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["kouchiId"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["BunhitsuId"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["addressCode"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["nouchiKubun"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["Sakuki"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["SakumotsuMei"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["Chimoku"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["rank"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["riceType"] + "</td>\r\n";
			wak += "<td class='data_list area_value'>" + table_result[i]["localArea"] + "</td>\r\n";
			wak += "<td class='data_list area_value'>" + table_result[i]["cropArea"] + "</td>\r\n";
			wak += "<td class='data_list'>" + table_result[i]["attention"] + "</td>\r\n";

//			wak += "<td class='data_list'><img id='preview' class='upload_img'></td>";
			wak += "<td class='data_list'><img src='./image/shashin.png' id='preview' class='upload_img'><img src='./image/shashin.png' id='preview' class='upload_img'></td>";
			wak += "</tr>\r\n";
		}

		wak += "</tbody>";

		$("#taisyo_nouchi").append(wak);

		// 「全選択」する
		$('#all').on('click', function() {
			$("input[name='list_chk']").prop('checked', this.checked);
		});

		$('.syashin_irai').on('click', function(e) {
			var index = $("#" + e.target.id).val();
			document.getElementById("kakunin_jyoukyou" + index).textContent='写真撮影中';
		});

	});
});
