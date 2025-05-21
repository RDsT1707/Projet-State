import React, { useState, useEffect } from 'react';
import StepSidebar from './components/Stepsidebar';
import Step1 from './components/Step/Step1';
import Step2 from './components/Step/step2';
import Step3 from './components/Step/Step3';
import Step4 from './components/Step/step4';
import ThankYou from './components/ThankYou';
import './App.css';
import'./dark.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    abonnement: '',
    duree: 'mensuel',
    options: [],
  });

  // État pour gérer le mode sombre
  const [darkMode, setDarkMode] = useState(false);

  // Effet pour appliquer ou retirer la classe dark-mode sur le body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAbonnement = (value) => {
    setFormData(prev => ({ ...prev, abonnement: value }));
  };

  const toggleDuree = () => {
    setFormData(prev => ({
      ...prev,
      duree: prev.duree === 'mensuel' ? 'annuel' : 'mensuel',
    }));
  };

  const handleAddon = (addon) => {
    setFormData(prev => {
      const options = prev.options.includes(addon)
        ? prev.options.filter(opt => opt !== addon)
        : [...prev.options, addon];
      return { ...prev, options };
    });
  };

  return (
    <div className={`multi-step-form ${darkMode ? 'dark' : ''}`}>
      {/* Bouton toggle dark mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          padding: '8px 12px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <StepSidebar currentStep={step} />

      <div className="form-content">
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
        )}
        {step === 2 && (
          <Step2
            abonnement={formData.abonnement}
            duree={formData.duree}
            handleAbonnement={handleAbonnement}
            toggleDuree={toggleDuree}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Step3 formData={formData} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 4 && (
          <Step4 formData={formData} handleAddon={handleAddon} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 5 && <ThankYou />}
      </div>
    </div>
  );
};

export default App;
