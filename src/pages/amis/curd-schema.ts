// import { PageSchema } from "amis";
import { serverHost } from "@/server-api";
import { EnumArray, enumArray2mapperObject } from "@/utils/enum";
import styles from "./curd-schema.less";

const statusMapper: EnumArray = [
  {label: "待审核", value: "-3"},
  {label: "待支付", value: "-2"},
  {label: "待处理", value: "-1"},
  {label: "已接单", value: "0"},
  {label: "已出库", value: "1"},
  {label: "已签收", value: "2"},
  {label: "已驳回", value: "3"},
  {label: "拒收", value: "4"},
  {label: "已取消", value: "5"},
];

const orderTypeMapper: EnumArray = [
  {label: "O2O", value: "1"},
  {label: "B2C", value: "2"},
];

const payTypeMapper: EnumArray = [
  {label: "暂无", value: "-1"},
  {label: "现金支付", value: "0"},
  {label: "微信支付", value: "1"},
  {label: "支付宝", value: "2"},
  {label: "三方平台线上支付", value: "3"},
  {label: "小程序", value: "4"},
  {label: "保险支付", value: "5"},
  {label: "微信小程序+保险", value: "45"},
];

const payStatusMapper: EnumArray = [
  {label: "未支付", value: "1"},
  {label: "已支付", value: "2"},
]

// 详情对话框
function detailsDialog() {
  return {
    type: "button",
    label: "查看",
    level: "info",
    size: "xs",
    actionType: "dialog",
    dialog: {
      title: "查看订单 - ${orderCode}",
      actions: [{type: "button", label: "关闭", level: "primary", actionType: "close"}],
      body: {
        type: "form",
        initApi: {
          method: "get",
          url: `${serverHost}/!/amis-api/curd-page@getDetail?orderId=$orderId`,
        },
        controls: [
          {type: "static", name: "orderId", label: "订单ID"},
          {type: "static", name: "orderCode", label: "订单编号"},
          {type: "mapping", name: "status", label: "订单状态", map: enumArray2mapperObject(statusMapper)},
          {type: "static", name: "shipName", label: "收货人"},
          {type: "static", name: "shipMobile", label: "手机号"},
          {type: "static", name: "shipAddr", label: "地址"},
        ]
      }
    }
  };
}

// 编辑对话框
function editDialog() {
  return {
    type: "button",
    label: "编辑",
    level: "info",
    size: "xs",
    actionType: "dialog",
    dialog: {
      position: "left", size: "md", title: "编辑",
      body: {
        type: "form",
        initApi: {
          method: "get",
          url: `${serverHost}/!/amis-api/curd-page@getDetail?orderId=$orderId`,
        },
        api: {
          method: "put",
          url: `${serverHost}/!/amis-api/curd-page@mockUpdate?orderId=$orderId`,
        },
        controls: [
          {type: "text", name: "orderId", label: "订单ID"},
          {type: "text", name: "orderCode", label: "订单编号"},
          {type: "select", name: "status", label: "订单状态", options: statusMapper},
          {type: "text", name: "shipName", label: "收货人"},
          {type: "text", name: "shipMobile", label: "手机号"},
          {type: "text", name: "shipAddr", label: "地址"},
        ]
      }
    }
  };
}

// 删除对话框
function deleteDialog() {
  return {
    type: "button",
    label: "删除",
    level: "danger",
    size: "xs",
    actionType: "ajax",
    api: {
      method: "delete",
      url: `${serverHost}/!/amis-api/curd-page@mockDelete?orderId=$orderId`,
    },
    confirmText: "您确认要删除订单:${orderCode}?",
  };
}

