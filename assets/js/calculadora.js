(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
              ga('create', 'UA-96114218-3', 'auto');
              ga('send', 'pageview');
 
 
 
//codigo que agrega las cookies al ejecutar la biblioteca
                var _gaq = _gaq || [];
                  _gaq.push(['_setAccount', 'UA-96114218-3']);
                  _gaq.push(['_trackPageview']);
 
              (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
              })();
              //fin codigo que agrega las cookies al ejecutar la biblioteca
 
              //obtencion de cookies
                var w = _uGC(document.cookie, '__utma=', ';');
                var idVisitante = w.split(".");       
 
                //codigo
                var z = _uGC(document.cookie, '__utmz=', ';');
                var source = _uGC(z, 'utmcsr=', '|');
                var medium = _uGC(z, 'utmcmd=', '|');
                var term = _uGC(z, 'utmctr=', '|');
                var content = _uGC(z, 'utmcct=', '|');
                var campaign = _uGC(z, 'utmccn=', '|');
                var gclid = _uGC(z, 'utmgclid=', '|');
                if (gclid !="-") {
                 source = 'google';
                 medium = 'cpc';
                }
               
                var csegment = _uGC(document.cookie, '__utmv=', ';');
                if (csegment != '-') {
                 var csegmentex = /[1-9]*?\.(.*)/;
                 csegment = csegment.match(csegmentex);
                 csegment = csegment[1];
               
                } else {
                 csegment = '';
                }
               
                function _uGC(l,n,s)
                {
                    if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
                    var i,i2,i3,c="-";
                    i=l.indexOf(n);
                    i3=n.indexOf("=")+1;
                    if (i > -1) {
                    i2=l.indexOf(s,i); if (i2 < 0){ i2=l.length; }
                    c=l.substring((i+i3),i2);
                    }
                    return c;
                }
 
                console.log(':::medium: ' + medium);
                console.log(':::source: ' + source);
                console.log(':::campaign: ' + campaign);
                console.log(':::term: ' + term);
                console.log(':::content: ' + content);
                console.log(':::idVisitante: ' + idVisitante[1]);