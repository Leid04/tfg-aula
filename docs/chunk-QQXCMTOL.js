import{b as w,c as f,d as F,e as S,f as N,g as C,i as k,j as T,k as j,l as M}from"./chunk-ONHRH64U.js";import"./chunk-HVVF7OWU.js";import{Eb as o,La as c,Mb as h,bb as s,db as v,ib as m,ka as y,mb as n,nb as t,ob as g,ub as E,wb as x}from"./chunk-Q6WZU5YZ.js";function q(e,i){e&1&&(n(0,"div")(1,"small",23),o(2,"No puedes dejar este campo en blanco"),t()())}function L(e,i){if(e&1&&s(0,q,3,0,"div"),e&2){let l,r=x();m(0,(l=r.contactForm.get("senderName"))!=null&&l.hasError("required")?0:-1)}}function G(e,i){e&1&&(n(0,"div")(1,"small",23),o(2,"No puedes dejar este campo en blanco"),t()())}function D(e,i){if(e&1&&s(0,G,3,0,"div"),e&2){let l,r=x();m(0,(l=r.contactForm.get("senderLastName"))!=null&&l.hasError("required")?0:-1)}}function A(e,i){e&1&&(n(0,"div")(1,"small",23),o(2,"No puedes dejar este campo en blanco"),t()())}function H(e,i){e&1&&(n(0,"div")(1,"small",23),o(2,"Por favor introduce bien tu correo"),t()())}function P(e,i){if(e&1&&s(0,A,3,0,"div")(1,H,3,0,"div"),e&2){let l,r,d=x();m(0,(l=d.contactForm.get("senderEmail"))!=null&&l.hasError("required")?0:-1),c(),m(1,(r=d.contactForm.get("senderEmail"))!=null&&r.hasError("email")?1:-1)}}function V(e,i){e&1&&(n(0,"div")(1,"small",23),o(2,"No puedes dejar este campo en blanco"),t()())}function z(e,i){e&1&&(n(0,"div")(1,"small",23),o(2,"El mensaje tiene que ser por lo menos de 10 caracteres"),t()())}function J(e,i){if(e&1&&s(0,V,3,0,"div")(1,z,3,0,"div"),e&2){let l,r,d=x();m(0,(l=d.contactForm.get("senderMessage"))!=null&&l.hasError("required")?0:-1),c(),m(1,(r=d.contactForm.get("senderMessage"))!=null&&r.hasError("minlength")?1:-1)}}var Q=(()=>{let i=class i{constructor(){this.contactForm=new N({senderName:new C("",f.required),senderLastName:new C("",f.required),senderEmail:new C("",[f.required,f.email]),senderMessage:new C("",[f.required,f.minLength(10)])})}};i.\u0275fac=function(d){return new(d||i)},i.\u0275cmp=y({type:i,selectors:[["app-contact"]],standalone:!0,features:[h],decls:50,vars:6,consts:[[1,"h-screen","bg-image"],[1,"flex","items-center","justify-center","h-screen","bg-image"],[1,"p-8","overflow-hidden","bg-blue-400","rounded-lg","shadow-md"],[1,"max-w-screen-lg","p-5","mx-auto"],[1,"border","md:flex"],[1,"p-10","text-white","bg-dark-blue-900","md:w-1/3"],[1,"mt-4","text-sm","leading-7","uppercase","font-regular"],[1,"text-3xl","font-extrabold","leading-normal","tracking-tight","sm:text-4xl","font-voll"],[1,"mt-4","leading-7","text-gray-200","font-comfortaa"],[1,"mt-5","font-comfortaa"],[1,"text-sm"],["action","mailto:secretaria.ies.tiernogalvan.madrid@educa.madrid.org","method","post",1,"p-10","md:w-2/3",3,"ngSubmit","formGroup"],[1,"mb-6"],["for","name",1,"block","mb-2","text-xs","font-bold","tracking-wide","text-gray-700","uppercase"],["formControlName","senderName","id","name","type","text","placeholder",`Juan
              `,1,"block","w-full","px-4","py-3","leading-tight","text-gray-700","bg-gray-200","border","border-gray-200","rounded","appearance-none","form-control","focus:outline-none","focus:bg-white","focus:border-gray-500"],["for","lastname",1,"block","mb-2","text-xs","font-bold","tracking-wide","text-gray-700","uppercase"],["formControlName","senderLastName","id","lastname","type","text","placeholder",`Lopez
              `,1,"block","w-full","px-4","py-3","leading-tight","text-gray-700","bg-gray-200","border","border-gray-200","rounded","appearance-none","form-control","focus:outline-none","focus:bg-white","focus:border-gray-500"],["for","gmail",1,"block","mb-2","text-xs","font-bold","tracking-wide","text-gray-700","uppercase"],["formControlName","senderEmail","id","gmail","type","email","placeholder",`juan@gmail.com
              `,1,"block","w-full","px-4","py-3","leading-tight","text-gray-700","bg-gray-200","border","border-gray-200","rounded","appearance-none","form-control","focus:outline-none","focus:bg-white","focus:border-gray-500"],["for","message",1,"block","mb-2","text-xs","font-bold","tracking-wide","text-gray-700","uppercase"],["rows","10","formControlName","senderMessage",1,"block","w-full","px-4","py-3","mb-3","leading-tight","text-gray-700","bg-gray-200","border","border-gray-200","rounded","appearance-none","form-control","focus:outline-none","focus:bg-white","focus:border-gray-500"],[1,"flex","justify-between"],["type","submit",1,"px-6","py-2","font-bold","text-white","bg-indigo-600","rounded","shadow","hover:bg-indigo-400","focus:shadow-outline","focus:outline-none",3,"disabled"],[1,"text-red-600"]],template:function(d,a){if(d&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"p",6),o(7," Contacto "),t(),n(8,"h3",7),o(9," Envianos un mensaje "),t(),n(10,"p",8),o(11," Conoce muy bien el mundo de emprendimineto y crea tu propio plan de empresa! "),t(),n(12,"div",9)(13,"span",10),o(14,"I.E.S. Enrique Tierno Galv\xE1n"),t(),g(15,"br"),n(16,"span",10),o(17,"+34 913 171 972"),t(),g(18,"br")(19,"br"),n(20,"span",10),o(21,"Horario Publico 9:00 a 13:00"),t(),g(22,"br"),n(23,"span",10),o(24,"Horario Alumnado ma\xF1anas recreo y tardes de 15:15 a 15:45 H."),t()()(),n(25,"form",11),E("ngSubmit",function(u){return u.preventDefault()}),n(26,"div",12)(27,"label",13),o(28,"Nombre"),t(),g(29,"input",14),s(30,L,1,1),t(),n(31,"div",12)(32,"label",15),o(33,"Apellidos"),t(),g(34,"input",16),s(35,D,1,1),t(),n(36,"div",12)(37,"label",17),o(38,"Email:"),t(),g(39,"input",18),s(40,P,2,2),t(),n(41,"div",12)(42,"label",19),o(43,"Tu mensaje:"),t(),n(44,"textarea",20),o(45,"              "),t(),s(46,J,2,2),t(),n(47,"div",21)(48,"button",22),o(49," Enviar mensaje "),t()()()()()()()()),d&2){let p,u,b,_;c(25),v("formGroup",a.contactForm),c(5),m(30,(p=a.contactForm.get("senderName"))!=null&&p.invalid&&((p=a.contactForm.get("senderName"))!=null&&p.dirty||(p=a.contactForm.get("senderName"))!=null&&p.touched)?30:-1),c(5),m(35,(u=a.contactForm.get("senderLastName"))!=null&&u.invalid&&((u=a.contactForm.get("senderLastName"))!=null&&u.dirty||(u=a.contactForm.get("senderLastName"))!=null&&u.touched)?35:-1),c(5),m(40,(b=a.contactForm.get("senderEmail"))!=null&&b.invalid&&((b=a.contactForm.get("senderEmail"))!=null&&b.dirty||(b=a.contactForm.get("senderEmail"))!=null&&b.touched)?40:-1),c(6),m(46,(_=a.contactForm.get("senderMessage"))!=null&&_.invalid&&((_=a.contactForm.get("senderMessage"))!=null&&_.dirty||(_=a.contactForm.get("senderMessage"))!=null&&_.touched)?46:-1),c(2),v("disabled",a.contactForm.invalid)}},dependencies:[M,k,w,F,S,T,j],styles:['.bg-image[_ngcontent-%COMP%]{background-image:url("./media/contactBack-LHSQXA3J.jpg");background-size:cover;background-position:center}']});let e=i;return e})();export{Q as ContactComponent};