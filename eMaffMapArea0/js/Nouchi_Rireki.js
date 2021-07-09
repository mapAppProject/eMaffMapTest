jQuery(function ($) {

	$(document).on('click', '.chiban', function(){
		location.href="現地確認地図機能.html";
	}
	);

    $.getJSON("../json/Nouchi_Rireki.json", function(val){
        var wak = "";
        for (i = 0; i < val.length; i++) {
            wak += "<tr>\r\n";
            for (j = 0; j < val[i].length; j++) {
                if (j == 0) {
                    wak += "<th class='update_date'>"
                    wak += val[i][j];
                    wak += "</th>\r\n";
                } else if (j == 1) {
                    wak += "<th class='update_name'>"
                    wak += val[i][j];
                    wak += "</th>\r\n";
                } else if (i == 0 && j == val[i].length - 1) {
                    wak += "<th class='cntrl'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";
                } else if (i > 0 && j == val[i].length - 1) {
                    wak += "<td class='cntrl'>";
                    wak += "<a href='現地確認地図機能.html'>地図 </a>";
                    wak += "<a href='4_03_002_現地確認_結果詳細.html'>詳細</a>";
                    wak += "</td>\r\n"
                } else {
                    wak += "<td>"
                    wak += val[i][j];
                    wak += "</td>\r\n";
                }
            }
            wak += "</tr>";
        }
        $("#nouchi_rireki").append(wak);
    });     
});

