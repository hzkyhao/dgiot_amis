/*!
 * build: 杭州数蛙科技有限公司 
 *  copyright: dgiot 
 *  project : dgiot_amis 
 *  version : 0.0.2 
 *  description : dgiot_amis 脚手架 
 *  author: h7ml(h7ml@qq.com) 
 *  time:Wed Oct 13 2021 04:23:49 GMT+0000 (Coordinated Universal Time)
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{E98k:function(e,t,n){"use strict";n.r(t);var a=n("+EbZ"),r=n.n(a),l=n("06Pm"),o=n.n(l),i=n("kA7L"),m=n.n(i),c=n("X5/F"),s=n.n(c),u=n("3SUL"),g=n.n(u),d=n("eYnF"),p=n.n(d),f=n("cDcd"),h=n.n(f),y=n("Exp3"),E=n("cJ7L"),v=n("FY4R"),F=n("nWR2"),b=n("2o0M"),w=n("7O4g"),x="pages-login-react_login_vadwO",S="pages-login-react_loginForm_3rBoY";function B(e){var t=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var l=p()(this).constructor;n=r()(a,arguments,l)}else n=a.apply(this,arguments);return g()(this,n)}}var I=function(e){s()(n,e);var t=B(n);function n(e){var a;return o()(this,n),(a=t.call(this,e)).login=function(e){Object(w.c)(e,b.a.loginApi,b.a.currentUserApi,b.a.defaultPath,(function(){return a.setState({loading:!0})}),(function(){return a.setState({loading:!1})}))},a.state={loading:!1},a}return m()(n,[{key:"render",value:function(){var e=this.state.loading;return h.a.createElement(y.Layout,{className:x},h.a.createElement(y.Layout.Content,null,h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"96px 0 8px 0"}},h.a.createElement("img",{src:F.a,style:{marginRight:8,width:48},alt:"logo"}),h.a.createElement("span",{style:{fontSize:32,fontWeight:"bold"}},"Dgiot Amis")),h.a.createElement("div",{style:{width:"100%",textAlign:"center",color:"rgba(0, 0, 0, 0.45)",marginBottom:40}},"dgiot物联网开源平台代码 dgiot_amis  低代码前端框架",h.a.createElement("br",null),h.a.createElement("h4",null,"它使用 JSON 配置来生成页面，可以节省页面开发工作量，极大提升开发前端页面的效率")),h.a.createElement(y.Form,{name:"loginForm",className:S,size:"large",onFinish:this.login,initialValues:{remember:!0}},h.a.createElement("div",{style:{fontSize:14,margin:"16px 8px",textAlign:"center"}},"账户密码登录"),h.a.createElement(y.Form.Item,{name:"username",style:{height:56,marginBottom:0},rules:[{required:!0,message:"请输入您的用户名！"}]},h.a.createElement(y.Input,{prefix:h.a.createElement(E.a,null),placeholder:"用户名",readOnly:e})),h.a.createElement(y.Form.Item,{name:"password",style:{height:48,marginBottom:0},rules:[{required:!0,message:"请输入您的密码！"}]},h.a.createElement(y.Input.Password,{prefix:h.a.createElement(v.a,null),placeholder:"密码",readOnly:e})),h.a.createElement(y.Form.Item,{style:{height:40,marginBottom:0}},h.a.createElement(y.Form.Item,{name:"remember",valuePropName:"checked",noStyle:!0},h.a.createElement(y.Checkbox,{style:{userSelect:"none"},disabled:e},"自动登录")),h.a.createElement("a",{style:{float:"right",userSelect:"none"}},"忘记密码")),h.a.createElement(y.Form.Item,null,h.a.createElement(y.Button,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:e},"登录")))),h.a.createElement(y.Layout.Footer,null))}}]),n}(f.Component);t.default=I}}]);