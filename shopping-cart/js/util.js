var util={CloneObject:function(e){return Object.assign({},e)},ExtractWcCurrecnySymbol:function(e){var r=e.indexOf("("),t=e.indexOf(")");return r>=0&&t>=0&&r<t?e.substring(r+1,t):""},ParseCurrencyToDisp:function(e,r,t){t=null==t||t;for(var n="0,0[.]",a=0;a<e.numDecimal;++a)n+="0";var o=numeral(r).format(n),s=o.lastIndexOf(".");if(o=o.replace(/,/g,e.thousandSep),s>=0&&(o=o.substring(0,s)+e.decimalSep+o.substring(s+1,o.length)),!t)return o;var c=e.options[e.value],u=this.ExtractWcCurrecnySymbol(c);return u=u.replace(/&amp;/g,"&"),"left"===e.symbolPos?u+o:"right"===e.symbolPos?o+u:"left_space"===e.symbolPos?u+" "+o:"right_space"===e.symbolPos?o+" "+u:void 0},WCDateToJsDate:function(e){return new Date(e+".000Z").toLocaleString()},decodeJSON:function(e){return JSON.parse(e.replace(/&#34;/g,'"'))}};