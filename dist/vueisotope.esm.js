import t from"isotope-layout";var e={name:"isotope",props:{options:{type:Object,default:{layoutMode:"masonry",masonry:{gutter:10}}},itemSelector:{type:String,default:"item"},list:{type:Array,required:!0}},render:function(t){var e=this,i={},n=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=this.removedKeys=[];r.forEach((function(t){return function(t,e){if(t.data){var i=t.data.staticClass?t.data.staticClass+" ":"";t.data.staticClass=i+e}}(t,e.itemSelector)}));for(var l=0;l<r.length;l++){var a=r[l];if(a.tag)if(null!=a.key&&0!==String(a.key).indexOf("__vlist"))s.push(a),i[a.key]=a;else{var u=a.componentOptions,c=u?u.Ctor.options.name||u.tag||"":a.tag;console.log("Warning template error: isotope children must be keyed: <"+c+">")}}var f=this.displayChildren=[].concat(s);if(n)for(var h=0;h<n.length;h++){var d=n[h];i[d.key]||(f.splice(h,0,d),o.push(d.key))}return t("div",null,f)},mounted:function(){var e=this,i=Object.assign({},this.compiledOptions),n=function(t){Object.entries(t).forEach((function(i){var n=i[0],r=i[1];t[n]=function(t){var i=t.__underlying_element;return r.call(e,i.vm,i.index)}}))};n(i.getSortData||{}),n(i.getFilterData||{}),this._isotopeOptions=i,i.filter&&(i.filter=this.buildFilterFunction(i.filter)),this.$nextTick((function(){e.link(),e.listen();var n=new t(e.$el,i);n._requestUpdate=function(){n._willUpdate||(n._willUpdate=!0,e.$nextTick((function(){n.arrange(),n._willUpdate=!1})))},e.iso=n}))},beforeDestroy:function(){this._listeners.forEach((function(t){t()})),this._filterlistener&&this._filterlistener(),this.iso=null},beforeUpdate:function(){this._oldChidren=Array.prototype.slice.call(this.$el.children)},updated:function(){var t=this;if(this.iso){var e=Array.from(this.$el.children).filter((function(e){return!t._oldChidren.includes(e)})),i=this.removedKeys.map((function(e){return Array.from(t.$el.children).find((function(t){return t.__vue__.$vnode.key===e}))}));this.cleanupNodes(),this.link(),(i.length||e.length)&&(this.listen(),this.iso.remove(i),this.iso.insert(e),this.iso._requestUpdate())}},methods:{cleanupNodes:function(){var t=this;this.removedKeys.reverse(),this._vnode.children=this._vnode.children.filter((function(e){return!t.removedKeys.includes(e.key)})),this.$children=this.$children.filter((function(e){return!t.removedKeys.includes(e.$vnode.key)}))},link:function(){var t=this;(this.$slots.default||[]).forEach((function(e,i){var n=e.elm;n&&(n.__underlying_element={vm:t.list[i],index:i})}))},listen:function(){var t=this;this._listeners=Object.values(this.compiledOptions.getSortData).map((function(e){return Array.from(t.$el.children).map((function(i,n){return t.$watch((function(){return e(i)}),(function(){t.iso.updateSortData()}))}))})).flat()},sort:function(t){var e=t;"string"==typeof t&&(e={sortBy:t}),this.arrange(e),this.$emit("sort",t)},buildFilterFunction:function(t){var e=this,i=this._isotopeOptions.getFilterData[t];return this._filterlistener=this.$watch((function(){return e.list.map((function(i,n){return e.options.getFilterData[t](i,n)}))}),(function(){e.iso._requestUpdate()})),i},filter:function(t){var e=this.buildFilterFunction(t);this.arrange({filter:e}),this.$emit("filter",t)},unfilter:function(){this.arrange({filter:function(){return!0}}),this.$emit("filter",null)},layout:function(t){var e=t;"string"==typeof t&&(e={layoutMode:t}),this.arrange(e),this.$emit("layout",e)},arrange:function(t){this.iso.arrange(t),this.$emit("arrange",t)},shuffle:function(){this.iso.shuffle(),this.$emit("shuffle"),this.$emit("sort",null)},getFilteredItemElements:function(){return this.iso.getFilteredItemElements()},getElementItems:function(){return this.iso.getElementItems()}},computed:{compiledOptions:function(){var t=Object.assign({},this.options,{itemSelector:"."+this.itemSelector,isJQueryFiltering:!1});return Object.entries(t.getSortData).forEach((function(e){var i=e[0],n=e[1];"string"==typeof n&&(t.getSortData[i]=function(t){return t[n]})})),t}}};function i(t){i.installed||(i.installed=!0,t.component("isotope",e))}var n={install:i},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(n);export default e;export{i as install};