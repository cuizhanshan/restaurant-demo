import{_ as b,y as k,a as h,U as R,a4 as v,J as O,b as M,aZ as A,a2 as S,aR as B,aS as T,au as j}from"./index.de242ad9.js";import{A as $,c8 as w,bb as x,a0 as c,B as D,D as F,w as o,a5 as i,ad as u,J as d,K as J,u as m}from"./vendor.931bb567.js";const N=$({name:"SettingFooter",components:{CopyOutlined:w,RedoOutlined:x},setup(){const e=k(),{prefixCls:p}=h("setting-footer"),{t:s}=M(),{createSuccessModal:g,createMessage:r}=j(),C=R(),l=v(),t=O();function n(){const{isSuccessRef:a}=A(JSON.stringify(m(t.getProjectConfig),null,2));m(a)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function y(){try{t.setProjectConfig(S);const{colorWeak:a,grayMode:f}=S;B(a),T(f),r.success(s("layout.setting.resetSuccess"))}catch(a){r.error(a)}}function _(){localStorage.clear(),t.resetAllState(),e.resetState(),C.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:n,handleResetSetting:y,handleClearAndRedo:_}}});function P(e,p,s,g,r,C){const l=c("CopyOutlined"),t=c("a-button"),n=c("RedoOutlined");return D(),F("div",{class:J(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),u(" "+d(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var V=b(N,[["render",P],["__scopeId","data-v-755ad017"]]);export{V as default};
