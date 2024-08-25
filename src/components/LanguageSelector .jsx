import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add any additional logic here, like updating the app's language
    console.log("Selected language:", event.target.value);
  };

  return (
    <div className="language-selector">
      <select
        id="language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="outline-none bg-transparent"
      >
        <option value="en">English</option>
        <option value="om">Oromo</option>
        <option value="am">Amharic</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
