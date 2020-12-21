  
self.addEventListener("install",e=>{

    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll["./",
             "./about.html",
             "./syllabus.html",
             "./notes.html",
             "./no-sidebar.html",
             "./itc.html",
             "./mw.html",
             "./oc.html",
             "./cc.html",
             "./cs.html",
             "./mems.html",
             "./cclab.html",
             "./adr.html",
             "./tb.html",
             "./pq.html",
             "./assets/css/main.css",
             "./assets/css/fontawesome-all.min.css",
             "./assets/sass/main.css",
             "./images/jarvis56.png",
             "./images/jarvis64.png",
             "./images/jarvis96.png",
             "./images/jarvis144.png",
             "./images/jarvis192.png",
             "./images/jarvis240.png",
             "./images/pic01.jpg",
             "./images/pic02.jpg",
             "./images/pic03.jpg",
             "./images/pic04.jpg",
             "./images/pic05.jpg",
             "./images/pic06.jpg",
             "./images/pic07.jpg",
             "./images/pic08.jpg",
             "./images/pic09.jpg",
             "./images/pic10.jpg"
            ]
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})