# 2. Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,
#   a) aldığı tüm sayı parametrelerinin değerini 1 arttıracak,
#   b) boolean dönüş değerini tersine çevirecek (True dönüyor ise False, False dönüyor ise True yapacak şekilde)
# bir decorator yazalım. (Not: Belki de mod_batch fonksiyonu yanlış implemente edilmiştir...
#  Bu durumda öncelikle onun beklenen çıktıyı verecek şekilde düzenlenmesi gerekir. :))

def my_awesome_decorator(fun):
  def wrapped(*args):
    return fun(*args)
  return wrapped

#mod_batch fixed.
@my_awesome_decorator 
def mod_batch(*numbers):
    return all([number%3 == 0 for number in numbers])  #return all([True for number in numbers if number % 3 == 0]), oldschool isn't always cool, is it ?
    
print(mod_batch(1,2,3)) 

##increment.
@my_awesome_decorator
def increment_like_crazy(x=1, *values): #increment by x. default:1
    return [value+x for value in values] ## add x value for every value in the list.

print(increment_like_crazy(1,2,3))

##opposition
@my_awesome_decorator
def opposite_value(*booleans):
    return [not booley for booley in booleans] #say black, it'll will tell you how white it is.

print(opposite_value(True,False,False,True))


