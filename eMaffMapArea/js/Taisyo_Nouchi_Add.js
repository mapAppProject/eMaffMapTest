jQuery(function ($) {

    $.getJSON("../json/Taisyo_Nouchi.json", function(val){
        var wak = "";
        for (i = 0; i < val.length; i++) {
			wak += "<tr>";
			wak += "<td class='data_list'>";
			wak += "<button id='irai" + (i + 1) + "' value='" + (i + 1) + "' type='button' class='syashin_irai btn-dark rounded-pill search_button' style='cursor: default; outline:none' >現地写真撮影依頼</button>";
			wak += "</td>\r\n";	
            for (j = 0; j < val[i].length; j++) {
                if(j == 0){
					wak += "<td class='data_list'>";                
                	wak += "<input type='checkbox' name='list_chk' value='0'>";
                	wak += " ";
					wak += "<a href='4_03_002_現地確認_結果詳細.html'>";
					wak += val[i][j];
					wak += "</a>";
					wak += "         ";
					wak += "<input type='image' src='../image/chiban.png' class='chiban' style='cursor: default;'>"; 
					wak += "         ";
					wak += "</td>\r\n";	
				}	
				else if (j == 11 || j == 12) {
					wak += "<td class='data_list area_value'>";                
					wak += val[i][j];
					wak += "</td>\r\n";	

				}				
				else if (j == 1) {
					wak += "<td id='kakunin_jyoukyou" + (i + 1) +"' class='data_list area_value'>";                
					wak += val[i][j];
					wak += "</td>\r\n";						
				}
				else {
					wak += "<td class='data_list'>";                
					wak += val[i][j];
					wak += "</td>\r\n";	
				}
            }
	        wak += "<td class='data_list'><img id='preview' class='upload_img'></td>";
			wak += "</tr>\r\n";
        }
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
