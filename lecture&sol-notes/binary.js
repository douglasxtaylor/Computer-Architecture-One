// is 5 decimal equal to 101 binary?

if (5 == 0b101) {
    console.log('TRUE');
}

10 dec == 1010 bin //decimal or binary, it represents the same to a computer when read properly
let s = '000000010';

let dec = s.parseInt(2);
let dec2 = Number('0b0000010');

1 10 100 1000 decimal
1  2   4    8 in binary
1 10 100 1000
1


let dec = s.parseInt

AND
----------
0 AND 0  0
0 AND 1  0
1 AND 0  0
1 AND 1  1

NAND
-----------
0 NAND 0  1
0 NAND 1  1
1 NAND 0  1
1 NAND 1  0

if (!(a && b)) {
}
===
if (!a || !b) {
}

DeMorgan's Laws suggest that these conditionals are eqivalent.

let r = a & b; // bitwise-AND;
let r = a | b; // bitwise-OR
let r = a ^ b; //bitwise-XOR (exclusive or)
let r = ~a;    // bitwise-NOT



let a = 0b1;
let b = 0b1;

let r = a & b; // bitwise-AND
let r = a | b; // bitwise-OR
let r = a ^ b; // bitwise-XOR
let r = ~a; // bitwise-NOT

DeMorgan's Laws

a = 10101010
b = 00011100 AND  mask
------------
    00001000

a = 10101010
b = 11110111 AND  mask, clearin a bitwise
------------
    10100010

a = 10101010
b = 00000001 OR
------------
    10101011

a = 11110000 >>2
  = 00111100

a = 11110000 <<2
  = 1111000000

a = 10000000 Is the 8th bit set?
    00000001 >>7 // right shift seven
    00000001 AND
    --------
           1


let f = 3.14159;

let i = f|0; //what?

OR
-----------
0 OR 0   0
0 OR 1   1
1 OR 0   1
1 OR 1   1
