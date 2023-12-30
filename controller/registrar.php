<?php
// function adicionarLugar($nomeLocal, $categoria, $descricao, $commentDele, $commentDela, $preco, $data, $caminhoImagem1, $caminhoImagem2, $caminhoImagem3,
// $nota1, $nota2, $nota3, $media) {
// $filename = '../model/dados.json';

//     $lugares = file_get_contents($filename);
//     $listaLugares = json_decode($lugares, true);

//     if ($listaLugares === null) {
//         $listaLugares = array('places' => array());
//     }

//     foreach ($listaLugares['places'] as &$lugar) {
//         if ($lugar['name'] === $categoria) {

//             $id = count($lugar['cards'])+1;

//             foreach ($lugar['cards'] as $cardLugar)
//             {
//                 if ($cardLugar['id'] >= $id)
//                 {
//                     $id = $cardLugar['id']+1;
//                 }
//             }
//             $novoCard = array(
//                 'id' => $id,
//                 'title' => $nomeLocal,
//                 'description' => $descricao,
//                 'price' => $preco,
//                 'date' => $data,
//                 'imgs' => array(
//                     'img1' => $caminhoImagem1,
//                     'img2' => $caminhoImagem2,
//                     'img3' => $caminhoImagem3
//                 ),
//                 'himComment' => $commentDele,
//                 'herComment' => $commentDela,
//                 'stars' => array(
//                     'environment' => $nota1,
//                     'logistic' => $nota2,
//                     'price' => $nota3,
//                     'average' => $media
//                 )
//             );
//             $lugar['cards'][] = $novoCard;
//             break;
//         }
//     }

//     $novoJSON = json_encode($listaLugares, JSON_PRETTY_PRINT);
//     file_put_contents($filename, $novoJSON);
// }

// adicionarLugar(
//     $_POST['titulo'],
//     $_POST['categoria'],
//     $_POST['descricao'],
//     $_POST['comentDele'],
//     $_POST['comentDela'],
//     $_POST['preco'],
//     $_POST['data'],
//     'caminho_imagem1.jpg',
//     'caminho_imagem2.jpg',
//     'caminho_imagem3.jpg',
//     $_POST['nota'],
//     $_POST['nota2'],
//     $_POST['nota3'],
//     $_POST['media']
// );
?>