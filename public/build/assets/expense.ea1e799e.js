var w=Object.defineProperty;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(p,c,a)=>c in p?w(p,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[c]=a,x=(p,c)=>{for(var a in c||(c={}))y.call(c,a)&&f(p,a,c[a]);if(u)for(var a of u(c))F.call(c,a)&&f(p,a,c[a]);return p};import{I as S,a as d,d as v}from"./vendor.d12b5734.js";import{h as o,s as m,u as h}from"./main.465728e1.js";var E={expense_category_id:null,expense_date:S().format("YYYY-MM-DD"),amount:100,notes:"",attachment_receipt:null,customer_id:"",currency_id:"",payment_method_id:"",receiptFiles:[],customFields:[],fields:[],in_use:!1,selectedCurrency:null};const I=(p=!1)=>{const c=p?window.pinia.defineStore:v,{global:a}=window.i18n;return c({id:"expense",state:()=>({expenses:[],totalExpenses:0,selectAllField:!1,selectedExpenses:[],paymentModes:[],showExchangeRate:!1,currentExpense:x({},E)}),getters:{getCurrentExpense:t=>t.currentExpense,getSelectedExpenses:t=>t.selectedExpenses},actions:{resetCurrentExpenseData(){this.currentExpense=x({},E)},fetchExpenses(t){return new Promise((s,i)=>{d.get("/api/v1/expenses",{params:t}).then(e=>{this.expenses=e.data.data,this.totalExpenses=e.data.meta.expense_total_count,s(e)}).catch(e=>{o(e),i(e)})})},fetchExpense(t){return new Promise((s,i)=>{d.get(`/api/v1/expenses/${t}`).then(e=>{e.data&&(Object.assign(this.currentExpense,e.data.data),this.currentExpense.selectedCurrency=e.data.data.currency,this.currentExpense.attachment_receipt=null,e.data.data.attachment_receipt_url?m.isImageFile(e.data.data.attachment_receipt_meta.mime_type)?this.currentExpense.receiptFiles=[{image:`/reports/expenses/${t}/receipt?${e.data.data.attachment_receipt_meta.uuid}`}]:this.currentExpense.receiptFiles=[{type:"document",name:e.data.data.attachment_receipt_meta.file_name}]:this.currentExpense.receiptFiles=[]),s(e)}).catch(e=>{o(e),i(e)})})},addExpense(t){const s=m.toFormData(t);return new Promise((i,e)=>{d.post("/api/v1/expenses",s).then(n=>{this.expenses.push(n.data),h().showNotification({type:"success",message:a.t("expenses.created_message")}),i(n)}).catch(n=>{o(n),e(n)})})},updateExpense({id:t,data:s,isAttachmentReceiptRemoved:i}){const e=h(),n=m.toFormData(s);return n.append("_method","PUT"),n.append("is_attachment_receipt_removed",i),new Promise(l=>{d.post(`/api/v1/expenses/${t}`,n).then(r=>{let _=this.expenses.findIndex(g=>g.id===r.data.id);this.expenses[_]=s.expense,e.showNotification({type:"success",message:a.t("expenses.updated_message")}),l(r)})}).catch(l=>{o(l),reject(l)})},setSelectAllState(t){this.selectAllField=t},selectExpense(t){this.selectedExpenses=t,this.selectedExpenses.length===this.expenses.length?this.selectAllField=!0:this.selectAllField=!1},selectAllExpenses(t){if(this.selectedExpenses.length===this.expenses.length)this.selectedExpenses=[],this.selectAllField=!1;else{let s=this.expenses.map(i=>i.id);this.selectedExpenses=s,this.selectAllField=!0}},deleteExpense(t){const s=h();return new Promise((i,e)=>{d.post("/api/v1/expenses/delete",t).then(n=>{let l=this.expenses.findIndex(r=>r.id===t);this.expenses.splice(l,1),s.showNotification({type:"success",message:a.tc("expenses.deleted_message",1)}),i(n)}).catch(n=>{o(n),e(n)})})},deleteMultipleExpenses(){const t=h();return new Promise((s,i)=>{d.post("/api/v1/expenses/delete",{ids:this.selectedExpenses}).then(e=>{this.selectedExpenses.forEach(n=>{let l=this.expenses.findIndex(r=>r.id===n.id);this.expenses.splice(l,1)}),t.showNotification({type:"success",message:a.tc("expenses.deleted_message",2)}),s(e)}).catch(e=>{o(e),i(e)})})},fetchPaymentModes(t){return new Promise((s,i)=>{d.get("/api/v1/payment-methods",{params:t}).then(e=>{this.paymentModes=e.data.data,s(e)}).catch(e=>{o(e),i(e)})})}}})()};export{I as u};
