import React, { useState, useEffect } from 'react';

const useToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (window.__token__) {
      setToken(window.__token__);
    }
  }, []);

  return [token];
};

export default useToken;
