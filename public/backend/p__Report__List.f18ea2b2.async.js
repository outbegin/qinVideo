(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{mIg0:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,o,i=a("bx4M"),s=(a("g9YV"),a("wCAj")),l=(a("14J3"),a("BMrR")),c=(a("jCWc"),a("kPKH")),d=(a("+L6B"),a("2/Rp")),p=(a("/zsF"),a("PArb")),u=(a("Awhp"),a("KrTs")),m=(a("Telt"),a("Tckk")),f=(a("2qtc"),a("kLXV")),y=a("p0pE"),h=a.n(y),g=a("2Taf"),b=a.n(g),O=a("vZ4D"),M=a.n(O),j=a("l4Ni"),E=a.n(j),w=a("ujKo"),v=a.n(w),R=a("rlhR"),C=a.n(R),k=a("MhPg"),I=a.n(k),x=(a("5NDa"),a("5rEg")),q=a("q1tI"),S=a.n(q),D=a("MuoO"),A=a("LLXN"),K=a("wd/R"),V=a.n(K),T=(a("y8nQ"),a("Vl3Y")),z=a("jehZ"),B=a.n(z),N=(a("OaEy"),a("2fM7")),Y=a("7Q2D"),L=a("XII7"),P=x["a"].TextArea,_=N["a"].Option,F=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=E()(this,(e=v()(t)).call.apply(e,[this].concat(r))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,n=t.form,r=t.submit;n.validateFields(function(t,a){t||(a.target&&(a.target=a.target.key,a.onModel="Animate"),r(h()({},e,a)))})},a.handleCancel=function(){var e=a.props.cancel;a.setState({show:!1,data:{}}),e&&e()},a.modalShow=function(e){var t=e.type,n=e.data;a.setState({show:!0,data:h()({type:t},n)})},a}return I()(t,e),M()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,n=this.props.form.getFieldDecorator,r={labelCol:{span:4},wrapperCol:{span:18}},o="many"!==a.type&&"all"!==a.type,i="reply"===a.type;return S.a.createElement(f["a"],{title:Object(A["formatMessage"])({id:"common.edit"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},S.a.createElement(T["a"],null,"new"===a.type&&S.a.createElement(T["a"].Item,B()({},r,{label:Object(A["formatMessage"])({id:"report.target"})}),n("target",{initialValue:void 0})(S.a.createElement(L["a"],null))),o&&!i&&S.a.createElement(T["a"].Item,B()({},r,{label:Object(A["formatMessage"])({id:"report.content"})}),n("content",{initialValue:a.content||""})(S.a.createElement(P,{rows:4}))),o&&!i&&S.a.createElement(T["a"].Item,B()({},r,{label:Object(A["formatMessage"])({id:"comment.image"})}),n("image",{initialValue:a.image||[]})(S.a.createElement(Y["a"],null))),S.a.createElement(T["a"].Item,B()({},r,{label:Object(A["formatMessage"])({id:"report.reply"})}),n("reply",{initialValue:a.reply})(S.a.createElement(x["a"],{placeholder:Object(A["formatMessage"])({id:"report.reply.tips"})}))),S.a.createElement(T["a"].Item,B()({},r,{label:Object(A["formatMessage"])({id:"shop.status"})}),n("status",{initialValue:a.status||"draft",rules:[{required:!0,message:Object(A["formatMessage"])({id:"shop.status"})}]})(S.a.createElement(N["a"],{placeholder:Object(A["formatMessage"])({id:"shop.status.extra"})},S.a.createElement(_,{value:"draft"},Object(A["formatMessage"])({id:"common.draft"})),S.a.createElement(_,{value:"publish"},Object(A["formatMessage"])({id:"common.publish"})),S.a.createElement(_,{value:"reject"},Object(A["formatMessage"])({id:"common.reject"})))))))}}]),t}(q["PureComponent"]),H=T["a"].create()(F),J=a("ZeOv"),X=x["a"].Search,Z=(n=Object(D["connect"])(function(e){var t=e.report,a=e.loading;return{report:t,loading:a.models.report}}),n((o=function(e){function t(e){var a;b()(this,t),a=E()(this,v()(t).call(this,e)),a.editRef=S.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,n=a.state.selectedRowKeys,r=e.type;if("many"===r||"all"===r||"one"===r||"reply"===r){var o="one"===r||"reply"===r?[e.id]:"all"===r?[]:n;t({type:"report/putReportBatch",payload:{data:h()({},e,{ids:o})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})}else t({type:"report/postReport",payload:{data:h()({},e)}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})},a.editNew=function(){a.edit({type:"new",data:{}})},a.editReply=function(e){a.edit({type:"reply",data:{content:e.content,status:e.status,reply:e.reply,image:e.image,id:e._id}})},a.editOne=function(e){var t={content:e.content,status:e.status,reply:e.reply,image:e.image,id:e._id};a.edit({type:"one",data:t})},a.editMany=function(){a.edit({type:"many"})},a.editAll=function(){a.edit({type:"all"})},a.edit=function(e){var t=e.type,n=e.data;a.editRef.modalShow({type:t,data:n})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;f["a"].confirm({title:Object(A["formatMessage"])({id:"report.list.delete.report"}),content:Object(A["formatMessage"])({id:"common.delete.tips"}),okText:Object(A["formatMessage"])({id:"common.confirm"}),cancelText:Object(A["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"report/deleteReportBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearchVideo=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,n){var r,o,i=e.current,s=e.pageSize,l=t.status?t.status[0]:null;n.order&&(r="descend"===n.order?-1:1,o=n.field),a.query=h()({},a.query,{size:s,page:i,sortBy:o,sortOrder:r,status:l}),a.initData()},a.initData=function(){var e=C()(a),t=e.query,n=a.props.dispatch;n({type:"report/queryReport",payload:{query:t}});var r=a.props,o=r.location.pathname,i=r.history;i.push({pathname:o,state:a.query})};var n=e.location.state,r=void 0===n?{}:n;return a.state={selectedRowKeys:[]},a.query={title:r.title,size:r.size?r.size:10,page:r.page?r.page:1,sortBy:r.sortBy,sortOrder:r.sortOrder,status:r.status},a}return I()(t,e),M()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,n=a.report,r=n.list,o=n.total,f=a.loading,y=r.map(function(e){return e.children&&e.children.length>0?e.countChild=e.children.length:(delete e.children,e.countChild=0),e}),h=[{title:Object(A["formatMessage"])({id:"report.target"}),dataIndex:"target",render:function(e){return e?e.title||e.name||e.content:Object(A["formatMessage"])({id:"common.deleted"})}},{title:Object(A["formatMessage"])({id:"report.type"}),dataIndex:"onModel",render:function(e){return Object(A["formatMessage"])({id:"report.type.".concat(e)})}},{title:Object(A["formatMessage"])({id:"report.author"}),dataIndex:"author.name",sorter:!0},{title:Object(A["formatMessage"])({id:"report.content"}),dataIndex:"content",render:function(e){return e.slice(0,50)}},{title:Object(A["formatMessage"])({id:"report.image"}),dataIndex:"image",align:"center",render:function(t){return t.length>0?t.slice(0,3).map(function(t){return S.a.createElement(m["a"],{shape:"square",size:64,icon:"user",src:t,key:t,style:{marginRight:"15px"},onClick:e.imgView.show(t)})}):Object(A["formatMessage"])({id:"report.nocontent"})}},{title:Object(A["formatMessage"])({id:"report.status"}),dataIndex:"status",filters:Object.values(J["g"]),filterMultiple:!1,render:function(e){return S.a.createElement(u["a"],{status:J["g"][e].badge,text:J["g"][e].text})}},{title:Object(A["formatMessage"])({id:"report.reply"}),dataIndex:"reply"},{title:Object(A["formatMessage"])({id:"report.createdAt"}),dataIndex:"createdAt",sorter:!0,render:function(e){return V()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(A["formatMessage"])({id:"report.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,a){return S.a.createElement("span",null,S.a.createElement("a",{onClick:function(){return e.editReply(a)}},Object(A["formatMessage"])({id:"common.reply"})),S.a.createElement(p["a"],{type:"vertical"}),S.a.createElement("a",{onClick:e.deleteOne(t)},Object(A["formatMessage"])({id:"common.delete"})))}}],g={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},b=Object(J["e"])(this.query.page,this.query.size,o);return S.a.createElement(i["a"],{className:"tableList",bordered:!1},S.a.createElement(l["a"],{className:"head"},S.a.createElement(c["a"],{span:16},S.a.createElement(d["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(A["formatMessage"])({id:"common.add.new"})),t.length>0&&S.a.createElement(J["b"],{edit:this.editMany,delete:this.deleteMany}),S.a.createElement(J["a"],{edit:this.editAll,delete:this.deleteAll})),S.a.createElement(c["a"],{span:8},S.a.createElement(X,{placeholder:Object(A["formatMessage"])({id:"report.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),S.a.createElement(l["a"],null,S.a.createElement(s["a"],{className:"longTable",loading:f,rowKey:"_id",rowSelection:g,columns:h,onChange:this.onChangeTable,dataSource:y,pagination:b})),S.a.createElement(H,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(q["Component"]),r=o))||r);t["default"]=Z}}]);