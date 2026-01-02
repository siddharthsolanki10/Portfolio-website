import React, { useEffect } from 'react';

// Utility to inject JSON-LD from public file
const SEO: React.FC = () => {
  useEffect(() => {
    fetch('/Public/person-schema.json')
      .then(res => res.json())
      .then(data => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        script.id = 'person-schema-ld';
        document.head.appendChild(script);
      });
    return () => {
      const script = document.getElementById('person-schema-ld');
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return null; // Meta tags and title should be handled by a library like react-helmet
};

export default SEO;
