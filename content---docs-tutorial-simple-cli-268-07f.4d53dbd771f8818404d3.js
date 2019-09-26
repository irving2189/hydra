(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));t(0);var r=t(98);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={id:"simple_cli",title:"Simple command line application",sidebar_label:"Simple command line application"},c=[],p={rightToc:c},l="wrapper";function s(e){var n=e.components,t=o(e,["components"]);return Object(r.b)(l,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"my_app")," function is a place holder\nfor your code. We will slowly evolve this example to show-case more Hydra features."),Object(r.b)("p",null,"Python file: ",Object(r.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-python"}),'import hydra\n\n@hydra.main()\ndef my_app(cfg):\n    print(cfg.pretty())\n\nif __name__ == "__main__":\n    my_app()\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"cfg")," is an ",Object(r.b)("a",a({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"}),"OmegaConf"),"\nobject that holds the configuration for your function.\nYou don't need a deep understanding of OmegaConf for this tutorial."),Object(r.b)("p",null,"We can pass arbitrary command line arguments from which Hydra creates a hierarchical configuration object:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db.driver=mysql db.user=omry db.pass=secret\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")))}s.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),u=r,m=s[c+"."+u]||s[u]||l[u]||o;return t?a.a.createElement(m,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(m,Object.assign({},{ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);