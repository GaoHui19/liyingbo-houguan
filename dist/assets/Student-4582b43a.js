/* empty css              */import{r,f as o,o as C,c as v,b as t,g as e,d as _,h as a,F as y,j as p,E as T}from"./index-961d9fd8.js";const D={class:"CM-nav"},E={class:"scsj"},N=t("span",null,"提交时间",-1),x={class:"scsj2"},L=t("span",null,"手动搜索",-1),V=t("input",{type:"text",placeholder:"请输入课程标题或关键词"},null,-1),O={class:"CM-content"},z=t("div",{class:"CMC-n"},[t("p",null,"课程列表")],-1),M={class:"CMC-table"},j={style:{display:"flex","margin-top":"20px"}},U={__name:"Student",setup(B){const c=r("");r(""),r("");const f=new Date(2e3,1,1,12,0,0),d=r(),b=u=>{u&&u.forEach(s=>{d.value.toggleRowSelection(s,void 0)})},m=[{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!0},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1},{title:"编号",serialNumber:"CODE001",upLink:"金金",tel:1581e7,price:88,status:"待支付",sales:8,uploadTime:"2021.07.01 15:00",select:!1}];return(u,s)=>{const h=o("el-date-picker"),n=o("el-button"),l=o("el-table-column"),g=o("el-switch"),k=o("el-pagination");return C(),v(y,null,[t("div",D,[t("div",E,[N,e(h,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=i=>c.value=i),type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间","default-time":_(f)},null,8,["modelValue","default-time"])]),t("div",x,[L,V,e(n,{type:"warning"},{default:a(()=>[p("搜索")]),_:1}),e(n,{type:"warning",plain:""},{default:a(()=>[p("重置")]),_:1})])]),t("div",O,[z,t("div",M,[e(_(T),{data:m,style:{width:"100%"},ref_key:"multipleTableRef",ref:d},{default:a(()=>[e(l,{type:"selection",width:"55",align:"center"}),e(l,{prop:"serialNumber",label:"用户ID",width:"140",align:"center"}),e(l,{prop:"upLink",label:"用户昵称",width:"150",align:"center"}),e(l,{prop:"tel",label:"手机号",width:"180","show-overflow-tooltip":"",align:"center"}),e(l,{prop:"price",label:"付费金额",width:"140",align:"center"}),e(l,{prop:"sales",label:"订单数量",width:"140",align:"center"}),e(l,{prop:"uploadTime",label:"提交时间",width:"200",align:"center"}),e(l,{prop:"select",label:"账户禁用",width:"200",align:"center"},{default:a(i=>[e(g,{modelValue:i.row.select,"onUpdate:modelValue":w=>i.row.select=w},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(l,{label:"操作",width:"200",align:"center"},{default:a(()=>[e(n,{style:{display:"inline-block","font-size":"14px",padding:"0"},type:"success",text:"",size:"small",onClick:s[1]||(s[1]=i=>u.$router.push("/homeView/orderDetail"))},{default:a(()=>[p("编辑")]),_:1}),e(n,{style:{display:"inline-block","font-size":"14px",padding:"0"},type:"success",text:"",size:"small"},{default:a(()=>[p("删除")]),_:1})]),_:1})]),_:1},512),t("div",j,[e(n,{onClick:s[2]||(s[2]=i=>b(m))},{default:a(()=>[p("全选")]),_:1}),e(k,{background:"",layout:"prev, pager, next",total:100})])])])],64)}}};export{U as default};