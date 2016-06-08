var PegaHelper = (function ($) {
    var printResult = function (html) {
        $('#result').append(html);
    };

    var clearResult = function () {
        $('#result').html('');
    };

    var printGrafo = function (verticeActual, valor, cor) {
        var enumCor = { WHITE: 0, GRAY: 1, BLACK: 3 }
        var print = verticeActual + '(' + valor + ')';
        if (cor === enumCor.GRAY)
            print = '<span class="label label-default">' + print + '</span>';
        else if (cor === enumCor.BLACK)
            print = '<span class="label" style="background-color: black;">' + print + '</span>';
        else 
            print = '<span class="label" style="background-color: #f3ebeb; color: #0661a2;">' + print + '</span>';

        printResult(print);
    };

    return {
        PrintResult: printResult,
        PrintGrafo: printGrafo,
        ClearResult: clearResult
    };

})(jQuery);