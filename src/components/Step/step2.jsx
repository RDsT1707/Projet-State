import React from 'react';

const Step2 = ({ abonnement, duree, handleAbonnement, toggleDuree, nextStep, prevStep }) => {
  // Liste des plans disponibles avec image et prix
  const plans = [
    {
      id: 'arcade',
      name: 'Arcade',
      priceMensuel: 90,
      priceAnnuel: 900,
      img: '/src/assets/img/arcade.svg',
    },
    {
      id: 'advanced',
      name: 'Advanced',
      priceMensuel: 12,
      priceAnnuel: 120,
      img: '/src/assets/img/advenced.svg', // corrigé ici
    },
    {
      id: 'pro',
      name: 'Pro',
      priceMensuel: 15,
      priceAnnuel: 150,
      img: '/src/assets/img/pro.svg',
    },
  ];

  return (
    <div className="step2">
      <h2>Choisis ton abonnement</h2>
      <p>Sélectionne un plan selon ton besoin et ton budget.</p>

      {/* Liste des plans */}
      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan ${abonnement === plan.id ? 'selected' : ''}`}
            onClick={() => handleAbonnement(plan.id)}
          >
            <img src={plan.img} alt={plan.name} className="plan-icon" />
            <h3>{plan.name}</h3>
            <p>
              {duree === 'annuel'
                ? `${plan.priceAnnuel} € / an`
                : `${plan.priceMensuel} € / mois`}
            </p>
          </div>
        ))}
      </div>

      {/* Toggle entre facturation mensuelle et annuelle */}
      <div className="billing-toggle">
        <span className={duree === 'mensuel' ? 'active' : ''}>Mensuel</span>

        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleDuree}
            checked={duree === 'annuel'}
          />
          <span className="slider"></span>
        </label>

        <span className={duree === 'annuel' ? 'active' : ''}>Annuel</span>
      </div>

      {/* Boutons de navigation */}
      <div className="buttons">
        <button className="btn secondary" onClick={prevStep}>Retour</button>
        <button className="btn" onClick={nextStep} disabled={!abonnement}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Step2;
