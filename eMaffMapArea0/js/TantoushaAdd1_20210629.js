jQuery(function ($) {

	$(function(){
		$.getJSON("../json/TantoushaList1.json", function(val){

//			let resultStatus = document.getElementById("result_Tantosha_List").value;

			var wak = "";

			wak += "<thead>";
			wak += "<tr>";
			wak += "<th><label><input type='checkbox' id='all'>組織名</label></th>";
			wak += "<th class='tantousya'>担当者名</th>";
			wak += "</tr>";
			wak += "</thead>";

//			if(resultStatus != 0){
				wak += "<tbody>";

				for (i = 0; i < val.length; i++) {
					wak += "<tr>\r\n";
					wak += "<td><label><input type='checkbox' name='chk[]' value='A'>";
					wak += val[i]["soshiki"];
					wak += "</label></td>\r\n";

					wak += "<td class='tantousya'>";
					wak += val[i]["tantousya"];
					wak += "</td>\r\n";

					wak += "</tr>\r\n";
				}
				wak += "</tbody>";
//			}
			$("#tantoushalist1").append(wak);

			// 「全選択」する
			$('#all').on('click', function() {
				$("input[name='chk[]']").prop('checked', this.checked);
			});	  
		});
	});
});
