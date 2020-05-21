import L from 'leaflet';

import farmaciaIcon from '../assets/Mapa/Farmacia.svg'
import hospitalIcon from '../assets/Mapa/Hospital.svg'
import UPAIcon from '../assets/Mapa/UPA.svg'
import Eventos from '../assets/Mapa/Eventos.svg'

const iconFarmacia = new L.Icon({
    iconUrl: farmaciaIcon,
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'pharm-icon'
});

const iconHospital = new L.Icon({
    iconUrl: hospitalIcon,
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'hops-icon'
});

const iconUPA = new L.Icon({
    iconUrl: UPAIcon,
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'upa-icon'
});

const iconEvento = new L.Icon({
    iconUrl: Eventos,
    iconAnchor: null,
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(48, 48),
    className: 'evento-icon'
});

export { iconFarmacia, iconHospital, iconUPA, iconEvento};