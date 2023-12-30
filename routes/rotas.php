<?php
    require '../controller/lugarController.php';

    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['REQUEST_URI'];
    $uriSegments = explode('/', parse_url($uri, PHP_URL_PATH));

    $Lugar = new LugarController();
    if ($requestMethod === 'GET')
    {
        if (isset($uriSegments[4]) && get_debug_type($uriSegments[4]) == 'string' && isset($uriSegments[5]))
        {
            $Lugar->MostrarLugar($uriSegments['4'], intval($uriSegments['5']));
        }
        else if (isset($uriSegments[4]) && get_debug_type($uriSegments[4]) == 'string')
        {
            $Lugar->ListarPorCategoria($uriSegments[4]);
        }
        else
        {
            $Lugar->ListarTodos();
        }
    }
    else if ($requestMethod === 'POST')
    {
        $Lugar->AdicionarLugar($_POST['titulo'],
        $_POST['categoria'],
        $_POST['descricao'],
        $_POST['comentDele'],
        $_POST['comentDela'],
        $_POST['preco'],
        $_POST['data'],
        'caminho_imagem1.jpg',
        'caminho_imagem2.jpg',
        'caminho_imagem3.jpg',
        $_POST['nota'],
        $_POST['nota2'],
        $_POST['nota3'],
        $_POST['media']);
    }
?>