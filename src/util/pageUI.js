var PageUI = (function ($) {
    // Helper da Page
    var imprimirResultado = function (htmlPrint) {
        $('#result').append(htmlPrint);
    };

    var clearResultado = function () {
        $('#result').html('');
    };
    //
    return {
        ImprimirResultado: imprimirResultado,
        ClearResultado: clearResultado
    };

})(jQuery);