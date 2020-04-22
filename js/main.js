var main ={
    // function generate list of all clients who are database
    // list content personal data (surname, name,data of birth, country, gender) and options edit data, delete client, see all flights, see note about client
    editButton: function(){
        var button = $("<input>");
        button.addClass("edit") 
        button.attr("src","img/edit.png")
        button.attr("width","20")
        button.attr("height","20")
        button.attr("type","image")
        return button;
    },
    editButtonflight: function(){
        var button = $("<input>");
        button.addClass("edit edit-flight")
        button.attr("src","img/edit.png")
        button.attr("width","20")
        button.attr("height","20")
        button.attr("type","image")
        return button;
    },
    getData:function(day,month,year){
        if(parseInt(day)<10)
            day = "0"+day;
        if(parseInt(month)<10)
            month="0"+month;
        return day+'.'+month+'.'+year
    },
    getTime:function(hour,minute){
        if(parseInt(hour)<10)
            hour = "0"+hour;
        if(parseInt(minute)<10)
            minute="0"+minute;
        return hour+':'+minute
    },
    createListClients:function(array){ 
                     
                     for(var i=0;i<array.length;i++){
                         var div = $("<div>"); //container for data client
                         div.addClass("iteam-list");
                         var div2 = $("<div>");
                         div2.addClass("personal-data left-div");
 
                         //line surname
                         var p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("surname: ")
                         p.append(span);
                         span = $("<span>");
                         span.addClass("surname content");
                         span.text(array[i][1]);
                         p.append(span);
                         var button = main.editButton();
                         button.val(array[i][0])
                         button.attr("alt","edit-surname")
                         p.append(button)
                         div2.append(p);
                         
                         //line first name
                          var p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("fisrt name: ")
                         p.append(span);
                         span = $("<span>");
                         span.addClass("fisrt-name content");
                         span.text(array[i][2]);
                         p.append(span);
                         
                         var button = main.editButton();
                         button.val(array[i][0])
                         button.attr("alt","edit-name")
                         p.append(button)
                         div2.append(p);
                         
                         //line date of birth
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("date of birth: ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("date-of-birth content");
                         span.text(main.getData(array[i][6],array[i][7],array[i][8]))
                         p.append(span);
                         var button = main.editButton();
                         button.val(array[i][0])
                         button.attr("alt","edit-date-birth")
                         p.append(button)
                         div2.append(p);
                         
                         //line gender
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("gender: ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("gender content");
                         span.text(array[i][3]);
                         p.append(span);
                         var button = main.editButton();
                         button.val(array[i][0])
                         button.attr("alt","edit-gender")
                         p.append(button)
                         div2.append(p);
                         var span = $("<span>");
                         
                         //line country
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("country: ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("country content");
                         span.text(array[i][4]);
                         p.append(span);
                         var button = main.editButton();
                         button.val(array[i][0])
                         button.attr("alt","edit-country")
                         p.append(button)
                         div2.append(p);
                         
                       
                         div.append(div2);
                       
                         
                         var div2 = $("<div>");
                         div2.addClass("mid-div note-client")
                         var h3 = $("<h3>");
                         h3.addClass("name-note")
                         h3.text("Note:")
                         var button = main.editButton();
                         button.val(array[i][0])
                         button.addClass("edit-note")
                         button.attr("alt","edit-note-client")
                         h3.append(button)
                         div2.append(h3)
                         var div3 = $("<div>");
                         div3.addClass("content-note")
                         div3.text(array[i][5])
                         div2.append(div3)
                         div.append(div2)
                         
                  
                         
                         var div2 = $("<div>");
                         div2.addClass("right-div options-client")
                    
                         var button = $("<button>");
                         button.addClass("button delete")
                         button.text("DELETE")
                         button.val(array[i][0])
                         div2.append(button)
                         
                         var button = $("<button>");
                         button.addClass("button list-flights-client")
                         button.text("LIST OF FLIGHTS")
                         button.val(array[i][0])
                         div2.append(button)
                         
                         var button = $("<button>");
                         button.addClass("button add-flights-client")
                         button.val(array[i][0])
                         button.text("ADD FLIGHT")
                         div2.append(button)
                         
                         
                         div.append(div2);
                         var div3 = $("<div>");
                         div3.addClass("table-div")
                         div.append(div3);
                         $("#content-list-clients").append(div);
                         
                         
                         
                     }
                 },
    createListFlights:function(array){ 
                     
                     for(var i=0;i<array.length;i++){
                         
                         
                         var div = $("<div>");
                         div.addClass("iteam-list");
                         var div2 = $("<div>");
                         div2.addClass("personal-data left-div");
        
                         //date of flight
                         var p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("date of flight: ")
                         p.append(span);
                         span = $("<span>");
                         span.addClass("date-flight content");
                         span.text(main.getData(array[i][3],array[i][4],array[i][5]))
                         p.append(span);
                         var button = main.editButtonflight();
                         button.val(array[i][0])
                         button.attr("alt","edit-date-flight")
                         p.append(button)
                         
                         div2.append(p);
                         
                         //hour of flight
                          var p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("hour of flight: ")
                         p.append(span);
                         span = $("<span>");
                         span.addClass("hour-flight content");
                         span.text(main.getTime(array[i][6],array[i][7]))
                         p.append(span);
                         var button = main.editButtonflight();
                         button.val(array[i][0])
                         button.attr("alt","edit-hour-flight")
                         p.append(button)
                         div2.append(p);
                         
                         //date arrival
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("date arrival: ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("date-arrival content");
                         span.text(main.getData(array[i][8],array[i][9],array[i][10]))
                         p.append(span);
                         var button = main.editButtonflight();
                         button.val(array[i][0])
                         button.attr("alt","edit-date-arrival")
                         p.append(button)
                         div2.append(p);
                         
                         //hour of arrival
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("hour of arrival: ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("hour-arrival content");
                         span.text(main.getTime(array[i][11],array[i][12]))
                         p.append(span);
                         var button = main.editButtonflight();
                         button.val(array[i][0])
                         button.attr("alt","edit-hour-arrival")
                         p.append(button)
                         div2.append(p);
                         var span = $("<span>");
                         
                         //price
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("price (USD): ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("price content");
                         span.text(array[i][2]);
                         p.append(span);
                         var button = main.editButtonflight();
                         button.val(array[i][0])
                         button.attr("alt","edit-price")
                         p.append(button)
                         div2.append(p);
                         
                       
                         div.append(div2);
                       
                         //number of seats
                         p = $("<p>");
                         p.addClass("line");
                         var span = $("<span>");
                         span.addClass("name-line");
                         span.text("number of seats: ")
                         p.append(span);
                         var span = $("<span>");
                         span.addClass("seats content");
                         span.text(array[i][1]);
                         p.append(span);
                         var button = main.editButtonflight();
                         button.val(array[i][0])
                         button.attr("alt","edit-seats")
                         p.append(button)
                         div2.append(p);
                         
                       
                         div.append(div2);
                         
                  
                         
                         var div2 = $("<div>");
                         div2.addClass("right-div options-client")
                         
                         var button = $("<button>");
                         button.addClass("button delete-flight")
                         button.text("DELETE")
                         button.val(array[i][0])
                         div2.append(button)
                         
                         var button = $("<button>");
                         button.addClass("button list-clients-flight")
                         button.val(array[i][0])
                         button.text("LIST OF CLIENTS")
                         div2.append(button)
                         
                         var button = $("<button>");
                         button.addClass("button add-clients-flight")
                         button.val(array[i][0])
                         button.text("ADD CLIENT")
                         div2.append(button)
                         
                         div.append(div2);
                         div.append(div2);
                         var div3 = $("<div>");
                         div3.addClass("table-div")
                         div.append(div3);
                         $("#content-list-flights").append(div);
                         
                         
                     }
                 },
    createTableFlights:function(el,array){
        var h3 = $("<h3>");
        h3.addClass("name-table")
        h3.text("List of Flights")
        h3.append(main.optionButton("close-tr-flight close-table","img/close.png","close","none"))
        $(el).append(h3)
        var table = $("<table>");
        table.addClass("table");
        var tr = $("<tr>");
        tr.addClass("name-table");
        var th = $("<th>");
        th.text("Date of flight")
        tr.append(th)
        th = $("<th>");
        th.text("Date of arrival")
        tr.append(th)
        th = $("<th>");
        th.text("price (USD)")
        tr.append(th)
        th = $("<th>");
        th.text("Number of seats")
        tr.append(th)
        th = $("<th>");
        tr.append(th)
        table.append(tr)
         
        for(var i=0;i<array.length;i++){
            var obj={id:array[i][1],
                     value:array[i][0]
                    }
            Database.methods.GetFlight(obj)
                            .done(function(result) {
                
                                 var tr = $("<tr>");
                                 var td = $("<td>");
                                 td.text(main.getData(result[0][3],result[0][4],result[0][5])+' '+main.getTime(result[0][6],result[0][7]))
                                 tr.append(td)

                                 td = $("<td>");
                                 td.text(main.getData(result[0][8],result[0][9],result[0][10])+' '+main.getTime(result[0][11],result[0][12]))
                                 tr.append(td)

                                 td = $("<td>");
                                 td.append(result[0][2])
                                 tr.append(td)
                                 td = $("<td>");
                                 td.append(result[0][1])
                                 tr.append(td)

                                 td = $("<td>");
                                 td.append(main.optionButton("close-del","img/trash.png","close-del",obj.value))
                                 tr.append(td)

                                 table.append(tr)

                            })
                            .fail(function() {
                                console.warn('error');
                            })
         
        }
        $(el).append(table);
       
    },
    
    createTableClients:function(el,array){
        var h3 = $("<h3>");
        h3.addClass("name-table")
        h3.text("List of Clients")
        h3.append(main.optionButton("close-tr-client close-table","img/close.png","close","none"))
        $(el).append(h3)
        var table = $("<table>");
        table.addClass("table");
        var tr = $("<tr>");
        tr.addClass("name-table");
        var th = $("<th>");
        th.text("Name")
        tr.append(th)
        th = $("<th>");
        th.text("Date of birth")
        tr.append(th)
        th = $("<th>");
        th.text("gender")
        tr.append(th)
        th = $("<th>");
        th.text("Country")
        tr.append(th)
        th = $("<th>");
        tr.append(th)
        table.append(tr)
        
        for(var i=0;i<array.length;i++){
            var obj={id:array[i][2],
                     value:array[i][0],
                    }
            Database.methods.GetClient(obj)
                            .done(function(result) {
                                 var tr = $("<tr>");
                                 var td = $("<td>");
                                 
                                 td.text(result[0][1]+' '+ result[0][2])
                                 tr.append(td)

                                 td = $("<td>");
                                 td.text(main.getData(result[0][6],result[0][7],result[0][8]))
                                 tr.append(td)

                                 td = $("<td>");
                                 td.append(result[0][3])
                                 tr.append(td)
                                 td = $("<td>");
                                 td.append(result[0][4])
                                 tr.append(td)

                                 td = $("<td>");
                                 td.append(main.optionButton("close-del","img/trash.png","close-del",obj.value))
                                 tr.append(td)

                                 table.append(tr)

                            })
                            .fail(function() {
                                console.warn('error');
                            })
         
        }
     $(el).append(table);  
    },
    createAddTableFlights:function(el,array,id){
        var h3 = $("<h3>");
        h3.addClass("name-table ")
        h3.text("Add Flights")
        
         var button = $("<input>");
         button.addClass("close-add-flight close-table")
         button.attr("src","img/close.png")
         button.attr("width","20")
         button.attr("height","20")
         button.attr("type","image")
         button.attr("alt","close")
         h3.append(button)
        $(el).append(h3)
        var table = $("<table>");
        table.addClass("table");
        var tr = $("<tr>");
        tr.addClass("name-table");
        var th = $("<th>");
        th.text("Date of flight")
        tr.append(th)
        th = $("<th>");
        th.text("Date of arrival")
        tr.append(th)
        th = $("<th>");
        th.text("price (USD)")
        tr.append(th)
        th = $("<th>");
        th.text("Number of seats")
        tr.append(th)
        th = $("<th>");
        tr.append(th)
        table.append(tr)
         
        
            
            Database.methods.createListOfFlights()
                            .done(function(result) {
                                var pom;
                                for(var i=0;i<result.length;i++){
                                    pom = false;
                                    for(var j=0;j<array.length;j++){
                                        if(array[j][1]==result[i][0])
                                            pom=true;
                                    }
                                if(!pom){
                                 var tr = $("<tr>");
                                 var td = $("<td>");
                                 td.text(main.getData(result[0][3],result[0][4],result[0][5])+' '+main.getTime(result[0][6],result[0][7]))
                                 tr.append(td)

                                 td = $("<td>");
                                 td.text(main.getData(result[0][8],result[0][9],result[0][10])+' '+main.getTime(result[0][11],result[0][12]))
                                 tr.append(td)

                                 td = $("<td>");
                                 td.append(result[i][2])
                                 tr.append(td)
                                 td = $("<td>");
                                 td.append(result[i][1])
                                 tr.append(td)

                                 td = $("<td>");
                                 td.append(main.optionButton("add-relation","img/plus.png","add-relation",result[i][0]+','+id))
                                 tr.append(td)

                                 table.append(tr)
                                }
                                }

                            })
                            .fail(function() {
                                console.warn('error');
                            })
         
        
        $(el).append(table);
       
    },
    
    createAddTableClients:function(el,array,id){ 
        var h3 = $("<h3>");
        h3.addClass("name-table ")
        h3.text("Add Clients")
        
         var button = $("<input>");
         button.addClass("close-add-client close-table")
         button.attr("src","img/close.png")
         button.attr("width","20")
         button.attr("height","20")
         button.attr("type","image")
         button.attr("alt","close")
         h3.append(button)
        $(el).append(h3)
        var table = $("<table>");
        table.addClass("table");
        var tr = $("<tr>");
        tr.addClass("name-table");
        var th = $("<th>");
        th.text("Name")
        tr.append(th)
        th = $("<th>");
        th.text("Date of birth")
        tr.append(th)
        th = $("<th>");
        th.text("gender")
        tr.append(th)
        th = $("<th>");
        th.text("Country")
        tr.append(th)
        th = $("<th>");
        tr.append(th)
        table.append(tr)
      
        Database.methods.createListOfClients()
                .done(function(result) {
                            var pom;
                            for(var i=0;i<result.length;i++){
                                    pom = false;
                                    for(var j=0;j<array.length;j++){
                                        if(array[j][2]==result[i][0])
                                            pom=true;
                                    }
                            if(!pom){ 
                                 var tr = $("<tr>");
                                 var td = $("<td>");
                                 td.text(result[i][1]+' '+ result[i][2])
                                 tr.append(td)
                                 td = $("<td>");
                                 td.text(main.getData(result[0][6],result[0][7],result[0][8]))
                                 tr.append(td)
                                 td = $("<td>");
                                 td.append(result[i][3])
                                 tr.append(td)
                                 td = $("<td>");
                                 td.append(result[i][4])
                                 tr.append(td)
                                 td = $("<td>");
                                 td.append(main.optionButton("add-relation","img/plus.png","add-relation",id+','+result[i][0]))
                                 tr.append(td)
                                 table.append(tr)
                                }
                                }
                            })
                            .fail(function() {
                                console.warn('error');
                            })
           
         
        
     $(el).append(table);  
    },
    optionButton: function(cls,src,alt,value){
        var button = $("<input>");
        button.addClass(cls)
        button.attr("src",src)
        button.attr("width","20")
        button.attr("height","20")
        button.attr("type","image")
        button.val(value)
        button.attr("alt",alt)
        return button
    },
    closeEditPanel: function(iteam){
        $("#dark-black").css("display", "none")
        $(iteam).css("display", "none")
        document.getElementById($(iteam).attr("id")).reset();    
    }
}

