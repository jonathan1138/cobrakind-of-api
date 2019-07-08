interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}

// // For user - to define pop up
// markerContent(): string {
//     return '
//        <div>        
//        <h1>User Name: ${this.userName}</h1>
//        </div>
//        ';
// }
// const customMap = new CustomMap('map');
// customMap.addMarket(user);
