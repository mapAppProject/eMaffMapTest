jQuery(function ($) {

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

	// PCでマウスホイールでのスクロール操作の制御
	$(function(){
		if($(".no-scroll").length) { 
			$(window).on('wheel',function(e){
				e.preventDefault();
			});
		} else {
			$(window).off('wheel');
		}
	});

	// モバイル端末でのタッチスクロール操作の制御
	$(function(){
		if($(".no-scroll").length) { 
			$(window).on('touchmove.noScroll',function(e){
				e.preventDefault();
			});
		} else {
			$(window).off('.noScroll');
		}
	});

	// 全てのスクロール操作の制御（ウィンドウ表示域で固定）
	$(function(){
		if($(".no-scroll").length) { 
			$("body").css('overflow','hidden');
		} else {
			$("body").css('overflow','auto');
		}
	});

    $("#add").on("click", function() {
      location.href= "./4_03_001_現地確認_進捗状況確認_02.html";
    });

	/* 水田台帳の検索結果表示*/
	$(function(){
		$.getJSON("../json/Map_dataList.json", function(val){

			// 無条件で全件表示
			var table_result = val;
			// status[resultStatus]が「非表示」であるデータを結果に含めない
//		var table_result = val.filter(function(item, index){
//			if (item.status[resultStatus] != "false") return true;
//		});

			var wak = "";

			wak += "<thead>";
			wak += "<tr>";
			wak += "<th class='data_list data_listSize1'><input type='checkbox' id='all1'>地番</th>";
			wak += "<th class='data_list data_listSize7 sakuki'>作期</th>";
			wak += "<th class='data_list data_listSize8 sakumotsumei'>作物</th>";
			wak += "<th class='data_list data_listSize2 chimoku'>地目</th>";
			wak += "<th class='data_list data_listSize3 area'>面積(a)</th>";
//			wak += "<th class='data_list data_listSize4'>所有者</th>";
//			wak += "<th class='data_list data_listSize5'>耕作者</th>";
			wak += "<th class='data_list data_listSize6'></th>";
			wak += "</tr>";
			wak += "</thead>";

			wak += "<tbody>";
			
			for (i = 0; i < table_result.length; i++) {
				wak += "<tr id='list1tr" + (i + 1) + "'>\r\n";
				wak += "<td class='data_list data_listSize1'>";
				wak += "<input type='checkbox' id='check2Td" + (i + 1) +"' name='chk1[]' value='" + (i + 1) + "'><a style='cursor: default;' href='#'>"
				wak += table_result[i].groundNumber[0];
				wak += "</a></td>\r\n";

				wak += "<td class='data_list data_listSize7 sakuki'>";
				wak += table_result[i]["Sakuki"];
				wak += "</td>\r\n";

				wak += "<td class='data_list data_listSize8 sakumotsumei'>";
				wak += table_result[i]["SakumotsuMei"];
				wak += "</td>\r\n";

				wak += "<td class='data_list data_listSize2 chimoku'>";
				wak += table_result[i]["Chimoku"];
				wak += "</td>\r\n";

				wak += "<td class='data_list data_listSize3'>";
				wak += table_result[i]["area"];
				wak += "</td>\r\n";

//				wak += "<td class='data_list data_listSize4'>";
//				wak += table_result[i]["owner"];
//				wak += "</td>\r\n";

//				wak += "<td class='data_list data_listSize5'>";
//				wak += table_result[i]["tillage"];
//				wak += "</td>\r\n";

				wak += "</tr>\r\n";
			}
			wak += "</tbody>\r\n";

			$("#suidenTable").append(wak);

			// 「全選択」する
			$('#all1').on('click', function() {
				$("input[name='chk1[]']").prop('checked', this.checked);
			});


			//B市現地確認（）
			// mapSearchView[0]が「true」のデータだけを結果に含る（想定件数：3件）
			var table_result2 = val.filter(function(item, index){
				if (item.mapSearchView[0]) return true;
			});

			var wak2 = "";

			wak2 += "<thead>";
			wak2 += "<tr>";
			wak2 += "<th class='data_list data_listSize1'><input type='checkbox' id='all2'>地番</th>";
			wak2 += "<th class='data_list data_listSize7 sakuki'>作期</th>";
			wak2 += "<th class='data_list data_listSize8 sakumotsumei'>作物</th>";
			wak2 += "<th class='data_list data_listSize2'>地目</th>";
			wak2 += "<th class='data_list data_listSize3'>面積(a)</th>";
//			wak2 += "<th class='data_list data_listSize4'>所有者</th>";
//			wak2 += "<th class='data_list data_listSize5'>耕作者</th>";
			wak2 += "<th class='data_list data_listSize6'></th>";
			wak2 += "</tr>";
			wak2 += "</thead>";

			wak2 += "<tbody>";

			for (i = 0; i < table_result2.length; i++) {
				wak2 += "<tr id='list2tr" + (i + 1) + "'>\r\n";
				wak2 += "<td class='data_list data_listSize1'>";
				wak2 += "<input type='checkbox' id='check2Td" + (i + 1) +"' name='chk2[]' value='" + (i + 1) + "'><a style='cursor: default;' href='#'>";
//				wak2 += val[i]["grdNumber"];

				console.log(i, table_result2[i]["mapDataId"]);
				console.log(table_result2[i]["groundNumber"][0]);

				wak2 += table_result2[i].groundNumber[0];
				wak2 += "</a></td>\r\n";

				wak2 += "<td class='data_list data_listSize7 sakuki'>";
				wak2 += table_result2[i]["Sakuki"];
				wak2 += "</td>\r\n";

				wak2 += "<td class='data_list data_listSize8 sakumotsumei'>";
				wak2 += table_result2[i]["SakumotsuMei"];
				wak2 += "</td>\r\n";

				wak2 += "<td class='data_list data_listSize2'>";
//				wak2 += val[i]["siteEarth"];
				wak2 += table_result2[i]["Chimoku"];
				wak2 += "</td>\r\n";

				wak2 += "<td class='data_list data_listSize3'>";
				wak2 += table_result2[i]["area"];
//				wak2 += table_result[i]["area"];
				wak2 += "</td>\r\n";

//				wak2 += "<td class='data_list data_listSize4'>";
//				wak2 += val[i]["owner"];
//				wak2 += "</td>\r\n";
//
//				wak2 += "<td class='data_list data_listSize5'>";
//				wak2 += val[i]["tillage"];
//				wak2 += "</td>\r\n";

				wak2 += "</tr>\r\n";
			}
			wak2 += "</tbody>\r\n";

			$("#genchiTable").append(wak2);

			// 「全選択」する
			$('#all2').on('click', function() {
				$("input[name='chk2[]']").prop('checked', this.checked);
			});

		});
	});
	
	var isOpenSideMenu = true;
    var pics_src = new Array("image/hamburger.png","image/close.png");
	var num = 0;

    $("#folding").on("click", function(){
       	if(!isOpenSideMenu){
   	        showSideMenu();
        }else{
      	    hideSideMenu();
   	    }
		document.getElementById("mypic").src=pics_src[num];
    });

    function showSideMenu(){
		num = 1;

		$("#sub_menu").animate(
        {
			"left": "70%"
      	});

        isOpenSideMenu = true;
   	}
    
	function hideSideMenu(){
		num = 0;

		$("#sub_menu").animate(
		{
			"left": "100%"
		});
   	    isOpenSideMenu = false;
    }

	var tempData = { type: 'geojson', data: { type: 'FeatureCollection', features:[]}};

	$(function() {
		$("#searchResult").hide();
		$("#genchiTable").hide();
		$("#noSearch").show();
		$("#noTable").show();

		$("#genchiAdd").click(function() {
			// button切替
			$('input[name=checkType]').val(['2']);
			$('input[name=check]').val(['2']);
			$('#selectDataType1').removeClass('active');
			$('#selectDataType2').addClass('active');

			// 検索結果表示
			$("#searchResult").show();
			$("#genchiTable").show();
			$("#noSearch").hide();
			$("#noTable").hide();

			if(map.getSource('change')) {

				for(let i = 0; i < changeData.data.features.length; i ++) {
					tempData.data.features.push(changeData.data.features[i]);
				}

				if (map.getLayer('change_layer_frame')) map.removeLayer('change_layer_frame');

				map.removeSource('change');
				changeData = { type: 'geojson', data: { type: 'FeatureCollection', features:[]}};

				if (map.getLayer('genchi_layer_frame')) map.removeLayer('genchi_layer_frame');
				if(map.getSource('result')) map.removeSource('result');

				map.addSource('result', tempData);
						
				map.addLayer({
					id: 'genchi_layer_frame',
					type: 'circle',
					source: 'result',
					paint:{
						'circle-radius': {
							'base': 1.75,
							'stops': [
								[12, 5],
								[22, 140]
							]
						},
						'circle-color': '#df1f1c'
					},
					'filter': ['==', '$type', 'Point']
				});
	
				$('[name="newtarget"]').prop('checked', true);
				$('#genchi_lebel').addClass('active');
				genchilayerSwitch = true;
			}
		});
	});

	$(function() {
    	$('.hamburger').click(function() {
	        $(this).toggleClass('active');

	        if ($(this).hasClass('active')) {
	            $('.globalMenuSp').addClass('active');
	        } else {
	            $('.globalMenuSp').removeClass('active');
	        }
	    });
	});
});
