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
        $Lugar->AdicionarLugar($nomeLocal, $categoria, $descricao, $commentDele, $commentDela, $preco, $data, $caminhoImagem1, $caminhoImagem2, $caminhoImagem3,
        $nota1, $nota2, $nota3, $media);
    }
?>