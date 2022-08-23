let coins=[1,2,5]
let sortedcoins=coins.sort((a,b) => b-a)
let sum=13
let i=0
while(sum!=0){
    if(sum>=coins[i]){
        sum-=coins[i]
        console.log(coins[i])
    }
        else{
        i++
}
}
