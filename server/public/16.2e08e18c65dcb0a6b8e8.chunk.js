webpackJsonp([16],{1303:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=r(n),o=a(13),s=r(o),i=a(1436),u=r(i),d=a(20),c=r(d),f=a(1325),p=r(f),m=a(171),g=r(m),v=a(26),_="https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/meetups.jpeg?raw=true",b=function(){return l["default"].createElement("div",{className:u["default"].container},l["default"].createElement(p["default"],{backgroundImage:_},l["default"].createElement(g["default"],{strong:!0},"Udacity Alumni"),l["default"].createElement(c["default"],{tag:"h2",strong:!0},"About Us")),l["default"].createElement(v.MartinRulz,null),l["default"].createElement(v.AppFooter,null))};t["default"]=(0,s["default"])(b,u["default"])},1325:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(9),l=r(n),o=a(2),s=r(o),i=a(3),u=r(i),d=a(4),c=r(d),f=a(6),p=r(f),m=a(5),g=r(m),v=a(0),_=r(v),b=a(8),h=r(b),y=a(7),I=r(y),k=a(103),w=r(k),x=a(11),E=r(x),z=a(120),Z=r(z),B=I["default"].HERO,P=function(e){function t(e,a){(0,u["default"])(this,t);var r=(0,p["default"])(this,(t.__proto__||(0,s["default"])(t)).call(this,e,a));return r._setReverse=r._setReverse.bind(r),r._setBackgroundColorIndex=r._setBackgroundColorIndex.bind(r),r.state={colorIndex:e.colorIndex,reverse:"start"===e.justify},r}return(0,g["default"])(t,e),(0,c["default"])(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this._setReverse),window.addEventListener("resize",this._setBackgroundColorIndex),this._setReverse(),this._setBackgroundColorIndex()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setReverse),window.removeEventListener("resize",this._setBackgroundColorIndex)}},{key:"_setBackgroundColorIndex",value:function(){var e=this.props.colorIndex;window.innerWidth<w["default"].smallSize()?this.setState({colorIndex:"light-1"}):this.setState({colorIndex:e})}},{key:"_setReverse",value:function(){var e=this.props.justify;window.innerWidth<w["default"].smallSize()?this.setState({reverse:!1}):this.setState({reverse:"start"===e})}},{key:"render",value:function(){var e,t=this.props,a=t.backgroundImage,r=t.backgroundVideo,n=t.children,o=t.className,s=t.flush,i=t.image,u=t.justify,d=t.responsiveBackgroundPosition,c=t.separator,f=t.size,p=(0,h["default"])(B,o,(e={},(0,l["default"])(e,B+"--"+f,f),(0,l["default"])(e,B+"--bg-"+d,d),(0,l["default"])(e,B+"--mobile-separator",c),e)),m=!!s&&"horizontal",g=s?"none":"large",v=void 0;a?v=_["default"].createElement(E["default"],{containerClassName:B+"__background",appCentered:!0,pad:g,backgroundImage:"url("+a+")",full:m}):r&&(v=_["default"].createElement(E["default"],{className:B+"__background "+B+"__background-video"},r));var b=_["default"].createElement(E["default"],null);i&&(b=_["default"].createElement(Z["default"],{src:"url("+i+")"}));var y=void 0;return y="center"===u?_["default"].createElement(E["default"],{className:B+"__overlay",justify:u,align:"center",primary:!0,full:m,direction:"row"},_["default"].createElement(E["default"],{pad:{horizontal:"large",vertical:"large",between:"medium"}},n)):_["default"].createElement(E["default"],{className:B+"__overlay",align:"center",primary:!0,full:m,direction:"row",reverse:this.state.reverse},_["default"].createElement(E["default"],{className:B+"__image",align:"center",justify:"center"},b),_["default"].createElement(E["default"],{pad:{horizontal:"large",vertical:"large",between:"medium"}},n)),_["default"].createElement(E["default"],{className:p,colorIndex:this.state.colorIndex},v,y)}}]),t}(v.Component);P.displayName="Hero",t["default"]=P,P.propTypes={backgroundImage:v.PropTypes.string,backgroundVideo:v.PropTypes.object,colorIndex:v.PropTypes.string,flush:v.PropTypes.bool,image:v.PropTypes.string,justify:v.PropTypes.oneOf(["start","center","end"]),responsiveBackgroundPosition:v.PropTypes.oneOf(["left","center","right"]),separator:v.PropTypes.bool,size:v.PropTypes.oneOf(["small","large"])},P.defaultProps={colorIndex:"grey-1",flush:!0,justify:"end",responsiveBackgroundPosition:"center",separator:!1,size:"large"},e.exports=t["default"]},1418:function(e,t,a){t=e.exports=a(1301)(),t.push([e.i,".app-src-pages-AboutPage-___index-module__container___2HJ6M {\n  min-height: 100vh;\n  width: 100%;\n  background: #fafbfc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teU1hYy9EZXZlbG9wZXIvd29ya3MtaW4tcHJvZ3Jlc3MvdWRhY2l0eS1hbHVtbmkvY2xpZW50L2FwcC9zcmMvY29tcG9uZW50cy9BcHBGb290ZXIvaW5kZXgubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQixFQUFFIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmJmYzsgfVxuIl19 */",""]),t.locals={container:"app-src-pages-AboutPage-___index-module__container___2HJ6M"}},1436:function(e,t,a){var r=a(1418);"string"==typeof r&&(r=[[e.i,r,""]]);a(1302)(r,{});r.locals&&(e.exports=r.locals)}});