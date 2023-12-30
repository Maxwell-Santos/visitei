<?php
    require_once '../model/classeLugar.php';

    class LugarController
    {
        public function AdicionarLugar($nomeLocal, $categoria, $descricao, $commentDele, $commentDela, $preco, $data, $caminhoImagem1, $caminhoImagem2, $caminhoImagem3,
        $nota1, $nota2, $nota3, $media)
        {
            $Lugar = new Lugar();
            $Lugar->adicionarLugar($nomeLocal, $categoria, $descricao, $commentDele, $commentDela, $preco, $data, $caminhoImagem1, $caminhoImagem2, $caminhoImagem3,
            $nota1, $nota2, $nota3, $media);
        }

        public function ListarTodos()
        {
            $Lugar = new Lugar();
            $Lugar->ListarTodos();
        }

        public function ListarPorCategoria($categoria)
        {
            $Lugar = new Lugar();
            $Lugar->ListarPorCategoria($categoria);
        }

        public function MostrarLugar($categoria, $id)
        {
            $Lugar = new Lugar();
            $Lugar->MostrarLugar($categoria, $id);
        }
    }
?>