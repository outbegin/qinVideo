(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{O5Ex:function(t,e,a){"use strict";a.r(e);a("IzEo");var r=a("bx4M"),s=a("p0pE"),i=a.n(s),c=a("mrSG"),n=a("q1tI"),o=a.n(n),p=a("MuoO"),l=a("L6Kr"),m=a("mOtZ"),u=a("WqWh"),h=a("faBS"),y=a("/88p"),d=a("3a4m"),g=a.n(d),v=class extends n["Component"]{constructor(t){var e;super(t),e=this,this.initData=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.query,r=e.props,s=r.dispatch,c=r.location.pathname,n=Object(h["b"])({cate:t,query:a,type:"kind"});s({type:"comic/queryList",payload:{query:n,addon:{type:t}}}),e.setState({cate:t}),g.a.push({pathname:c,query:i()({},a)})},this.listQuery=(t=>{var e=this.state,a=e.query,r=e.cate,s=i()({},a,t);this.setState({query:s}),this.initData(r,s)});var a=t.location.query;this.state={cate:"",query:{key:a.key||"time",sort:!!a.sort&&"true"===a.sort,list:!a.list||"true"===a.list,size:a.size?parseInt(a.size):20,page:a.page?parseInt(a.page):1}}}static getDerivedStateFromProps(t,e){var a=t.match.params.cate;return a!==e.cate?i()({},e,{cate:a}):null}componentDidMount(){var t=this.props.match,e=t.params.cate;this.initData(e)}componentDidUpdate(t,e){var a=this.props.match.params.cate,r=t.match.params.cate;r!==a&&this.initData(a)}render(){var t=this.state,e=t.cate,a=t.query,s=this.props,c=s.comic,n=s.category,p=s.loading,h=a.list,d=n[e]||{},g=c[e]||[],v=c.total[e]||0;return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(l["a"],{img:d.cover,span:d.slug}),o.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:p},o.a.createElement(m["a"],{value:a,onChange:this.listQuery}),h?o.a.createElement(y["b"],{type:"comic",list:g}):o.a.createElement(y["a"],{type:"comic",list:g}),o.a.createElement(u["a"],{value:i()({},a,{total:v}),onChange:this.listQuery}))))}};v=c["a"]([Object(p["connect"])(t=>{var e=t.comic,a=t.category,r=t.loading;return{comic:e,category:a,loading:r.models.comic||r.models.category}})],v),e["default"]=v}}]);