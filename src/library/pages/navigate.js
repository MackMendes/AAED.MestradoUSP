(function (document, $) {
    // Lista de Menu 
    var menusExists = [
        {
            name: 'Árvores', url: '#', children: [
                { name: 'Heap', url: '/pages/tree/heap.html', children: [] },
                { name: 'ABB', url: '/pages/tree/ABB.html', children: [] },
                { name: 'Árvore Binária', url: '/pages/tree/binary.html', children: [] }
            ]
        },
		{
			name: 'Ordenação', url: '#', children: [
				{ name: 'Quicksort', url: '/pages/sorting/quick.html', children: [] },
				{ name: 'Radixsort', url: '/pages/sorting/radix.html', children: [] },
				{ name: 'Bucketsort', url: '/pages/sorting/bucket.html', children: [] }
			]
		},
        {
            name: 'Estruturas', url: '#', children: [
                { name: 'Fila', url: '/pages/structure/stack.html', children: [] },
                { name: 'Pilha', url: '/pages/structure/queue.html', children: [] }
            ]
        },
        { name: 'Grafo', url: '/pages/grafo.html', children: [] }
    ];

    // Comportamento para criar link do menu
    var pageSlit = document.URL.split('/');
    var pageActual = pageSlit[pageSlit.length - 1];
    var menuNavegate = '<div class="navbar-header"><div class="container"><a class="navbar-brand" href="/index.html">AAED - Mestrado USP</a>';
    var hasChildren = false;

    menuNavegate += '<ul class="nav navbar-nav">'
    for (var i = 0, lgt = menusExists.length; i < lgt; i++) {
        hasChildren = menusExists[i].children.length > 0;
        menuNavegate += '<li ' + (menusExists[i].url === pageActual ? 'class="active"' : '');
        menuNavegate += (hasChildren ? ' role="presentation" class="dropdown"' : '');
        menuNavegate += '><a ' + (hasChildren ? 'class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"' : '');
        menuNavegate += '  href="' + menusExists[i].url + '">' + menusExists[i].name;
        menuNavegate += (hasChildren ? ' <span class="caret"></span>' : '') + '</a>';
        if (hasChildren) {
            menuNavegate += '<ul class="dropdown-menu" role="menuitem">'
            for (var j = 0, lgtj = menusExists[i].children.length; j < lgtj; j++) {
                menuNavegate += '<li ' + (menusExists[i].children[j].url === pageActual ? 'class="active"' : '');
                menuNavegate += '><a href="' + menusExists[i].children[j].url + '">' + menusExists[i].children[j].name;
            }
            menuNavegate += '</ul>'
        }

        menuNavegate += '</li>';
    }
    menuNavegate += '</ul>'
    menuNavegate += '</div></div>';
    $('#menu-nav').html(menuNavegate);

})(document, jQuery);