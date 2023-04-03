# Types of Time Functions

- $O(1)$ -> Constant
- $O(log(n)) -> Logarithmic 
- $O(\sqrt n)$
- $O(n)$ -> Linear
- $O(n(log(n)))$
- $O(n^2)$ -> Quadratic
- $O(n^3)$ -> Exponential,
- $O(2^n)$
- $O(3^n)$
- $O(n^n)$

# Asymptotic Notations

- $O$ Big-O -> Upper bound
- $\Omega$ Big-Omega -> Lower bound
- $\Theta$ Theta -> Average bound

## Example 1

$f(n)=2n^2+3n+4$

### $O$ Big-O 

$2n^2+3n+4$&emsp;
$\leq$&emsp;
$2n^2+3n^2+4n^2$

$2n^2+3n+4$&emsp;
$\leq$&emsp;
$9n^2$

$f(n)=O(n^2)$

<br>

### $\Omega$ Big-Omega

$2n^2+3n+4$&emsp;
$\geq$&emsp;
$1*n^2$

$f(n)=\Omega(n^2)$

<br>

### $\Theta$ Theta

$1\times n^2$&emsp;
$\leq$&emsp;
$2n^2+3n+4$&emsp;
$\leq$&emsp;
$9n^2$

$f(n)=\Theta(n^2)$

<br>

## Example 2

$f(n)=n^2\log(n)+n$

$1\times n^2\log(n)$&emsp;
$\leq$&emsp;
$n^2\log(n)+n$&emsp;
$\leq$&emsp;
$10n^2\log(n)$

$O(n^2\log(n))$&emsp;
$\Omega(n^2\log(n))$ &emsp;
$\Theta(n^2\log(n))$

<br>

## Example 3

$f(n)=n!$

$1\times 1\times 1\ldots\times 1$
$\leq$ 
$1\times 2\times 3\ldots\times n$
$\leq$
$n\times n\times n\ldots\times n$

$1\leq n!\leq n^n$

$\Omega(1)$&emsp;
$O(n^n)$&emsp;
$\Theta$ does not exist for this function

<br>

## Example 4

$f(n)=log(n!)$

$\log (1\times 1\times 1\ldots\times 1)$
$\leq$
$\log (1\times 2\times 3\ldots\times n)$
$\leq$
$\log (n\times n\times n\ldots\times n)$

$1\leq\log(n!)\leq n\times log(n)$

$\Omega(1)$&emsp;
$O(n\times log(n))$&emsp;
$\Theta$ does not exist for this function

<br>

# Properties of Asymptotic Notations

## General Property

If $f(n)$ is $O(g(n))$ then $a\times f(n)$ is $O(g(n))$ 

### Example:

$f(n)=2n^2+5$ is $O(n^2)$

then $7\times f(n)=7\times (2n^2+5)$

$7\times f(n)=14n^2+35$ is $O(n^2)$

The big O repeats if the function is multiplied by seven. This also works for all three notations.

<br>

## Reflexive Property

If $f(n)$ is given, then $a\times f(n)$ is $O(f(n))$ 

### Example:

$f(n)=n^2$ is $O(n^2)$

<br>

## Transitive Property

If $f(n)$ is $O(g(n))$ and $g(n)$ is $O(h(n))$, then $f(n)$ is $O(h(n))$

### Example:

$f(n)=n$ &emsp; $g(n)=n^2$ &emsp; $h(n)=n^3$

$n$ is $O(n^2)$ and $n^2$ is $O(n^3)$, then $n$ is $O(n^3)$

<br>

## Symmetric Property

If $f(n)$ is $\Theta(g(n))$, then $g(n)$ is $\Theta(f(n))$ 

### Example:

$f(n)=n^2$,&emsp;
$g(n)=n^2$ 

$f(n)=\Theta(n^2)$

$g(n)=\Theta(n^2)$

They are called symmetric if the functions are the same, only in Theta notation

<br>

## Transpose Symmetric Property

If $f(n)=O(g(n))$, then $g(n)$ is $\Theta(f(n))$

### Example:

$f(n)=n$,&emsp; 
$g(n)=n^2$

$n$ is $O(n^2)$ and $n^2$ is $\Omega(n)$

# Comparison of Functions

Use test values for comparing and check which one grows faster than the other one.

### Example:

$f(n)=n^2$&emsp;
$g(n)=n^3$

$f(2)=4$&emsp;
$g(2)=8$

$f(3)=9$&emsp;
$g(3)=27$

Another method is applying log on both sides

![Logarithmic functions](/Algorithms/assets/Log_Formulas.png)

### Example:

$f(n)=log(n^2)$&emsp;;&emsp;
$g(n)=log(n^3)$

$2\times log(n)<3\times log(n)$ 

<br>

## Example 1:

$f(n)=n^2\times log(n)$&emsp;;&emsp;
$g(n)=n\times log(n)^{10}$

Apply log

$f(n)=log[n^2\times log(n)]$&emsp;;&emsp;
$g(n)=log[n\times log(n)^{10}]$

$f(n)=log(n^2)+log(log(n))$&emsp;;&emsp;
$g(n)=log(n)+log(log(n)^{10})$

$f(n)=2log(n)+log(log(n))$&emsp;;&emsp;
$g(n)=log(n)+10log(log(n))$

$f(n)>$
$g(n)$

$2log(n)$ is bigger than $log(n)$

## Example 2:

$f(n)=3n^{\sqrt n}$&emsp;;&emsp;
$g(n)=2^{\sqrt{n}\times log_2(n)}$

$f(n)=3n^{\sqrt n}$&emsp;;&emsp;
$g(n)=2^{log_2(n^{\sqrt{n}})}$

$f(n)=3n^{\sqrt n}$&emsp;;&emsp;
$g(n)=(n^{\sqrt{n}})^{log_2(2)}$

$f(n)=3n^{\sqrt n}$&emsp;;&emsp;
$g(n)=n^{\sqrt{n}}$

$f(n)>$
$g(n)$