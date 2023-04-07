import React from 'react';
import { FiArrowLeft, FiSidebar } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/SideBar.css'
import { useNavigate } from 'react-router-dom';

export default function Sidebar () {
    const navigate  = useNavigate();

    const goBack = () => {
        navigate("/app")
    }
    return (
        <aside className='app-sidebar'>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    )
}