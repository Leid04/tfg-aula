import{d as S,e as E,f as P,h as k,i as w}from"./chunk-LEUHUBX5.js";import"./chunk-AL4RKCZ4.js";import{Fb as n,Gb as _,Hb as g,La as c,Ma as b,Mb as h,bb as m,ib as d,ka as C,nb as t,ob as e,ta as p,tb as x,ua as f,vb as v,xb as s}from"./chunk-QH47KWYY.js";function T(i,r){if(i&1&&(t(0,"h1",17),n(1," En "),t(2,"span",18),n(3,"Iniciativa emprendedora"),e(),n(4," principalmente destacas: "),e(),t(5,"p",19),n(6),e()),i&2){let o=s(2);c(6),_(o.currentPlan==null?null:o.currentPlan.iniciativa)}}function I(i,r){if(i&1){let o=x();t(0,"div",20)(1,"h1",21),n(2," Te falta por hacer la parte de Iniciativa emprendedora "),e(),t(3,"button",22),v("click",function(){p(o);let l=s(2);return f(l.setCurrentIndex(0))}),n(4," Vamos a crearla! "),e()()}}function L(i,r){if(i&1&&(t(0,"h1",17),n(1," En "),t(2,"span",18),n(3,"Mercado y Marketing"),e(),n(4," destaca: "),e(),t(5,"p",19),n(6),e()),i&2){let o=s(2);c(6),_(o.currentPlan==null?null:o.currentPlan.mercadoMarketing)}}function V(i,r){if(i&1){let o=x();t(0,"div",20)(1,"h1",21),n(2," Te falta por hacer la parte de Mercado y marketing "),e(),t(3,"button",23),v("click",function(){p(o);let l=s(2);return f(l.setCurrentIndex(1))}),n(4," Vamos a crearla! "),e()()}}function y(i,r){if(i&1&&(t(0,"h1",17),n(1," Finalmente en "),t(2,"span",18),n(3,"gestiones"),e(),n(4," se recoge: "),e(),t(5,"p",19),n(6),e()),i&2){let o=s(2);c(6),_(o.currentPlan==null?null:o.currentPlan.gestiones)}}function A(i,r){if(i&1){let o=x();t(0,"div",20)(1,"h1",21),n(2," Se te ha olvidado lo \xFAltimo que es la parte de gestiones "),e(),t(3,"button",24),v("click",function(){p(o);let l=s(2);return f(l.setCurrentIndex(2))}),n(4," Vamos a crearla! "),e()()}}function R(i,r){if(i&1&&(t(0,"div",9)(1,"div",10),m(2,T,7,1)(3,I,5,0),e(),t(4,"div",11),m(5,L,7,1)(6,V,5,0),e()(),t(7,"div",12)(8,"div",13),m(9,y,7,1)(10,A,5,0),e()(),t(11,"div",14)(12,"button",15),n(13," Descargar "),e(),t(14,"button",16),n(15," Modificar "),e()()),i&2){let o=s();c(2),d(2,(o.currentPlan==null?null:o.currentPlan.iniciativa)!=""?2:3),c(3),d(5,(o.currentPlan==null?null:o.currentPlan.iniciativa)!=""?5:6),c(4),d(9,(o.currentPlan==null?null:o.currentPlan.gestiones)!=""?9:10)}}function M(i,r){i&1&&(t(0,"h1",25),n(1," Crea tu plan con nosotros! "),e(),t(2,"button",26),n(3," Vamos all\xE1! "),e())}var q=(()=>{let r=class r{constructor(a,l){this.authService=a,this.router=l}ngOnInit(){this.currentUser=this.authService.getUserLS(),this.currentUser&&this.getPlan()}setCurrentIndex(a){this.authService.setCurrentTILS(a)}getPlan(){this.authService.getPlan(this.currentUser?.id).subscribe({next:a=>{this.messageResponsive={message:"Tu plan es el siguiente: ",resultado:!0},this.currentPlan=a},error:a=>{this.messageResponsive={message:"Aun no tienes ningun plan",resultado:!1}}})}};r.\u0275fac=function(l){return new(l||r)(b(w),b(S))},r.\u0275cmp=C({type:r,selectors:[["app-perfil"]],standalone:!0,features:[h],decls:15,vars:3,consts:[[1,"bg-blue-900"],[1,"pt-20","pb-32"],[1,"max-w-screen-lg","px-5","mx-auto","text-center"],[1,"mb-8","text-4xl","font-bold","text-white","font-voll"],[1,"mb-8","text-lg","font-bold","bg-blue-300","font-comfortaa"],[1,"max-w-screen-lg","px-5","mx-auto"],[1,"mb-8","text-lg","bg-blue-300"],[1,"font-bold","text-center","font-voll"],[1,"font-bold","text-white","font-voll"],[1,"flex","flex-col","justify-center","mb-8","md:flex-row"],[1,"p-8","mb-4","bg-yellow-300","rounded-lg","shadow-lg","md:mb-0","md:mr-4"],[1,"p-8","bg-blue-300","rounded-lg","shadow-lg","md:ml-4"],[1,"flex","justify-center","mb-8"],[1,"p-8","bg-red-300","rounded-lg","shadow-lg"],[1,"flex","justify-center","mb-3"],[1,"p-2","mr-3","transition-colors","duration-300","ease-in-out","bg-blue-300","rounded","hover:bg-blue-400","font-voll"],["routerLink","/plan","routerLinkActive","active","aria-current","page",1,"p-2","transition-colors","duration-300","ease-in-out","bg-blue-300","rounded","hover:bg-blue-400","font-comfortaa"],[1,"mb-5","font-voll"],[1,"bg-blue-200"],[1,"font-comfortaa"],[1,"flex","flex-col","items-center","justify-items-center"],[1,"mb-2","text-sm","font-bold","font-voll"],["routerLink","/plan","routerLinkActive","active","aria-current","page",1,"p-2","mb-3","transition-colors","duration-300","ease-in-out","bg-blue-300","rounded","font-comfortaa","hover:bg-blue-400",3,"click"],["routerLink","/plan","routerLinkActive","active","aria-current","page",1,"p-2","mb-3","transition-colors","duration-300","ease-in-out","bg-yellow-300","rounded","hover:bg-blue-400","font-comfortaa",3,"click"],["routerLink","/plan","routerLinkActive","active","aria-current","page",1,"p-2","mb-3","transition-colors","duration-300","ease-in-out","bg-green-300","rounded","hover:bg-blue-400","font-comfortaa",3,"click"],[1,"mb-2","text-xl","font-bold","text-yellow-400","font-voll"],["routerLink","/plan","routerLinkActive","active","aria-current","page",1,"p-2","mb-3","transition-colors","duration-300","ease-in-out","bg-blue-300","rounded","hover:bg-blue-400","font-comfortaa"]],template:function(l,u){l&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),n(4),e(),t(5,"div",4),n(6),e(),m(7,R,16,3)(8,M,4,0),e(),t(9,"div",5)(10,"div",6)(11,"h1",7),n(12,"Mensajes"),e()(),t(13,"h1",8),n(14,"No tienes ning\xFAn mensaje"),e()()()()),l&2&&(c(4),g(" Hola ",u.currentUser==null?null:u.currentUser.name," ! "),c(2),g(" ",u.messageResponsive==null?null:u.messageResponsive.message," "),c(),d(7,u.messageResponsive!=null&&u.messageResponsive.resultado?7:8))},dependencies:[k,E,P]});let i=r;return i})();export{q as PerfilComponent};
