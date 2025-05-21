import React, { useState } from 'react';

const addonsList = [
  { 
    name: 'Support prioritaire', 
    description: 'Assistance 24/7 avec priorité', 
    priceMensuel: 5, 
    priceAnnuel: 50 
  },
  { 
    name: 'Stockage supplémentaire', 
    description: '5 Go de stockage en plus', 
    priceMensuel: 3, 
    priceAnnuel: 30 
  },
  { 
    name: 'Accès aux nouveautés', 
    description: 'Accès anticipé aux mises à jour', 
    priceMensuel: 2, 
    priceAnnuel: 20 
  },
];

const plans = {
  arcade: { nom: 'Arcade', priceMensuel: 90, priceAnnuel: 90 },
  advanced: { nom: 'Standard', priceMensuel: 12, priceAnnuel: 120 },
  pro: { nom: 'Premium', priceMensuel: 15, priceAnnuel: 150 },
};

const Step4 = ({ formData, handleAddon, nextStep, prevStep, setStep }) => {
  const { options, duree, userInfo, abonnement } = formData;
  const [showRecap, setShowRecap] = useState(false);

  // Récupérer l'objet complet du plan depuis la clé abonnement
  const plan = abonnement ? plans[abonnement] : null;

  // Calcul du prix total des options
  const totalOptions = options.reduce((total, nomOption) => {
    const addon = addonsList.find(a => a.name === nomOption);
    if (!addon) return total;
    return total + (duree === 'annuel' ? addon.priceAnnuel : addon.priceMensuel);
  }, 0);

  // Prix abonnement selon la durée
  const prixAbonnement = plan ? (duree === 'annuel' ? plan.priceAnnuel : plan.priceMensuel) : 0;

  // Total général
  const totalGeneral = prixAbonnement + totalOptions;

  if (showRecap) {
    return (
      <div className="recap-container">
        <h2>Récapitulatif</h2>

        <div className="recap-section">
          <h3>Abonnement choisi</h3>
          {plan ? (
            <>
              <p>
                <strong>{plan.nom}</strong> – {duree === 'annuel' ? `${plan.priceAnnuel} €/an` : `${plan.priceMensuel} €/mois`}
              </p>
              <button 
                className="btn-link" 
                onClick={() => {
                  setStep(3); // Retour au step 3 abonnement
                  setShowRecap(false);
                }}
              >
                Changer
              </button>
            </>
          ) : (
            <p>Aucun abonnement sélectionné</p>
          )}
        </div>

        <div className="recap-section">
          <h3>Options sélectionnées</h3>
          {options.length === 0 ? (
            <p>Aucune option choisie.</p>
          ) : (
            <ul>
              {options.map((opt) => {
                const addon = addonsList.find(a => a.name === opt);
                if (!addon) return null;
                return (
                  <li key={opt}>
                    <strong>{addon.name}</strong> – {duree === 'annuel' ? `${addon.priceAnnuel} €/an` : `${addon.priceMensuel} €/mois`}
                  </li>
                );
              })}
            </ul>
          )}
          <button 
            className="btn-link" 
            onClick={() => {
              setStep(4); // Retour au step 4 options
              setShowRecap(false);
            }}
          >
            Changer
          </button>
        </div>

        <div className="recap-section">
          <h3>Informations utilisateur</h3>
          <p><strong>Nom :</strong> {userInfo?.nom || 'Non renseigné'}</p>
          <p><strong>Email :</strong> {userInfo?.email || 'Non renseigné'}</p>
          {/* Autres infos si besoin */}
        </div>

        <div className="recap-section total">
          <h3>Total</h3>
          <p><strong>{totalGeneral} € {duree === 'annuel' ? '/an' : '/mois'}</strong></p>
        </div>

        <div className="buttons">
          <button className="btn secondary" onClick={() => setShowRecap(false)}>Retour</button>
          <button className="btn" onClick={nextStep}>Confirmer</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Options additionnelles</h2>
      <p>Choisis des services supplémentaires si tu veux.</p>
      <div className="addons">
        {addonsList.map((addon) => (
          <label
            key={addon.name}
            className={`addon ${options.includes(addon.name) ? 'selected' : ''}`}
          >
            <input
              type="checkbox"
              checked={options.includes(addon.name)}
              onChange={() => handleAddon(addon.name)}
            />
            <div className="addon-text">
              <div className="addon-title">{addon.name}</div>
              <div className="addon-desc">{addon.description}</div>
            </div>
            <div className="addon-price">
              {duree === 'annuel' ? `${addon.priceAnnuel} €/an` : `${addon.priceMensuel} €/mois`}
            </div>
          </label>
        ))}
      </div>
      <div className="buttons">
        <button className="btn secondary" onClick={prevStep}>Retour</button>
        <button className="btn" onClick={() => setShowRecap(true)}>Voir récapitulatif</button>
      </div>
    </div>
  );
};

export default Step4;
