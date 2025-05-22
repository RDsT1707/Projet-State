import React from 'react';

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="step1">
      <h2>Informations personnelles</h2>
      <p>Merci de renseigner tes informations pour commencer ton inscription.</p>

      {/* Champ : Nom */}
      <label>
        Nom
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Ton nom"
          required
        />
      </label>

      {/* Champ : Email */}
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ton email"
          required
        />
      </label>

      {/* Champ : Mot de passe */}
      <label>
        Mot de passe
        <input
          type="password"
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
      </label>

      {/* Bouton de progression */}
      <button className="btn" onClick={nextStep}>
        Suivant
      </button>
    </div>
  );
};

export default Step1;
