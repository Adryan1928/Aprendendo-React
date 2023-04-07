import React from "react";
import { Link } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { LatLngExpression } from "leaflet";

import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import {FiPlus} from 'react-icons/fi';

import '../styles/pages/orphanage-map.css';

import mapMakerImg from '../images/map-marker.svg';
import { LegacyOracleNamingStrategy } from "typeorm";
const position = [-6.1029454,-38.1582802]

const mapIcon = Leaflet.icon({
    iconUrl: mapMakerImg,
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

function OrphanegesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>

                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong>Rio Grande do Norte</strong>
                    <span>Antônio Martins</span>
                </footer>
            </aside>
                <MapContainer center={position as LatLngExpression}  zoom={13} className="mapa" scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position as LatLngExpression} icon={mapIcon} >
                        <Popup closeButton= {false} maxWidth={240} minWidth={240 } className="map-popup" >
                            Orfanato
                        </Popup>
                    </Marker>
                </MapContainer>

                <Link to='' className="create-orphanage">
                                <FiPlus size={32}  color="#fff"/>
                </Link>
        </div>
    )
}

export default OrphanegesMap;