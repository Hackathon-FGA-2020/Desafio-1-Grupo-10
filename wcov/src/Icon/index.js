import L from 'leaflet';

import farmaciaIcon from '../assets/Mapa/Farmacia.svg'

const iconFarmacia = new L.Icon({
    iconUrl: farmaciaIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'upa-icon'
});

export { iconFarmacia };