export const renderComponent=(component:HTMLDivElement,id:string)=>{
const  selectedItem=document.getElementById(id) as HTMLDivElement
selectedItem.append(component)
}