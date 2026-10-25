// Service worker nho: cho phep hien thong bao tren dien thoai (Android Chrome can file nay)
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window" }).then(function (list) {
      if (list.length) return list[0].focus();
      return self.clients.openWindow("./");
    })
  );
});
