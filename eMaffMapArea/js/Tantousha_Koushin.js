jQuery(function ($) {
    $.getJSON("../json/Tantousha.json", function(val){
    
    /*
        $("#1").val(val[0][0]);
        $("#2").val(val[0][1]);
        // var start_date = new Date(val[0][2]);
        // var end_date = new Date(val[0][3]);
        $("#startdate").val(val[0][2]);
        $("#enddate").val(val[0][3]);
    */
        $("#1").val(val[0][0]);
        $("#2").val(val[0][1]);
        $("#3").val(val[0][2]);
        $("#4").val(val[0][3]);



        var wak = "";
        wak += "<tr><th height='30' style='text-align: left; white; background-color: #B0C4DE; width:350px; '>組織名</th>";
        wak += "<th height='30' style='text-align: left; white; background-color: #B0C4DE; width:350px; '>担当者名</th>";
        wak += "<th height='30' style='text-align: left; white; background-color: #B0C4DE; width:100px; '>操作</th></tr>"
        wak += "<tr>";
        
        for (j = 0; j < val[1].length; j++) {
            if (j == 0) {
                wak += "<td height='30' style='text-align: left; white; background-color: white;'>";
                wak += val[1][j];
                wak += "</td>\r\n";
            } else if (j == 1) {
                wak += "<td height='30' style='text-align: left; white; background-color: white;'>";
                wak += val[1][j];
                wak += "</td>\r\n";
            } else {
                return;
            }
        }
        wak += "<td height='30' style='text-align: left; white; background-color: white; width:100px;'>";
        wak += "<a href='javascript:void(0);' onclick='coldel(this);'>削除</a>";
        wak += "</td>\r\n";

        $("#tantousha_koushin").append(wak);
    });     
});



