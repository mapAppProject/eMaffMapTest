jQuery(function ($) {

	$(function(){
		$.getJSON("../json/TantoushaList.json", function(val){
			var wak = "";

			wak += "<tr>";
			wak += "<th class='data_list'><input type='checkbox' id='all'>　組織名</th>";
			wak += "<th class='data_list'>ID</th>";
			wak += "<th class='data_list'>氏名</th>";
			wak += "<th class='data_list'>審査者区分</th>";
			wak += "</tr>";
			
			for (i = 0; i < val.length; i++) {
				wak += "<tr>\r\n";
				wak += "<td class='data_list'><input type='checkbox' name='chk[]' value='A'>";
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
			$("#tantoushalist").append(wak);

			// 「全選択」する
			$('#all').on('click', function() {
				$("input[name='chk[]']").prop('checked', this.checked);
			});
	  
		});
	});
});
