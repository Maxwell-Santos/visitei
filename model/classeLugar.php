<?php
    class Lugar
    {
        private $nomeLocal;
        private $categoria;
        private $descricao;
        private $commentDele;
        private $commentDela;
        private $preco;
        private $data;
        private $caminhoImagem1;
        private $caminhoImagem2;
        private $caminhoImagem3;
        private $nota1;
        private $nota2;
        private $nota3;
        private $media;
        
        public function AdicionarLugar($nomeLocal, $categoria, $descricao, $commentDele, $commentDela, $preco, $data, $caminhoImagem1, $caminhoImagem2, $caminhoImagem3,
            $nota1, $nota2, $nota3, $media) 
        {
            $filename = '../model/dados.json';

            $lugares = file_get_contents($filename);
            $listaLugares = json_decode($lugares, true);

            if ($listaLugares === null) {
                $listaLugares = array('places' => array());
            }

            foreach ($listaLugares['places'] as &$lugar) {
                if ($lugar['name'] === $categoria) {

                    $id = count($lugar['cards'])+1;

                    foreach ($lugar['cards'] as $cardLugar)
                    {
                        if ($cardLugar['id'] >= $id)
                        {
                            $id = $cardLugar['id']+1;
                        }
                    }
                    $novoCard = array(
                        'id' => $id,
                        'title' => $nomeLocal,
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
                    $lugar['cards'][] = $novoCard;
                    break;
                }
            }

            $novoJSON = json_encode($listaLugares, JSON_PRETTY_PRINT);
            file_put_contents($filename, $novoJSON);
        }

        public function ListarTodos()
        {
            $filename = '../model/dados.json';

            $listaLugares = file_get_contents($filename);
            $lugares = json_decode($listaLugares, true);
        
            header('Content-Type: application/json');
            echo json_encode($lugares);
        }

        public function ListarPorCategoria($categoria)
        {
            $filename = '../model/dados.json';

            $lugares = file_get_contents($filename);
            $listaLugares = json_decode($lugares, true); 

            $mostrarLugar = null;

            foreach ($listaLugares['places'] as $lugar)
            {
                if ($lugar['name'] === $categoria)
                {
                    $mostrarLugar = $lugar;
                    break;
                }
            }

            if ($mostrarLugar)
            {
                header('Content-Type: application/json');
                echo json_encode($mostrarLugar);
            }
            else
            {
                $erro = array('erro' => $categoria . ' não encontrados.');
                header('Content-Type: application/json');
                echo json_encode($erro);
            }
        }

        public function MostrarLugar($categoria, $id)
        {
            $filename = '../model/dados.json';

            $lugares = file_get_contents($filename);
            $listaLugares = json_decode($lugares, true); 

            $mostrarLugar = null;

            foreach ($listaLugares['places'] as $lugar)
            {
                if ($lugar['name'] === $categoria)
                {
                    foreach ($lugar['cards'] as $card)
                    {
                        if ($card['id'] === $id)
                        {
                            $mostrarLugar = $card;
                            break;
                        }
                    }
                }
            }

            if ($mostrarLugar)
            {
                header('Content-Type: application/json');
                echo json_encode($mostrarLugar);
            }
            else
            {
                $erro = array('erro' => 'Lugar não encontrado.');
                header('Content-Type: application/json');
                echo json_encode($erro);
            }
        }
    }
?>