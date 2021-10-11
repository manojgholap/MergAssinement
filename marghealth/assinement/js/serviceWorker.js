const cacheArr=['/'];
const cachename="cache10";
self.addEventListener('install',(event)=>{
    console.log('worker is installed');
    // event.waitUntil(
    //     caches.open('cache10').then((cache)=>{
    //         console.log('opned');
    //         cache.addAll(cacheArr).then(()=>self.skipWaiting());
    //     })
    // )
})
self.addEventListener('activate',(event)=>{
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(
                cacheNames.map((cacheName)=>{
                    if(cachename!==cacheName){
                    return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch',(fetchEvent)=>{
    fetchEvent.respondWith(
        fetch(fetchEvent.request).then(res=>{
                const cachesres=res.clone();
                caches.open(cachename).then(cache=>cache.put(fetchEvent.request,cachesres));
                 return res;     
        }).catch(()=>caches.match(fetchEvent.request).then(res=>res))
    )
})


// self/addEventListener('fetch',(event)=>{
//     event.respondWith(
//         caches.match(event.request).then((response)=>{
//             if(response) {
//                 return response
//             }
//             return fetch(event.request).catch(()=>()=>caches.match(event.request))
//         })
//     )
// })