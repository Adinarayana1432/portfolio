import React, { useState } from 'react';

const UsernameGenerator = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const generateUsername = () => {
    const nameLength = fullName.replace(/\s+/g, '').length; // Remove spaces for length calculation
    const generatedUsername = `@${fullName.replace(/\s+/g, '')}${nameLength}`;
    setUsername(generatedUsername);
  };

  return (
    <div>
      <h1>Username Generator</h1>
      <input
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={handleNameChange}
      />
      <button onClick={generateUsername}>Generate Username</button>
      {username && <p>Generated Username: {username}</p>}
    </div>
  );
};

export default UsernameGenerator;
