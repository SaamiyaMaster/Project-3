
  let map;

async function initMap() {
  //@ts-ignore

        const {
            Map
        } = await google.maps.importLibrary("maps");
map = new Map(document.getElementById("map"), {
            center: {lat: 42.3706, lng: 87.9360
        },
          zoom: 10,
});

}