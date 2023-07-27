import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { HistoryInterface, TherapistInterface } from "@modules/index";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface MapProps {
  locations?: HistoryInterface[] | TherapistInterface[] | any;
  location?: HistoryInterface;
  type: "single" | "multiple";
  ref?: () => void;
}

const myIcon = new Icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/017/178/337/original/location-map-marker-icon-symbol-on-transparent-background-free-png.png",
  iconSize: [32, 32],
});


export const Map = ({ locations, location, type, ref }: MapProps) => {

  useEffect(() => {
    const simulateResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    simulateResize();
    return () => {
      window.removeEventListener("resize", simulateResize);
    };
  }, []);
  

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <MapContainer
        ref={ref}
        center={type === 'multiple' ? [-7.010926, 110.348634] : [location?.location?.x || -7.010926, location?.location?.y || 110.348634]}
        zoom={12}
        className="w-full"
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {type === "multiple" ? (
          locations?.map((loc, i) => (
            <Marker
              key={i}
              position={[loc?.location?.x, loc?.location?.y]}
              icon={myIcon}
            >
              <Popup>{loc?.first_name}</Popup>
            </Marker>
          ))
        ) : (
          <Marker
            position={[location?.location?.x || 0, location?.location?.y || 0]}
            icon={myIcon}
          >
            <Popup>{location?.first_name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};
