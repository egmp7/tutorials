# Entity relationship diagrams and junction tables

## Database Design

### Table Book
**Primary key:** id
**Foreign key:** Publisher_id

| id | name          | price  | publisher_id |
| -- | ------------- | ------ | ------------ |
| 1  | Database book | 20.25  | 1            |
| 2  | Node.js book  | 34.67  | 2            |
| 2  | Express book  | 70.67  | 3            |

### Publisher Table
**Primary key:** id

| id | name     | address  | website |
| -- | -------- | -------- | ------- |
| 1  | McGill   | random1  | www1    |
| 2  | Oxford   | random2  | www2    |
| 2  | Camb     | random3  | www3    |

## Designing a relational database

When you are designing a database, the first decision to make is which tables are the building blocks of the relational database. In order to decide this, think about the purpose of the database. You are usually provided with a set of functional requirements when you are assigned to design a database, although in some cases you are required to gather the requirements yourself.

Then divide the information into entities such as customers, products, students, university, and professors and then design a table for each entity. Decide what information you want to store in each table. This will help you to identify columns or fields in each table. To avoid duplicate information, I locate each table to only one business concept or theme. Make sure data stored in your database is complete and accurate

Then decide about your primary case. Each table needs a primary key as a unique identifier for each row. Next, model relations between tables by adding foreign keys if required. Then think about relationship cardinalities. This means that you need to decide the type of the association or relations between tables

1. Identify entities or tables
    1. What is the purpose of the database. **Start from requirement list**
    2. Identify properties (columns or fields) of each table.
    3. Decide on data types for each field.

2. Decide on primary key
3. Decide on relationships between tables and foreign keys
4. Identify relationship cardinalities
5. Refine database design 

## Entity relationship diagrams (ER diagram)

An ER diagram is a graphical representation displaying entities in a database and the relations between them.

There are four types of relationship cardinalities in an entity relationship diagram: optional-one where the line is interrupted by a circle and a vertical line. Optional-many where the line is again interrupted by a circle followed by a backward facing arrowhead. Mandatory-one, where the line is crossed by two vertical lines and finally, mandatory-many where the line is crossed by one vertical line followed by the backwards-facing arrowhead again


```
 - Optional-one  --------------o-|-
 - Optional-many --------------o-<-
 - Mandatory-one --------------|-|-
 - Mandatory-many -------------|-<-
```

### Mandatory-one & Optional Many

You can see two entities: book and publisher and a line showing the link between the two. A book is published by the publisher, and the publisher publishes a book.

Each book ID is published by mandatory-one publisher. That means each instance of book entity relates to one and only one instance of publisher entity, or in other words, each row in book table relates to one and only one role in publisher table.

At the other end of the line, we can see that each publisher, publishes optional-many books. Optional-many means it may publish zero to many books. This means that each instance of publisher entity can relate to zero to many instances of publisher entity, or in other words, each row in publisher table can relate to zero to many rows in book table

```
// diagram:
       Published by
(Book)->o--------------------||-(Publisher)
                      Publishes
```
### Mandatory many & Optional many

There is a food table for all the menu items and an order table. Each food can be in zero or many orders. This is optional-many cardinality. On the other hand, each order contains at least one or many foods. This is mandatory many cardinality. So we can say there is a many-to-many association between their food and order tables

```
// diagram:
       is in
(Food)->|--------------------o<-(Order)
                        Request
```

Unfortunately, there's a problem with many-to-many associations. The problem is that when deciding on the number of columns in a table, it is not clear how many columns should be allocated to foreign keys. In the food and order tables example, how many food IDs in the order table should be selected as foreign keys to the ID column in the food table?

#### Food Table

| id | name     | price |
| -- | -------- | ----- | 
| 1  | random 1 | 6.35  | 
| 2  | random 2 | 2.76  | 
| 3  | random 3 | 2.00  | 

#### Order Table

| id | eat_in | food_id | food_id2 | food_id3 |
| -- | ------ | ------- | -------- | -------- |
| 1  | 1      | 0       | 0        | 0        |
| 2  | 0      | 1       | 0        | 1        |
| 3  | 0      | 0       | 0        | 1        |


The answer to this problem is to add a new table to the ER diagram. This new table is called a **junction table or a bridge table**. A junction table or bridge table will resolve the problem associated with many-to-many relationships in relational databases, by creating two one-to-many associations instead of one many-to-many association. In our example, the junction table is called order line. The order line table has a foreign key to the food table called food ID, and a foreign key to the order table called order ID. Each order ID in the order line table can have as many rows as required for each food ID

#### Food Table

| id | name     | price |
| -- | -------- | ----- | 
| 1  | Chips    | 6.35  | 
| 2  | Burger   | 2.76  | 
| 3  | Pizza    | 2.00  | 

#### Order Table

| id | eat_in | 
| -- | ------ |
| 1  | 1      |
| 2  | 0      | 
| 3  | 0      |

#### Order Line

| id | order_id | food_id | quantity |
| -- | -------- | ------- | -------- | 
| 1  | 1        | 0       | 1        |
| 2  | 2        | 1       | 1        |
| 3  | 2        | 2       | 2        |


# Foreign keys and SQL join

When building relations between tables in a relational database, we also need another key, which is called a foreign key. A foreign key in a table is the primary key from another table, which is used to model a relation between the two tables

It is better to have a unique ID for each author as the primary key in the author table, and then use this as a foreign key in the article table

#### Article Table

| id | Article title | Publication date | Author_id |
| -- | ------------- | ---------------- | --------- |
| 0  | title 1       | date 1           | 1         |
| 1  | title 2       | date 2           | 2         |
| 2  | title 3       | date 3           | 1         |

#### Author Table

| id | Author name | Phone   | email   |
| -- | ----------- | ------- | ------- |
| 1  | name 1      | phone 1 | email 1 |
| 2  | name 2      | phone 2 | email 2 |

## Foreign keys constraint

The foreign key constraint ensures that referential integrity of data joining any two tables by limiting the content of the foreign key to the values of referenced primary key. This is necessary in addition to primary key constraints, which we discussed earlier to ensure the accuracy and integrity of data stored in databases

- Ensures referential integrity
- Limits the content of the foreign key to the values of the referenced primary key

## MySQL implementation

*Referencing Table Book and Publisher from Top*


    CREATE TABLE book (
        id INT AUTO_INCREMENT,
        name VARCHAR(50),
        price DECIMAL(5,2) unsigned,
        publisher_id INT,
        PRIMARY KEY (id),
        FOREIGN KEY (publisher_id) REFERENCES publisher (id)
    );


### Query implementation

**General SQL JOIN**

    SELECT field_name1, field_name2,..
    FROM table1 JOIN table2 ON
    join_condition WHERE select_condition

**Retrieving from one table** Find name and price of all the books priced more than 30 pounds

    SELECT Book.name, Book.price FROM book WHERE Book.price > 30

**Retrieving from two tables** Retrieve the name, price and publisher names of all the books priced more than 30 pounds

    SELECT Book.name, Book.price, Publisher.publisher_name FROM Book 
    JOIN Publisher ON Book.publisher_id = Publisher.id WHERE Book.price > 30

**Insert data into a table with foreign key**

    INSERT INTO Book (publisher_id, name, price) 
    VALUES ((SELECT id FROM Publisher WHERE Publisher.name = 'McGrawHill'), 
    'Database Book', 40.25);