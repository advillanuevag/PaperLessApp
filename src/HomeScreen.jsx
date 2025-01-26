import React from "react";
import "./HomeScreen.css";
import { FaUserShield, FaUsers, FaTasks, FaClipboardList, FaChartPie } from "react-icons/fa";

export default function HomeScreen() {
  return (
    <div className="container">
      <h1 className="title">PaperLess</h1>
      
      <div className="button-container">
        <button className="button">
          <FaUserShield className="icon" /> Registrar Colaborador
        </button>
        <button className="button">
          <FaUsers className="icon" /> Asignar Roles
        </button>
        <button className="button">
          <FaTasks className="icon" /> Asignar Checklist
        </button>
        <button className="button">
          <FaClipboardList className="icon" /> LLenar Checklist
        </button>
        <button className="button">
          <FaChartPie className="icon" /> Reportes por Colaborador
        </button>
        <button className="button">
          <FaChartPie className="icon" /> Reportes por Equipo
        </button>
      </div>
      <div className="bottom-nav">
        <FaUserShield className="nav-icon" />
        <FaUsers className="nav-icon" />
        <FaTasks className="nav-icon" />
        <FaClipboardList className="nav-icon" />
        <FaChartPie className="nav-icon" />
      </div>
    </div>
  );
}
