/* empty css              */import{r as p,f as u,o as b,c as y,b as t,g as e,d as _,h as a,F as T,j as s,E as w}from"./index-961d9fd8.js";const k={class:"CM-nav"},C={class:"scsj"},x=t("span",null,"提交时间",-1),V={class:"scsj2"},$=t("span",null,"手动搜索",-1),z=t("input",{type:"text",placeholder:"请输入课程标题或关键词"},null,-1),E={class:"CM-content"},M={class:"CMC-n"},j=t("p",null,"课程列表",-1),B={class:"CMC-table"},D={style:{display:"flex","margin-top":"20px"}},L={__name:"Lecturer",setup(N){const c=p("");p(""),p("");const f=new Date(2e3,1,1,12,0,0),r=p(),g=n=>{n&&n.forEach(l=>{r.value.toggleRowSelection(l,void 0)})},m=[{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"},{name:"金金",title:"这里是讲师简介内容，超出最大宽度显示这里是讲师简介内容，超出最大宽度显示这里…这里是讲师简介文字示例信息这里是讲师简介内容，",uploadTime:"2021.07.01 15:00"}];return(n,l)=>{const h=u("el-date-picker"),o=u("el-button"),i=u("el-table-column"),v=u("el-pagination");return b(),y(T,null,[t("div",k,[t("div",C,[x,e(h,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=d=>c.value=d),type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间","default-time":_(f)},null,8,["modelValue","default-time"])]),t("div",V,[$,z,e(o,{type:"warning"},{default:a(()=>[s("搜索")]),_:1}),e(o,{type:"warning",plain:""},{default:a(()=>[s("重置")]),_:1})])]),t("div",E,[t("div",M,[j,t("p",{onClick:l[1]||(l[1]=d=>n.$router.push("/homeView/addLecturer"))},"添加讲师")]),t("div",B,[e(_(w),{data:m,style:{width:"100%"},ref_key:"multipleTableRef",ref:r},{default:a(()=>[e(i,{type:"selection",width:"55",align:"center"}),e(i,{label:"讲师名称",prop:"name",align:"center"}),e(i,{label:"讲师简介",prop:"title","show-overflow-tooltip":"",width:"640",align:"center"}),e(i,{label:"添加时间",prop:"uploadTime",align:"center"}),e(i,{label:"操作",align:"center"},{default:a(()=>[e(o,{style:{display:"inline-block","font-size":"14px",padding:"0"},type:"success",text:"",size:"small",onClick:l[2]||(l[2]=d=>n.$router.push("/homeView/orderDetail"))},{default:a(()=>[s("编辑")]),_:1}),e(o,{style:{display:"inline-block","font-size":"14px",padding:"0"},type:"warning",text:"",size:"small"},{default:a(()=>[s("删除")]),_:1})]),_:1})]),_:1},512),t("div",D,[e(o,{onClick:l[3]||(l[3]=d=>g(m))},{default:a(()=>[s("全选")]),_:1}),e(v,{background:"",layout:"prev, pager, next",total:100})])])])],64)}}};export{L as default};
