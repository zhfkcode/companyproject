export function formate(val){
    if(!val){return ''}
    let year = val.getFullYear();
    let month = val.getMonth() +1;
    let day = val.getDate()
    return year+"-"+month+"-"+day
}