import React, { useState, useEffect } from 'react';

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Listen for successful install
    window.addEventListener('appinstalled', () => {
      setShowInstall(false);
      setIsInstalled(true);
      setDeferredPrompt(null);
      console.log('PWA installed successfully');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted install');
    }
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleDismiss = () => {
    setShowInstall(false);
  };

  if (!showInstall || isInstalled) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-dark-800/95 backdrop-blur-lg border border-primary-500/30 rounded-2xl px-6 py-4 shadow-2xl shadow-primary-500/10 flex items-center gap-4 max-w-md">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium">Install this app</p>
          <p className="text-gray-400 text-xs">Add to home screen for quick access</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleDismiss}
            className="px-3 py-1.5 text-gray-400 hover:text-white text-sm transition-colors"
          >
            Later
          </button>
          <button
            onClick={handleInstall}
            className="px-4 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;
