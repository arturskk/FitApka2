!function(t){function i(i,a){i.addClass("countdownHolder"),t.each(["Days","Hours","Minutes","Seconds"],function(a){t('<div class="time-box count'+this+'">').html('<div class="time"><div class="position">\t\t\t\t\t<div class="digit static">0</div>\t\t\t\t</div>\t\t\t\t<div class="position">\t\t\t\t\t<div class="digit static">0</div>\t\t\t\t</div></div>').appendTo(i),"Seconds"!=this&&i.append('<div class="countDiv countDiv'+a+'"></div>')})}function a(i,a){var o=i.find(".digit");if(o.is(":animated"))return!1;if(i.data("digit")==a)return!1;i.data("digit",a);var s=t("<div>",{class:"digit",css:{top:"-2.1em",opacity:0},html:a});o.before(s).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){o.remove()}),s.delay(100).animate({top:0,opacity:1},"fast",function(){s.addClass("static")})}t.fn.countdown=function(o){function s(t,i,o){a(f.eq(t),Math.floor(o/10)%10),a(f.eq(i),o%10)}var n,c,d,e,l,f,u=t.extend({callback:function(){},timestamp:0},o);return i(this,u),f=this.find(".position"),function t(){n=Math.floor((u.timestamp-Date.now())/1e3),n<0&&(n=0),c=Math.floor(n/86400),s(0,1,c),n-=86400*c,d=Math.floor(n/3600),s(2,3,d),n-=3600*d,e=Math.floor(n/60),s(4,5,e),n-=60*e,l=n,s(6,7,l),u.callback(c,d,e,l),setTimeout(t,1e3)}(),this}}(jQuery);