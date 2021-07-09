jQuery(function ($) {
    $.getJSON("../json/Tantousha.json", function(val){

        $("#1").val(val[0][0]);
        $("#2").val(val[0][1]);
        // var start_date = new Date(val[0][2]);
        // var end_date = new Date(val[0][3]);
        $("#3").val(val[0][2]);
        $("#4").val(val[0][3]);

        var wak = "";
        for (j = 0; j < val[1].length; j++) {
            if (j == 0) {
                wak += "<div class='col-sm-4 border border-dark bg-white text-center'>";
                wak += val[1][j];
                wak += "</div>\r\n";
            } else if (j == 1) {
                wak += "<div class='col-sm-4 border border-dark bg-white text-center'>";
                wak += val[1][j];
                wak += "</div>\r\n";
            } else {
                return;
            }
        }
        wak += "<div class='col-sm-2 border border-dark bg-white text-center'>";
        wak += "<button class='btn_delete bg-primary text-white text-center' type='button'>";
        wak += "削除";
        wak += "</button>";
        wak += "</div>\r\n";
        $("#tantousha").append(wak);
    });     
});

