jQuery(function ($) {
    $.getJSON("../json/Genchi_Rireki.json", function(val){
        var wak = "";
        for (i = 0; i < val.length; i++) {
            wak += "<tr>\r\n";
            for (j = 0; j < val[i].length; j++) {
                if (j == 0 || j == 1 || j == 2 || j == 3) {
                    wak += "<th class='lab_rst16'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                } else if (i > 0 && j == 5) {
                    wak += "<th class='lab_rst15'><a href='' >";
                    wak += val[i][j];
                    wak += "</a></th>\r\n";    
                } else {
                    wak += "<th class='lab_rst15'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
            }
        }
        $("#rireki").append(wak);

    });

    $(window).resize(saideMenuRisize);

    function saideMenuRisize(e) {
        var nH = $('#header').innerHeight();// ナビの高さを取得
		var wH = $(window).height();// 表示画面の高さを取得
	  
		var hH = wH - nH;// 表示画面とナビエリアの差分を算出
	  
        $('#sideRirekiList').css('height', hH + 'px');// 算出した差分をヘッダーエリアの高さに指定
    }

    // 高さの調整
	$(function(){
        saideMenuRisize();
    });
});