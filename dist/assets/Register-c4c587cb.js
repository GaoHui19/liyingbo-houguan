import{_ as V,a as U,r as s,o as R,c as N,b as e,w as o,v as a,d,i,p as w,e as I}from"./index-961d9fd8.js";import{R as S}from"./index-b08330f2.js";const B=f=>(w("data-v-bfd2bab9"),f=f(),I(),f),k={class:"main"},E={class:"container"},T=B(()=>e("div",{class:"login-left"},[e("div",{class:"edu"},[e("p",null,"教育管理系统")]),e("div",{class:"center"},[e("h3",null,"欢迎回来"),e("p",null,"水静流深，涂歌巷舞")])],-1)),C={class:"login-right"},D={class:"right-con"},G=B(()=>e("h3",null,"后台注册",-1)),M={class:"inputBox"},j={class:"inputBox"},q={class:"inputBox"},z={class:"inputBox"},A={class:"inputBox"},F={class:"inputBox"},H={class:"inputBox"},J={class:"inputBox"},K={class:"inputBox"},L={class:"inputBox"},O={__name:"Register",setup(f){let b=U(),u=s(""),n=s(""),p=s(""),r=s(""),c=s(),v=s(),_=s(""),m=s(""),x=s(""),h=s("");function y(){let g={firstName:u.value,lastName:n.value,email:p.value,phone:r.value,address:c.value,englishName:_.value,age:v.value,role:m.value,desc:x.value,password:h.value};S(g).then(t=>{console.log(t),t.status==200&&(alert("注册成功"),b.push({path:"/"}))}).catch(t=>{console.log(t)})}return(g,t)=>(R(),N("div",k,[e("div",E,[T,e("div",C,[e("div",D,[G,e("div",M,[o(e("input",{type:"text",placeholder:"请输入姓氏","onUpdate:modelValue":t[0]||(t[0]=l=>i(u)?u.value=l:u=l)},null,512),[[a,d(u)]])]),e("div",j,[o(e("input",{type:"text",placeholder:"请输入名称","onUpdate:modelValue":t[1]||(t[1]=l=>i(n)?n.value=l:n=l)},null,512),[[a,d(n)]])]),e("div",q,[o(e("input",{type:"text",placeholder:"请输入邮箱地址","onUpdate:modelValue":t[2]||(t[2]=l=>i(p)?p.value=l:p=l)},null,512),[[a,d(p)]])]),e("div",z,[o(e("input",{type:"text",placeholder:"请输入手机号","onUpdate:modelValue":t[3]||(t[3]=l=>i(r)?r.value=l:r=l)},null,512),[[a,d(r)]])]),e("div",A,[o(e("input",{type:"text",placeholder:"请输入地址","onUpdate:modelValue":t[4]||(t[4]=l=>i(c)?c.value=l:c=l)},null,512),[[a,d(c)]])]),e("div",F,[o(e("input",{type:"text",placeholder:"请输入年龄","onUpdate:modelValue":t[5]||(t[5]=l=>i(v)?v.value=l:v=l)},null,512),[[a,d(v)]])]),e("div",H,[o(e("input",{type:"text",placeholder:"请输入英文名字","onUpdate:modelValue":t[6]||(t[6]=l=>i(_)?_.value=l:_=l)},null,512),[[a,d(_)]])]),e("div",J,[o(e("input",{type:"text",placeholder:"请输入角色","onUpdate:modelValue":t[7]||(t[7]=l=>i(m)?m.value=l:m=l)},null,512),[[a,d(m)]])]),e("div",K,[o(e("input",{type:"text",placeholder:"请输入简介","onUpdate:modelValue":t[8]||(t[8]=l=>i(x)?x.value=l:x=l)},null,512),[[a,d(x)]])]),e("div",L,[o(e("input",{type:"password",placeholder:"请输入密码","onUpdate:modelValue":t[9]||(t[9]=l=>i(h)?h.value=l:h=l)},null,512),[[a,d(h)]])]),e("div",{class:"btn",onClick:y},"提交")])])])]))}},W=V(O,[["__scopeId","data-v-bfd2bab9"]]);export{W as default};
