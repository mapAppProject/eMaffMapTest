jQuery(function ($) {

	$("#backbutton").on("click", function() {
		// button切替
		$('input[name=checkType]').val(['2']);
		$('input[name=check]').val(['2']);
	});

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

	$.getJSON("../json/data.json", function(yasai){
		var wak = "";
		for (i = 0; i < yasai.length; i++) {
			wak += "<tr>\n";
		
			for (j = 0; j < yasai[i].length; j++) {
				wak += "<td>";
				wak += yasai[i][j];
				wak += "</td>\n";
			}
			wak += "</tr>\n";
		}
		$("#listbox").append(wak);
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
	
	$(function(){
		$.getJSON("../json/Map_dataList.json", function(val){

			// 無条件で全件表示
			suidenTable(val);

			// B市現地確認（）
			// mapSearchView[1]が「true」のデータだけを結果に含る（想定件数：5件）
			var table_genchi = val.filter(function(item, index){
				if (item.mapSearchView[1]) return true;
			});

			// B市現地確認の表示
			genchiTable(table_genchi);

			// 「全選択」する
			$('#all1').on('click', function() {
				$("input[name='chk1[]']").prop('checked', this.checked);
			});

			// 「全選択」する
			$('#all2').on('click', function() {
				$("input[name='chk2[]']").prop('checked', this.checked);
			});

		});
	});

	//水田台帳の表示
	function suidenTable(e){
		var table_result = e;

		var wak = "";

		wak += "<thead>";
		wak += "<tr>";
		wak += "<th class='data_list data_listSize1'><input type='checkbox' id='all1'>地番</th>";
		wak += "<th class='data_list data_listSize7 sakuki'>作期</th>";
		wak += "<th class='data_list data_listSize8 sakumotsumei'>作物</th>";
		wak += "<th class='data_list data_listSize2'>地目</th>";
		wak += "<th class='data_list data_listSize3' style='text-align: left'>面積(a)</th>";
//		wak += "<th class='data_list data_listSize4'>所有者</th>";
//		wak += "<th class='data_list data_listSize5'>耕作者</th>";
		wak += "<th class='data_list data_listSize6'></th>";
		wak += "</tr>";
		wak += "</thead>";

		wak += "<tbody>";
			
		for (i = 0; i < table_result.length; i++) {
			wak += "<tr id='list1tr" + (i + 1) + "'>\r\n";
			wak += "<td class='data_list data_listSize1'>";
			wak += "<input type='checkbox' id='check2Td" + (i + 1) +"' name='chk1[]' value='" + (i + 1) + "'><a style='cursor: default;' href='#'>"
//			wak += val[i]["grdNumber"];
			wak += table_result[i].groundNumber[0];
			wak += "</a></td>\r\n";

			wak += "<td class='data_list data_listSize7 sakuki'>";
			wak += table_result[i]["Sakuki"];
			wak += "</td>\r\n";

			wak += "<td class='data_list data_listSize8 sakumotsumei'>";
			wak += table_result[i]["SakumotsuMei"];
			wak += "</td>\r\n";

			wak += "<td class='data_list data_listSize2'>";
//			wak += val[i]["siteEarth"];
			wak += table_result[i]["Chimoku"];
			wak += "</td>\r\n";

			wak += "<td class='data_list data_listSize3'>";
//			wak += val[i]["area"];
			wak += table_result[i]["area"];
			wak += "</td>\r\n";

//			wak += "<td class='data_list data_listSize4'>";
//			wak += val[i]["owner"];
//			wak += "</td>\r\n";

//			wak += "<td class='data_list data_listSize5'>";
//			wak += val[i]["tillage"];
//			wak += "</td>\r\n";

			wak += "</tr>\r\n";
		}

		wak += "</tbody>\r\n";

		$("#suidenTable").append(wak);
	}

	//現地確認の表示
	function genchiTable(e){
		var table_result = e;

		var wak = "";

		wak += "<thead>";
		wak += "<tr>";
		wak += "<th class='data_list data_listSize1'><input type='checkbox' id='all1'>地番</th>";
		wak += "<th class='data_list data_listSize7 sakuki'>作期</th>";
		wak += "<th class='data_list data_listSize8 sakumotsumei'>作物</th>";
		wak += "<th class='data_list data_listSize2'>地目</th>";
		wak += "<th class='data_list data_listSize3' style='text-align: left'>面積(a)</th>";
//		wak += "<th class='data_list data_listSize4'>所有者</th>";
//		wak += "<th class='data_list data_listSize5'>耕作者</th>";
		wak += "<th class='data_list data_listSize6'></th>";
		wak += "</tr>";
		wak += "</thead>";

		wak += "<tbody>";
			
		for (i = 0; i < table_result.length; i++) {
			// toggleクラスを設置する行の判定（初期は非表示で追加を押すと表示される行）
//			if(table_result[i].mapSearchView[0] == false){
//				wak += "<tr id='list1tr" + (i + 1) + "' class='toggle'>\r\n";
//			} else {
//				wak += "<tr id='list1tr" + (i + 1) + "'>\r\n";
//			}
			wak += "<tr id='list1tr" + (i + 1) + "'>\r\n";
			wak += "<td class='data_list data_listSize1'>";
			wak += "<input type='checkbox' id='check2Td" + (i + 1) +"' name='chk2[]' value='" + (i + 1) + "'><a href='#area3' class='editmenu' data-toggle='tab' role='tab' aria-controls='area3'>"
//			wak += val[i]["grdNumber"];
			wak += table_result[i].groundNumber[0];
			wak += "</a></td>\r\n";

			wak += "<td class='data_list data_listSize7 sakuki'>";
			wak += table_result[i]["Sakuki"];
			wak += "</td>\r\n";

			wak += "<td class='data_list data_listSize8 sakumotsumei'>";
			wak += table_result[i]["SakumotsuMei"];
			wak += "</td>\r\n";

			wak += "<td class='data_list data_listSize2'>";
//			wak += val[i]["siteEarth"];
			wak += table_result[i]["Chimoku"];
			wak += "</td>\r\n";

			wak += "<td class='data_list data_listSize3'>";
//			wak += val[i]["area"];
			wak += table_result[i]["area"];
			wak += "</td>\r\n";

//			wak += "<td class='data_list data_listSize4'>";
//			wak += val[i]["owner"];
//			wak += "</td>\r\n";

//			wak += "<td class='data_list data_listSize5'>";
//			wak += val[i]["tillage"];
//			wak += "</td>\r\n";

			wak += "</tr>\r\n";
		}

		wak += "</tbody>\r\n";

		$("#genchiTable").append(wak);

		$(".editmenu").on("click", function(e){
			// button切替
			$('input[name=checkType]').val(['3']);
			$('input[name=check]').val(['3']);

			$('#backbutton').removeClass('active');
			

			console.log(e.originalEvent.currentTarget.firstChild.data);

			for (i = 0; i < table_result.length; i++) {
				console.log(table_result[i]["area"]);
				if(table_result[i]["groundNumber"][0] == e.originalEvent.currentTarget.firstChild.data){
					$("#grdNumber").val(table_result[i].groundNumber[0]);
					$("#country").val(table_result[i]["Chimoku"]);
					$("#menseki").val(table_result[i]["area"]);
					$("#user").val(table_result[i]["owner"]);
					$("#farmer").val(table_result[i]["tillage"]);
				}
			}

		});

	}

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

	$(function() {

		$("#genchiAdd").click(function() {

			$(".toggle").toggleClass('show');

			$("#searchCnt").html("検索結果 5件");

			// button切替
			$('input[name=checkType]').val(['2']);
			$('input[name=check]').val(['2']);
			$('#selectDataType1').removeClass('active');
			$('#selectDataType2').addClass('active');

			// 検索結果表示
			$("#searchResult").show();

			if(map.getSource('change')) {

				for(let i = 0; i < changeData.data.features.length; i ++) {
					tempData.data.features.push(changeData.data.features[i]);
				}
						
				if (map.getLayer('change_layer_frame')) map.removeLayer('change_layer_frame');
				if (map.getLayer('change_layer_middle')) map.removeLayer('change_layer_middle');

				map.removeSource('change');
				changeData = { type: 'geojson', data: { type: 'FeatureCollection', features:[]}};

				if (map.getLayer('genchi_layer_frame')) map.removeLayer('genchi_layer_frame');
				if (map.getLayer('genchi_layer_middle')) map.removeLayer('genchi_layer_middle');
				if(map.getSource('result')) map.removeSource('result');

				map.addSource('result1', tempData1);
				map.addSource('result2', tempData2);
				map.addSource('result3', tempData3);				

				map.addLayer({
					id: 'genchi_layer_frame1',
					type: 'circle',
					source: 'result1',
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

				map.addLayer({
					id: 'genchi_layer_frame2',
					type: 'circle',
					source: 'result2',
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

				map.addLayer({
					id: 'genchi_layer_frame3',
					type: 'circle',
					source: 'result3',
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
