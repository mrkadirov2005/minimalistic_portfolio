const reorderArray=(arr)=>{
    const newOBJ=[]
    for(let i =0;i<arr.length;i++){
        newOBJ.unshift(arr[i])
    }
    return newOBJ
}
export default reorderArray