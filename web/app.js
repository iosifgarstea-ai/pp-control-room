async function loadCSV(path){
  const r = await fetch(path);
  const t = await r.text();
  const [h,...rows]=t.trim().split(/\r?\n/);
  const headers=h.split(',');
  return rows.map(line=>{
    const cols=[]; let cur='',q=false;
    for(let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"') q=!q;
      else if(ch===',' && !q){cols.push(cur);cur='';}
      else cur+=ch;
    }
    cols.push(cur);
    const obj={}; headers.forEach((k,i)=>obj[k]=cols[i]??''); return obj;
  });
}
function byId(id){return document.getElementById(id)}
function badge(p){const c=(p||'C').toLowerCase();return `<span class="badge ${c}">${p||'C'}</span>`}
