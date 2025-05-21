import React from 'react';

const Step2 = ({ abonnement, duree, handleAbonnement, toggleDuree, nextStep, prevStep }) => {
  const plans = [
    { id: 'basic', name: 'Basique', priceMensuel: 10, priceAnnuel: 100 },
    { id: 'standard', name: 'Standard', priceMensuel: 20, priceAnnuel: 200 },
    { id: 'premium', name: 'Premium', priceMensuel: 30, priceAnnuel: 300 },
  ];

  return (
    <div className="step2">
      <h2>Choisis ton abonnement</h2>
      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan ${abonnement === plan.id ? 'selected' : ''}`}
            onClick={() => handleAbonnement(plan.id)}
          >
            <h3>{plan.name}</h3>
            <p>
              {duree === 'annuel'
                ? `${plan.priceAnnuel} € / an`
                : `${plan.priceMensuel} € / mois`}
            </p>
          </div>
        ))}
      </div>
<div className="billing-toggle">
  <span className={duree === 'mensuel' ? 'active' : ''}>Mensuel</span>
  
  <label className="switch">
    <input type="checkbox" onChange={toggleDuree} checked={duree === 'annuel'} />
    <span className="slider"></span>
  </label>
  
  <span className={duree === 'annuel' ? 'active' : ''}>Annuel</span>
</div>


      <div className="buttons">
        <button className="btn secondary" onClick={prevStep}>Retour</button>
        <button className="btn" onClick={nextStep} disabled={!abonnement}>Suivant</button>
      </div>
    </div>
  );
};

export default Step2;

