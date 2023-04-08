# Main Concept

Break a problem into many sub-problems. Each problem must have the same task as sorting an algorithm, each subproblem must sort an algorithm.

# Recurrence Relation

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations10.png)

This image shows how to analyze time complexity of a recurrence function using a recurrence tree. In this case the time complexity is O(n)

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations.png)

## Example 1: $T(n)=T(n-1)+1$

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations1.png)
In this image, you have to assume that n = 0 because it reached the end and we know that the time when n = 0 is 1. Therefore $T(n)=1+n$
![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations2.png)

## Example 2: $T(n)=T(n-1)+n$

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations3.png)

<br>
Solved by tree method

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations4.png)

Solved by induction method

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations5.png)

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations6.png)

## Example 3: $T(n)=T(n-1)+log(n)$

Solved by tree method

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations7.png)

Solved by induction

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations8.png)

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations9.png)

## Example 4: $T(n)=2T(n-1)+1$

Solved by tree method

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations11.png)

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations12.png)

Solved by induction

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations13.png)

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations14.png)