# Types of Time Functions

- $ O(1) $&emsp;&emsp;&emsp;&emsp;&emsp;-> Constant
- $ O(log (n)) $&emsp;&emsp; -> Logarithmic 
- $ O(\sqrt n) $
- $ O(n) $ &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;-> Linear
- $ O(n(log (n))) $
- $ O(n^2) $ &nbsp;&nbsp;  -> Quadratic
- $ O(n^3) $ &nbsp;&nbsp;  -> Exponential,
- $ O(2^n) $
- $ O(3^n) $
- $ O(n^n) $

# Asymptotic Notations

- $ O $ Big-O -> Upper bound
- $ \Omega $ Big-Omega -> Lower bound
- $ \Theta $ Theta -> Average bound

## Example 1

$ f(n) = 2n^2 +3n +4 $

<br>

### $ O $ Big-O 

$ 2n^2 + 3n +4 $ &emsp;$ \leq  $ &emsp; $ 2n^2 +3n^2 +4n^2  $

$ 2n^2 + 3n +4 $ &emsp;$ \leq  $ &emsp; $ 9n^2  $

$ f(n) = O(n^2)$

<br>

### $ \Omega $ Big-Omega
$ 2n^2 + 3n +4 $ &emsp;$ \geq  $ &emsp; $ 1 * n^2   $

$ f(n) = \Omega (n^2)$

<br>

### $ \Theta $ Theta

$ 1*n^2 $ &emsp;$ \leq  $ &emsp; $ 2n^2 + 3n +4 $ &emsp;$ \leq  $ &emsp; $ 9n^2  $

$ f(n) = \Theta (n^2)$

<br>

## Example 2

$ f(n) = n^2 log(n) + n $

$ 1 * n^2 log(n) $ &emsp;$ \leq  $ &emsp; $ n^2 log(n) + n $ &emsp;$ \leq  $ &emsp; $ 10n^2 log(n) $

$ O(n^2 log(n)) $ &emsp;
$ \Omega (n^2 log(n)) $ &emsp;
$ \Theta (n^2 log(n)) $ &emsp;

<br>

## Example 3

$ f(n) = n! $

$  1*1*1... *1 \leq 1*2*3... *n \leq n*n*n...*n $

$ 1 \leq n! \leq n^n $

$ \Omega (1) $ &emsp; $ O(n^n) $ &emsp; $ \Theta $ does not exist for this function

<br>

## Example 4

$ f(n) = log n!

$ log(1*1*1... *1) \leq log(1*2*3... *n) \leq log(n*n*n... *n) $

$ 1 \leq log(n!) \leq log(n^n) $

$ 1 \leq log(n!) \leq n*log(n) $

$ \Omega (1) $ &emsp; $ O(n*log(n)) $ &emsp; $ \Theta $ does not exist for this function

<br>

# Properties of Asymptotic Notations

## General Property

If $ f(n) $ is $ O (g(n)) $ then $ a * f(n) $ is $ O(g(n))$ 

### Example:

$ f(n) = 2n^2+5 $ is $ O(n^2) $

then $ 7*f(n) = 7 (2n^2+5) $

$ 7*f(n) = 14n^2 + 35 $ is $ O(n^2) $

The big O repeats if the function is multiplied by seven. This also works for all three notations.

<br>

## Reflexive Property

If $ f(n) $ is given, then $ a * f(n) $ is $ O(f(n))$ 

### Example:

$ f(n) = n^2 $ is $ O(n^2) $

<br>

## Transitive Property

If $ f(n) $ is $ O(g(n)) $ and $ g(n) $ is $ O(h(n))$, then $ f(n) $ is $ O(h(n)) $

### Example:

$ f(n) = n $ &emsp; $ g(n) =n^2 $ &emsp; $ h(n) =n^3 $

$ n $ is $ O(n^2) $ and $ n^2 $ is $ O(n^3) $, then $ n $ is $  O(n^3) $ 

<br>

## Symmetric Property

If $ f(n) $ is $ \Theta (g(n)) $, then $ g(n) $ is $ \Theta (f(n)) $ 

## Example

$ f(n) = n^2 $, &emsp; $ g(n) = n^2 $ 

$ f(n) = \Theta (n^2) $

$ g(n) = \Theta (n^2) $

They are called symmetric if the functions are the same, only in Theta notation

<br>

## Transpose Symmetric Property

If $ f(n) = O(g(n)) $, then $ g(n) $ is $ \Theta (f(n)) $

### Example:

$f(n) = n $, &emsp; $ g(n) = n^2 $

$ n $ is $ O(n^2) $ and $ n^2 $ is $ \Omega (n) $