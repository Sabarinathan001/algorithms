let a=['a','b','c','d','e','f','g','h']
let count=1
let n=a.length
let i=0
let temp=0
while(temp<n-1){
     if(count%4==0 || count%10==4)
        a[i]="-"
     if((n)==i)
        i=0;
    else
        i++;
count++
console.log(a)
temp = a.filter(x => x=='-').length
}
a.forEach(answer)
function answer(x){
    if(x!='-'){
        console.log(x);
    }
}


