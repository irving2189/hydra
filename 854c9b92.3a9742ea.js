(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(7),o=(n(0),n(236)),i={id:"using_config",title:"Using the config object"},c={unversionedId:"tutorials/basic/your_first_app/using_config",id:"version-1.0/tutorials/basic/your_first_app/using_config",isDocsHomePage:!1,title:"Using the config object",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/3_using_config.md",slug:"/tutorials/basic/your_first_app/using_config",permalink:"/docs/tutorials/basic/your_first_app/using_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/3_using_config.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1602575244,sidebar:"version-1.0/docs",previous:{title:"Specifying a config file",permalink:"/docs/tutorials/basic/your_first_app/config_file"},next:{title:"Grouping config files",permalink:"/docs/tutorials/basic/your_first_app/config_groups"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/basic/your_first_hydra_app/3_using_config"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(o.b)("p",null,"You configuration object is an instance of OmegaConf's DictConfig.",Object(o.b)("br",{parentName:"p"}),"\n","Here are some of the basic features:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),'node:                         # Config is hierarchical\n  loompa: 10                  # Simple value\n  zippity: ${node.loompa}     # Value interpolation\n  do: "oompa ${node.loompa}"  # String interpolation\n  waldo: ???                  # Missing value, must be populated prior to access\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="main.py"',title:'"main.py"'}),'@hydra.main(config_name="config")\ndef my_app(cfg: DictConfig):\n    assert cfg.node.loompa == 10          # attribute style access\n    assert cfg["node"]["loompa"] == 10    # dictionary style access\n\n    assert cfg.node.zippity == 10         # Value interpolation\n    assert isinstance(cfg.node.zippity, int)  # Value interpolation type\n    assert cfg.node.do == "oompa 10"      # string interpolation\n\n    cfg.node.waldo                        # raises an exception\n')),Object(o.b)("p",null,"Outputs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app.py \nMissing mandatory value: waldo\n        full_key: waldo\n        reference_type=Optional[Dict[Any, Any]]\n        object_type=dict\n")),Object(o.b)("p",null,"You can learn more about OmegaConf ",Object(o.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}l.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);