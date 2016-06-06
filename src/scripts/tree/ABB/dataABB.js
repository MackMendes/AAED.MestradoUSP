var DataABB = (function () {
    var no1 = { info: 1, pai: null, esq: no2, dir: no3 };     // Nível 0
    var no2 = { info: 22, pai: no1, esq: no4, dir: no5 };     // Nível 1
    var no3 = { info: 13, pai: no1, esq: no6, dir: no7 };     // Nível 1

    var no4 = { info: 18, pai: no2, esq: no8, dir: no9 };      // Nível 2
    var no5 = { info: 9, pai: no2, esq: no10, dir: no11 };     // Nível 2
    var no6 = { info: 7, pai: no3, esq: no12, dir: no13 };     // Nível 2
    var no7 = { info: 52, pai: no3, esq: null, dir: null };    // Nível 2

    var no8 = { info: 14, pai: no4, esq: no14, dir: no15 };    // Nível 3
    var no9 = { info: 6, pai: no4, esq: null, dir: null };     // Nível 3
    var no10 = { info: 8, pai: no5, esq: null, dir: null };    // Nível 3
    var no11 = { info: 21, pai: no5, esq: null, dir: null };   // Nível 3
    var no12 = { info: 29, pai: no6, esq: null, dir: null };   // Nível 3
    var no13 = { info: 32, pai: no6, esq: null, dir: null };   // Nível 3

    var no14 = { info: 39, pai: no8, esq: null, dir: null };   // Nível 4
    var no15 = { info: 2, pai: no8, esq: no16, dir: null };    // Nível 4

    var no16 = { info: 63, pai: no15, esq: null, dir: null };    // Nível 6

    // Nível 0 
    no1.esq = no2; no1.dir = no3;
    // Nível 1
    no2.pai = no1; no2.esq = no4; no2.dir = no5;
    no3.pai = no1; no3.esq = no6; no3.dir = no7;
    // Nível 2
    no4.pai = no2; no4.esq = no8; no4.dir = no9;
    no5.pai = no2; no5.esq = no10; no5.dir = no11;
    no6.pai = no3; no6.esq = no12; no6.dir = no13;
    no7.pai = no3; no7.esq = null; no7.dir = null;
    // Nível 3
    no8.pai = no4; no8.esq = no14; no8.dir = no15;
    no9.pai = no4; no9.esq = null; no9.dir = null;
    no10.pai = no5; no10.esq = null; no10.dir = null;
    no11.pai = no5; no11.esq = null; no11.dir = null;
    no12.pai = no6; no12.esq = null; no12.dir = null;
    no13.pai = no6; no13.esq = null; no13.dir = null;
    // Nível 4
    no14.pai = no8; no14.esq = null; no14.dir = null;
    no15.pai = no8; no15.esq = no16; no15.dir = null;
    // Nível 5

    //return [no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11, no12, no13, no14, no15];

    return no1;
})();