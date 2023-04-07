# Main Concept

Break a problem into many sub-problems. Each problem must have the same task as sorting an algorithm, each subproblem must sort an algorithm.

# Recurrence Relation $T(n)=T(n-1)+1$

This image shows how to analyze time complexity of a recurrence function using a recurrence tree. In this case the time complexity is O(n)

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations.png)

## Solve the same algorithm with recurrence relation

![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations1.png)
In this image, you have to assume that n = 0 because it reached the end and we know that the time when n = 0 is 1. Therefore $T(n)=1+n$
![ Recurrence Relations Example](/Algorithms/assets/recurrenceRelations2.png)
