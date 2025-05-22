// Importation des hooks React
import React, { useState, useEffect } from 'react';

// Importation des composants nécessaires à chaque étape du formulaire
import StepSidebar from './components/Stepsidebar';
import Step1 from './components/Step/Step1';
import Step2 from './components/Step/step2';
import Step3 from './components/Step/Step3';
import Step4 from './components/Step/step4';
import ThankYou from './components/ThankYou';

// Importation des fichiers CSS pour le style
import './App.css';
import './dark.css';

const App = () => {
  // État pour suivre l'étape actuelle du formulaire (de 1 à 5)
  const [step, setStep] = useState(1);

  // État contenant toutes les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    abonnement: '',        // Nom de l’abonnement choisi
    duree: 'mensuel',      // Durée par défaut (mensuelle ou annuelle)
    options: [],           // Options supplémentaires choisies
  });

  // État qui gère le mode sombre (dark mode)
  const [darkMode, setDarkMode] = useState(false);

  /**
   * Hook useEffect pour appliquer ou retirer la classe CSS 'dark-mode'
   * sur le body de la page selon la valeur de darkMode.
   */
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');   // Active le mode sombre
    } else {
      document.body.classList.remove('dark-mode'); // Désactive le mode sombre
    }
  }, [darkMode]); // Ce useEffect se déclenche à chaque fois que darkMode change

  // Fonction pour passer à l’étape suivante (max = 5)
  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));

  // Fonction pour revenir à l’étape précédente (min = 1)
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  /**
   * Fonction de gestion des champs de formulaire
   * Elle met à jour l’objet formData en fonction du nom et de la valeur du champ modifié
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Fonction pour enregistrer l’abonnement sélectionné
   */
  const handleAbonnement = (value) => {
    setFormData(prev => ({ ...prev, abonnement: value }));
  };

  /**
   * Fonction pour basculer entre abonnement mensuel et annuel
   */
  const toggleDuree = () => {
    setFormData(prev => ({
      ...prev,
      duree: prev.duree === 'mensuel' ? 'annuel' : 'mensuel',
    }));
  };

  /**
   * Fonction pour ajouter ou retirer une option supplémentaire
   * Si l'option est déjà présente, on la retire, sinon on l'ajoute.
   */
  const handleAddon = (addon) => {
    setFormData(prev => {
      const options = prev.options.includes(addon)
        ? prev.options.filter(opt => opt !== addon) // On retire l'option
        : [...prev.options, addon];                // On ajoute l'option
      return { ...prev, options };
    });
  };

  return (
    <div className={`multi-step-form ${darkMode ? 'dark' : ''}`}>
      {/* Bouton de bascule entre mode clair et mode sombre */}
      <button
        onClick={() => setDarkMode(!darkMode)} // Inverse la valeur du darkMode
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          padding: '8px 12px',
          cursor: 'pointer',
          zIndex: 1000, // Pour être toujours au-dessus des autres éléments
        }}
      >
        {darkMode ? ' Light Mode' : ' Dark Mode'}
      </button>

      {/* Barre latérale avec les numéros d’étapes */}
      <StepSidebar currentStep={step} />

      {/* Contenu principal du formulaire qui change selon l’étape */}
      <div className="form-content">
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
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
          <Step3
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <Step4
            formData={formData}
            handleAddon={handleAddon}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 5 && (
          <ThankYou /> // Message de remerciement final
        )}
      </div>
    </div>
  );
};

export default App;
<!-- fake edit --> // 2025-05-22T11:33:36.020Z

/* auto update */ // 2025-05-22T11:33:36.020Z

<!-- fake edit --> // 2025-05-22T11:33:36.021Z

/* productivity hack */ // 2025-05-22T11:34:36.021Z

<!-- fake edit --> // 2025-05-22T11:34:36.022Z

/* auto update */ // 2025-05-22T11:34:36.022Z

<!-- fake edit --> // 2025-05-22T11:35:36.027Z

/* auto update */ // 2025-05-22T11:35:36.027Z

/* auto update */ // 2025-05-22T11:35:36.027Z

/* auto update */ // 2025-05-22T11:36:36.041Z

<!-- fake edit --> // 2025-05-22T11:36:36.042Z

// waka boost // 2025-05-22T11:36:36.046Z

<!-- fake edit --> // 2025-05-22T11:37:36.056Z

// waka boost // 2025-05-22T11:37:36.056Z

<!-- fake edit --> // 2025-05-22T11:37:36.058Z
