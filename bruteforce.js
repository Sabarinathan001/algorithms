    const combinations=[]
    function CombinationRepetitionUtil(chosen, arr,index , r , start , end)
    {
        if (index == r) {
            const temp = []
            for (var i = 0; i < r; i++) {
                temp.push(arr[chosen[i]]);
            }
            let sum1=0;
            for(var i1=0;i1<temp.length;i1++){
                sum1+=temp[i1];
            }
            if(sum1==amount){
                combinations.push(temp)
            }
            return;
        
        }
 
        for (var i = start; i <= end; i++) {
            chosen[index] = i;
            CombinationRepetitionUtil(chosen, arr, index + 1,
                    r, i, end);
        }
        return;
    }
 
    function CombinationRepetition(arr , n , r)
    {
        var chosen = Array.from({length: (r + 1)}, (_, i) => 0);
        CombinationRepetitionUtil(chosen, arr, 0, r, 0, n - 1);
    }
 
var coins = [1, 2, 5];
var n = coins.length;
var amount = 11
for(let i=1;i<=amount;i++){
    CombinationRepetition(coins, n, i);
}
console.log(combinations[0])
