jQuery(function ($) {
        $.getJSON("../json/Genchi_Kakunin.json", function(val){
            var wak = "";
            for (i = 0; i < val.length; i++) {
                wak += "<tr>\r\n";
                for (j = 0; j < val[i].length; j++) {
                    if (i == 0 && j == 0) {
                        wak += "<th>";
                        wak += val[i][j];
                        wak += "</th>\r\n";    
                    }
                    else if (i == 0 && j == 1) {
                        wak += "<td>";
                        wak += val[i][j];
                        wak += "</td>\r\n";    
                    }
                    else if (i == 0 && j == 2) {
                        wak += "<th>";
                        wak += val[i][j];
                        wak += "</th>\r\n";    
                    }
                    else if (i == 0 && j == 3) {
                        wak += "<td>";
                        wak += val[i][j];
                        wak += "</td>\r\n";    
                    }
                    else if (i == 1 && j == 0) {
                        wak += "<th>";
                        wak += val[i][j];
                        wak += "</th>\r\n";    
                    }
                    else if (i == 1 && j == 1) {
                        wak += "<td>";
                        wak += val[i][j];
                        wak += "</td>\r\n";    
                    }
                    else if (i == 1 && j == 2) {
                        wak += "<th>";
                        wak += val[i][j];
                        wak += "</th>\r\n";    
                    } else {
                        wak += "<td>";
                        wak += val[i][j];
                        wak += "</td>\r\n";    
                    }
                }
            }
            $("#genchi").append(wak);

    });     
});