"use strict";(self.webpackChunkclient_project=self.webpackChunkclient_project||[]).push([[863],{9863:(ee,g,a)=>{a.r(g),a.d(g,{HomeModule:()=>G});var d=a(8583),l=a(4913),x=a(7574),C=a(9796),A=a(9105),f=a(8002);function v(n,i,t,o){return(0,A.m)(t)&&(o=t,t=void 0),o?v(n,i,t).pipe((0,f.U)(r=>(0,C.k)(r)?o(...r):o(r))):new x.y(r=>{Z(n,i,function(s){r.next(arguments.length>1?Array.prototype.slice.call(arguments):s)},r,t)})}function Z(n,i,t,o,r){let c;if(function(n){return n&&"function"==typeof n.addEventListener&&"function"==typeof n.removeEventListener}(n)){const s=n;n.addEventListener(i,t,r),c=()=>s.removeEventListener(i,t,r)}else if(function(n){return n&&"function"==typeof n.on&&"function"==typeof n.off}(n)){const s=n;n.on(i,t),c=()=>s.off(i,t)}else if(function(n){return n&&"function"==typeof n.addListener&&"function"==typeof n.removeListener}(n)){const s=n;n.addListener(i,t),c=()=>s.removeListener(i,t)}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(let s=0,h=n.length;s<h;s++)Z(n[s],i,t,o,r)}o.add(c)}var q=a(5435),b=a(7393),w=a(3637);class _{constructor(i,t){this.dueTime=i,this.scheduler=t}call(i,t){return t.subscribe(new F(i,this.dueTime,this.scheduler))}}class F extends b.L{constructor(i,t,o){super(i),this.dueTime=t,this.scheduler=o,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(i){this.clearDebounce(),this.lastValue=i,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(D,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:i}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(i)}}clearDebounce(){const i=this.debouncedSubscription;null!==i&&(this.remove(i),i.unsubscribe(),this.debouncedSubscription=null)}}function D(n){n.debouncedNext()}class Y{constructor(i,t){this.compare=i,this.keySelector=t}call(i,t){return t.subscribe(new B(i,this.compare,this.keySelector))}}class B extends b.L{constructor(i,t,o){super(i),this.keySelector=o,this.hasKey=!1,"function"==typeof t&&(this.compare=t)}compare(i,t){return i===t}_next(i){let t;try{const{keySelector:r}=this;t=r?r(i):i}catch(r){return this.destination.error(r)}let o=!1;if(this.hasKey)try{const{compare:r}=this;o=r(this.key,t)}catch(r){return this.destination.error(r)}else this.hasKey=!0;o||(this.key=t,this.destination.next(i))}}var e=a(639),y=a(3422),T=a(1261),p=a(2214),m=a(665);const E=["recipeSearchInput"];function J(n,i){1&n&&(e.TgZ(0,"div",11),e._uU(1,"no se encontraron resultados"),e.qZA())}function P(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",12),e.TgZ(1,"div",13),e._UZ(2,"img",14),e.TgZ(3,"div",15),e.TgZ(4,"h6",16),e._uU(5),e.qZA(),e._UZ(6,"p",17),e._UZ(7,"img",18),e._UZ(8,"br"),e.TgZ(9,"button",19),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().details(c.id)}),e._uU(10,"Ver detalles"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(2),e.Q6J("src",t.title,e.LSH),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.s9C("src",t.image,e.LSH)}}let k=(()=>{class n{constructor(t,o,r,c,s,h){this._route=t,this.recetasService=o,this.route=r,this._activatedRoute=c,this.sumaPrecioService=s,this.detalleComponent=h}ngOnInit(){this.midinero=this.sumaPrecioService.suma}details(t){this.route.navigate([`/detalle/${t}`])}buscar(){v(this.recipeSearchInput.nativeElement,"keyup").pipe((0,f.U)(t=>t.target.value),(0,q.h)(t=>t.length>2),function(n,i=w.P){return t=>t.lift(new _(n,i))}(1e3),t=>t.lift(new Y(void 0,void 0))).subscribe(t=>{this.recetasService.getQuery("&query="+this.busqueda).subscribe(o=>{console.log(o),this.muestraRecetas=o.results})},t=>{alert(t),console.log("error",t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(y.A),e.Y36(l.F0),e.Y36(l.gz),e.Y36(T.K),e.Y36(p.L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],viewQuery:function(t,o){if(1&t&&e.Gf(E,7),2&t){let r;e.iGM(r=e.CRH())&&(o.recipeSearchInput=r.first)}},decls:13,vars:3,consts:[[1,"contaier"],[1,"row"],[1,"col-11"],[1,"mt-3",2,"margin-left","5%"],["for","search",1,"form-label"],["type","text","placeholder","ejemplo: pasta",1,"form-control",3,"ngModel","ngModelChange","keyup"],["recipeSearchInput",""],[1,"col-1",2,"margin-left","4%"],["class","text-center mx-auto","style","color: red;",4,"ngIf"],[1,"row","mt-3",2,"margin-left","2%"],["class","col-3 mt-3 col-xs col-sm col-md col-lg-4",4,"ngFor","ngForOf"],[1,"text-center","mx-auto",2,"color","red"],[1,"col-3","mt-3","col-xs","col-sm","col-md","col-lg-4"],[1,"card","border-primary","mb-3",2,"max-width","20rem"],["alt","",3,"src"],[1,"card-body"],[1,"card-title",2,"text-align","center","font-weight","bold"],[1,"card-text"],["alt","","width","80%",2,"margin-left","10%",3,"src"],[1,"btn","btn-secondary",2,"margin-left","30%","margin-top","5%",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"label",4),e._uU(5,"Busqueda"),e.qZA(),e.TgZ(6,"input",5,6),e.NdJ("ngModelChange",function(c){return o.busqueda=c})("keyup",function(){return o.buscar()}),e.qZA(),e.qZA(),e.TgZ(8,"div",7),e._UZ(9,"br"),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,J,2,0,"div",8),e.TgZ(11,"div",9),e.YNc(12,P,11,3,"div",10),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("ngModel",o.busqueda),e.xp6(4),e.Q6J("ngIf",0===(null==o.muestraRecetas?null:o.muestraRecetas.length)),e.xp6(2),e.Q6J("ngForOf",o.muestraRecetas))},directives:[m.Fj,m.JJ,m.On,d.O5,d.sg],styles:[".card[_ngcontent-%COMP%]:hover{box-shadow:10px 10px 10px #2e3d4933;background:RGB(120,194,174);color:#fff;transform:scale(.9)}.card[_ngcontent-%COMP%]{width:600px;margin-left:5%;margin-right:5%}.card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}.card-text[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (max-width: 575px){.mt-3[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}}@media (max-width: 699px){.mb-3[_ngcontent-%COMP%]{display:flex;flex-direction:column}}"]}),n})();var O=a(8259),u=a.n(O),R=a(4120),I=a(2013),Q=a(8914),N=a(3215);function V(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",23),e.TgZ(1,"div",24),e._UZ(2,"img",25),e.TgZ(3,"h6",16),e._uU(4),e.ALo(5,"slice"),e.qZA(),e.TgZ(6,"h6",26),e._uU(7),e.qZA(),e.TgZ(8,"button",27),e.NdJ("click",function(){const c=e.CHM(t).index;return e.oxw().eliminarPlato(c)}),e._uU(9,"Quitar"),e.qZA(),e.qZA(),e.TgZ(10,"li"),e._UZ(11,"hr",28),e.qZA(),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(2),e.s9C("src",t.imagen,e.LSH),e.xp6(2),e.hij("",e.Dn7(5,3,t.titulo,0,15),"..."),e.xp6(3),e.hij("$",t.precio,"")}}function $(n,i){if(1&n&&(e.TgZ(0,"div",29),e.TgZ(1,"div",30),e.TgZ(2,"div",23),e.TgZ(3,"div",31),e._uU(4),e.ALo(5,"slice"),e.qZA(),e.TgZ(6,"div",32),e._UZ(7,"h4",33),e._UZ(8,"img",34),e.TgZ(9,"h4",35),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(4),e.Oqu(e.Dn7(5,3,t.titulo,0,15)),e.xp6(4),e.s9C("src",t.imagen,e.LSH),e.xp6(2),e.hij("$",t.precio,"")}}const z=[{path:"",component:(()=>{class n{constructor(t,o,r,c,s,h,X,j,W){this._loginService=t,this._route=o,this._notification=r,this.detalleComponent=c,this.menuService=s,this.sumaPrecioService=h,this.promedioService=X,this.service=j,this._activatedRoute=W,this.miReceta=null,this.newObj=this.menuService.obtenerMenu(),this.midinero=this.sumaPrecioService.suma,this.midineroprom=this.detalleComponent.midineroprom}ngOnInit(){}details(t){this._route.navigate([`/detalle/${t}`])}totales(){this.midinero=this.sumaPrecioService.newPrecio}obtenerMenu(){return JSON.parse(localStorage.getItem("menu_resto")||"[]")}cerrarSesion(){this._loginService.logOut(),this._route.navigate(["/login"]),u().fire({position:"top-end",icon:"success",title:"Ha cerrado sesi\xf3n",showConfirmButton:!1,timer:2e3})}seccionMenu(){this._route.navigate(["/menu"])}vaciarMenu(){u().fire({title:"\xbfDesea eliminar el men\xfa?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"No"}).then(t=>{t.isConfirmed?(localStorage.removeItem("menu_resto"),this.midinero=0,u().fire("Men\xfa eliminado!","","success")):t.isDenied&&u().fire("El men\xfa no se elimin\xf3","","info")})}eliminarPlato(t){u().fire({title:"\xbfEst\xe1s seguro de borrar un plato del men\xfa?",text:"\xa1No podr\xe1s revertir los cambios!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, Borrar!",cancelButtonText:"Cancelar"}).then(o=>{o.isConfirmed&&u().fire("Borrado!","El plato ha sido eliminado del men\xfa","success").then(r=>{this.newObj.splice(t,1),this.menuService.guardarMenu(this.newObj),window.location.reload()})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(R.r),e.Y36(l.F0),e.Y36(I.g),e.Y36(p.L),e.Y36(Q.h),e.Y36(T.K),e.Y36(N.Q),e.Y36(y.A),e.Y36(l.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:33,vars:7,consts:[[1,"wrapper"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-primary"],[1,"container-fluid"],["src",".\\assets\\resto.png","alt","",2,"width","5%","margin-right","2%"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarColor01","aria-controls","navbarColor01","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarColor01",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto",2,"margin-left","46%"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["href","#","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link"],[1,"fa","fa-shopping-basket"],[1,"badge","bg-secondary"],[1,"dropdown-menu","dropdown-menu-right",2,"margin-right","30%"],["class","card-text",4,"ngFor","ngForOf"],[1,"card-title",2,"text-align","center","font-weight","bold","margin-top","1%"],["type","button",1,"btn","btn-danger",2,"margin-left","10%",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"container-fluid","mt-5"],[2,"text-align","center"],[1,"row"],["class","col-lg-3 mt-3 mb-3",4,"ngFor","ngForOf"],[1,"card-text"],[2,"display","flex","justify-content","space-around"],["alt","","width","10%",2,"margin-left","2%",3,"src"],["id","precioTotal",1,"card-title",2,"text-align","center","font-weight","bold","margin-top","1%"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[1,"dropdown-divider"],[1,"col-lg-3","mt-3","mb-3"],[1,"card","border-success","mb-3",2,"max-width","15rem","margin-top","1%","margin-left","1%"],[1,"card-header"],[1,"card-body"],[1,"card-title"],["alt","","width","80%",2,"margin-left","10%",3,"src"],[1,"card-text",2,"margin-left","25%","margin-top","1%"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"nav",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"a",4),e._uU(5,"Restaurant a la Carta"),e.qZA(),e.TgZ(6,"button",5),e._UZ(7,"span",6),e.qZA(),e.TgZ(8,"div",7),e.TgZ(9,"ul",8),e.TgZ(10,"li",9),e.TgZ(11,"a",10),e._uU(12,"Home"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"a",11),e._UZ(14,"i",12),e._uU(15,"Men\xfa "),e.TgZ(16,"span",13),e._uU(17),e.qZA(),e.qZA(),e.TgZ(18,"div",14),e.YNc(19,V,12,7,"div",15),e.TgZ(20,"h6",16),e._uU(21),e.ALo(22,"currency"),e.qZA(),e.TgZ(23,"button",17),e.NdJ("click",function(){return o.vaciarMenu()}),e._uU(24,"Vaciar men\xfa"),e.qZA(),e.qZA(),e.TgZ(25,"button",18),e.NdJ("click",function(){return o.cerrarSesion()}),e._uU(26,"Cerrar sesi\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(27,"router-outlet"),e.TgZ(28,"div",19),e.TgZ(29,"h1",20),e._uU(30,"Men\xfa actual"),e.qZA(),e.TgZ(31,"div",21),e.YNc(32,$,11,7,"div",22),e.qZA(),e.qZA()),2&t&&(e.xp6(17),e.Oqu(o.obtenerMenu().length),e.xp6(2),e.Q6J("ngForOf",o.obtenerMenu()),e.xp6(2),e.hij("Total men\xfa ",e.lcZ(22,5,o.midinero),""),e.xp6(11),e.Q6J("ngForOf",o.obtenerMenu())("ngForOf",o.index))},directives:[d.sg,l.lC],pipes:[d.H9,d.OU],styles:["a[_ngcontent-%COMP%]:visited{color:#fff}"]}),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:k},{path:"detalle/:id",component:p.L}]}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(z)],l.Bz]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,K,l.Bz,m.u5,m.UX]]}),n})()}}]);