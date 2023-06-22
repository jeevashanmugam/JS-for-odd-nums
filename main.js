let a = 20;
sum = 0
document.write( "The odd numbers are : " )
for (i = 1; i <= a; i++) {
    
    if (i % 2 !== 0) {

        document.write( i +" ")
        sum = sum+i
    }
}
document.write("<br> The Sum of odd Natural Number upto 10 terms : "+sum)




