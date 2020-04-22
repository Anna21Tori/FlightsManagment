var UI={
    click: function(main){
               var obj_edit;
          //choose Clients panel
               $( "#clients" ).on("click", function () {
                    $("#black").css("display","block");
                    $("#managment-div").css("display","block");
                    Database.methods.createListOfClients()
                    .done(function(response) {
                            main.createListClients(response);
                    })
                    .fail(function() {
                            console.warn('error');
                    }) 
                })
        //choose Flights panel
                $( "#flights" ).on("click", function () {
                    $("#black").css("display","block");
                    $("#managment-flights-div").css("display","block");
                    Database.methods.createListOfFlights()
                    .done(function(response) {
                        main.createListFlights(response);
                    })
                    .fail(function() {
                        console.warn('error');
                    })   
                })
        //close Clients panel
                $("#close-list-clients").on("click", function(){
                   $("#black").css("display","none");
                   $("#managment-div").css("display","none");
                   $("#content-list-clients").empty();        
               })
        //close Flights panel
                $("#close-list-flights").on("click", function(){
                   $("#black").css("display","none");
                   $("#managment-flights-div").css("display","none");
                   $("#content-list-flights").empty();    
               })
      //Open panel, option add new Client to database
               $("#add-client").on("click", function(){   
                   $("#managment-div").css("display","none");
                   $("#add-client-panel").css("display","block");
               })
     //Open panel, option add new Flight to database       
               $("#add-flight").on("click", function(){
                   $("#managment-flights-div").css("display","none");
                   $("#add-flight-panel").css("display","block");
               })
       //add client to database        
               $("#add-client-to-database").on("click", function(){
                      var date = new Date($('#date-of-birth-client').val()); // get data from form
                      var obj={
                           surname:$("#surname").val(),
                           name: $("#fisrtname").val(),
                           country:$("#country").val() ,
                           gender: $("#form-new-client input[type='radio']:checked").val(),
                           day: date.getDate(),
                           month: date.getMonth() + 1,
                           year: date.getFullYear(),
                           note: $("#note-client").val(),
                      }                      
                      Database.methods.AddNewClient(obj)  //sent data 
                      $("#content-list-clients").empty();
                      $("#black").css("display", "none");
                      $("#add-client-panel").css("display","none");
                      document.getElementById("form-new-client").reset();  //reset form
                })
               
               $("#add-flight-to-database").on("click", function(){
                    var DateFlight = new Date($('#date-of-flight-client').val()); //get data
                    var DateArrival = new Date($('#date-of-arrival-client').val()); //get data
                    var TFlight = $("#time-flight").val().split(":") //convert time to array
                    var TArrive = $("#time-arrival").val().split(":") //convert time to array
                    var obj={
                           seats:parseInt($("#seats-add").val()),
                           price:parseInt($("#price-add").val()),
                           dayflight: DateFlight.getDate(),
                           monthflight:DateFlight.getMonth() + 1,
                           yearflight:DateFlight.getFullYear(),
                           dayarrival:DateArrival.getDate(),
                           montharrival:DateArrival.getMonth() + 1,
                           yeararrival:DateArrival.getFullYear(),
                           hourflight:parseInt(TFlight[0]),
                           minuteflight:parseInt(TFlight[1]),
                           hourarrival:parseInt(TArrive[0]),
                           minutearrival:parseInt(TArrive[1]),
                    }
                    Database.methods.AddNewFlight(obj) //sent data
                    $("#content-list-flights").empty();
                    $("#black").css("display", "none");
                    $("#add-flight-panel").css("display","none");
                    document.getElementById("form-new-flight").reset(); //reset form  
                })
            //close panel add client
                $("#close-panel-add-client").on("click", function(){
                    document.getElementById("form-new-client").reset();
                    $("#managment-div").css("display","block");
                    $("#add-client-panel").css("display","none");
                })
          //close panel add flight  
               $("#close-panel-add-flight").on("click", function(){
                   document.getElementById("form-new-flight").reset();
                   $("#managment-flights-div").css("display","block");
                   $("#add-flight-panel").css("display","none");
             })
          //delete client
               $("body").on("click", ".delete", function(){
                    var iteam = event.target.parentElement.parentElement
                    obj = {ID: $(this).val()}
                    $.post("php/delClient.php", obj, function(result){});
                    $(iteam).empty();
                    $(iteam).css("display", "none");       
                })
        
        //delete flight
                $("body").on("click", ".delete-flight", function(){
                    var iteam = event.target.parentElement.parentElement
                    obj = {ID:$(this).val()}
                    $.post("php/delFlight.php", obj, function(result){});
                    $(iteam).empty();
                    $(iteam).css("display", "none");       
                })
            //open edit Client panel for every position
                $("body").on("click", ".edit", function(){
                    var iteam = event.target.parentElement.parentElement
                    var id = $(this).val()
                    var action
                    var element
                    var alt =$(this).attr("alt")
                    $("#dark-black").css("display", "block")
                    element=$(this).parent().children()
                   if(alt=="edit-surname"){
                       action="surname"
                       $("#edit-surname-panel").css("display", "block")
                   }else if(alt =="edit-name"){
                       action="name"
                       $("#edit-name-panel").css("display", "block")
                   }else if(alt =="edit-country"){
                       action = "country"
                       $("#edit-country-panel").css("display", "block")
                   }else if(alt =="edit-gender"){
                       action="gender"
                       $("#edit-gender-panel").css("display", "block")
                   }else if(alt =="edit-date-birth"){
                       action="date-of-birth"
                       $("#edit-date-birth-panel").css("display", "block")
                   }
                   else if(alt =="edit-note-client"){
                       action="note"
                       element=$(this).parent().parent().children()
                       $("#edit-note-client-panel").css("display", "block");
                   }
                    obj_edit = {
                        ID:id,
                        act: action,
                        el:element,
                    }
                })
            //open edit Flight panel for every position
                $("body").on("click", ".edit-flight", function(){
                    var iteam = event.target.parentElement.parentElement
                    var id = $(this).val();
                    var action
                    var element
                    var alt =$(this).attr("alt");
                    $("#dark-black").css("display", "block")
                    element=$(this).parent().children()
                   if(alt=="edit-date-flight"){
                       action="dateflight"
                       $("#edit-date-flight-panel").css("display", "block");
                   }else if(alt =="edit-hour-flight"){
                       action="hourflight"
                       $("#edit-hour-flight-panel").css("display", "block");
                   }else if(alt =="edit-date-arrival"){
                       action = "datearrival"
                       $("#edit-date-arrival-panel").css("display", "block");
                   }else if(alt =="edit-hour-arrival"){
                       action="hourarrival"
                       $("#edit-hour-arrival-panel").css("display", "block");
                   }else if(alt =="edit-seats"){
                       action="seats"
                       $("#edit-seats-panel").css("display", "block");
                   }
                   else if(alt =="edit-price"){
                       action="price"
                       $("#edit-price-panel").css("display", "block");
                   }
                    obj_edit = {
                        ID:id,
                        act: action,
                        el:element,
                    }

                })
            //close edit panel
             $("body").on("click",".close-edit", function(){
                   main.closeEditPanel($(this).parent().parent())
               })   
        //update data for client or flight
              $("#edit-surname-panel").on("click",".save-edit-button", function(){
                    var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-surname").val(),
                    }
                     $.post("php/editClient.php", obj, function(result){});
                     exchangeContent(obj_edit.el[1],obj.value)
                     main.closeEditPanel($(this).parent())
               })
               $("#edit-name-panel").on("click",".save-edit-button", function(){
                    var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-fisrtname").val(),
                    }
                     $.post("php/editClient.php", obj, function(result){});
                        exchangeContent(obj_edit.el[1],obj.value)
                        main.closeEditPanel($(this).parent())     
               })
               $("#edit-country-panel").on("click",".save-edit-button", function(){
                    var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-country").val(),
                    }
                    $.post("php/editClient.php", obj, function(result){});
                        exchangeContent(obj_edit.el[1],obj.value)
                        main.closeEditPanel($(this).parent())
               })
               $("#edit-gender-panel").on("click",".save-edit-button", function(){
                    var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-gender-panel input[type='radio']:checked").val(),
                    }
                     $.post("php/editClient.php", obj, function(result){});
                       exchangeContent(obj_edit.el[1],obj.value)
                       main.closeEditPanel($(this).parent())
               })
               $("#edit-note-client-panel").on("click",".save-edit-button", function(){
                    var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-note-client").val(),
                    }
                     $.post("php/editClient.php", obj, function(result){});
                       exchangeContent(obj_edit.el[1],obj.value)
                       main.closeEditPanel($(this).parent())
               })
               $("#edit-date-birth-panel").on("click",".save-edit-button", function(){
                    var date = new Date($('#edit-date-of-birth-client').val());
                    var DayVal = date.getDate();
                    var MonthVal = date.getMonth() + 1;
                    var YearVal = date.getFullYear();
                    var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        day: DayVal,
                        year:YearVal,
                        month:MonthVal,
                    }
                     $.post("php/editClient.php", obj, function(result){});
                          DayVal = parseInt(DayVal);
                          MonthVal = parseInt(MonthVal);
                         if(DayVal<10)
                             DayVal = "0"+DayVal;
                         if(MonthVal<10)
                             MonthVal="0"+MonthVal;
                       exchangeContent(obj_edit.el[1],DayVal+'.'+MonthVal+'.'+YearVal)
                       main.closeEditPanel($(this).parent())
               })
              $("#edit-date-flight-panel").on("click",".save-edit-button", function(){
                   var date = getDate($("#edit-date-of-flight-client"))
                   var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        day: date.day,
                        year:date.year,
                        month:date.month,
                    }
                     $.post("php/editFlight.php", obj, function(result){});
                    exchangeContent(obj_edit.el[1],getDataFormat($("#edit-date-of-flight-client")))
                    main.closeEditPanel($(this).parent())
                   
               })
               $("#edit-date-arrival-panel").on("click",".save-edit-button", function(){
                   var date = getDate($("#edit-date-of-arrival-client"))
                   var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        day: date.day,
                        year:date.year,
                        month:date.month,
                    }
                    $.post("php/editFlight.php", obj, function(result){});
                    exchangeContent(obj_edit.el[1],getDataFormat($("#edit-date-of-arrival-client")))
                    main.closeEditPanel($(this).parent()) 
               })
               
                $("#edit-hour-flight-panel").on("click",".save-edit-button", function(){
                   var time = $("#edit-time-flight").val().split(":")
                   var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        hour: parseInt(time[0]),
                        minute:parseInt(time[1]),
                    }
                     $.post("php/editFlight.php", obj, function(result){});
                    exchangeContent(obj_edit.el[1],time[0]+":"+time[1])
                    main.closeEditPanel($(this).parent()) 
               })
                $("#edit-hour-arrival-panel").on("click",".save-edit-button", function(){
                   var time = $("#edit-time-arrival").val().split(":")
                   var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        hour: parseInt(time[0]),
                        minute:parseInt(time[1]),
                    }
                     $.post("php/editFlight.php", obj, function(result){});
                    exchangeContent(obj_edit.el[1],time[0]+":"+time[1])
                    main.closeEditPanel($(this).parent())
               })
               $("#edit-price-panel").on("click",".save-edit-button", function(){
                   var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-price-add").val(),
                    }
                    $.post("php/editFlight.php", obj, function(result){});
                    exchangeContent(obj_edit.el[1],$("#edit-price-add").val())
                    main.closeEditPanel($(this).parent())
               })
               $("#edit-seats-panel").on("click",".save-edit-button", function(){
                   var obj ={
                        id:obj_edit.ID,
                        act:obj_edit.act,
                        value:$("#edit-seats-add").val(),
                    }
                    $.post("php/editFlight.php", obj, function(result){});
                    exchangeContent(obj_edit.el[1],$("#edit-seats-add").val())
                    main.closeEditPanel($(this).parent())
               })
            //function convert date to object
                function getDate(el){
                        var dateTime = new window.Date(el.val());
                        var Date = {
                            day:dateTime.getDate(),
                            month:dateTime.getMonth() + 1,
                            year:dateTime.getFullYear(),
                        }
                        return Date
                }  
        //function convert date object to string 
        //first argument is date input
                function getDataFormat(el){
                    var date = getDate(el)
                    if(parseInt(date.day)<10)
                        date.day = "0"+date.day;
                    if(parseInt(date.month)<10)
                        date.month = "0"+date.month;
                    return date.day+"."+date.month+"."+date.year
                }
        //function exchange data after edit any information 
        //el is element that was edit
        //txt is new text
                 function exchangeContent(el, txt){
                     el.innerHTML = txt
                 }
        //show flights list for any client
                $("#managment-div").on("click",".list-flights-client", function(){
                    var el = $(this).parent().parent().children()
                    input = $(el[2]).children()[2]
                    if($(input).css("display")=="none"){
                        $(el[3]).empty();
                        $(input).css("display","block");
                    }
                    $(this).css("display","none")
                    var id = $(".list-flights-client").val();
                    var obj ={
                        ID:id,
                    }
                    Database.methods.GetKey(obj)
                    .done(function(response) {
                        main.createTableFlights(el[3],response)
                    })
                    .fail(function() {
                        console.warn('error');
                    })  
                })
        //show clients list for any flight
                $("#managment-flights-div").on("click",".list-clients-flight", function(){
                    var el = $(this).parent().parent().children()
                    input = $(el[1]).children()[2]
                    if($(input).css("display")=="none"){
                        $(el[2]).empty();
                        $(input).css("display","block");
                    }
                    $(this).css("display","none")
                    var id = $(".list-clients-flight").val();

                    var obj ={
                        ID:id,
                    }

                    Database.methods.GetKeyClient(obj)
                    .done(function(response) {
                        main.createTableClients(el[2],response)
                    })
                    .fail(function() {
                        console.warn('error');
                    })
            })
        //close list
             $("#managment-flights-div").on("click",".close-tr-client", function(){
                el = $(this).parent().parent().parent().children()
                input = $(el[1]).children()[1]
                 $(input).css("display","block");
                $(el[2]).empty();     
            })
        //close list
            $("#managment-div").on("click",".close-tr-flight", function(){
                el = $(this).parent().parent().parent().children()
                input = $(el[2]).children()[1]
                $(input).css("display","block");
                $(el[3]).empty(); 
            })
        //close panel with option add new flight for client
             $("#managment-div").on("click",".close-add-flight", function(){
                el = $(this).parent().parent().children()
                input = $(el[2]).children()[1]
                $(input).css("display","block");
                $(el[3]).empty();
            })
        //close panel with option add new client for flight
            $("#managment-flights-div").on("click",".close-add-client", function(){
                el = $(this).parent().parent().parent().children()
                input = $(el[1]).children()[2]
                $(input).css("display","block");
                $(el[2]).empty();   
            })
            $("#managment-div").on("click",".close-add-flight", function(){
                el = $(this).parent().parent().parent().children()
                input = $(el[2]).children()[2]
                $(input).css("display","block");
                $(el[3]).empty();   
            })
            $("#managment-flights-div").on("click",".close-del", function(){
                el = $(this).parent().parent()
                obj ={
                    ID :$(this).val()
                }
                 $.post("php/delRelation.php", obj, function(result){
                        $(el).empty();
                        $(el).css("display","none");         
                    });
            })
            $("#managment-div").on("click",".close-del", function(){
                el = $(this).parent().parent()
                obj ={
                    ID :$(this).val()
                }
                 $.post("php/delRelation.php", obj, function(result){
                        $(el).empty();
                        $(el).css("display","none");         
                    }); 
            })
            
            $("#managment-flights-div").on("click",".add-clients-flight", function(){
               el = $(this).parent().parent().children()
               input = $(el[1]).children()[1]
                if($(input).css("display")=="none"){
                    $(el[2]).empty();
                    $(input).css("display","block");
                }
               
               $(this).css("display","none")
                var id = $(this).val();
                var el =$(this).parent().parent().children()
                var obj ={
                    ID:id,
                }
                
                Database.methods.GetKeyClient(obj)
                .done(function(response) {
                    main.createAddTableClients(el[2],response,id)
                })
                .fail(function() {
                    console.warn('error');
                })
                
            })
               $("#managment-div").on("click",".add-flights-client", function(){
                    var el = $(this).parent().parent().children()
                    var id=$(this).val();
                    input = $(el[2]).children()[1]
                    if($(input).css("display")=="none"){
                        $(el[3]).empty();
                        $(input).css("display","block");
                    }

                   $(this).css("display","none")
                    var obj ={
                        ID:id,
                    }
                    Database.methods.GetKey(obj)
                    .done(function(response) {
                        main.createAddTableFlights(el[3],response,id)
                    })
                    .fail(function() {
                        console.warn('error');
                    }) 
                })
            
            $("body").on("click",".add-relation",function(){
                var el = $(this).parent().parent()
                var id = $(this).val().split(',')
                obj = {
                        IDflight : id[0],
                        IDclient : id[1],
                }
                $.post("php/addRelation.php", obj, function(result){
                    if(result=="ok")
                         $(el).empty()
                    else
                        alert(result);
                });
            })
    }
}