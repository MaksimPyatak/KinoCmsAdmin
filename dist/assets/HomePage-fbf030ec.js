import{o as K,c as ht,r as ai,a as c,b as D,d as ci,w as Se,e as Ys,u as hi,f as Ot,g as Js,h as Qs,R as Zs,i as Sn,t as Nt,F as Dn,p as tr,j as er}from"./index-07d66ccf.js";import{_ as li}from"./_plugin-vue_export-helper-c27b6911.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nr=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],h=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,h=s+2<t.length,l=h?t[s+2]:0,d=r>>2,y=(r&3)<<4|a>>4;let S=(a&15)<<2|l>>6,w=l&63;h||(w=64,o||(S=64)),i.push(n[d],n[y],n[S],n[w])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ui(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||y==null)throw new ir;const S=r<<2|a>>4;if(i.push(S),l!==64){const w=a<<4&240|l>>2;if(i.push(w),y!==64){const et=l<<6&192|y;i.push(et)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ir extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sr=function(t){const e=ui(t);return fi.encodeByteArray(e,!0)},Mt=function(t){return sr(t).replace(/\./g,"")},rr=function(t){try{return fi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=()=>or().__FIREBASE_DEFAULTS__,cr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rr(t[1]);return e&&JSON.parse(e)},di=()=>{try{return ar()||cr()||hr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lr=t=>{var e,n;return(n=(e=di())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ur=t=>{const e=lr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},fr=()=>{var t;return(t=di())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mt(JSON.stringify(n)),Mt(JSON.stringify(o)),a].join(".")}function gr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pi(){try{return typeof indexedDB=="object"}catch{return!1}}function gi(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function mr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirebaseError";class V extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=yr,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vr(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new V(s,a,i)}}function vr(t,e){return t.replace(wr,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const wr=/\{\$([^}]+)}/g;function $t(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(kn(r)&&kn(o)){if(!$t(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function kn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=1e3,Er=2,br=4*60*60*1e3,Tr=.5;function Rn(t,e=Ir,n=Er){const i=e*Math.pow(n,t),s=Math.round(Tr*i*(Math.random()-.5)*2);return Math.min(br,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return t&&t._delegate?t._delegate:t}class B{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new dr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cr(e))try{this.getOrInitializeService({instanceIdentifier:q})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=q){return this.instances.has(e)}getOptions(e=q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_r(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=q){return this.component?this.component.multipleInstances?e:q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _r(t){return t===q?void 0:t}function Cr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ar(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(g||(g={}));const Dr={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},kr=g.INFO,Rr={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Or=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Rr[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qe{constructor(e){this.name=e,this._logLevel=kr,this._logHandler=Or,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Nr=(t,e)=>e.some(n=>t instanceof n);let On,Nn;function Lr(){return On||(On=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pr(){return Nn||(Nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yi=new WeakMap,De=new WeakMap,vi=new WeakMap,fe=new WeakMap,Ke=new WeakMap;function xr(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(j(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yi.set(n,t)}).catch(()=>{}),Ke.set(e,t),e}function Mr(t){if(De.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});De.set(t,e)}let ke={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return De.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $r(t){ke=t(ke)}function Br(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(de(this),e,...n);return vi.set(i,e.sort?e.sort():[e]),j(i)}:Pr().includes(t)?function(...e){return t.apply(de(this),e),j(yi.get(this))}:function(...e){return j(t.apply(de(this),e))}}function Fr(t){return typeof t=="function"?Br(t):(t instanceof IDBTransaction&&Mr(t),Nr(t,Lr())?new Proxy(t,ke):t)}function j(t){if(t instanceof IDBRequest)return xr(t);if(fe.has(t))return fe.get(t);const e=Fr(t);return e!==t&&(fe.set(t,e),Ke.set(e,t)),e}const de=t=>Ke.get(t);function wi(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=j(o);return i&&o.addEventListener("upgradeneeded",h=>{i(j(o.result),h.oldVersion,h.newVersion,j(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(h=>{r&&h.addEventListener("close",()=>r()),s&&h.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const jr=["get","getKey","getAll","getAllKeys","count"],Ur=["put","add","delete","clear"],pe=new Map;function Ln(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pe.get(e))return pe.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ur.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||jr.includes(n)))return;const r=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let l=h.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&h.done]))[0]};return pe.set(e,r),r}$r(t=>({...t,get:(e,n,i)=>Ln(e,n)||t.get(e,n,i),has:(e,n)=>!!Ln(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vr(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Vr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Re="@firebase/app",Pn="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new qe("@firebase/app"),zr="@firebase/app-compat",Gr="@firebase/analytics-compat",qr="@firebase/analytics",Kr="@firebase/app-check-compat",Wr="@firebase/app-check",Xr="@firebase/auth",Yr="@firebase/auth-compat",Jr="@firebase/database",Qr="@firebase/database-compat",Zr="@firebase/functions",to="@firebase/functions-compat",eo="@firebase/installations",no="@firebase/installations-compat",io="@firebase/messaging",so="@firebase/messaging-compat",ro="@firebase/performance",oo="@firebase/performance-compat",ao="@firebase/remote-config",co="@firebase/remote-config-compat",ho="@firebase/storage",lo="@firebase/storage-compat",uo="@firebase/firestore",fo="@firebase/firestore-compat",po="firebase",go="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="[DEFAULT]",mo={[Re]:"fire-core",[zr]:"fire-core-compat",[qr]:"fire-analytics",[Gr]:"fire-analytics-compat",[Wr]:"fire-app-check",[Kr]:"fire-app-check-compat",[Xr]:"fire-auth",[Yr]:"fire-auth-compat",[Jr]:"fire-rtdb",[Qr]:"fire-rtdb-compat",[Zr]:"fire-fn",[to]:"fire-fn-compat",[eo]:"fire-iid",[no]:"fire-iid-compat",[io]:"fire-fcm",[so]:"fire-fcm-compat",[ro]:"fire-perf",[oo]:"fire-perf-compat",[ao]:"fire-rc",[co]:"fire-rc-compat",[ho]:"fire-gcs",[lo]:"fire-gcs-compat",[uo]:"fire-fst",[fo]:"fire-fst-compat","fire-js":"fire-js",[po]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Map,Ne=new Map;function yo(t,e){try{t.container.addComponent(e)}catch(n){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function H(t){const e=t.name;if(Ne.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;Ne.set(e,t);for(const n of Bt.values())yo(n,t);return!0}function Et(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},U=new Wt("app","Firebase",vo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new B("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=go;function Ii(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Oe,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw U.create("bad-app-name",{appName:String(s)});if(n||(n=fr()),!n)throw U.create("no-options");const r=Bt.get(s);if(r){if($t(n,r.options)&&$t(i,r.config))return r;throw U.create("duplicate-app",{appName:s})}const o=new Sr(s);for(const h of Ne.values())o.addComponent(h);const a=new wo(n,i,o);return Bt.set(s,a),a}function Ei(t=Oe){const e=Bt.get(t);if(!e&&t===Oe)return Ii();if(!e)throw U.create("no-app",{appName:t});return e}function M(t,e,n){var i;let s=(i=mo[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(a.join(" "));return}H(new B(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="firebase-heartbeat-database",bo=1,pt="firebase-heartbeat-store";let ge=null;function bi(){return ge||(ge=wi(Eo,bo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pt)}}}).catch(t=>{throw U.create("idb-open",{originalErrorMessage:t.message})})),ge}async function To(t){try{return(await bi()).transaction(pt).objectStore(pt).get(Ti(t))}catch(e){if(e instanceof V)Q.warn(e.message);else{const n=U.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Q.warn(n.message)}}}async function xn(t,e){try{const i=(await bi()).transaction(pt,"readwrite");return await i.objectStore(pt).put(e,Ti(t)),i.done}catch(n){if(n instanceof V)Q.warn(n.message);else{const i=U.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Q.warn(i.message)}}}function Ti(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=1024,_o=30*24*60*60*1e3;class Co{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Do(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=_o}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mn(),{heartbeatsToSend:n,unsentEntries:i}=So(this._heartbeatsCache.heartbeats),s=Mt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mn(){return new Date().toISOString().substring(0,10)}function So(t,e=Ao){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),$n(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$n(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Do{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pi()?gi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await To(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $n(t){return Mt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){H(new B("platform-logger",e=>new Hr(e),"PRIVATE")),H(new B("heartbeat",e=>new Co(e),"PRIVATE")),M(Re,Pn,t),M(Re,Pn,"esm2017"),M("fire-js","")}ko("");var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u,We=We||{},f=Ro||self;function Ft(){}function Xt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Oo(t){return Object.prototype.hasOwnProperty.call(t,me)&&t[me]||(t[me]=++No)}var me="closure_uid_"+(1e9*Math.random()>>>0),No=0;function Lo(t,e,n){return t.call.apply(t.bind,arguments)}function Po(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function A(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A=Lo:A=Po,A.apply(null,arguments)}function Lt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function b(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function z(){this.s=this.s,this.o=this.o}var xo=0;z.prototype.s=!1;z.prototype.na=function(){!this.s&&(this.s=!0,this.M(),xo!=0)&&Oo(this)};z.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ai=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Xe(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Bn(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Xt(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function _(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var Mo=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",Ft,e),f.removeEventListener("test",Ft,e)}catch{}return t}();function jt(t){return/^[\s\xa0]*$/.test(t)}var Fn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ye(t,e){return t<e?-1:t>e?1:0}function Yt(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return Yt().indexOf(t)!=-1}function Ye(t){return Ye[" "](t),t}Ye[" "]=Ft;function $o(t){var e=jo;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Bo=x("Opera"),gt=x("Trident")||x("MSIE"),_i=x("Edge"),Le=_i||gt,Ci=x("Gecko")&&!(Yt().toLowerCase().indexOf("webkit")!=-1&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Fo=Yt().toLowerCase().indexOf("webkit")!=-1&&!x("Edge");function Si(){var t=f.document;return t?t.documentMode:void 0}var Pe;t:{var ve="",we=function(){var t=Yt();if(Ci)return/rv:([^\);]+)(\)|;)/.exec(t);if(_i)return/Edge\/([\d\.]+)/.exec(t);if(gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Fo)return/WebKit\/(\S+)/.exec(t);if(Bo)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(we&&(ve=we?we[1]:""),gt){var Ie=Si();if(Ie!=null&&Ie>parseFloat(ve)){Pe=String(Ie);break t}}Pe=ve}var jo={};function Uo(){return $o(function(){let t=0;const e=Fn(String(Pe)).split("."),n=Fn("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=ye(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||ye(s[2].length==0,r[2].length==0)||ye(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}f.document&&gt&&Si();function mt(t,e){if(_.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ci){t:{try{Ye(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ho[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mt.X.h.call(this)}}b(mt,_);var Ho={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Vo=0;function zo(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Vo,this.ba=this.ea=!1}function Jt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Je(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Di(t){const e={};for(const n in t)e[n]=t[n];return e}const jn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ki(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<jn.length;r++)n=jn[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qt(t){this.src=t,this.g={},this.h=0}Qt.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Me(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new zo(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function xe(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Ai(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Jt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Me(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Qe="closure_lm_"+(1e6*Math.random()|0),Ee={};function Ri(t,e,n,i,s){if(i&&i.once)return Ni(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ri(t,e[r],n,i,s);return null}return n=en(n),t&&t[Tt]?t.N(e,n,bt(i)?!!i.capture:!!i,s):Oi(t,e,n,!1,i,s)}function Oi(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=bt(s)?!!s.capture:!!s,a=tn(t);if(a||(t[Qe]=a=new Qt(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Go(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Mo||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Pi(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Go(){function t(n){return e.call(t.src,t.listener,n)}const e=qo;return t}function Ni(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ni(t,e[r],n,i,s);return null}return n=en(n),t&&t[Tt]?t.O(e,n,bt(i)?!!i.capture:!!i,s):Oi(t,e,n,!0,i,s)}function Li(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Li(t,e[r],n,i,s);else i=bt(i)?!!i.capture:!!i,n=en(n),t&&t[Tt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Me(r,n,i,s),-1<n&&(Jt(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=tn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Me(e,n,i,s)),(n=-1<t?e[t]:null)&&Ze(n))}function Ze(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Tt])xe(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Pi(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=tn(e))?(xe(n,t),n.h==0&&(n.src=null,e[Qe]=null)):Jt(t)}}}function Pi(t){return t in Ee?Ee[t]:Ee[t]="on"+t}function qo(t,e){if(t.ba)t=!0;else{e=new mt(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ze(t),t=n.call(i,e)}return t}function tn(t){return t=t[Qe],t instanceof Qt?t:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function en(t){return typeof t=="function"?t:(t[be]||(t[be]=function(e){return t.handleEvent(e)}),t[be])}function I(){z.call(this),this.i=new Qt(this),this.P=this,this.I=null}b(I,z);I.prototype[Tt]=!0;I.prototype.removeEventListener=function(t,e,n,i){Li(this,t,e,n,i)};function E(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new _(e,t);else if(e instanceof _)e.target=e.target||t;else{var s=e;e=new _(i,t),ki(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Pt(o,i,!0,e)&&s}if(o=e.g=t,s=Pt(o,i,!0,e)&&s,s=Pt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Pt(o,i,!1,e)&&s}I.prototype.M=function(){if(I.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Jt(n[i]);delete t.g[e],t.h--}}this.I=null};I.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};I.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Pt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,h=o.ha||o.src;o.ea&&xe(t.i,o),s=a.call(h,i)!==!1&&s}}return s&&!i.defaultPrevented}var nn=f.JSON.stringify;function Ko(){var t=$i;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Wo{constructor(){this.h=this.g=null}add(e,n){const i=xi.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var xi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Xo,t=>t.reset());class Xo{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Yo(t){f.setTimeout(()=>{throw t},0)}function Mi(t,e){$e||Jo(),Be||($e(),Be=!0),$i.add(t,e)}var $e;function Jo(){var t=f.Promise.resolve(void 0);$e=function(){t.then(Qo)}}var Be=!1,$i=new Wo;function Qo(){for(var t;t=Ko();){try{t.h.call(t.g)}catch(n){Yo(n)}var e=xi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Be=!1}function Zt(t,e){I.call(this),this.h=t||1,this.g=e||f,this.j=A(this.lb,this),this.l=Date.now()}b(Zt,I);u=Zt.prototype;u.ca=!1;u.R=null;u.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),E(this,"tick"),this.ca&&(sn(this),this.start()))}};u.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}u.M=function(){Zt.X.M.call(this),sn(this),delete this.g};function rn(t,e,n){if(typeof t=="function")n&&(t=A(t,n));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Bi(t){t.g=rn(()=>{t.g=null,t.i&&(t.i=!1,Bi(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Zo extends z{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bi(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(t){z.call(this),this.h=t,this.g={}}b(yt,z);var Un=[];function Fi(t,e,n,i){Array.isArray(n)||(n&&(Un[0]=n.toString()),n=Un);for(var s=0;s<n.length;s++){var r=Ri(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ji(t){Je(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ze(e)},t),t.g={}}yt.prototype.M=function(){yt.X.M.call(this),ji(this)};yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function te(){this.g=!0}te.prototype.Aa=function(){this.g=!1};function ta(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var d=l[0];l=l[1];var y=d.split("_");o=2<=y.length&&y[1]=="type"?o+(d+"="+l+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ea(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function nt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ia(t,n)+(i?" "+i:"")})}function na(t,e){t.info(function(){return"TIMEOUT: "+e})}te.prototype.info=function(){};function ia(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return nn(n)}catch{return e}}var rt={},Hn=null;function on(){return Hn=Hn||new I}rt.Pa="serverreachability";function Ui(t){_.call(this,rt.Pa,t)}b(Ui,_);function vt(t){const e=on();E(e,new Ui(e))}rt.STAT_EVENT="statevent";function Hi(t,e){_.call(this,rt.STAT_EVENT,t),this.stat=e}b(Hi,_);function C(t){const e=on();E(e,new Hi(e,t))}rt.Qa="timingevent";function Vi(t,e){_.call(this,rt.Qa,t),this.size=e}b(Vi,_);function At(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var an={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},sa={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function cn(){}cn.prototype.h=null;function Vn(t){return t.h||(t.h=t.i())}function ra(){}var _t={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function hn(){_.call(this,"d")}b(hn,_);function ln(){_.call(this,"c")}b(ln,_);var Fe;function ee(){}b(ee,cn);ee.prototype.g=function(){return new XMLHttpRequest};ee.prototype.i=function(){return{}};Fe=new ee;function Ct(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new yt(this),this.O=oa,t=Le?125:void 0,this.T=new Zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var oa=45e3,je={},Ut={};u=Ct.prototype;u.setTimeout=function(t){this.O=t};function Ue(t,e,n){t.K=1,t.v=ie(F(e)),t.s=n,t.P=!0,Gi(t,null)}function Gi(t,e){t.F=Date.now(),St(t),t.A=F(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Zi(n.i,"t",i),t.C=0,n=t.l.H,t.h=new zi,t.g=Is(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Zo(A(t.La,t,t.g),t.N)),Fi(t.S,t.g,"readystatechange",t.ib),e=t.H?Di(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vt(),ta(t.j,t.u,t.A,t.m,t.U,t.s)}u.ib=function(t){t=t.target;const e=this.L;e&&$(t)==3?e.l():this.La(t)};u.La=function(t){try{if(t==this.g)t:{const d=$(this.g);var e=this.g.Ea();const y=this.g.aa();if(!(3>d)&&(d!=3||Le||this.g&&(this.h.h||this.g.fa()||Kn(this.g)))){this.I||d!=4||e==7||(e==8||0>=y?vt(3):vt(2)),ne(this);var n=this.g.aa();this.Y=n;e:if(qi(this)){var i=Kn(this.g);t="";var s=i.length,r=$(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){W(this),ft(this);var o="";break e}this.h.i=new f.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ea(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jt(a)){var l=a;break e}}l=null}if(n=l)nt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,He(this,n);else{this.i=!1,this.o=3,C(12),W(this),ft(this);break t}}this.P?(Ki(this,d,o),Le&&this.i&&d==3&&(Fi(this.S,this.T,"tick",this.hb),this.T.start())):(nt(this.j,this.m,o,null),He(this,o)),d==4&&W(this),this.i&&!this.I&&(d==4?ms(this.l,this):(this.i=!1,St(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,C(12)):(this.o=0,C(13)),W(this),ft(this)}}}catch{}finally{}};function qi(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ki(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=aa(t,n),s==Ut){e==4&&(t.o=4,C(14),i=!1),nt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==je){t.o=4,C(15),nt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else nt(t.j,t.m,s,null),He(t,s);qi(t)&&s!=Ut&&s!=je&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,C(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yn(e),e.K=!0,C(11))):(nt(t.j,t.m,n,"[Invalid Chunked Response]"),W(t),ft(t))}u.hb=function(){if(this.g){var t=$(this.g),e=this.g.fa();this.C<e.length&&(ne(this),Ki(this,t,e),this.i&&t!=4&&St(this))}};function aa(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ut:(n=Number(e.substring(n,i)),isNaN(n)?je:(i+=1,i+n>e.length?Ut:(e=e.substr(i,n),t.C=i+n,e)))}u.cancel=function(){this.I=!0,W(this)};function St(t){t.V=Date.now()+t.O,Wi(t,t.O)}function Wi(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=At(A(t.gb,t),e)}function ne(t){t.B&&(f.clearTimeout(t.B),t.B=null)}u.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(na(this.j,this.A),this.K!=2&&(vt(),C(17)),W(this),this.o=2,ft(this)):Wi(this,this.V-t)};function ft(t){t.l.G==0||t.I||ms(t.l,t)}function W(t){ne(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,sn(t.T),ji(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function He(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ve(n.h,t))){if(!t.J&&Ve(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)zt(n),ae(n);else break t;mn(n),C(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=At(A(n.cb,n),6e3));if(1>=ns(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else X(n,11)}else if((t.J||n.g==t)&&zt(n),!jt(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const d=l[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const y=l[4];y!=null&&(n.Ca=y,n.j.info("SVER="+n.Ca));const S=l[5];S!=null&&typeof S=="number"&&0<S&&(i=1.5*S,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const w=t.g;if(w){const et=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(et){var r=i.h;r.g||et.indexOf("spdy")==-1&&et.indexOf("quic")==-1&&et.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(un(r,r.h),r.h=null))}if(i.D){const ue=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;ue&&(i.za=ue,m(i.F,i.D,ue))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=ws(i,i.H?i.ka:null,i.V),o.J){is(i.h,o);var a=o,h=i.J;h&&a.setTimeout(h),a.B&&(ne(a),St(a)),i.g=o}else ps(i);0<n.i.length&&ce(n)}else l[0]!="stop"&&l[0]!="close"||X(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?X(n,7):gn(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}vt(4)}catch{}}function ca(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ha(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Xi(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ha(t),i=ca(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function la(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function J(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof J){this.h=e!==void 0?e:t.h,Ht(this,t.j),this.s=t.s,this.g=t.g,Vt(this,t.m),this.l=t.l,e=t.i;var n=new wt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zn(this,n),this.o=t.o}else t&&(n=String(t).match(Yi))?(this.h=!!e,Ht(this,n[1]||"",!0),this.s=lt(n[2]||""),this.g=lt(n[3]||"",!0),Vt(this,n[4]),this.l=lt(n[5]||"",!0),zn(this,n[6]||"",!0),this.o=lt(n[7]||"")):(this.h=!!e,this.i=new wt(null,this.h))}J.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ut(e,Gn,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ut(e,Gn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ut(n,n.charAt(0)=="/"?da:fa,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ut(n,ga)),t.join("")};function F(t){return new J(t)}function Ht(t,e,n){t.j=n?lt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zn(t,e,n){e instanceof wt?(t.i=e,ma(t.i,t.h)):(n||(e=ut(e,pa)),t.i=new wt(e,t.h))}function m(t,e,n){t.i.set(e,n)}function ie(t){return m(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ua),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ua(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gn=/[#\/\?@]/g,fa=/[#\?:]/g,da=/[#\?]/g,pa=/[#\?@]/g,ga=/#/g;function wt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function G(t){t.g||(t.g=new Map,t.h=0,t.i&&la(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}u=wt.prototype;u.add=function(t,e){G(this),this.i=null,t=ot(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ji(t,e){G(t),e=ot(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qi(t,e){return G(t),e=ot(t,e),t.g.has(e)}u.forEach=function(t,e){G(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};u.oa=function(){G(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};u.W=function(t){G(this);let e=[];if(typeof t=="string")Qi(this,t)&&(e=e.concat(this.g.get(ot(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};u.set=function(t,e){return G(this),this.i=null,t=ot(this,t),Qi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};u.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zi(t,e,n){Ji(t,e),0<n.length&&(t.i=null,t.g.set(ot(t,e),Xe(n)),t.h+=n.length)}u.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ot(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ma(t,e){e&&!t.j&&(G(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Ji(this,i),Zi(this,s,n))},t)),t.j=e}var ya=class{constructor(t,e){this.h=t,this.g=e}};function ts(t){this.l=t||va,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var va=10;function es(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ns(t){return t.h?1:t.g?t.g.size:0}function Ve(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function un(t,e){t.g?t.g.add(e):t.h=e}function is(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ts.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ss(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xe(t.i)}function fn(){}fn.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)};fn.prototype.parse=function(t){return f.JSON.parse(t,void 0)};function wa(){this.g=new fn}function Ia(t,e,n){const i=n||"";try{Xi(t,function(s,r){let o=s;bt(s)&&(o=nn(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ea(t,e){const n=new te;if(f.Image){const i=new Image;i.onload=Lt(xt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Lt(xt,n,i,"TestLoadImage: error",!1,e),i.onabort=Lt(xt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Lt(xt,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function xt(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function se(t){this.l=t.ac||null,this.j=t.jb||!1}b(se,cn);se.prototype.g=function(){return new re(this.l,this.j)};se.prototype.i=function(t){return function(){return t}}({});function re(t,e){I.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(re,I);var dn=0;u=re.prototype;u.open=function(t,e){if(this.readyState!=dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,It(this)};u.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dt(this)),this.readyState=dn};u.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,It(this)),this.g&&(this.readyState=3,It(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function rs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}u.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dt(this):It(this),this.readyState==3&&rs(this)}};u.Va=function(t){this.g&&(this.response=this.responseText=t,Dt(this))};u.Ua=function(t){this.g&&(this.response=t,Dt(this))};u.ga=function(){this.g&&Dt(this)};function Dt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,It(t)}u.setRequestHeader=function(t,e){this.v.append(t,e)};u.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};u.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function It(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(re.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ba=f.JSON.parse;function v(t){I.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=os,this.K=this.L=!1}b(v,I);var os="",Ta=/^https?$/i,Aa=["POST","PUT"];u=v.prototype;u.Ka=function(t){this.L=t};u.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fe.g(),this.C=this.u?Vn(this.u):Vn(Fe),this.g.onreadystatechange=A(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){qn(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=f.FormData&&t instanceof f.FormData,!(0<=Ai(Aa,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hs(this),0<this.B&&((this.K=_a(this.g))?(this.g.timeout=this.B,this.g.ontimeout=A(this.qa,this)):this.A=rn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){qn(this,r)}};function _a(t){return gt&&Uo()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}u.qa=function(){typeof We<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,E(this,"timeout"),this.abort(8))};function qn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,as(t),oe(t)}function as(t){t.D||(t.D=!0,E(t,"complete"),E(t,"error"))}u.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,E(this,"complete"),E(this,"abort"),oe(this))};u.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oe(this,!0)),v.X.M.call(this)};u.Ha=function(){this.s||(this.F||this.v||this.l?cs(this):this.fb())};u.fb=function(){cs(this)};function cs(t){if(t.h&&typeof We<"u"&&(!t.C[1]||$(t)!=4||t.aa()!=2)){if(t.v&&$(t)==4)rn(t.Ha,0,t);else if(E(t,"readystatechange"),$(t)==4){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Yi)[1]||null;if(!s&&f.self&&f.self.location){var r=f.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ta.test(s?s.toLowerCase():"")}n=i}if(n)E(t,"complete"),E(t,"success");else{t.m=6;try{var o=2<$(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",as(t)}}finally{oe(t)}}}}function oe(t,e){if(t.g){hs(t);const n=t.g,i=t.C[0]?Ft:null;t.g=null,t.C=null,e||E(t,"ready");try{n.onreadystatechange=i}catch{}}}function hs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function $(t){return t.g?t.g.readyState:0}u.aa=function(){try{return 2<$(this)?this.g.status:-1}catch{return-1}};u.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};u.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ba(e)}};function Kn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case os:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}u.Ea=function(){return this.m};u.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ls(t){let e="";return Je(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function pn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ls(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):m(t,e,n))}function ct(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function us(t){this.Ca=0,this.i=[],this.j=new te,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ct("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ct("baseRetryDelayMs",5e3,t),this.bb=ct("retryDelaySeedMs",1e4,t),this.$a=ct("forwardChannelMaxRetries",2,t),this.ta=ct("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ts(t&&t.concurrentRequestLimit),this.Fa=new wa,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}u=us.prototype;u.ma=8;u.G=1;function gn(t){if(fs(t),t.G==3){var e=t.U++,n=F(t.F);m(n,"SID",t.I),m(n,"RID",e),m(n,"TYPE","terminate"),kt(t,n),e=new Ct(t,t.j,e,void 0),e.K=2,e.v=ie(F(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=Is(e.l,null),e.g.da(e.v)),e.F=Date.now(),St(e)}vs(t)}function ae(t){t.g&&(yn(t),t.g.cancel(),t.g=null)}function fs(t){ae(t),t.u&&(f.clearTimeout(t.u),t.u=null),zt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function ce(t){es(t.h)||t.m||(t.m=!0,Mi(t.Ja,t),t.C=0)}function Ca(t,e){return ns(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=At(A(t.Ja,t,e),ys(t,t.C)),t.C++,!0)}u.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ct(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Di(r),ki(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ds(this,s,e),n=F(this.F),m(n,"RID",t),m(n,"CVER",22),this.D&&m(n,"X-HTTP-Session-Id",this.D),kt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ls(r)))+"&"+e:this.o&&pn(n,this.o,r)),un(this.h,s),this.Ya&&m(n,"TYPE","init"),this.O?(m(n,"$req",e),m(n,"SID","null"),s.Z=!0,Ue(s,n,null)):Ue(s,n,e),this.G=2}}else this.G==3&&(t?Wn(this,t):this.i.length==0||es(this.h)||Wn(this))};function Wn(t,e){var n;e?n=e.m:n=t.U++;const i=F(t.F);m(i,"SID",t.I),m(i,"RID",n),m(i,"AID",t.T),kt(t,i),t.o&&t.s&&pn(i,t.o,t.s),n=new Ct(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ds(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),un(t.h,n),Ue(n,i,e)}function kt(t,e){t.ia&&Je(t.ia,function(n,i){m(e,i,n)}),t.l&&Xi({},function(n,i){m(e,i,n)})}function ds(t,e,n){n=Math.min(t.i.length,n);var i=t.l?A(t.l.Ra,t.l,t):null;t:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let l=s[h].h;const d=s[h].g;if(l-=r,0>l)r=Math.max(0,s[h].h-100),a=!1;else try{Ia(d,o,"req"+l+"_")}catch{i&&i(d)}}if(a){i=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ps(t){t.g||t.u||(t.Z=1,Mi(t.Ia,t),t.A=0)}function mn(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=At(A(t.Ia,t),ys(t,t.A)),t.A++,!0)}u.Ia=function(){if(this.u=null,gs(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=At(A(this.eb,this),t)}};u.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,C(10),ae(this),gs(this))};function yn(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function gs(t){t.g=new Ct(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=F(t.sa);m(e,"RID","rpc"),m(e,"SID",t.I),m(e,"CI",t.L?"0":"1"),m(e,"AID",t.T),m(e,"TYPE","xmlhttp"),kt(t,e),t.o&&t.s&&pn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ie(F(e)),n.s=null,n.P=!0,Gi(n,t)}u.cb=function(){this.v!=null&&(this.v=null,ae(this),mn(this),C(19))};function zt(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function ms(t,e){var n=null;if(t.g==e){zt(t),yn(t),t.g=null;var i=2}else if(Ve(t.h,e))n=e.D,is(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=on(),E(i,new Vi(i,n)),ce(t)}else ps(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Ca(t,e)||i==2&&mn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:X(t,5);break;case 4:X(t,10);break;case 3:X(t,6);break;default:X(t,2)}}}function ys(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function X(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=A(t.kb,t);n||(n=new J("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ht(n,"https"),ie(n)),Ea(n.toString(),i)}else C(2);t.G=0,t.l&&t.l.va(e),vs(t),fs(t)}u.kb=function(t){t?(this.j.info("Successfully pinged google.com"),C(2)):(this.j.info("Failed to ping google.com"),C(1))};function vs(t){if(t.G=0,t.la=[],t.l){const e=ss(t.h);(e.length!=0||t.i.length!=0)&&(Bn(t.la,e),Bn(t.la,t.i),t.h.i.length=0,Xe(t.i),t.i.length=0),t.l.ua()}}function ws(t,e,n){var i=n instanceof J?F(n):new J(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Vt(i,i.m);else{var s=f.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new J(null,void 0);i&&Ht(r,i),e&&(r.g=e),s&&Vt(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&m(i,n,e),m(i,"VER",t.ma),kt(t,i),i}function Is(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new v(new se({jb:!0})):new v(t.ra),e.Ka(t.H),e}function Es(){}u=Es.prototype;u.xa=function(){};u.wa=function(){};u.va=function(){};u.ua=function(){};u.Ra=function(){};function P(t,e){I.call(this),this.g=new us(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jt(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new at(this)}b(P,I);P.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;C(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ws(t,null,t.V),ce(t)};P.prototype.close=function(){gn(this.g)};P.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=nn(t),t=n);e.i.push(new ya(e.ab++,t)),e.G==3&&ce(e)};P.prototype.M=function(){this.g.l=null,delete this.j,gn(this.g),delete this.g,P.X.M.call(this)};function bs(t){hn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}b(bs,hn);function Ts(){ln.call(this),this.status=1}b(Ts,ln);function at(t){this.g=t}b(at,Es);at.prototype.xa=function(){E(this.g,"a")};at.prototype.wa=function(t){E(this.g,new bs(t))};at.prototype.va=function(t){E(this.g,new Ts)};at.prototype.ua=function(){E(this.g,"b")};P.prototype.send=P.prototype.u;P.prototype.open=P.prototype.m;P.prototype.close=P.prototype.close;an.NO_ERROR=0;an.TIMEOUT=8;an.HTTP_ERROR=6;sa.COMPLETE="complete";ra.EventType=_t;_t.OPEN="a";_t.CLOSE="b";_t.ERROR="c";_t.MESSAGE="d";I.prototype.listen=I.prototype.N;v.prototype.listenOnce=v.prototype.O;v.prototype.getLastError=v.prototype.Oa;v.prototype.getLastErrorCode=v.prototype.Ea;v.prototype.getStatus=v.prototype.aa;v.prototype.getResponseJson=v.prototype.Sa;v.prototype.getResponseText=v.prototype.fa;v.prototype.send=v.prototype.da;v.prototype.setWithCredentials=v.prototype.Ka;const Xn="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new qe("@firebase/firestore");function R(t,...e){if(st.logLevel<=g.DEBUG){const n=e.map(wn);st.debug(`Firestore (${Rt}): ${t}`,...n)}}function vn(t,...e){if(st.logLevel<=g.ERROR){const n=e.map(wn);st.error(`Firestore (${Rt}): ${t}`,...n)}}function Sa(t,...e){if(st.logLevel<=g.WARN){const n=e.map(wn);st.warn(`Firestore (${Rt}): ${t}`,...n)}}function wn(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function ze(t,e){t||In()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends V{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Da{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(T.UNAUTHENTICATED))}shutdown(){}}class ka{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ra{constructor(e){this.t=e,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let r=new it;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new it,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=r;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},a=h=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new it)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string"),new As(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new T(e)}}class Oa{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=T.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Na{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Oa(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(T.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class La{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pa{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.T=n.token,new La(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=xa(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function _s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,i,s,r,o,a,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Gt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn,p;(p=Yn||(Yn={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";function Te(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new En(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(t,e){if(vn("AsyncQueue",`${e}: ${t}`),_s(t))return new N(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=T.UNAUTHENTICATED,this.clientId=Ma.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{R("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(R("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Fa(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map;function Ua(t,e,n,i){if(e===!0&&i===!0)throw new N(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":In()}function Va(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(t);throw new N(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ua("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qn(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Da;switch(n.type){case"firstParty":return new Na(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jn.get(e);n&&(R("ComponentProvider","Removing Datastore"),Jn.delete(e),n.terminate())}(this),Promise.resolve()}}function za(t,e,n,i={}){var s;const r=(t=Va(t,Cs))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Sa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=T.MOCK_USER;else{o=pr(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new N(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new T(h)}t._authCredentials=new ka(new As(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ba(this,"async_queue_retry"),this.qc=()=>{const n=Te();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Te();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Te();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new it;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!_s(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw vn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=En.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&In()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class qa extends Cs{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Ga,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wa(this),this._firestoreClient.terminate()}}function Ka(t,e){const n=typeof t=="object"?t:Ei(),i=typeof t=="string"?t:e||"(default)",s=Et(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ur("firestore");r&&za(s,...r)}return s}function Wa(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,h,l){return new $a(o,a,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ja(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Rt=n})(Io),H(new B("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new qa(new Ra(n.getProvider("auth-internal")),new Pa(n.getProvider("app-check-internal")),function(a,h){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gt(a.options.projectId,h)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),M(Xn,"3.10.1",t),M(Xn,"3.10.1","esm2017")})();var Xa="firebase",Ya="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */M(Xa,Ya,"app");const Ss="@firebase/installations",bn="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e4,ks=`w:${bn}`,Rs="FIS_v2",Ja="https://firebaseinstallations.googleapis.com/v1",Qa=60*60*1e3,Za="installations",tc="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Z=new Wt(Za,tc,ec);function Os(t){return t instanceof V&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns({projectId:t}){return`${Ja}/projects/${t}/installations`}function Ls(t){return{token:t.token,requestStatus:2,expiresIn:ic(t.expiresIn),creationTime:Date.now()}}async function Ps(t,e){const i=(await e.json()).error;return Z.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function xs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nc(t,{refreshToken:e}){const n=xs(t);return n.append("Authorization",sc(e)),n}async function Ms(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ic(t){return Number(t.replace("s","000"))}function sc(t){return`${Rs} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Ns(t),s=xs(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Rs,appId:t.appId,sdkVersion:ks},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Ms(()=>fetch(i,a));if(h.ok){const l=await h.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ls(l.authToken)}}else throw await Ps("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=/^[cdef][\w-]{21}$/,Ge="";function cc(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hc(t);return ac.test(n)?n:Ge}catch{return Ge}}function hc(t){return oc(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map;function Fs(t,e){const n=he(t);js(n,e),lc(n,e)}function js(t,e){const n=Bs.get(t);if(n)for(const i of n)i(e)}function lc(t,e){const n=uc();n&&n.postMessage({key:t,fid:e}),fc()}let Y=null;function uc(){return!Y&&"BroadcastChannel"in self&&(Y=new BroadcastChannel("[Firebase] FID Change"),Y.onmessage=t=>{js(t.data.key,t.data.fid)}),Y}function fc(){Bs.size===0&&Y&&(Y.close(),Y=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="firebase-installations-database",pc=1,tt="firebase-installations-store";let Ae=null;function Tn(){return Ae||(Ae=wi(dc,pc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tt)}}})),Ae}async function qt(t,e){const n=he(t),s=(await Tn()).transaction(tt,"readwrite"),r=s.objectStore(tt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Fs(t,e.fid),e}async function Us(t){const e=he(t),i=(await Tn()).transaction(tt,"readwrite");await i.objectStore(tt).delete(e),await i.done}async function le(t,e){const n=he(t),s=(await Tn()).transaction(tt,"readwrite"),r=s.objectStore(tt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Fs(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t){let e;const n=await le(t.appConfig,i=>{const s=gc(i),r=mc(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Ge?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gc(t){const e=t||{fid:cc(),registrationStatus:0};return Hs(e)}function mc(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Z.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=yc(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vc(t)}:{installationEntry:e}}async function yc(t,e){try{const n=await rc(t,e);return qt(t.appConfig,n)}catch(n){throw Os(n)&&n.customData.serverCode===409?await Us(t.appConfig):await qt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vc(t){let e=await Zn(t.appConfig);for(;e.registrationStatus===1;)await $s(100),e=await Zn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await An(t);return i||n}return e}function Zn(t){return le(t,e=>{if(!e)throw Z.create("installation-not-found");return Hs(e)})}function Hs(t){return wc(t)?{fid:t.fid,registrationStatus:0}:t}function wc(t){return t.registrationStatus===1&&t.registrationTime+Ds<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic({appConfig:t,heartbeatServiceProvider:e},n){const i=Ec(t,n),s=nc(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:ks,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Ms(()=>fetch(i,a));if(h.ok){const l=await h.json();return Ls(l)}else throw await Ps("Generate Auth Token",h)}function Ec(t,{fid:e}){return`${Ns(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t,e=!1){let n;const i=await le(t.appConfig,r=>{if(!Vs(r))throw Z.create("not-registered");const o=r.authToken;if(!e&&Ac(o))return r;if(o.requestStatus===1)return n=bc(t,e),r;{if(!navigator.onLine)throw Z.create("app-offline");const a=Cc(r);return n=Tc(t,a),a}});return n?await n:i.authToken}async function bc(t,e){let n=await ti(t.appConfig);for(;n.authToken.requestStatus===1;)await $s(100),n=await ti(t.appConfig);const i=n.authToken;return i.requestStatus===0?_n(t,e):i}function ti(t){return le(t,e=>{if(!Vs(e))throw Z.create("not-registered");const n=e.authToken;return Sc(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Tc(t,e){try{const n=await Ic(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await qt(t.appConfig,i),n}catch(n){if(Os(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Us(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qt(t.appConfig,i)}throw n}}function Vs(t){return t!==void 0&&t.registrationStatus===2}function Ac(t){return t.requestStatus===2&&!_c(t)}function _c(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qa}function Cc(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Sc(t){return t.requestStatus===1&&t.requestTime+Ds<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t){const e=t,{installationEntry:n,registrationPromise:i}=await An(e);return i?i.catch(console.error):_n(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(t,e=!1){const n=t;return await Rc(n),(await _n(n,e)).token}async function Rc(t){const{registrationPromise:e}=await An(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){if(!t||!t.options)throw _e("App Configuration");if(!t.name)throw _e("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _e(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _e(t){return Z.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="installations",Nc="installations-internal",Lc=t=>{const e=t.getProvider("app").getImmediate(),n=Oc(e),i=Et(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Pc=t=>{const e=t.getProvider("app").getImmediate(),n=Et(e,zs).getImmediate();return{getId:()=>Dc(n),getToken:s=>kc(n,s)}};function xc(){H(new B(zs,Lc,"PUBLIC")),H(new B(Nc,Pc,"PRIVATE"))}xc();M(Ss,bn);M(Ss,bn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="analytics",Mc="firebase_id",$c="origin",Bc=60*1e3,Fc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new qe("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},L=new Wt("analytics","Analytics",jc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){if(!t.startsWith(Cn)){const e=L.create("invalid-gtag-resource",{gtagURL:t});return k.warn(e.message),""}return t}function Gs(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Hc(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Vc(t,e){const n=Hc("firebase-js-sdk-policy",{createScriptURL:Uc}),i=document.createElement("script"),s=`${Cn}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function zc(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Gc(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const h=(await Gs(n)).find(l=>l.measurementId===s);h&&await e[h.appId]}}catch(a){k.error(a)}t("config",s,r)}async function qc(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Gs(n);for(const h of o){const l=a.find(y=>y.measurementId===h),d=l&&e[l.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){k.error(r)}}function Kc(t,e,n,i){async function s(r,o,a){try{r==="event"?await qc(t,e,n,o,a):r==="config"?await Gc(t,e,n,i,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(h){k.error(h)}}return s}function Wc(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Kc(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Xc(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cn)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=30,Jc=1e3;class Qc{constructor(e={},n=Jc){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qs=new Qc;function Zc(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function th(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Zc(i)},r=Fc.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const h=await o.json();!((e=h.error)===null||e===void 0)&&e.message&&(a=h.error.message)}catch{}throw L.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eh(t,e=qs,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw L.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw L.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sh;return setTimeout(async()=>{a.abort()},n!==void 0?n:Bc),Ks({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ks(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=qs){var r;const{appId:o,measurementId:a}=t;try{await nh(i,e)}catch(h){if(a)return k.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await th(t);return s.deleteThrottleMetadata(o),h}catch(h){const l=h;if(!ih(l)){if(s.deleteThrottleMetadata(o),a)return k.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw h}const d=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Rn(n,s.intervalMillis,Yc):Rn(n,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,y),k.debug(`Calling attemptFetch again in ${d} millis`),Ks(t,y,i,s)}}function nh(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(L.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ih(t){if(!(t instanceof V)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rh(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(){if(pi())try{await gi()}catch(t){return k.warn(L.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return k.warn(L.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ah(t,e,n,i,s,r,o){var a;const h=eh(t);h.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&k.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>k.error(w)),e.push(h);const l=oh().then(w=>{if(w)return i.getId()}),[d,y]=await Promise.all([h,l]);Xc(r)||Vc(r,d.measurementId),s("js",new Date);const S=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return S[$c]="firebase",S.update=!0,y!=null&&(S[Mc]=y),s("config",d.measurementId,S),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.app=e}_delete(){return delete dt[this.app.options.appId],Promise.resolve()}}let dt={},ei=[];const ni={};let Ce="dataLayer",hh="gtag",ii,Ws,si=!1;function lh(){const t=[];if(gr()&&t.push("This is a browser extension environment."),mr()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=L.create("invalid-analytics-context",{errorInfo:e});k.warn(n.message)}}function uh(t,e,n){lh();const i=t.options.appId;if(!i)throw L.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)k.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw L.create("no-api-key");if(dt[i]!=null)throw L.create("already-exists",{id:i});if(!si){zc(Ce);const{wrappedGtag:r,gtagCore:o}=Wc(dt,ei,ni,Ce,hh);Ws=r,ii=o,si=!0}return dt[i]=ah(t,ei,ni,e,ii,Ce,n),new ch(t)}function fh(t=Ei()){t=mi(t);const e=Et(t,Kt);return e.isInitialized()?e.getImmediate():dh(t)}function dh(t,e={}){const n=Et(t,Kt);if(n.isInitialized()){const s=n.getImmediate();if($t(e,n.getOptions()))return s;throw L.create("already-initialized")}return n.initialize({options:e})}function ph(t,e,n,i){t=mi(t),rh(Ws,dt[t.app.options.appId],e,n,i).catch(s=>k.error(s))}const ri="@firebase/analytics",oi="0.9.5";function gh(){H(new B(Kt,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return uh(i,s,n)},"PUBLIC")),H(new B("analytics-internal",t,"PRIVATE")),M(ri,oi),M(ri,oi,"esm2017");function t(e){try{const n=e.getProvider(Kt).getImmediate();return{logEvent:(i,s,r)=>ph(n,i,s,r)}}catch(n){throw L.create("interop-component-reg-failed",{reason:n})}}}gh();const mh={apiKey:"AIzaSyA05P1xTD86r4FSacfzaRiDv7hwqYFaNMo",authDomain:"my-kino-cms.firebaseapp.com",projectId:"my-kino-cms",storageBucket:"my-kino-cms.appspot.com",messagingSenderId:"18464466854",appId:"1:18464466854:web:80be9540c51cfc65be9167",measurementId:"G-2Y2KWPNMH9"},yh=Ii(mh);fh(yh);Ka();const vh={},wh={class:"wrapper"},Ih=c("nav",{class:"main-header navbar navbar-expand navbar-white navbar-light"},[c("ul",{class:"navbar-nav"},[c("li",{class:"nav-item"},[c("a",{class:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},[c("i",{class:"fas fa-bars"})])]),c("li",{class:"nav-item d-none d-sm-inline-block"},[c("a",{href:"index3.html",class:"nav-link"},"Home")]),c("li",{class:"nav-item d-none d-sm-inline-block"},[c("a",{href:"#",class:"nav-link"},"Contact")]),c("li",{class:"nav-item dropdown"},[c("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Help "),c("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown2"},[c("a",{class:"dropdown-item",href:"#"},"FAQ"),c("a",{class:"dropdown-item",href:"#"},"Support"),c("div",{class:"dropdown-divider"}),c("a",{class:"dropdown-item",href:"#"},"Contact")])])]),c("form",{class:"form-inline ml-3"},[c("div",{class:"input-group input-group-sm"},[c("input",{class:"form-control form-control-navbar",type:"search",placeholder:"Search","aria-label":"Search"}),c("div",{class:"input-group-append"},[c("button",{class:"btn btn-navbar",type:"submit"},[c("i",{class:"fas fa-search"})])])])]),c("ul",{class:"navbar-nav ml-auto"},[c("li",{class:"nav-item dropdown"},[c("a",{class:"nav-link","data-toggle":"dropdown",href:"#"},[c("i",{class:"far fa-comments"}),c("span",{class:"badge badge-danger navbar-badge"},"3")]),c("div",{class:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[c("a",{href:"#",class:"dropdown-item"},[c("div",{class:"media"},[c("div",{class:"media-body"},[c("h3",{class:"dropdown-item-title"},[D(" Brad Diesel "),c("span",{class:"float-right text-sm text-danger"},[c("i",{class:"fas fa-star"})])]),c("p",{class:"text-sm"},"Call me whenever you can..."),c("p",{class:"text-sm text-muted"},[c("i",{class:"far fa-clock mr-1"}),D(" 4 Hours Ago")])])])]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("div",{class:"media"},[c("div",{class:"media-body"},[c("h3",{class:"dropdown-item-title"},[D(" John Pierce "),c("span",{class:"float-right text-sm text-muted"},[c("i",{class:"fas fa-star"})])]),c("p",{class:"text-sm"},"I got your message bro"),c("p",{class:"text-sm text-muted"},[c("i",{class:"far fa-clock mr-1"}),D(" 4 Hours Ago")])])])]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("div",{class:"media"},[c("div",{class:"media-body"},[c("h3",{class:"dropdown-item-title"},[D(" Nora Silvester "),c("span",{class:"float-right text-sm text-warning"},[c("i",{class:"fas fa-star"})])]),c("p",{class:"text-sm"},"The subject goes here"),c("p",{class:"text-sm text-muted"},[c("i",{class:"far fa-clock mr-1"}),D(" 4 Hours Ago")])])])]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item dropdown-footer"},"See All Messages")])]),c("li",{class:"nav-item dropdown"},[c("a",{class:"nav-link","data-toggle":"dropdown",href:"#"},[c("i",{class:"far fa-bell"}),c("span",{class:"badge badge-warning navbar-badge"},"15")]),c("div",{class:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[c("span",{class:"dropdown-header"},"15 Notifications"),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("i",{class:"fas fa-envelope mr-2"}),D(" 4 new messages "),c("span",{class:"float-right text-muted text-sm"},"3 mins")]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("i",{class:"fas fa-users mr-2"}),D(" 8 friend requests "),c("span",{class:"float-right text-muted text-sm"},"12 hours")]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("i",{class:"fas fa-file mr-2"}),D(" 3 new reports "),c("span",{class:"float-right text-muted text-sm"},"2 days")]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item dropdown-footer"},"See All Notifications")])]),c("li",{class:"nav-item"},[c("a",{class:"nav-link","data-widget":"control-sidebar","data-slide":"true",href:"#",role:"button"},[c("i",{class:"fas fa-th-large"})])])])],-1),Eh=c("aside",{class:"main-sidebar sidebar-dark-primary elevation-4"},[c("a",{href:"index3.html",class:"brand-link"},[c("span",{class:"brand-text font-weight-light"},"AdminLTE 3")]),c("div",{class:"sidebar"},[c("div",{class:"user-panel mt-3 pb-3 mb-3 d-flex"},[c("div",{class:"image"}),c("div",{class:"info"},[c("a",{href:"#",class:"d-block"},"Alexander Pierce")])]),c("nav",{class:"mt-2"},[c("ul",{class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu"},[c("li",{class:"nav-item menu-open"},[c("a",{href:"#",class:"nav-link active"},[c("i",{class:"nav-icon fas fa-tachometer-alt"}),c("p",null,[D(" Starter Pages "),c("i",{class:"right fas fa-angle-left"})])]),c("ul",{class:"nav nav-treeview"},[c("li",{class:"nav-item"},[c("a",{href:"#",class:"nav-link active"},[c("i",{class:"far fa-circle nav-icon"}),c("p",null,"Active Page")])]),c("li",{class:"nav-item"},[c("a",{href:"#",class:"nav-link"},[c("i",{class:"far fa-circle nav-icon"}),c("p",null,"Inactive Page")])])])]),c("li",{class:"nav-item"},[c("a",{href:"#",class:"nav-link"},[c("i",{class:"nav-icon fas fa-th"}),c("p",null,[D(" Simple Link "),c("span",{class:"right badge badge-danger"},"New")])])])])])])],-1);function bh(t,e){return K(),ht("div",wh,[Ih,Eh,ai(t.$slots,"default")])}const Th=li(vh,[["render",bh]]),Ah={__name:"LayoutFrame",setup(t){const e=Th;return(n,i)=>(K(),ci(Ys(hi(e)),null,{default:Se(()=>[ai(n.$slots,"default")]),_:3}))}};const Xs=t=>(tr("data-v-575f4a07"),t=t(),er(),t),_h={class:"home-page"},Ch=Xs(()=>c("h1",null," Home page ",-1)),Sh=Xs(()=>c("br",null,null,-1)),Dh={__name:"HomePage",setup(t){Ot(""),Ot("");const e=Ot([]),n=Ot([]);return Js(()=>{}),(i,s)=>(K(),ci(Ah,null,{default:Se(()=>[c("div",_h,[Ch,Qs(hi(Zs),{to:"/about-cinema"},{default:Se(()=>[D("About")]),_:1}),(K(!0),ht(Dn,null,Sn(e.value,r=>(K(),ht("p",{key:r.name},[D(" Country: "+Nt(r.name),1),Sh,D(" Capital: "+Nt(r.capital),1)]))),128)),(K(!0),ht(Dn,null,Sn(n.value,r=>(K(),ht("p",{key:r.firstName},Nt(r.firstName)+" "+Nt(r.lastName),1))),128))])]),_:1}))}},Oh=li(Dh,[["__scopeId","data-v-575f4a07"]]);export{Oh as default};
