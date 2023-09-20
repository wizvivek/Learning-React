function customRender(objname,container)
{
    
    const element=document.createElement(objname.type)
    for(prop in objname.properties)
    {
        element.setAttribute(prop,objname.properties[prop])
    }
    element.innerHTML=objname.text;
    container.appendChild(element);
}

const objname={
    type: 'a',
    properties:{
        href:"http://google.com",
        target:"_blank"
    },
    text:"click here to go to google"
}
const container=document.querySelector("#root")
customRender(objname,container)