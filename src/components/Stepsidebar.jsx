import React from 'react';

const StepSidebar = ({ currentStep }) => {
  // Texte à afficher sous chaque étape
  const stepDescriptions = [
    "your infos",
    "select plan",
    "add-ons",
    "summary"
  ];

  return (
    <aside className="sidebar">
      <div className="steps-container">
        {[1, 2, 3, 4].map((step) => (
  <div
    key={step}
    className={`step-item ${currentStep === step ? 'active' : ''}`}
  >
    <div className="step-circle">{step}</div>
    <div className="step-text-container">
      <h1 className="step-label">Étape {step}</h1>
      <h2 className="step-description">{stepDescriptions[step - 1]}</h2>
    </div>
  </div>
))}

      </div>
    </aside>
  );
};

export default StepSidebar;
