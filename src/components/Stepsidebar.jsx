import React from 'react';

const StepSidebar = ({ currentStep }) => {
  return (
    <aside className="sidebar">
      <div className="steps-container">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`step-item ${currentStep === step ? 'active' : ''}`}
          >
            <div className="step-circle">{step}</div>
            <div className="step-label">Étape {step}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default StepSidebar;
