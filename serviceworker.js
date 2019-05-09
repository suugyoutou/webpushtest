//キャッシュ名（今回はmanekineko という固有の名前）
var cacheName = 'manekineko';

//キャッシュしたいファイルのリスト(今回は3種類。HTML本体、jsファイル、CSSファイルが対象)
var filesToCache = [
   'index.html',
   'jquery.js',
   'style.css',
];

//ブラウザへのインストール時にキャシュしたいファイルを追加する
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  );
});


//ServiceWorkerが有効になるときcacheNameがちがうキャッシュを削除する
self.addEventListener('activate',function(event){
  event.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(key !== cacheName){
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


//キャッシュがあれば呼び出し、ない場合ネットワークから取りに行く
self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});
