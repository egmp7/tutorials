import sqlite3

def init():
    # use if need a temporal databse
    #conn = sqlite3.connect(':memory:')

    conn = sqlite3.connect('customer.db')

    # Create cursor
    c = conn.cursor()

    # Functions Here!

    selectOr(c)
    print('command executed succesfully...')

    # Commit our command
    conn.commit()

    # Close our connection
    conn.close()


# CREATE A TABLE
def createTable(c):
    c.execute(""" CREATE TABLE customers (
    first_name text,
    last_name text,
    email text
    )""")

    # DATATYPES
    # null
    # integer
    # real   (Decimal)
    # text
    # blob  (mp3,images)

# INSERT VALUES
def insertInTable(c):
    c.execute("INSERT INTO customers VALUES('Mario','Arias','marioarias@gmail.com')")

# INSERT MANY VALUES
def insertManyInTable(c):

    many_customers = [
                        ('Wesa','Bron','wes@brown.com'),
                        ('Stem','Brewa','steph@kuewa.com'),
                        ('Dan','Pas','dan@pas.com')
                    ]
    c.executemany("INSERT INTO customers VALUES(?,?,?)", many_customers)

# SELECT Query The Database
def fetchItems(c):
    c.execute("SELECT rowid, * FROM customers")
    #print(c.fetchall())
    #print(c.fetchone()[0])
    #print(c.fetchmany(3))
    
    items = c.fetchall()

    print("NAME\t\t\tEMAIL")
    for i in items:
        #print (i[0], '\t', i[1], '\t\t', i[2])
        print(i)   

# SELECT Query Database with WHERE
def fetchItemsWhere(c): 

    c.execute("SELECT * FROM customers WHERE last_name LIKE 'Br%'")
    
    items = c.fetchall()

    for i in items:
        print(i)

# SELECT ORDER BY
def fetchOrderBy(c): 

    c.execute("SELECT rowid, * FROM customers ORDER BY first_name DESC")
    
    items = c.fetchall()

    for i in items:
        print(i)
    
# UPDATE Records

def update(c):
    c.execute(""" 
                UPDATE customers SET first_name = 'Posum'
                WHERE rowid = 1
    
    """)

# OR/AND

def selectOr(c):
    c.execute("SELECT rowid, * FROM customers WHERE last_name LIKE 'Br%' OR rowid =2")
    
    items = c.fetchall()

    for i in items:
        print(i)

# DELETE Record

def delete(c):
    c.execute("DELETE from customers WHERE rowid = 6")

init()

