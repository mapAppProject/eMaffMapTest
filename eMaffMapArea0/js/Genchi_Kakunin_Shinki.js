jQuery(function ($) {
    $.getJSON("../json/Genchi_Kakunin_Shinki.json", function(val){
        var wak = "";
        for (i = 0; i < val.length; i++) {
            wak += "<tr>\r\n";
            for (j = 0; j < val[i].length; j++) {
                if (i == 0 && j == 0) {
                    wak += "<th class='lab_plan'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
                else if (i == 0 && j == 1) {
                    wak += "<th class='lab_rst1'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
                else if (i == 0 && j == 2) {
                    wak += "<th class='lab_define'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
                else if (i == 0 && j == 3) {
                    wak += "<th class='lab_rst2'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
                else if (i == 1 && j == 0) {
                    wak += "<th class='lab_plan'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
                else if (i == 1 && j == 1) {
                    wak += "<th class='lab_rst3'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
                else if (i == 1 && j == 2) {
                    wak += "<th class='lab_define'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                } else {
                    wak += "<th class='lab_rst4'>";
                    wak += val[i][j];
                    wak += "</th>\r\n";    
                }
            }
        }
        $("#genchi").append(wak);

});     
});