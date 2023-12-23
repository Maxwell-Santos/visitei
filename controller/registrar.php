<?php
// $filename = '../dados.json';

function adicionarLugar($nomeLocal, $titulo, $descricao, $commentDele, $commentDela, $preco, $data, $caminhoImagem1, $caminhoImagem2, $caminhoImagem3,
$nota1, $nota2, $nota3, $media) {
$filename = '../model/dados.json';

    $lugares = file_get_contents($filename);
    $listaLugares = json_decode($lugares, true);

    if ($listaLugares === null) {
        $listaLugares = array('places' => array());
    }

    // Novo card a ser adicionado
    $novoCard = array(
        'id' => count($listaLugares['places']) + 1,
        'title' => $titulo,
        'description' => $descricao,
        'price' => $preco,
        'date' => $data,
        'imgs' => array(
            'img1' => $caminhoImagem1,
            'img2' => $caminhoImagem2,
            'img3' => $caminhoImagem3
        ),
        'himComment' => $commentDele,
        'herComment' => $commentDela,
        'stars' => array(
            'environment' => $nota1,
            'logistic' => $nota2,
            'price' => $nota3,
            'average' => $media
        )
    );

    // Encontrar o local existente ou criar um novo
    $localExistente = false;
    foreach ($listaLugares['places'] as $local) 
    {
        if ($local['name'] === $nomeLocal) 
        {
            $local['cards'][] = $novoCard;
            $localExistente = true;
            // $listaLugares['places'][$local['name']][] = $novoCard;
            break;
        }
        // $listaLugares['places'][$local['name']][] = $novoCard;
    }

    if (!$localExistente) 
    {
        $novoLocal = array(
            'name' => $nomeLocal,
            'cards' => array($novoCard)
        );
        $listaLugares['places'][] = $novoLocal;

    }

    // Converter o array atualizado para JSON
    $novoJSON = json_encode($listaLugares, JSON_PRETTY_PRINT);

    // Salvar o JSON atualizado no arquivo
    file_put_contents($filename, $novoJSON);
}

// Exemplo de chamada da função para adicionar um restaurante
adicionarLugar(
    $_GET['categoria'],
    $_GET['titulo'],
    $_GET['descricao'],
    $_GET['comentDele'],
    $_GET['comentDela'],
    $_GET['preco'],
    $_GET['data'],
    'caminho_imagem1.jpg',
    'caminho_imagem2.jpg',
    'caminho_imagem3.jpg',
    $_GET['nota'],
    $_GET['nota2'],
    $_GET['nota3'],
    $_GET['media']
);
?>
