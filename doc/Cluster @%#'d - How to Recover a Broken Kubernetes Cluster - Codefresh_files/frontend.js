;var MonsterInsights=function(){var t=[];this.setLastClicked=function(e,n,i){e=typeof e!=='undefined'?e:[];n=typeof n!=='undefined'?n:[];i=typeof i!=='undefined'?i:!1;t.valuesArray=e;t.fieldsArray=n};this.getLastClicked=function(){return t};function l(){if(monsterinsights_frontend.is_debug_mode==='true'||window.monsterinsights_debug_mode){return!0}
else{return!1}};function e(e,n){e=typeof e!=='undefined'?e:[];n=typeof n!=='undefined'?n:{};__gaTracker('send',n);t.valuesArray=e;t.fieldsArray=n;t.tracked=!0;i('Tracked: '+e.type);i(t)};function n(e){e=typeof e!=='undefined'?e:[];t.valuesArray=e;t.fieldsArray=[];t.tracked=!1;i('Not Tracked: '+e.exit);i(t)};function i(e){if(l()){console.dir(e)}};function o(e){return e.replace(/^\s+|\s+$/gm,'')};function s(){var n=0,e=document.domain,i=e.split('.'),t='_gd'+(new Date()).getTime();while(n<(i.length-1)&&document.cookie.indexOf(t+'='+t)==-1){e=i.slice(-1-(++n)).join('.');document.cookie=t+'='+t+';domain='+e+';'};document.cookie=t+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain='+e+';';return e};function f(e){e=e.toString();e=e.substring(0,(e.indexOf('#')==-1)?e.length:e.indexOf('#'));e=e.substring(0,(e.indexOf('?')==-1)?e.length:e.indexOf('?'));e=e.substring(e.lastIndexOf('/')+1,e.length);if(e.length>0&&e.indexOf('.')!==-1){e=e.substring(e.indexOf('.')+1);return e}
else{return''}};function h(){return typeof(__gaTracker)!=='undefined'&&__gaTracker&&__gaTracker.hasOwnProperty('loaded')&&__gaTracker.loaded==!0};function v(e){return e.which==1||e.which==2||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey};function d(){var e=[];if(typeof monsterinsights_frontend.download_extensions=='string'){e=monsterinsights_frontend.download_extensions.split(',')};return e};function u(){var e=[];if(typeof monsterinsights_frontend.inbound_paths=='string'){e=monsterinsights_frontend.inbound_paths.split(',')};return e};function p(e){if(e.which==1){return'event.which=1'}
else if(e.which==2){return'event.which=2'}
else if(e.metaKey){return'metaKey'}
else if(e.ctrlKey){return'ctrlKey'}
else if(e.shiftKey){return'shiftKey'}
else if(e.altKey){return'altKey'}
else{return''}};function m(e){var r=d(),h=u(),t='unknown',c=e.href,g=f(e.href),v=s(),a=e.hostname,i=e.protocol,p=e.pathname;c=c.toString();var n,l,m=e.getAttribute('data-vars-ga-category');if(m){return m};if(c.match(/^javascript\:/i)){t='internal'}
else if(i&&i.length>0&&(o(i)=='tel'||o(i)=='tel:')){t='tel'}
else if(i&&i.length>0&&(o(i)=='mailto'||o(i)=='mailto:')){t='mailto'}
else if(a&&v&&a.length>0&&v.length>0&&!a.endsWith(v)){t='external'}
else if(p&&h.length>0&&p.length>0){for(n=0,l=h.length;n<l;++n){if(h[n].length>0&&p.startsWith(h[n])){t='internal-as-outbound';break}}}
else if(a&&window.monsterinsights_experimental_mode&&a.length>0&&document.domain.length>0&&a!==document.domain){t='cross-hostname'};if(g&&(t==='unknown'||'external'===t)&&r.length>0&&g.length>0){for(n=0,l=r.length;n<l;++n){if(r[n].length>0&&(c.endsWith(r[n])||r[n]==g)){t='download';break}}};if(t==='unknown'){t='internal'};return t};function y(e,t){var n=(e.target&&!e.target.match(/^_(self|parent|top)$/i))?e.target:!1;if(t.ctrlKey||t.shiftKey||t.metaKey||t.which==2){n='_blank'};return n};function c(i){var r=i.srcElement||i.target,t=[],a;t.el=r;t.ga_loaded=h();t.click_type=p(i);if(!h()||!v(i)){t.exit='loaded';n(t);return}
while(r&&(typeof r.tagName=='undefined'||r.tagName.toLowerCase()!='a'||!r.href)){r=r.parentNode};if(r&&r.href&&!r.hasAttribute('xlink:href')){var c=r.href,O=f(r.href),E=d(),D=u(),M=monsterinsights_frontend.home_url,k=monsterinsights_frontend.track_download_as,x='outbound-link-'+monsterinsights_frontend.internal_label,W=s(),o=m(r),A=y(r,i),g=r.getAttribute('data-vars-ga-action'),b=r.getAttribute('data-vars-ga-label');t.el=r;t.el_href=r.href;t.el_protocol=r.protocol;t.el_hostname=r.hostname;t.el_port=r.port;t.el_pathname=r.pathname;t.el_search=r.search;t.el_hash=r.hash;t.el_host=r.host;t.debug_mode=l();t.download_extensions=E;t.inbound_paths=D;t.home_url=M;t.track_download_as=k;t.internal_label=x;t.link=c;t.extension=O;t.type=o;t.target=A;t.title=r.title||r.textContent||r.innerText;if(o!=='internal'&&o!=='javascript'){var T=!1,w=function(){if(T){return};T=!0;window.location.href=c},C=function(){t.exit='external';n(t)},L=function(){t.exit='internal-as-outbound';n(t)},K=function(){t.exit='cross-hostname';n(t)};if(A||o=='mailto'||o=='tel'){if(o=='download'){if(k=='pageview'){a={hitType:'pageview',page:c,};e(t,a)}
else{a={hitType:'event',eventCategory:'download',eventAction:g||c,eventLabel:b||t.title,};e(t,a)}}
else if(o=='tel'){a={hitType:'event',eventCategory:'tel',eventAction:g||c,eventLabel:b||t.title.replace('tel:',''),};e(t,a)}
else if(o=='mailto'){a={hitType:'event',eventCategory:'mailto',eventAction:g||c,eventLabel:b||t.title.replace('mailto:',''),};e(t,a)}
else if(o=='internal-as-outbound'){a={hitType:'event',eventCategory:x,eventAction:g||c,eventLabel:b||t.title,};e(t,a)}
else if(o=='external'){a={hitType:'event',eventCategory:'outbound-link',eventAction:g||c,eventLabel:b||t.title,};e(t,a)}
else if(o=='cross-hostname'){a={hitType:'event',eventCategory:'cross-hostname',eventAction:g||c,eventLabel:b||t.title,};e(t,a)}
else{if(o&&o!='internal'){a={hitType:'event',eventCategory:o,eventAction:g||c,eventLabel:b||t.title,};e(t,a)}
else{t.exit='type';n(t)}}}
else{if(o!='cross-hostname'&&o!='external'&&o!='internal-as-outbound'){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}}};if(o=='download'){if(k=='pageview'){a={hitType:'pageview',page:c,hitCallback:w,};e(t,a)}
else{a={hitType:'event',eventCategory:'download',eventAction:g||c,eventLabel:b||t.title,hitCallback:w,};e(t,a)}}
else if(o=='internal-as-outbound'){window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};a={hitType:'event',eventCategory:x,eventAction:g||c,eventLabel:b||t.title,hitCallback:w,};if(navigator.sendBeacon){a.transport='beacon'};e(t,a);setTimeout(w,1000)}}
else if(o=='external'){window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};a={hitType:'event',eventCategory:'outbound-link',eventAction:g||c,eventLabel:b||t.title,hitCallback:w,};if(navigator.sendBeacon){a.transport='beacon'};e(t,a);setTimeout(w,1000)}}
else if(o=='cross-hostname'){window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};a={hitType:'event',eventCategory:'cross-hostname',eventAction:g||c,eventLabel:b||t.title,hitCallback:w,};if(navigator.sendBeacon){a.transport='beacon'};e(t,a);setTimeout(w,1000)}}
else{if(o&&o!=='internal'){a={hitType:'event',eventCategory:o,eventAction:g||c,eventLabel:b||t.title,hitCallback:w,};e(t,a)}
else{t.exit='type';n(t)}};if(o!='external'&&o!='cross-hostname'&&o!='internal-as-outbound'){setTimeout(w,1000)}
else{if(o=='external'){setTimeout(C,1100)}
else if(o=='cross-hostname'){setTimeout(K,1100)}
else{setTimeout(L,1100)}}}}
else{t.exit='internal';n(t)}}
else{t.exit='notlink';n(t)}};var r=window.location.hash;function g(){if(monsterinsights_frontend.hash_tracking==='true'&&r!=window.location.hash){r=window.location.hash;__gaTracker('set','page',location.pathname+location.search+location.hash);__gaTracker('send','pageview');i('Hash change to: '+location.pathname+location.search+location.hash)}
else{i('Hash change to (untracked): '+location.pathname+location.search+location.hash)}};var a=window;if(a.addEventListener){a.addEventListener('load',function(){document.body.addEventListener('click',c,!1)},!1);window.addEventListener('hashchange',g,!1)}
else{if(a.attachEvent){a.attachEvent('onload',function(){document.body.attachEvent('onclick',c)});window.attachEvent('onhashchange',g)}};if(typeof String.prototype.endsWith!=='function'){String.prototype.endsWith=function(e){return this.indexOf(e,this.length-e.length)!==-1}};if(typeof String.prototype.startsWith!=='function'){String.prototype.startsWith=function(e){return this.indexOf(e)===0}};if(typeof Array.prototype.lastIndexOf!=='function'){Array.prototype.lastIndexOf=function(e){'use strict';if(this===void 0||this===null){throw new TypeError()};var t,n,a=Object(this),i=a.length>>>0;if(i===0){return-1};t=i-1;if(arguments.length>1){t=Number(arguments[1]);if(t!=t){t=0}
else if(t!=0&&t!=(1/0)&&t!=-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}};for(n=t>=0?Math.min(t,i-1):i-Math.abs(t);n>=0;n--){if(n in a&&a[n]===e){return n}};return-1}}},MonsterInsightsObject=new MonsterInsights();