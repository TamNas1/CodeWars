function domainName(url){
var domain = url.replace('http://','').replace('www.','').replace('https://','').split(/[/?#]/)[0];
var i = domain.indexOf('.');
domain=domain.slice(0,i);
return domain;
}
