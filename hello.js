
    $(document).ready(function () {
        var a = document.getElementById("imap");
        var previous_mod_num;
        a.addEventListener("load",function(){
                // get the inner DOM of alpha.svg
                var svgDoc = a.contentDocument;
                // get the inner element by id
                
                $(".area", svgDoc).click(function(event){
                    event.preventDefault();
                    var form_id = event.target.id;
                    var form_id_2 = form_id.split("_");
                    var mod_num = form_id_2[2];
                    if(mod_num == previous_mod_num) return false;
                    
                    if(previous_mod_num!= undefined){
                        $("#map_info_" + previous_mod_num).css('display', 'none').animate({opacity:0, top: '50%'}, 0);
                        previous_mod_num = undefined;
                    }
                    
                    previous_mod_num = mod_num;
                    $("#map_info_" + mod_num).css('display', 'block').animate({opacity:1, top: '50%'}, 600);
                    $(".modal_form_close").click(function(){
                        $("#map_info_" + mod_num).css('display', 'none').animate({opacity:0, top: '50%'}, 200);
                     });
                });
        });
    });