const schema = {
  type: "page",
  title: "简单的CURD操作",
  toolbar: [],
  body: [
    {
      type: "crud",
      // --------------------------------------------------------------- 常规配置
      perPageAvailable: [10, 20, 50, 100],
      syncLocation: false,
      keepItemSelectionOnPageChange: true,
      multiple: true,
      labelTpl: "${orderCode}",
      draggable: true,
      hideQuickSaveBtn: false,
      autoJumpToTopOnPagerChange: false,
      affixHeader: false,
      syncResponse2Query: true,
      // --------------------------------------------------------------- 请求数据配置
      api: {
        method: "get",
        url: `${serverHost}/!/amis-api/curd-page@curdQuery`,
      },
      defaultParams: {pageNo: 1, pageSize: 10},
      pageField: "pageNo",
      perPageField: "pageSize",
      // interval: 3000,
      // silentPolling: true,
      // --------------------------------------------------------------- 查询条件表单配置
      // 条件过滤表单
      filterTogglable: true,
      filter: {
        title: "",
        // submitText: "查询", trimValues: true, // submitOnChange: true,
        controls: [
          {type: "text", label: "订单编号", name: "orderCode", placeholder: "通过关键字搜索", clearable: true, size: "md", labelClassName: styles.labelClassName},
          {type: "text", label: "手机号", name: "shipMobile", placeholder: "通过关键字搜索", clearable: true, size: "md", labelClassName: styles.labelClassName},
          {
            type: "select", label: "订单状态", name: "status", placeholder: "通过关键字搜索", clearable: true, size: "md", labelClassName: styles.labelClassName,
            options: [{label: "已出库", value: "1"}, {label: "已签收", value: "2"}, {label: "已驳回", value: "3"}],
          },
          {type: "html", html: "<br />"},
          {type: "text", name: "email2", placeholder: "请输入邮箱地址", label: "邮箱", size: "md", labelClassName: styles.labelClassName},
          {type: "text", name: "password2", label: "密码", placeholder: "请输入密码", size: "md", labelClassName: styles.labelClassName},
          // {type: "html", html: "<br />"},
          {type: "divider"},
          {label: "查询", level: "primary", type: "submit"},
          {label: "重置", type: "reset"},
        ],
      },
      // --------------------------------------------------------------- 表格列配置
      primaryField: "orderId",
      columns: [
        {name: "orderCode", label: "订单编号", sortable: true},
        {name: "status", label: "订单状态", sortable: true, type: "mapping", map: enumArray2mapperObject(statusMapper),},
        {name: "shipName", label: "收货人姓名", sortable: true},
        {name: "shipMobile", label: "手机号", sortable: true},
        {name: "orderType", label: "订单类型", sortable: true, type: "mapping", map: enumArray2mapperObject(orderTypeMapper)},
        {name: "payType", label: "支付方式", sortable: true, type: "mapping", map: enumArray2mapperObject(payTypeMapper)},
        {name: "payStatus", label: "支付状态", sortable: true, type: "mapping", map: enumArray2mapperObject(payStatusMapper)},
        {name: "payTime", label: "支付时间", sortable: true},
        {name: "payAmount", label: "支付金额", sortable: true},
        {name: "createAt", label: "下单时间", sortable: true},
        {
          type: "operation", label: "操作", width: 120, toggled: true,
          buttons: [detailsDialog(), editDialog(), deleteDialog()],
        },
      ],
      // --------------------------------------------------------------- 表格工具栏配置
      bulkActions: [
        {label: "批量操作1"},
        {label: "批量操作2"},
      ],
      headerToolbar: [
        {align: "left", type: "filter-toggler"},
        {align: "left", type: 'button', label: '主操作', level: 'primary', size: "sm"},
        {align: "left", type: 'button', label: '次操作', size: "sm"},
        {align: "left", type: "bulkActions"},
        {align: "right", type: "columns-toggler"},
        {align: "right", type: "drag-toggler"},
        {align: "right", type: "export-csv"},
        {align: "right", type: "export-excel"},
      ],
      footerToolbar: [
        // {align: "right", type: "load-more"},
        {align: "right", type: "pagination"},
        {align: "right", type: "switch-per-page"},
        {align: "right", type: "statistics"},
      ],
    },
  ],
};

export { schema }
