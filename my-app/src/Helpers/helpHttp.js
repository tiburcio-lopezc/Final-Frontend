
export const helpHttp=()=>{
    const customFetch=(endpoint,options)=>{
        const defaultheader={
        accept:"application/json"
        }
        const controller=new AbortController();
        options.signal=controller.signal;
        options.method=options.method || "GET";
        options.headers = options.headers ? {...defaultheader,...options.headers}: defaultheader;
        options.body = JSON.stringify(options.body) || false;
        if(!options.body){
            delete options.body
        }
        
        setTimeout(() => {controller.abort()}, 3000);
        return fetch(endpoint,options).then(res=>
            {console.log(res);if (res.ok){ 
                return res.json();
            }else{
                Promise.reject({
                    err:true,
                    status:res.status|| "00",
                    statusText:res.statusText || "Ocurrio un error",
    
                })
            } }).catch(err=>err);
}

const get=(url,options={})=>{
      return customFetch(url,options)
}

const post=(url,options={})=>{
    options.method="Post";
    return customFetch(url,options);
}

const put=(url,options={})=>{
    options.method="Put";
    return customFetch(url,options);
}

const del=(url,options={})=>{
    options.method="Delete";
    return customFetch(url,options);
}



return {
        get , post , put , del 
}

}

