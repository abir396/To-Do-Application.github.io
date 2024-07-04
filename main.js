//for map
let mapOptions = {
    center:[20.5937, 78.9629],
    zoom:5
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//API key for map
let apiKey = "9098219d18994560be55415be86df062",
    marker = null;


const addressSearchControl = L.control.addressSearch(apiKey, {
    position: 'topleft',

	//set it true to search addresses nearby first
    mapViewBias:true,

    //for Address Search field when it's empty
    placeholder:"Enter an address here",

    //callback to notify when a user has selected an address
    resultCallback: (address) => {
		// If there is already a marker remove it
        if (marker) {
          	marker.remove();
        }
		//for showing rrors when the address search box is empty
		if (!address) {
				return;
		}
     	
		//add marker 
		marker = L.marker([address.lat, address.lon]).addTo(map);

		//Sets the view of the map
		map.setView([address.lat, address.lon], 10);
      },


      //for notify when new suggestions have been obtained for the entered text
      suggestionsCallback: (suggestions) => {
        console.log(suggestions);
      }
});
map.addControl(addressSearchControl);

