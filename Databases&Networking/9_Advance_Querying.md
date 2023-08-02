# Advance Querying 

## Count

Find the number of books priced less than £30:

    SELECT COUNT(id) FROM Book WHERE Book.price < 30;

## Sum

Find the sum of all the prices of the books in your book shop:

    SELECT SUM(price) FROM Book; 

## Min

Find the cheapest book: 

    SELECT MIN(price) FROM Book;

## Max

Find the most expensive book:

    SELECT MAX(price) FROM Book; 

# Left and Right Joins

## Previous Topic 8 Example

Imagine you are employed to develop a database to store details about works of art owned by the museum of your country. You have two entities, one is artwork and the other is museum. Each artwork can be located at zero or one museum. So the relationship cardinality between the artwork and museum entities is optional one. On the other hand, each museum displays zero to many artworks. So the relationship cardinality between museum and artwork is optional many. Of course, in reality, only a closed museum or a brand new museum would display no works of art. But at least in theory, it's a possibility.

```
// diagram:
       is located at
(Artwork)->o--------------------o|-(Museum)
                            Displays
```

#### Artwork Table

| id | name           | artist         | museum_id |
| -- | -------------- | -------------- | --------- |
| 1  | My smile       | J.J. Arty      | NULL      |
| 2  | Color Madness  | Junior Picasso | 2         |
| 3  | Beautiful lake | Luke Real      | 1         |

#### Museum Table

| id | name            | address  | website |
| -- | --------------- | -------- | ------- |
| 1  | National Museum | address1 | www1    |
| 2  | Art Museum      | address2 | www2    |
| 3  | Modern Museum   | address3 | www3    |

### Query

Running this SELECT statement in MySQL Shell will result in a list of two records, Color madness, Junior Picasso, Art Museum, and then Beautiful lake, Luke Real, National Museum. We consider one table, table A, as the set of records stored within it and table B as the second set called B storing data records of table B.

Therefore, we can say that SQL SELECT join finds records that belong to both tables, or we say that they are in the intersection of set A and set B.

Retrieve the name of an artwork and its artist, in addition to the name of the museum displaying that artwork.

    SELECT Artwork.name, Artwork.artist, Museum.name
    FROM Artwork JOIN Museum ON Artwork.museum_id = Museum.id

#### Output


- Color madness, Junior Picasso, Art Museum
- Beautiful lake, Luke Real, National Museum

## Left and Right Joint

There are two other forms of join, left and right joins. Left or right joins include all the rows from one table and any matching rows from the other table

- **All** the rows from one table **plus** **Any matching** rows from the other table

### Left Join

Left join includes all the rows from the table on the left and any matching rows from the other table

```
// diagram
(///A////(///A&B)   B   )
```
```
SELECT Artwork.name, Artwork.artist, Museum.name
From Artwork LEFT JOIN Museum ON Artwork.museum_id = Museum.id
```
#### Output

- My Smile, J.J. Arty, NULL
- Color madness, Junior Picasso, Art Museum
- Beautiful lake, Luke Real, National Museum


### Right Join

Right join, on the other hand, will retrieve all the rows from the right-hand table and any matching rows from the other table.

```
// diagram
(   A    (///A&B)////B)
```

```
SELECT Artwork.name, Artwork.artist, Museum.name
From Artwork RIGHT JOIN Museum ON Artwork.museum_id = Museum.id
```

#### Output

- Beautiful lake, Luke Real, National Museum
- Color madness, Junior Picasso, Art Museum
- NULL, NULL, Modern Museum

# Nested SELECT in SQL

Find all the books that are more expensive than 'Database Book':

    SELECT name, price FROM Book 
    WHERE price > (SELECT price FROM Book WHERE name ='Node.js Book'); 