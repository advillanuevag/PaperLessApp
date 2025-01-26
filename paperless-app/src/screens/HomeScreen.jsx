import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css"; // Archivo CSS separado para estilos

export default function HomeScreen() {
  return (
    <div className="container">
      <h1 className="title">Risk Prevention App</h1>
      <div className="button-container">
        <Link to="/assign-roles" className="button">
          Assign Roles
        </Link>
        <Link to="/register-field-workers" className="button">
          Register Field Workers
        </Link>
        <Link to="/assign-forms" className="button">
          Assign Forms
        </Link>
        <Link to="/submit-forms" className="button">
          Submit Forms
        </Link>
        <Link to="/view-reports" className="button">
          View Reports
        </Link>
        <Link to="/team-stats" className="button">
          Team Fulfillment Stats
        </Link>
      </div>
    </div>
  );
}
