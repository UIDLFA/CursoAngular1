export function* getDias(){
    for(let i = 0;i<31;i++){
        yield i+1;
    }
}