var Ajax = {
    getDataClients: function (url) {
        return $.ajax({
            type: "GET",
            url: url,
            contentType:"application/json; charset=utf-8",
            dataType: 'json',

        })
    },getDataFlights: function (url) {
        return $.ajax({
            type: "GET",
            url: url,
            contentType:"application/json; charset=utf-8",
            dataType: 'json',

        })
    },getKey: function (url,obj) {
        return $.ajax({
            type: "GET",
            url: url,
            data:obj,
            contentType:"application/json; charset=utf-8",
            dataType: 'json',

        })
    },
    getFlight: function (url,obj) {
        return $.ajax({
            type: "GET",
            url: url,
            data:obj,
            contentType:"application/json; charset=utf-8",
            dataType: 'json',

        })
    },
    
      AddNewClient: function (url,obj) {
        return  $.post(url, obj, function(result){});
    },
       
      AddNewFlight: function (url,obj) {
        return   $.post("php/AddNewFlight.php", obj, function(result){});
    },
     

}