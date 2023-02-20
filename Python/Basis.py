
##############
# DATA TYPES
##############

# Placeholders
from pickle import FALSE


sent = 'hola %s %s'
# Lists
array = ['daniel',2,3,'mario']
array.append('siete');  #ADD
del array[1];           #DELETE
len(array);             #LENGHT       
# Dictionaries
linkList = {"Mario":    12,
            "Juan":     13,
            "Denise":   10}
# Tuples
tuple = (1,2,3,4)   

print (sent%('Daniel','Gonzalez'))      #PRINT WITH PLACEHOLDERS
print (array[0:4])                      #PRINT RANGE
print (len(linkList))
print (linkList["Mario"])

##############
# CONDITIONALS
##############

if(3 < 5 and 4 < 8):
    print('3 is less than 5 and 4 is less than 8')
if(3 > 5 or 5 > 10):
    print ('3 is greater than 5 or 5 is greater than 10')
elif(False):
    print('it is true')
else:
    print('3 is not greater than 5')

##############
# LOOPS
##############

for item in array:
    print(item)
for i in range(0,10):
    print(i)
for i in range (0,10,2):        # ADD DIFFERENT INCREMENT
    print(i)

c = 0 

while c < 5:
    print(c)
    c += 1

##############
# ERRORS
##############

try:
    if 5 > link:
        print('hello')
except:
    print('there is something wrong')

##############
# FUNCTIONS
##############

def myFunction(name):
    print('Hola ' + name + '. Eres un careverg!')

myFunction('Erick')

##############
# BUILT IN FUNCTIONS
##############

# DIR
#Show list of available functions for data type
print(dir(array[0]))
# HELP
# Shows additional information about functions
print(help(array[0].split))
# Data converters
a = 1.222
print(str(a)+' hola bebe')
print(int(a))
print(float(a))

##############
# OBJECT ORIENTATED PROGRAMMING
##############

class Person ():
    def __init__ (self,name,age):
        self.name = name
        self.age = age
    def getName (self):
        print(self.name)
    def getAge(self):
        print(self.age)
    def whatClass(self):
        print('this is the parent class')

p1 = Person('Mario','12')
print("Hi, my name is " + p1.name + " and I am " + p1.age)

# INHERITANCE

class Child (Person):
    def __init__(self):
        print('this is the child class')

c = Child()
c.whatClass()