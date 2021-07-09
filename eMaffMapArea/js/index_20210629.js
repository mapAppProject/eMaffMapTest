jQuery(function ($) {

	viewLayerInfo();

	viewGenchiInfo();

	ModalTantoushaList();

	// テーブルの行を追加する処理です
    $("#btn_add_user_list").on("click", function () { // #btn_add_user_listがクリックされたら処理を実行します

        $("#user_list tbody tr:first-child") // テーブルの一番初めの行を指定する
            .clone(true)                     // 指定した一番初めの行のHTML要素を複製する
            .appendTo("#user_list tbody");   // 複製した要素をtbodyに追加する
        
        
        $("#user_list tbody tr:last-child input").val(""); // 追加した行の値をクリアする
        
    });

    // テーブルの行を削除する処理です
    $(".btn_delete").on("click", function () { // .btn_deleteがクリックされたら処理を実行します

        $(this)             // クリックした削除ボタンを指定する
            .closest("tr")  // 指定した要素の直近のtr要素を取得する
            .remove();      // 取得した要素を削除する
        
    });

	// Jsonデータ読み込み
//    $.get("../json/data.json" , function(data) {
//      var ulObj = $("#demo"),
//      len = data.length;

//      for(var i = 0; i < len; i++) {
//        ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
//      }
//    });

	// 「全選択」する
	$('#all').on('click', function() {
		$("input[name='list_chk']").prop('checked', this.checked);
	});

	//現地確認行程情報の編集
	$('#genchi_edit').on('click', function() {
		if( $('#genchi_edit').hasClass('genchi_edit')){
			document.getElementById("genchi_edit").innerHTML="<img src='image/finish.svg' alt='編集完了'>編集完了";
			viewGenchiInfo(1);
		} else {
			document.getElementById("genchi_edit").innerHTML="<img src='image/edit.svg' alt='編集'>編集";
			viewGenchiInfo(2);
		}
		$('#genchi_edit').toggleClass('genchi_edit');
		$('#genchi_edit').toggleClass('genchi_edit_finish');
	});

	$('.genchi_edit_finish').on('click', function() {
		console.log('click2');
	});

	// 現地確認行程レイヤー情報出力
	// 20210625時点では内容はベタ書き
	function viewLayerInfo(){

		let wak = '';
		wak += "<colgroup><col></col><col></col><col></col><col></col></colgroup>";
		wak += "<tbody>";
		wak += "<tr>";
		wak += "<th>レイヤー名</th>";
		wak += "<td colspan='3'>B市C地区1</td>";
		wak += "</tr>";
		wak += "<tr>";
		wak += "<th>編集ステータス</th>";
		wak += "<td colspan='3'>承認済</td>";
		wak += "</tr>";
		wak += "<tr>";
		wak += "<th>レイヤー種別</th>";
		wak += "<td>編集中農地情報</td>";
		wak += "<th>台帳種別</th>";
		wak += "<td>あいうえお台帳</td>";
		wak += "</tr>";
		wak += "<tr>";
		wak += "<th>編集開始者</th>";
		wak += "<td>編集 一郎</td>";
		wak += "<th>編集開始日</th>";
		wak += "<td>2021/04/01</td>";
		wak += "</tr>";
		wak += "<tr>";
		wak += "<th>編集終了者</th>";
		wak += "<td>編集 四郎</td>";
		wak += "<th>編集終了日</th>";
		wak += "<td>2021/04/30</td>";
		wak += "</tr>";
		wak += "</tbody>";

		$("#layerInfo").append(wak);
	}

	// 現地確認行程情報
	// 20210625時点では内容はベタ書き
	function viewGenchiInfo(e){

		var e = 1;
		var tableElement = ["B市現地確認1" , "水田台帳　現地確認（R3作付確認）", "確認中" , "2021/06/10", "2021/06/11","8","編集 四郎",true];

		let wak = '';
		wak += "<colgroup><col></col><col></col><col></col><col></col></colgroup>";
		wak += "<tbody>";
		wak += "<tr>";
		wak += "<th>現地確認行程名</th>";
		wak += "<td colspan='3' class='GenchiInfoKoutei'>";
		if (e == 1){
			wak += "<input type='text' value='" + tableElement[0] + "'>";
		} else {
			wak += tableElement[0];
		}
		wak += "</td>";
		wak += "</tr>";
		wak += "<tr>";
		wak += "<th>現地確認要領</th>";
		wak += "<td colspan='3' class='GenchiInfoYouryou'>";
		if (e == 1){
			wak += "<input type='text' value='" + tableElement[1] + "'>";
		} else {
			wak += tableElement[1];
		}
		wak += "</td>";
		wak += "</tr>";
		wak += "<tr>";
		wak += "<th>日程</th>";
		wak += "<td class='GenchiInfoDay'>";
		if (e == 1){
			wak += "<input type='date' value='" + tableElement[3].split('/').join('-')  + "'> ～ <input type='date' value='" + tableElement[4].split('/').join('-') + "'>";
		} else {
			wak += tableElement[3] + " ～ " + tableElement[4];
		}
		wak += "</td>";
		wak += "<th>確認状況</th>";
		wak += "<td class='GenchiInfoStatus'>";
//		if (e == 1){
//			wak += "<select>";
//			wak += "<option value='準備中'>準備中</option>";
//			wak += "<option value='" + tableElement[2] + "' selected>" + tableElement[2] + "</option>";
//			wak += "<option value='現地確認期限切れ'>現地確認期限切れ</option>";
//			wak += "<option value='写真撮影期限切れ'>写真撮影期限切れ</option>";
//			wak += "<option value='写真撮影済'>写真撮影済</option>";
//			wak += "<option value='確認済'>確認済</option>";
//			wak += "<option value='承認済'>承認済</option>";
//			 wak += "</select>";
//			} else {
			wak += tableElement[2];
//		}
		wak += "</td>";
		wak += "</tr>";
//		wak += "<tr>";
//		wak += "<th>対象農地数</th>";
//		wak += "<td class='GenchiInfoNouchicount'>";
//		if (e == 1){
//			wak += "<input type='text' value='" + tableElement[5] + "'>";
//		} else {
//			wak += tableElement[5];
//		}
//		wak += "</td>";
//		wak += "</tr>";
//		wak += "<tr>";
//		wak += "<th>編集終了者</th>";
//		wak += "<td class='GenchiInfoHensyu'>";
//		if (e == 1){
//			wak += "<input type='text' value='" + tableElement[6] + "'>";
//		} else {
//			wak += tableElement[6];
//		}
//		wak += "<th>要注意農地</th>";
//		wak += "<td class='GenchiInfoattention'>";
//		if (e == 1){
//			wak += "<select>";
//			if(tableElement[7]){
//				wak += "<option value='あり' selected>あり</option>";
//				wak += "<option value='なし'>-</option>";
//			} else {
//				wak += "<option value='あり'>あり</option>";
//				wak += "<option value='なし' selected>-</option>";
//			}
//			wak += "</select>";
//		} else {
//			if(tableElement[7]){
//				wak += 'あり';
//			} else {
//				wak += '-';
//			}
//		}
//		wak += "</td>";
//		wak += "</tr>";
		wak += "</tbody>";

		document.getElementById("genchi").innerHTML = wak;
//		$("#genchi").append(wak);
	}

	/*担当者リスト（モーダル用）*/
	function ModalTantoushaList(){
		$.getJSON("../json/TantoushaList.json", function(val){
			var wak = "";

			wak += "<tr>";
			wak += "<th class='data_list'><input type='checkbox' id='allModal'>　組織名</th>";
			wak += "<th class='data_list'>ID</th>";
			wak += "<th class='data_list'>氏名</th>";
			wak += "<th class='data_list'>審査者区分</th>";
			wak += "</tr>";

			

			for (i = 0; i < val.length; i++) {
				wak += "<tr>\r\n";
				wak += "<td class='data_list'><input type='checkbox' name='chkModal[]' value='A'>";
				wak += "　　";
				wak += val[i]["soshiki"];
				wak += "</td>\r\n";

				wak += "<td class='data_list'>";
				wak += val[i]["id"];
				wak += "</td>\r\n";

				wak += "<td class='data_list'>";
				wak += val[i]["shimei"];
				wak += "</td>\r\n";

				wak += "<td class='data_list'>";
				wak += val[i]["level"];
				wak += "</td>\r\n";
				wak += "</tr>\r\n";
			}
			$("#modalTantoushaList").append(wak);

			// 「全選択」する
			$('#allModal').on('click', function() {
				$("input[name='chkModal[]']").prop('checked', this.checked);
			});
	  
		});
	}

});
