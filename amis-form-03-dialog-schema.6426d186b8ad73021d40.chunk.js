/*!
 * build: 杭州数蛙科技有限公司 
 *  copyright: dgiot 
 *  project : dgiot_amis 
 *  version : 0.0.2 
 *  description : dgiot_amis 脚手架 
 *  author: h7ml(h7ml@qq.com) 
 *  time:Tue Oct 12 2021 11:02:20 GMT+0000 (Coordinated Universal Time)
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/r5k":function(e,l,t){"use strict";t.r(l),t.d(l,"schema",(function(){return s}));t("FZtP");var a=t("oG9Y"),i=t.n(a),o=t("8Vev"),d=t.n(o),r=t("kWsH"),h=t.n(r),n=t("TSYQ"),b=t.n(n),x=t("w5tg"),p=t("oda9"),m=t("hQp1"),c=t("la/R"),g="pages-amis-form-03-dialog-schema_formItemValueFull_3ox7r",s={type:"page",title:"",toolbar:[],body:[{type:"button",label:"简单对话框表单",actionType:"dialog",dialog:{title:"简单对话框表单",closeOnEsc:!0,data:{f0:"120180727093513020001"},body:{type:"form",mode:"horizontal",className:b()(x.b.flex_label6x),controls:[{type:"picker",name:"f0",label:"对话框选择",size:"lg",source:{method:"get",url:"".concat(c.b,"/!/amis-api/curd-page@curdQuery")},multiple:!0,valueField:"orderCode",labelField:"orderCode",labelTpl:"${shipName} - ${shipMobile}",pickerSchema:{mode:"table",name:"picker-table",labelTpl:"${shipName} - ${shipMobile}",affixHeader:!1,perPageAvailable:[10,20,50,100],defaultParams:{pageNo:1,pageSize:10},pageField:"pageNo",perPageField:"pageSize",primaryField:"orderCode",columns:[{name:"orderCode",label:"订单编号",sortable:!0},{name:"status",label:"订单状态",sortable:!0,type:"mapping",map:Object(m.a)(p.d)},{name:"shipName",label:"收货人姓名",sortable:!0},{name:"shipMobile",label:"手机号",sortable:!0},{name:"payStatus",label:"支付方式",sortable:!0,type:"mapping",map:Object(m.a)(p.c)},{name:"payType",label:"支付状态",sortable:!0,type:"mapping",map:Object(m.a)(p.b)},{name:"payAmount",label:"支付金额",sortable:!0},{name:"createAt",label:"下单时间",sortable:!0}],headerToolbar:[{type:"form",mode:"inline",target:"picker-table",wrapWithPanel:!1,controls:[{type:"text",name:"orderCode",placeholder:"输入订单编号",inputClassName:x.e.width24x,addOn:{type:"submit",label:"查询",level:"primary",icon:"fa fa-search pull-left"}}]},{align:"right",type:"columns-toggler"}],footerToolbar:[{align:"left",type:"statistics"},{align:"right",type:"pagination"},{align:"right",type:"switch-per-page"}]}},{type:"text",name:"f1",label:"简单文本"},{type:"textarea",name:"f2",label:"多行文本"},{type:"number",name:"f3",label:"数字"},{type:"checkboxes",name:"f4",label:"多选组",columnsCount:3,options:p.d},{type:"datetime",name:"f5",label:"日期时间"}],api:{method:"post",url:"".concat(c.b,"/!/amis-api/curd-page@mockSubmit")}}}},{type:"html",html:"<span></span>",className:b()(x.e.width1x,x.c.Inline_Block)},{type:"button",label:"对话框表单布局",actionType:"dialog",dialog:{title:"对话框表单布局",closeOnEsc:!0,className:b()(x.a.width35x),body:{type:"form",mode:"inline",className:b()(x.b.label6x,x.b.input18x,x.b.item_height3_5x),controls:[{type:"text",name:"f1",label:"供应商名称",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f3",label:"联系人",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f4",label:"联系人手机号",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f5",label:"供货范围",required:!1,placeholder:"请输入",clearable:!0},{type:"button",label:"查看供货公司"}],api:{method:"post",url:"".concat(c.b,"/!/amis-api/curd-page@mockSubmit")}}}},{type:"html",html:"<span></span>",className:b()(x.e.width1x,x.c.Inline_Block)},{type:"button",label:"对话框表单分组",actionType:"dialog",dialog:{title:"对话框表单分组",closeOnEsc:!0,className:b()(x.a.width55x),body:{type:"form",name:"form",controls:[{type:"fieldSet",title:"供应商注册信息",collapsable:!1,mode:"inline",className:b()(x.b.label6x,x.b.input18x,x.b.item_height2_5x),controls:[{type:"text",name:"f1",label:"供应商名称",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"password",name:"f2",label:"登录账号",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"password",name:"f3",label:"联系人",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f4",label:"联系人手机号",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f5",label:"供货范围",required:!1,placeholder:"请输入",clearable:!0},{type:"button",label:"查看供货公司"}]},{type:"fieldSet",title:"关联ERP供应商",collapsable:!0,mode:"inline",className:b()(x.b.label4x,x.b.input20x),controls:[{type:"text",name:"f6",label:"供货范围",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"button",actionType:"dialog",label:"添加供应商",icon:"fa fa-plus",dialog:{size:"lg",actions:[],body:{type:"crud",name:"button-dialog-crud",syncLocation:!1,keepItemSelectionOnPageChange:!0,api:{method:"get",url:"".concat(c.b,"/!/amis-api/curd-page@curdQuery")},defaultParams:{pageNo:1,pageSize:10},pageField:"pageNo",perPageField:"pageSize",primaryField:"orderId",columns:[{name:"orderId",label:"订单编号",sortable:!0},{name:"status",label:"订单状态",sortable:!0,type:"mapping",map:Object(m.a)(p.d)},{name:"shipName",label:"收货人姓名",sortable:!0},{name:"shipMobile",label:"手机号",sortable:!0}],bulkActions:[{actionType:"reload",label:"选择",size:"md",level:"primary",target:"form?f7=${selected}",onClick:function(e,l){var t,a=i()(l.data.f7||[]);d()(t=l.data.selectedItems).call(t,(function(e){return null!=e})).forEach((function(e){a.some((function(l){return e.orderId===l.orderId}))||a.push(e)})),l.data.selected=h()(a).call(a,(function(e,l){return e.orderId-l.orderId})),l.store.parentStore.parentStore.closeDialog()}}],headerToolbar:[{type:"form",mode:"inline",target:"button-dialog-crud",wrapWithPanel:!1,controls:[{type:"text",name:"orderId",placeholder:"输入订单编号",inputClassName:x.e.width24x,addOn:{type:"submit",label:"查询",icon:"fa fa-search pull-left"}}]},{align:"left",type:"bulkActions"}]}}},{type:"html",html:"<br />"},{type:"table",name:"f7",className:b()(g,x.d.height_unset),inputClassName:b()(x.e.width_full),removable:!0,primaryField:"orderId",columns:[{name:"orderId",label:"订单编号",sortable:!0,searchable:!1},{name:"status",label:"订单状态",sortable:!0,type:"mapping",map:Object(m.a)(p.d)},{name:"shipName",label:"收货人姓名",sortable:!0},{name:"shipMobile",label:"手机号",sortable:!0}]}]}],api:{method:"post",url:"".concat(c.b,"/!/amis-api/curd-page@mockSubmit")}}}},{type:"html",html:"<span></span>",className:b()(x.e.width1x,x.c.Inline_Block)},{type:"button",label:"对话框表单分组2",actionType:"dialog",dialog:{title:"对话框表单分组2",closeOnEsc:!0,className:b()(x.a.width55x),body:{type:"form",name:"form2",controls:[{type:"fieldSet",title:"供应商注册信息2",collapsable:!1,mode:"inline",className:b()(x.b.label6x,x.b.input18x,x.b.item_height2_5x),controls:[{type:"text",name:"f1",label:"供应商名称2",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"password",name:"f2",label:"登录账号2",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"password",name:"f3",label:"联系人2",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f4",label:"联系人手机号2",required:!1,placeholder:"请输入",clearable:!0},{type:"html",html:"<br />"},{type:"text",name:"f5",label:"供货范围2",required:!1,placeholder:"请输入",clearable:!0},{type:"button",label:"查看供货公司2"}]},{type:"fieldSet",title:"关联ERP供应商2",collapsable:!0,mode:"inline",className:b()(x.b.label4x,x.b.input20x),controls:[{type:"button",actionType:"dialog",label:"添加供应商2",icon:"fa fa-plus",dialog:{size:"lg",actions:[],body:{type:"form",name:"button-dialog-form",controls:[{type:"picker",name:"button-dialog-picker",label:!1,size:"lg",embed:!0,source:{method:"get",url:"".concat(c.b,"/!/amis-api/curd-page@curdQuery")},multiple:!0,valueField:"orderId",labelField:"orderId",labelTpl:"${shipName} - ${shipMobile}",pickerSchema:{mode:"table",name:"picker-table-2",labelTpl:"${shipName} - ${shipMobile}",affixHeader:!1,perPageAvailable:[10,20,50,100],defaultParams:{pageNo:1,pageSize:10},pageField:"pageNo",perPageField:"pageSize",primaryField:"orderCode",columns:[{name:"orderId",label:"订单编号2",sortable:!0},{name:"status",label:"订单状态2",sortable:!0,type:"mapping",map:Object(m.a)(p.d)},{name:"shipName",label:"收货人姓名2",sortable:!0},{name:"shipMobile",label:"手机号2",sortable:!0}],bulkActions:[{actionType:"reload",label:"选择",size:"md",level:"primary",target:"form2?f7=${selected}",onClick:function(e,l){var t,a=i()(l.data.f7||[]);d()(t=l.data.selectedItems).call(t,(function(e){return null!=e})).forEach((function(e){a.some((function(l){return e.orderId===l.orderId}))||a.push(e)})),l.data.selected=h()(a).call(a,(function(e,l){return e.orderId-l.orderId})),l.store.parentStore.parentStore.parentStore.closeDialog()}}],headerToolbar:[{type:"form",mode:"inline",target:"picker-table-2",wrapWithPanel:!1,controls:[{type:"text",name:"orderCode",placeholder:"输入订单编号",inputClassName:x.e.width24x,addOn:{type:"submit",label:"查询",icon:"fa fa-search pull-left"}}]},{align:"left",type:"bulkActions"}],footerToolbar:[{align:"left",type:"statistics"},{align:"right",type:"pagination"},{align:"right",type:"switch-per-page"}]}}]}}},{type:"button",actionType:"dialog",label:"删除",icon:"fa fa-times"},{type:"html",html:"<br />"},{type:"picker",name:"f7",label:!1,size:"lg",embed:!0,className:b()(g,x.d.height_unset),inputClassName:b()(x.e.width_full),multiple:!0,valueField:"orderId",labelField:"orderId",labelTpl:"${shipName} - ${shipMobile}",pickerSchema:{mode:"table",name:"picker-table-3",labelTpl:"${shipName} - ${shipMobile}",affixHeader:!1,perPageAvailable:[10,20,50,100],defaultParams:{pageNo:1,pageSize:10},pageField:"pageNo",perPageField:"pageSize",primaryField:"orderCode",columns:[{name:"orderId",label:"订单编号3",sortable:!0},{name:"status",label:"订单状态3",sortable:!0,type:"mapping",map:Object(m.a)(p.d)},{name:"shipName",label:"收货人姓名3",sortable:!0},{name:"shipMobile",label:"手机号3",sortable:!0}],bulkActions:[{label:"选择",size:"md",level:"primary"}],headerToolbar:[{type:"form",mode:"inline",target:"picker-table-3",wrapWithPanel:!1,controls:[{type:"text",name:"orderCode",placeholder:"供货公司",inputClassName:x.e.width24x,addOn:{type:"submit",label:"查询",icon:"fa fa-search pull-left"}}]},{align:"left",type:"bulkActions"}],footerToolbar:[{align:"left",type:"statistics"},{align:"right",type:"pagination"},{align:"right",type:"switch-per-page"}]}}]}],api:{method:"post",url:"".concat(c.b,"/!/amis-api/curd-page@mockSubmit")}}}},{type:"html",html:"<span></span>",className:b()(x.e.width1x,x.c.Inline_Block)},{type:"button",label:"对话框表单校验",actionType:"dialog",dialog:{title:"对话框表单校验",closeOnEsc:!0,className:b()(x.a.width30x),body:{type:"form",mode:"inline",className:b()(x.b.label6x,x.b.input18x,x.b.item_height3_5x),controls:[{type:"text",name:"f1",label:"随意填",placeholder:"随意填"},{type:"text",name:"f2-1",label:"非空字符",placeholder:"不能填空字符",required:!0,validations:{notEmptyString:!0}},{type:"text",name:"f3",label:"邮箱",placeholder:"必须是Email",required:!0,validations:{isEmail:!0}},{type:"text",name:"f9",label:"整数或小数",placeholder:"必须是整数或小数",required:!0,validations:{isFloat:!0}},{type:"text",name:"f11",label:"长度限制",placeholder:"长度在6~10",required:!0,validations:{minLength:6,maxLength:10}}],api:{method:"post",url:"".concat(c.b,"/!/amis-api/curd-page@mockSubmit")}}}},{type:"html",html:"<span></span>",className:b()(x.e.width1x,x.c.Inline_Block)},{type:"button",label:"对话框表单校验2",actionType:"dialog",dialog:{title:"对话框表单校验(服务端校验)",closeOnEsc:!0,className:b()(x.a.width30x),body:{type:"form",mode:"inline",className:b()(x.b.label4x,x.b.input22x,x.b.item_height3_5x),controls:[{type:"text",name:"f1",label:"随意填1",placeholder:"只能填“aaa”"},{type:"html",html:"<br />"},{type:"text",name:"f2",label:"随意填2",placeholder:"只能填“bbb”"},{type:"html",html:"<br />"},{type:"text",name:"f3",label:"随意填3",placeholder:"只能填“ccc”"},{type:"html",html:"<br />"}],api:{method:"post",url:"".concat(c.b,"/!/amis-api/curd-page@serverVerify")}}}},{type:"html",html:"<span></span>",className:b()(x.e.width1x,x.c.Inline_Block)}]}},hQp1:function(e,l,t){"use strict";t.d(l,"a",(function(){return a}));t("FZtP");var a=function(e){var l={};return e&&e.forEach((function(e){l["".concat(e.value)]=e.label})),l}},"la/R":function(e,l,t){"use strict";t.d(l,"b",(function(){return a})),t.d(l,"a",(function(){return i}));var a="http://api-dev.msvc.top",i="http://prod.iotn2n.com"},oda9:function(e,l,t){"use strict";t.d(l,"d",(function(){return a})),t.d(l,"a",(function(){return i})),t.d(l,"c",(function(){return o})),t.d(l,"b",(function(){return d}));var a=[{label:"待审核",value:"-3"},{label:"待支付",value:"-2"},{label:"待处理",value:"-1"},{label:"已接单",value:"0"},{label:"已出库",value:"1"},{label:"已签收",value:"2"},{label:"已驳回",value:"3"},{label:"拒收",value:"4"},{label:"已取消",value:"5"}],i=[{label:"O2O",value:"1"},{label:"B2C",value:"2"}],o=[{label:"暂无",value:"-1"},{label:"现金支付",value:"0"},{label:"微信支付",value:"1"},{label:"支付宝",value:"2"},{label:"三方平台线上支付",value:"3"},{label:"小程序",value:"4"},{label:"保险支付",value:"5"},{label:"微信小程序+保险",value:"45"}],d=[{label:"未支付",value:"1"},{label:"已支付",value:"2"}]},w5tg:function(e,l,t){"use strict";var a,i,o,d,r,h;t.d(l,"c",(function(){return a})),t.d(l,"e",(function(){return i})),t.d(l,"d",(function(){return o})),t.d(l,"b",(function(){return r})),t.d(l,"a",(function(){return h})),function(e){e.Inline_Block="global-inline-block",e.MB_None="mb-none"}(a||(a={})),function(e){e.width_full="global-width-full",e.width_unset="global-width-unset",e.width1x="global-width-1x",e.width2x="global-width-2x",e.width3x="global-width-3x",e.width4x="global-width-4x",e.width5x="global-width-5x",e.width6x="global-width-6x",e.width7x="global-width-7x",e.width8x="global-width-8x",e.width9x="global-width-9x",e.width10x="global-width-10x",e.width11x="global-width-11x",e.width12x="global-width-12x",e.width13x="global-width-13x",e.width14x="global-width-14x",e.width15x="global-width-15x",e.width16x="global-width-16x",e.width17x="global-width-17x",e.width18x="global-width-18x",e.width19x="global-width-19x",e.width20x="global-width-20x",e.width21x="global-width-21x",e.width22x="global-width-22x",e.width23x="global-width-23x",e.width24x="global-width-24x",e.width25x="global-width-25x",e.width26x="global-width-26x",e.width27x="global-width-27x",e.width28x="global-width-28x",e.width29x="global-width-29x",e.width30x="global-width-30x",e.width31x="global-width-31x",e.width32x="global-width-32x",e.width33x="global-width-33x",e.width34x="global-width-34x",e.width35x="global-width-35x",e.width36x="global-width-36x",e.width37x="global-width-37x",e.width38x="global-width-38x",e.width39x="global-width-39x",e.width40x="global-width-40x",e.width41x="global-width-41x",e.width42x="global-width-42x",e.width43x="global-width-43x",e.width44x="global-width-44x",e.width45x="global-width-45x",e.width46x="global-width-46x",e.width47x="global-width-47x",e.width48x="global-width-48x"}(i||(i={})),function(e){e.height_full="global-height-full",e.height_unset="global-height-unset",e.height1x="global-height-1x",e.height2x="global-height-2x",e.height3x="global-height-3x",e.height4x="global-height-4x",e.height5x="global-height-5x",e.height6x="global-height-6x",e.height7x="global-height-7x",e.height8x="global-height-8x",e.height9x="global-height-9x",e.height10x="global-height-10x",e.height11x="global-height-11x",e.height12x="global-height-12x",e.height13x="global-height-13x",e.height14x="global-height-14x",e.height15x="global-height-15x",e.height16x="global-height-16x",e.height17x="global-height-17x",e.height18x="global-height-18x",e.height19x="global-height-19x",e.height20x="global-height-20x",e.height21x="global-height-21x",e.height22x="global-height-22x",e.height23x="global-height-23x",e.height24x="global-height-24x"}(o||(o={})),d||(d={}),function(e){e.label2x="form-label-2x",e.label3x="form-label-3x",e.label4x="form-label-4x",e.label5x="form-label-5x",e.label6x="form-label-6x",e.label7x="form-label-7x",e.label8x="form-label-8x",e.label9x="form-label-9x",e.label10x="form-label-10x",e.input10x="form-input-10x",e.input12x="form-input-12x",e.input14x="form-input-14x",e.input16x="form-input-16x",e.input18x="form-input-18x",e.input20x="form-input-20x",e.input22x="form-input-22x",e.input24x="form-input-24x",e.input26x="form-input-26x",e.input28x="form-input-28x",e.input30x="form-input-30x",e.input32x="form-input-32x",e.flex_label2x="flex-form-label-2x",e.flex_label3x="flex-form-label-3x",e.flex_label4x="flex-form-label-4x",e.flex_label5x="flex-form-label-5x",e.flex_label6x="flex-form-label-6x",e.flex_label7x="flex-form-label-7x",e.flex_label8x="flex-form-label-8x",e.flex_label9x="flex-form-label-9x",e.flex_label10x="flex-form-label-10x",e.flex_label12x="flex-form-label-12x",e.flex_label14x="flex-form-label-14x",e.flex_label16x="flex-form-label-16x",e.flex_input10x="flex-form-input-10x",e.flex_input12x="flex-form-input-12x",e.flex_input14x="flex-form-input-14x",e.flex_input16x="flex-form-input-16x",e.flex_input18x="flex-form-input-18x",e.flex_input20x="flex-form-input-20x",e.flex_input22x="flex-form-input-22x",e.flex_input24x="flex-form-input-24x",e.flex_input26x="flex-form-input-26x",e.flex_input28x="flex-form-input-28x",e.flex_input30x="flex-form-input-30x",e.flex_input32x="flex-form-input-32x",e.item_height2_5x="form-item-height-2_5x",e.item_height3_5x="form-item-height-3_5x"}(r||(r={})),function(e){e.width10x="dialog-width-10x",e.width15x="dialog-width-15x",e.width20x="dialog-width-20x",e.width25x="dialog-width-25x",e.width30x="dialog-width-30x",e.width35x="dialog-width-35x",e.width40x="dialog-width-40x",e.width45x="dialog-width-45x",e.width50x="dialog-width-50x",e.width55x="dialog-width-55x",e.width60x="dialog-width-60x",e.width65x="dialog-width-65x",e.width70x="dialog-width-70x",e.width75x="dialog-width-75x",e.width80x="dialog-width-80x",e.width85x="dialog-width-85x",e.width90x="dialog-width-90x",e.width95x="dialog-width-95x",e.width100x="dialog-width-100x",e.width105x="dialog-width-105x",e.width110x="dialog-width-110x",e.width115x="dialog-width-115x",e.width120x="dialog-width-120x",e.width125x="dialog-width-125x",e.width130x="dialog-width-130x",e.width135x="dialog-width-135x",e.width140x="dialog-width-140x",e.width145x="dialog-width-145x",e.width150x="dialog-width-150x"}(h||(h={}))}}]);