
# 1. Parametre olarak verilen l rakamdan (basamak sayısı) oluşan,
#  yine parametre olarak verilen n adet rastgele sayı üreten bir generator yazalım.
#   Daha önce üretilen bir sayının tekrar üretilmemesini bekliyoruz. Fonksiyonun signature'ı: 
#   random_number_generator(n, l=6)

import random 
import math
def random_number_generator(n,l=6): 
    if(l == 1): #if l is equal to l, then bring first value as 0, exp l = 1, 0,1,2,3,4,5,6,7,8,9  then last will be 10-1, thus 9.
        first = 0
    else:
        first = int(("1" + "0"*(l-1))) #exp: for l:10,  first is equal to "1"+ 000000000 (nine zeros), thus 10 digits.
    
    last = (first*10) - 1 #last will be 1 lower than the max val, exp: for l:3, first is: "1" + "00" and last is 100*10 - 1, thus: 999.
    
    random_numbers = []

    for i in range(n): # for n times  create l digit numbers
        number = random.randint(first,last)
        if(number not in random_numbers): #if the value exists in the list, then continue.
            random_numbers.append(number)
        else:
            continue
    return random_numbers




rands = random_number_generator(2,10)
print(rands)


