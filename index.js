import soap from 'soap';


export default {

  output : [],
  appended : [],
  seperator:'\n',
  tab:'\t',

  async createClass(name,data,seperator,tab){
    if(this.appended.indexOf(name) < 0) {
      let o;
      if(name.substr(-2)=='[]'){
        o=`class ${name.replace('[]','')} {${seperator}`;
      }else{
        o=`class ${name} {${seperator}`;
      }
      for(let index in data){
        const d = data[index];
        if(typeof d === typeof {}) {
          await this.createClass(index,d,seperator,tab);
        }
        if(['targetNSAlias','targetNamespace'].indexOf(index) < 0) {
          if(index.substr(-2)=='[]'){
            o+=`${tab}${index.replace('[]','')};${seperator}`;
          }else{
            o+=`${tab}${index};${seperator}`;
          }
        }
      }
      o+=`}${seperator}${seperator}`;
      this.output.push(o);
      this.appended.push(name);
    }
  },

  async create(url,serviceName){
    let mainClass = `class ${serviceName} {${this.seperator}`;
    mainClass +=`${this.tab}async init(url = '${url}'){${this.seperator}`;
    mainClass +=`${this.tab}${this.tab}return this.soapService = soap.createClientAsync(url);${this.seperator}`;
    mainClass +=`${this.tab}}${this.seperator}${this.seperator}`;
    

    return soap.createClientAsync(url)
    .then((client) => {
      return client.describe();
    }).then((res) => {
      for(let service in res){
        for(let port in res[service]){
          return res[service][port];
        }
      }
    }).then(async (data) => {

      for(let funcName in data){
        let obj=data[funcName].input;
        mainClass +=`${this.tab} ${funcName}(${funcName}){${this.seperator}`;
        mainClass +=`${this.tab}${this.tab}return this.soapService.${funcName}Async(${funcName});${this.seperator}`;
        mainClass +=`${this.tab}}${this.seperator}${this.seperator}`;

        await this.createClass(funcName,obj,this.seperator,this.tab);
      }
      mainClass+='}';
      return "const soap = require('soap');" +
      this.seperator +
      this.output.join('') +
      mainClass +
      `${this.seperator}${this.seperator}export {${this.seperator}${serviceName},${this.seperator}${this.appended.join(`,${this.seperator}`)} }`;
    });
  }
};