let board = [[ 0, 0, 0, 0 ],
             [ 0, 0, 0, 0 ],
             [ 0, 0, 0, 0 ],
             [ 0, 0, 0, 0 ]];
let queens = 4
function Is_attack(i,j){
    for(let k=0;k<queens;++k){
        if(board[i][k]==1 || board[k][j]==1){
            return false;
        }
    }
    for(let k=0;k<queens;++k){
        for(let l=0;l<queens;++l){
            if((k+l==i+j) || (k-l==i-j)){
                if(board[k][l]==1){
                    return false;
                }
            }
        }
    }
    return true;
}
function N_Queen(n){
    if(n==0){
        return true;
    }
    for(let i=0;i<queens;++i){
        for(let j=0;j<queens;++j){
            if(Is_attack(i,j) && board[i][j]!=1){
                board[i][j]=1;
                if(N_Queen(n-1)==true){
                    return true;
                }
                board[i][j]=0;
            }
        }
    }
