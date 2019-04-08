comp=(a, b)=>{
if(!a || !b) return false;
const asd = [...a].sort((a, b) => a - b).map(n => Math.pow(n, 2))
return JSON.stringify(asd) === JSON.stringify([...b].sort((a, b) => a - b))
}
