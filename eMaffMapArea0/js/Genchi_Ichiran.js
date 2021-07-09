jQuery(function ($) {
    $.getJSON("../json/Genchi_Ichiran.json", function(val){
        var wak = "<tr><th>現地確認名</th> <th>確認期間</th> <th>担当者</th><th>確認状況</th><th>進捗状況</th> <th>操作</th></tr>";

        for (i = 0; i < val.length; i++) {
            wak += "<tr>\r\n";
            for (j = 0; j < val[i].length; j++) {
                if (j == 5) {
                    wak += "<th><a href='現地確認地図機能.html'>地図</a>";
                    wak += "<a href='4_03_002_現地確認画面（更新）.html'> 詳細 </a>";
                    wak += "<label class='open' for='pop-up'>削除</label>";
                    wak += "<input type='checkbox' id='pop-up'>";
                    wak += "<div class='overlay'>";
                    wak += "<div class='window'>";
                    wak += "<label class='close' for='pop-up'>×</label>";
                    wak += "<p class='text'>削除されました。</p>";
                    wak += "</th>\r\n"
               } else {
                    wak += "<th>"
                    wak += val[i][j];
                    wak += "</th>\r\n";
                }
            }
            wak += "</tr>";
        }
        $("#genchi_ichiran").append(wak);

		// 「全選択」する
		$('#all').on('click', function() {
			$("input[name='list_chk']").prop('checked', this.checked);
		});
	  
    });
});

/*
wak += "<th><a href='現地確認地図機能.html'>地図</a>";
wak += "<a href='4_03_002_現地確認画面（更新）.html'>詳細</a>";
wak += "<label class='open' for='pop-up'>削除</label>";
wak += "<input type='checkbox' id='pop-up'>";
wak += "<div class='overlay'>";
wak += "<div class='window'>";
wak += "<label class='close' for='pop-up'>×</label>";
wak += "<p class='text'>削除されました。</p>";
*/