self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('Service Worker Active');
});

// ബാക്ക്ഗ്രൗണ്ടിൽ അലാറം നോട്ടിഫിക്കേഷൻ വരുന്നത് കൈകാര്യം ചെയ്യുന്നു
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    e.waitUntil(
        clients.openWindow('/') 
    );
});
