function toggleSubMenu(id) 
{
    var submenu = document.getElementById(id);
    if (submenu.style.display === 'none' || submenu.style.display === '') 
    {
        submenu.style.display = 'block';
    } 
    else 
    {
        submenu.style.display = 'none';
    }
}

function cargarBuscadorYMostrarSubMenu() 
{
    Cargar('./html/buscador.html', 'contenido');
    toggleSubMenu('productos-sub-menu');
}