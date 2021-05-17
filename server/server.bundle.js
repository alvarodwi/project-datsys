(()=>{var e={176:(e,a,t)=>{t(334).config(),e.exports={username:"root",password:"admin",database:"project_datsys",port:{DB_HOST:"localhost",DB_USERNAME:"root",DB_PASSWORD:"admin",DB_DATABASE:"project_datsys"}.DB_PORT,logging:!1,host:"localhost",dialect:"mysql",operatorsAliases:0,timezone:"+07:00"}},591:(e,a,t)=>{const{Op:r}=t(121),{sequelize:i}=t(103),s=t(103),{response:l,getPagination:o,getPagingData:n}=t(741),d=(e,a)=>(a=a||"asc","novel_count"==e?(i.literal("novelCount"),["name",`${a}`]):["name",`${a}`]);a.get=async(e,a)=>{const{page:t,size:u,name:c,sort_by:m,order:p}=e.query;var v=c?{name:{[r.like]:`%${c}%`}}:null,b=m?[d(m,p)]:[];const{limit:h,offset:g}=o(t,u);var w=await s.Author.findAndCountAll({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM novels n WHERE author.id = n.authorId)"),"novelCount"]]},where:v,limit:h,order:b,offset:g,distinct:!0,include:[{all:!0}]});l(a,200,"success",n(w,t,h))},a.detail=async(e,a)=>{var t={id:e.params.id},r=await s.Author.findOne({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM novels n WHERE author.id = n.authorId)"),"novelCount"]]},where:t,include:[{model:s.Novel,as:"novels",include:[{model:s.Release,as:"releases",where:{volumeNumber:1}}]}]});if(!r)return l(a,404,"Data Author tidak ditemukan",{});l(a,200,"success",r)},a.store=async(e,a)=>{var t={};if(e.params.id&&!(t=await s.Author.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}})))return l(a,404,"Data Author tidak ditemukan",{});var r={name:e.body.name,jpName:e.body.jpName};e.params.id?await t.update(r):t=await s.Author.create(r),l(a,200,(e.params.id?"Ubah":"Tambah")+" data Author berhasil",await t.toJSON())},a.delete=async(e,a)=>{var t=await s.Author.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}});return t?(await t.destroy(),l(a,200,"Data Author berhasil dihapus",{})):l(a,404,"Data Author tidak ditemukan",{})}},551:(e,a,t)=>{const{Op:r}=t(121),{sequelize:i}=t(103),s=t(103),{response:l,getPagination:o,getPagingData:n}=t(741),d=(e,a)=>(a=a||"asc","novel_count"==e?(i.literal("novelCount"),["name",`${a}`]):["name",`${a}`]);a.get=async(e,a)=>{const{page:t,size:u,name:c,sort_by:m,order:p}=e.query;var v=c?{name:{[r.like]:`%${c}%`}}:null,b=m?[d(m,p)]:[];const{limit:h,offset:g}=o(t,u);var w=await s.Illustrator.findAndCountAll({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM novels n WHERE illustrator.id = n.illustratorId)"),"novelCount"]]},where:v,limit:h,order:b,offset:g,distinct:!0,include:[{all:!0}]});l(a,200,"success",n(w,t,h))},a.detail=async(e,a)=>{var t={id:e.params.id},r=await s.Illustrator.findOne({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM novels n WHERE illustrator.id = n.illustratorId)"),"novelCount"]]},where:t,include:[{model:s.Novel,as:"novels",include:[{model:s.Release,as:"releases",where:{volumeNumber:1}}]}]});if(!r)return l(a,404,"Data Illustrator tidak ditemukan",{});l(a,200,"success",r)},a.store=async(e,a)=>{var t={};if(e.params.id&&!(t=await s.Illustrator.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}})))return l(a,404,"Data Illustrator tidak ditemukan",{});var r={name:e.body.name,jpName:e.body.jpName};e.params.id?await t.update(r):t=await s.Illustrator.create(r),l(a,200,(e.params.id?"Ubah":"Tambah")+" data Illustrator berhasil",await t.toJSON())},a.delete=async(e,a)=>{var t=await s.Illustrator.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}});return t?(await t.destroy(),l(a,200,"Data Illustrator berhasil dihapus",{})):l(a,404,"Data Illustrator tidak ditemukan",{})}},569:(e,a,t)=>{const{Op:r}=t(121),{sequelize:i}=t(103),s=t(103),{response:l,getPagination:o,getPagingData:n}=t(741),d=(e,a)=>(a=a||"asc","novel_count"==e?(i.literal("novelCount"),["name",`${a}`]):["name",`${a}`]);a.get=async(e,a)=>{const{page:t,size:u,name:c,sort_by:m,order:p}=e.query;var v=c?{name:{[r.like]:`%${c}%`}}:null,b=m?[d(m,p)]:[];const{limit:h,offset:g}=o(t,u);var w=await s.Label.findAndCountAll({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM novels n WHERE label.id = n.labelId)"),"novelCount"]]},where:v,limit:h,order:b,offset:g,distinct:!0,include:[{all:!0}]});l(a,200,"success",n(w,t,h))},a.detail=async(e,a)=>{var t={id:e.params.id},r=await s.Label.findOne({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM novels n WHERE label.id = n.labelId)"),"novelCount"]]},where:t,include:[{model:s.Novel,as:"novels",include:[{model:s.Release,as:"releases",where:{volumeNumber:1}}]}]});if(!r)return l(a,404,"Data Label tidak ditemukan",{});l(a,200,"success",r)},a.store=async(e,a)=>{var t={};if(e.params.id&&!(t=await s.Label.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}})))return l(a,404,"Data Label tidak ditemukan",{});var r={name:e.body.name,jpName:e.body.jpName,link:e.body.link};e.params.id?await t.update(r):t=await s.Label.create(r),l(a,200,(e.params.id?"Ubah":"Tambah")+" data Label berhasil",await t.toJSON())},a.delete=async(e,a)=>{var t=await s.Label.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}});return t?(await t.destroy(),l(a,200,"Data Label berhasil dihapus",{})):l(a,404,"Data Label tidak ditemukan",{})}},960:(e,a,t)=>{const{Op:r}=t(121),{sequelize:i}=t(103),s=t(103),{response:l,getPagination:o,getPagingData:n}=t(741),d=(e,a)=>(a=a||"asc","volume_count"==e?(i.literal("volumeCount"),["title",`${a}`]):"last_release"==e?(i.literal("lastRelease"),["title",`${a}`]):["title",`${a}`]);a.get=async(e,a)=>{const{page:t,size:u,title:c,sort_by:m,order:p}=e.query;var v=c?{title:{[r.like]:`%${c}%`}}:null,b=m?[d(m,p)]:[];const{limit:h,offset:g}=o(t,u);var w=await s.Novel.findAndCountAll({attributes:{include:[[i.literal("(SELECT COUNT(*) FROM releases r WHERE novel.id = r.novelId)"),"volumeCount"],[i.literal("(SELECT MAX(r.date) FROM releases r WHERE novel.id = r.novelId)"),"lastRelease"],[i.literal("(SELECT r.coverUrl FROM releases r WHERE novel.id = r.novelId ORDER BY r.volumeNumber ASC LIMIT 1)"),"coverUrl"]]},where:v,order:b,limit:h,offset:g,distinct:!0,include:[{all:!0,nested:!0}]});l(a,200,"success",n(w,t,h))},a.detail=async(e,a)=>{var t={id:e.params.id},r=await s.Novel.findOne({where:t,attributes:{include:[[i.literal("(SELECT COUNT(*) FROM releases r WHERE novel.id = r.novelId)"),"volumeCount"],[i.literal("(SELECT r.coverUrl FROM releases r WHERE novel.id = r.novelId ORDER BY r.volumeNumber ASC LIMIT 1)"),"coverUrl"]]},include:{all:!0,nested:!0}});if(!r)return l(a,404,"Data Novel tidak ditemukan",{});l(a,200,"success",r)},a.store=async(e,a)=>{var t={};if(e.params.id&&!(t=await s.Novel.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}})))return l(a,404,"Data Novel tidak ditemukan",{});var r={title:e.body.title,jpTitle:e.body.jpTitle,plot:e.body.plot,genre:e.body.genre,link:e.body.link,authorId:e.body.authorId,illustratorId:e.body.illustratorId,labelId:e.body.labelId};e.params.id?await t.update(r):t=await s.Novel.create(r),l(a,200,(e.params.id?"Ubah":"Tambah")+" data Novel berhasil",await t.toJSON())},a.delete=async(e,a)=>{var t=await s.Novel.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}});return t?(await t.destroy(),l(a,200,"Data Novel berhasil dihapus",{})):l(a,404,"Data Novel tidak ditemukan",{})}},957:(e,a,t)=>{const{Op:r,where:i}=t(121),s=t(103),{response:l,getPagination:o,getPagingData:n}=t(741);a.get=async(e,a)=>{const{page:t,size:r}=e.query,{limit:d,offset:u}=o(t,r);var c=await s.Release.findAndCountAll({where:i,limit:d,offset:u,distinct:!0,include:[{all:!0}]});l(a,200,"success",n(c,t,d))},a.detail=async(e,a)=>{var t={id:e.params.id},r=await s.Release.findOne({where:t,include:{all:!0}});if(!r)return l(a,404,"Data Release tidak ditemukan",{});l(a,200,"success",r)},a.store=async(e,a)=>{var t={};if(e.params.id&&!(t=await s.Release.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}})))return l(a,404,"Data Release tidak ditemukan",{});var r={volumeNumber:e.body.volumeNumber,date:e.body.date,coverUrl:e.body.coverUrl,page:e.body.page,storeUrl:e.body.storeUrl,novelId:e.body.novelId};e.params.id?await t.update(r):t=await s.Release.create(r),l(a,200,(e.params.id?"Ubah":"Tambah")+" data Release berhasil",await t.toJSON())},a.delete=async(e,a)=>{var t=await s.Release.findOne({where:{id:e.params.id},include:{all:!0,nested:!0}});return t?(await t.destroy(),l(a,200,"Data Release berhasil dihapus",{})):l(a,404,"Data Release tidak ditemukan",{})}},103:(e,a,t)=>{"use strict";const r=t(747),i=t(622),{Sequelize:s,DataTypes:l}=t(121),o=i.basename(__filename),n=t(176),d={};let u;u=new s(n),r.readdirSync(__dirname).filter((e=>0!==e.indexOf(".")&&e!==o&&".js"===e.slice(-3))).forEach((e=>{const a=t(774)(i.join(__dirname,e))(u,l);d[a.name]=a})),Object.keys(d).forEach((e=>{d[e].associate&&d[e].associate(d)})),d.sequelize=u,d.Sequelize=s;const c={logging:console.log};u.sync(c).catch((e=>{console.log(e),process.exit()})),e.exports=d},774:e=>{function a(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}a.keys=()=>[],a.resolve=a,a.id=774,e.exports=a},261:(e,a,t)=>{const r=t(127).Router(),i=t(591);r.get("/",i.get),r.post("/",i.store),r.get("/:id",i.detail),r.post("/:id",i.store),r.delete("/:id",i.delete),e.exports=r},322:(e,a,t)=>{const r=t(127).Router(),i=t(551);r.get("/",i.get),r.post("/",i.store),r.get("/:id",i.detail),r.post("/:id",i.store),r.delete("/:id",i.delete),e.exports=r},169:(e,a,t)=>{const r=t(127).Router(),i=t(569);r.get("/",i.get),r.post("/",i.store),r.get("/:id",i.detail),r.post("/:id",i.store),r.delete("/:id",i.delete),e.exports=r},802:(e,a,t)=>{const r=t(127).Router(),i=t(960);r.get("/",i.get),r.post("/",i.store),r.get("/:id",i.detail),r.post("/:id",i.store),r.delete("/:id",i.delete),e.exports=r},879:(e,a,t)=>{const r=t(127).Router(),i=t(957);r.get("/",i.get),r.post("/",i.store),r.get("/:id",i.detail),r.post("/:id",i.store),r.delete("/:id",i.delete),e.exports=r},741:(e,a)=>{a.response=(e,a,t,r)=>(r||(r={}),200!=a?(r=r.length?{error:r}:{},e.status(a).json({code:a,message:t,data:r})):e.status(a).json({code:a,message:t,data:r})),a.getPagination=(e,a)=>{const t=a?+a:10;return{limit:t,offset:e?e*t:0}},a.getPagingData=(e,a,t)=>{const{count:r,rows:i}=e;return{result:i,currentPage:a?+a:0,totalPages:Math.ceil(r/t),totalItems:r}}},479:e=>{"use strict";e.exports=require("cors")},334:e=>{"use strict";e.exports=require("dotenv")},127:e=>{"use strict";e.exports=require("express")},747:e=>{"use strict";e.exports=require("fs")},605:e=>{"use strict";e.exports=require("http")},622:e=>{"use strict";e.exports=require("path")},121:e=>{"use strict";e.exports=require("sequelize")}},a={};function t(r){var i=a[r];if(void 0!==i)return i.exports;var s=a[r]={exports:{}};return e[r](s,s.exports,t),s.exports}t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{t(334).config();const e=t(127),a=t(479),r=e();r.use(a({origin:"*"}),e.json(),e.urlencoded({extended:!0})),r.use("/api/author",t(261)),r.use("/api/illustrator",t(322)),r.use("/api/label",t(169)),r.use("/api/novel",t(802)),r.use("/api/release",t(879));var i=t(605),s=function(e){var a=parseInt(e,10);return isNaN(a)?e:a>=0&&a}({DB_HOST:"localhost",DB_USERNAME:"root",DB_PASSWORD:"admin",DB_DATABASE:"project_datsys"}.PORT||"8090");r.set("port",s),i.createServer(r).listen(s)})()})();