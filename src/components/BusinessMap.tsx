import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Business } from '../types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

// Fix for default marker icon
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface BusinessMapProps {
  businesses: Business[];
  center?: [number, number];
  zoom?: number;
  bankId: string;
}

export default function BusinessMap({ businesses, center = [9.005401, 38.763611], zoom = 12, bankId }: BusinessMapProps) {
  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 z-0">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {businesses.map((business) => (
          business.coordinates && (
            <Marker 
              key={business.id} 
              position={[business.coordinates.lat, business.coordinates.lng]}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-bold text-slate-900 mb-1">{business.name}</h3>
                  <p className="text-xs text-slate-500 mb-2">{business.category}</p>
                  <Link 
                    to={`/bank/${bankId}/businesses/${business.id}`}
                    className="text-xs text-blue-600 hover:underline font-bold"
                  >
                    View Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
}
