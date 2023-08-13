'use client'
import { useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const ResultPage: React.FC = () => {
  const seed = document.URL.split('=').pop() || ''.toString(); // Extract the seed from the URL
  const [dataUri, setDataUri] = useState<string | null>(null);

  useEffect(() => {
    const generateAvatar = async () => {
      const avatar = createAvatar(lorelei, {
        seed: seed || 'Default Seed',
        // ... other options
      });

      const uri = await avatar.toDataUri();
      setDataUri(uri);
    };

    if (seed !== undefined) {
      generateAvatar();
    }
  }, [seed]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Here is your Avatar. Enjoy it!</h1>
      {dataUri && (
        <img
          src={dataUri}
          alt="Generated Avatar"
          className="rounded-lg border-4 border-yellow-500 max-w-md"
        />
      )}
    </div>
  );
};

export default ResultPage;