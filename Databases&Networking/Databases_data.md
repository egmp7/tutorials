# Databases

A database is the data itself, collected together.

The first purpose of a database is to store data.

A second reason is to be able to access and query the data in the database. Querying means reading data from the database. Creating, reading, updating, and deleting data are database operations that we would usually like to be able to perform (CRUD)

A third purpose of a database is to provide an organizational structure for data

![](/Databases&Networking/assets/20.png)

# DBMS database management system

The DBMS is the software that provide access to and manages that data.

Database management system is a software system that is used to create, maintain, and provide controlled access to user databases. Eg: MySQL, PostgreSQL, Microsoft SQL Server and Oracle

![](/Databases&Networking/assets/21.png)

# History of databases

![](/Databases&Networking/assets/22.png)

## Lists

Before databases data had to be stored in linear files. This consisted of long lists of tab delimited values or lists

**Modification issues** 

![](/Databases&Networking/assets/23.png)

# Relational Database

The relational database model, data is organized into tables which relate to each other. Relationships between tables are established or modeled by common values in related tables. 

A relational database presents data as a collection of tables in which all data relationships are represented by common values in related tables

![](/Databases&Networking/assets/24.png)

![](/Databases&Networking/assets/25.png)

![](/Databases&Networking/assets/26.png)

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

# Data Types

![](/Databases&Networking/assets/27.png)

# Schema 

A schema is a collection of related objects, including but not limited to base tables and views, domains, constraints, character sets, triggers, and roles.

CREATE DATABASE student;
Database Management System
INSERT INTO Food VALUES ( 'Pizza', 6.25);
Redundancy and multiple themes in the list create modification problems
Structured Query Language
To store data in the form of a list.
Columns in tables represent the objects' fields
SELECT name FROM virus;
SELECT name, price FROM books WHERE price>25;
DESCRIBE TableName;
object, table