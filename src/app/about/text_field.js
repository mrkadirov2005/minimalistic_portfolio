export const setText=(count=1)=>{
    const list=["A 19 year old Software Engineer","A student of MU university","Holder of IELTS 7+","Holder of international IT certificates","Front-end developer","backend_developer","full_stack"]
    const target=document.getElementById("classic")
    console.log(count,list[count])
    target.innerHTML=list[count]
}