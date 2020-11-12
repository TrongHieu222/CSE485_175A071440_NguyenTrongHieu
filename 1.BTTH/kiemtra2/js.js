$(document).ready(
    function(){
        $("#ct").change(
            function(){
                var idsub = $(this).val();
                $.ajax({

                    //gửi dữ liệu đi
                    url : 'xulyindex.php',
                    type:'POST',
                    data:{ id : idsub},
                    //nhận dữ liệu về 
                    success:function(nhanve){
                        $("#sct").empty();
                        $("#sct").append(nhanve);
                    }
                }
                );

            }
        );

        $("#sct").change(
            function(){
                var idsct = $(this).val();
                $.ajax({

                    //gửi dữ liệu đi
                    url : 'xulydata.php',
                    type:'POST',
                    data:{ id : idsct},
                    //nhận dữ liệu về 
                    success:function(nhanve){
                        $("#data").empty();
                        $("#data").append(nhanve);
                    }
                }
                );

            }
        );







            }
    



    
    
);

// $(document).ready(function(){
//     $("#sel_depart").change(function(){
//     var deptid = $(this).val();
//     $.ajax({
//     url: 'getUsers.php',
//     type: 'post',
//     data: {depart:deptid},
//     dataType: 'json',
//     success:function(response){
//     var len = response.length;
//     $("#sel_user").empty();
//     for( var i = 0; i<len; i++){
//     var id = response[i]['id'];
//     var name = response[i]['name'];
//     $("#sel_user").append("<option value='"+id+"'>"+name+"

//     </option>");
//     }
//     }
//     });
//     });
//     });






