# Databases

A database is the data itself, collected together.

The first purpose of a database is to store data.

A second reason is to be able to access and query the data in the database. Querying means reading data from the database. Creating, reading, updating, and deleting data are database operations that we would usually like to be able to perform (CRUD)

A third purpose of a database is to provide an organizational structure for data

## Definition of a database:

#### Collections of data that:

- are highly **valuable**
- are **relatively large**, and
- are accessed by **multiple users and applications**, often at the same time

## DBMS Database management system

The DBMS is the software that provide access to and manages that data.

Database management system is a software system that is used to create, maintain, and provide controlled access to user databases. Eg: MySQL, PostgreSQL, Microsoft SQL Server and Oracle

**Purpose:** The primary goal of a DBMS is to provide a way to store and retrieve database information that is both **convenient** and **effiecient**

## History of databases

```
                          |       |       |       |       |       |
                        1960    1970    1980    1990    2000    2010
Flat files              **********************----------------------------
Hierarchical                   *********************----------------------
Network                            ****************-------
Relational                                   *****************************
Object-oriented                                  *************************
Object-relational                                   **********************   
Data warehousing                                **************************
```

## Lists & it's issues

Before databases data had to be stored in linear files. This consisted of long lists of tab delimited values or lists

- **Insertion** problems: Data redundancy
- **Deletion** problems: Information loss
- **Update** problems: More than one field must be updated

## Relational Database

The **relational database model**, data is organized into tables which relate to each other. Relationships between tables are established or modeled by common values in related tables. 

A **relational database** presents data as a collection of tables in which all data **relationships** are represented by **common values** in related tables

- Data is organized into tables
- Rows = 'records'
- Columns = 'fields'

```
        CUSTOMER TABLE (Table name)

                              (Field)
        | id | name          | price  |
        | -- | ------------- | ------ |
        | 1  | Database book | 20.25  | (Record)
        | 2  | Node.js book  | 34.67  |
        | 2  | Express book  | 70.67  |
```


### Relationships = common fields
### Book Table

| id | name          | price  | publisher_id |
| -- | ------------- | ------ | ------------ |
| 1  | Database book | 20.25  | 1            |
| 2  | Node.js book  | 34.67  | 2            |
| 2  | Express book  | 70.67  | 3            |

### Publisher Table

| id | name     | address  | website |
| -- | -------- | -------- | ------- |
| 1  | McGill   | random1  | www1    |
| 2  | Oxford   | random2  | www2    |
| 2  | Camb     | random3  | www3    |




# Commands for mysql

There are three types of Commands

First, there are **data definition language** (DDL) commands. These commands are used to create, alter, and drop tables, views, and indexes,

Then, there are **data manipulation language** (DML) commands. Many consider the DML commands to be the core of SQL. These commands are used for updating, inserting, modifying, and querying the data in the database.

Finally, **data control language** (DCL) commands help a database administrator (DBA) control the database. They include commands to grant or revoke privileges to access the database or particular objects within the database and to store or remove transactions that would affect the database.


## Create a table

```
CREATE TABLE books (id INT AUTO_INCREMENT, name VARCHAR(50), price DECIMAL(5, 2) unsigned,PRIMARY KEY(id));
```

## Insert data

```
INSERT INTO TableName (name, price)VALUES('database book', 40.25),('Node.js book',25.00), ('Express book', 31.99);
```

## Query
```
SELECT filedName1, fieldName2 FROM TableName; 

SELECT * FROM TableName;

SELECT name, price FROM books WHERE id=2;
```

## Data Types

```
String      CHARACTER(n) /         | Stores string values containing any character set.
            CHAR(n)                | CHAR is defined to be fixed length, for example CHAR(2)

            CHARACTER VARYING(n) / | Stores strings values containing any characters in a 
            CHAR VARYING(n)        | character set using space only for the actual length 
                                   | of the string. In Oracle, VARCHAR2, for example,
                                   | VARCHAR(30).

Binary      BINARY LARGE           | Stores binary string values in hexadecimal format. BLOB
            OBJECT (BLOB)          | is defined to be a variable length. (ORACLE also has 
                                   | CLOB and NCLOB as well as BFILE for storing unstructured
                                   | data outside the database).

Number      NUMERIC(p,s) /         | Stores exact numbers with a defined precision and scale.
            DECIMAL(p,s)           | In Oracle, NUMBER (precision, scale) Example: NUMBER(12,2)

            INTEGER / INT          | Stores exact numbers with a predefined precision and scale
                                   | of zero. 

Temporal    TIMESTAMP              | Stores a moment an event occurs, using a definable
            TIMESTAMP WITH         | fraction-of-a-second-precision. Value adjusted to the 
            LOCAL TIME ZONE        | user's session time zone (available fully in DB2 
                                   | and Oracle)

Boolean     BOOLEAN                | Store truth values: TRUE, FALSE, or UNKNOWN
```

## Schema 

A schema is a collection of related objects, including but not limited to base tables and views, domains, constraints, character sets, triggers, and roles.
