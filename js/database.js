
var Database = {

    methods: {

        createListOfClients: function () {
            return Ajax.getDataClients( "php/ClientsData.php")
        },
        createListOfFlights: function () {
            return Ajax.getDataFlights( "php/FlightsData.php")
        },
        GetKey: function (obj) {
            return Ajax.getKey( "php/searchKey.php", obj)
        },
        GetFlight: function (obj) {
            return Ajax.getFlight( "php/getFlight.php", obj)
        },
        GetKeyClient: function (obj) {
            return Ajax.getKey( "php/searchKeyClient.php", obj)
        },
         GetClient: function (obj) {
            return Ajax.getFlight( "php/getClient.php", obj)
        },
        AddNewClient: function (obj) {
            return Ajax.AddNewClient( "php/AddNewClient.php", obj)
        },
        AddNewFlight: function (obj) {
            return Ajax.AddNewClient( "php/AddNewFlight.php", obj)
        },
        
    
    }
}