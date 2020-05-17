import L from 'leaflet';

import farmaciaIcon from '../assets/UPA.png'

const iconFarmacia = new L.Icon({
    iconUrl: farmaciaIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'leaflet-div-icon'
});

export { iconFarmacia };