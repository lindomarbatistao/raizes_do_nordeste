create database raizes;
use raizes;

START TRANSACTION;

SET FOREIGN_KEY_CHECKS = 0;

-- Limpeza opcional para reexecução
DELETE FROM pagamentos_pagamento;
DELETE FROM pedidos_itempedido;
DELETE FROM pedidos_pedido;
DELETE FROM fidelidade_fidelidade;
DELETE FROM catalogo_estoqueloja;
DELETE FROM catalogo_produto;
DELETE FROM catalogo_categoria;
DELETE FROM lojas_loja;
DELETE FROM usuarios_usuario;

SET FOREIGN_KEY_CHECKS = 1;

-- =========================================================
-- 1) USUÁRIOS
-- =========================================================
INSERT INTO usuarios_usuario
(password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, tipo, telefone, cpf)
VALUES
('123', NULL, 0, 'cliente01', 'Ana', 'Souza', 'cliente01@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000001', '111.111.111-01'),
('123', NULL, 0, 'cliente02', 'Bruno', 'Lima', 'cliente02@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000002', '111.111.111-02'),
('123', NULL, 0, 'cliente03', 'Carla', 'Mendes', 'cliente03@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000003', '111.111.111-03'),
('123', NULL, 0, 'cliente04', 'Diego', 'Alves', 'cliente04@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000004', '111.111.111-04'),
('123', NULL, 0, 'cliente05', 'Elaine', 'Ramos', 'cliente05@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000005', '111.111.111-05'),
('123', NULL, 0, 'cliente06', 'Felipe', 'Rocha', 'cliente06@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000006', '111.111.111-06'),
('123', NULL, 0, 'cliente07', 'Gabriela', 'Pires', 'cliente07@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000007', '111.111.111-07'),
('123', NULL, 0, 'cliente08', 'Henrique', 'Dias', 'cliente08@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000008', '111.111.111-08'),
('123', NULL, 0, 'cliente09', 'Isabela', 'Costa', 'cliente09@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000009', '111.111.111-09'),
('123', NULL, 0, 'cliente10', 'João', 'Martins', 'cliente10@raizes.com', 0, 1, NOW(), 'CLIENTE', '19990000010', '111.111.111-10');

-- =========================================================
-- 2) LOJAS
-- =========================================================
INSERT INTO lojas_loja
(nome, endereco, cidade, estado, ativa)
VALUES
('Raízes do Nordeste - Campinas Centro', 'Avenida Francisco Glicério, 120', 'Campinas', 'SP', 1),
('Raízes do Nordeste - Campinas Cambuí', 'Rua Conceição, 245', 'Campinas', 'SP', 1),
('Raízes do Nordeste - Campinas Taquaral', 'Avenida Orosimbo Maia, 410', 'Campinas', 'SP', 1),
('Raízes do Nordeste - Campinas Campo Grande', 'Avenida John Boyd Dunlop, 980', 'Campinas', 'SP', 1),
('Raízes do Nordeste - Sumaré Centro', 'Rua Dom Barreto, 150', 'Sumaré', 'SP', 1),
('Raízes do Nordeste - Sumaré Rebouças', 'Avenida Rebouças, 460', 'Sumaré', 'SP', 1),
('Raízes do Nordeste - Sumaré Amizade', 'Avenida da Amizade, 520', 'Sumaré', 'SP', 1),
('Raízes do Nordeste - Hortolândia Centro', 'Rua Luiz Camilo de Camargo, 330', 'Hortolândia', 'SP', 1),
('Raízes do Nordeste - Hortolândia Olívio', 'Avenida Olívio Franceschini, 710', 'Hortolândia', 'SP', 1),
('Raízes do Nordeste - Hortolândia Santana', 'Avenida Santana, 890', 'Hortolândia', 'SP', 1);

-- =========================================================
-- 3) CATEGORIAS
-- =========================================================
INSERT INTO catalogo_categoria
(nome)
VALUES
('Cuscuz'),
('Tapiocas'),
('Bebidas'),
('Sobremesas'),
('Pratos Executivos'),
('Lanches'),
('Cafés'),
('Sucos'),
('Combos'),
('Salgados');

-- =========================================================
-- 4) PRODUTOS
-- =========================================================
INSERT INTO catalogo_produto
(nome, descricao, preco, categoria_id, imagem, ativo)
VALUES
('Cuscuz Recheado de Frango', 'Cuscuz nordestino recheado com frango temperado.', 18.90, 1, NULL, 1),
('Tapioca de Carne Seca', 'Tapioca recheada com carne seca e queijo coalho.', 21.50, 2, NULL, 1),
('Refrigerante Lata', 'Refrigerante gelado 350ml.', 6.50, 3, NULL, 1),
('Bolo de Macaxeira', 'Fatia de bolo de macaxeira artesanal.', 9.90, 4, NULL, 1),
('Prato Nordestino Completo', 'Arroz, feijão, carne de sol e acompanhamentos.', 29.90, 5, NULL, 1),
('Sanduíche de Pernil', 'Pão macio com pernil temperado.', 17.00, 6, NULL, 1),
('Café Coado', 'Café coado na hora 200ml.', 5.00, 7, NULL, 1),
('Suco de Caju', 'Suco natural de caju 300ml.', 8.50, 8, NULL, 1),
('Combo Café da Manhã', 'Cuscuz simples, café coado e suco pequeno.', 22.00, 9, NULL, 1),
('Esfiha Nordestina', 'Salgado assado com recheio especial.', 7.50, 10, NULL, 1);

-- =========================================================
-- 5) ESTOQUE POR LOJA
-- =========================================================
INSERT INTO catalogo_estoqueloja
(loja_id, produto_id, quantidade, disponivel)
VALUES
(1, 1, 35, 1),
(2, 2, 28, 1),
(3, 3, 60, 1),
(4, 4, 22, 1),
(5, 5, 18, 1),
(6, 6, 26, 1),
(7, 7, 80, 1),
(8, 8, 40, 1),
(9, 9, 15, 1),
(10, 10, 50, 1);

-- =========================================================
-- 6) PEDIDOS
-- =========================================================
INSERT INTO pedidos_pedido
(cliente_id, loja_id, canal, status, valor_total, criado_em, atualizado_em)
VALUES
(1, 1, 'WEB', 'CRIADO', 18.90, NOW(), NOW()),
(2, 2, 'MOBILE', 'PAGO', 21.50, NOW(), NOW()),
(3, 3, 'TOTEM', 'EM_PREPARO', 6.50, NOW(), NOW()),
(4, 4, 'BALCAO', 'PRONTO', 9.90, NOW(), NOW()),
(5, 5, 'WEB', 'ENTREGUE', 29.90, NOW(), NOW()),
(6, 6, 'MOBILE', 'CRIADO', 17.00, NOW(), NOW()),
(7, 7, 'WEB', 'PAGO', 5.00, NOW(), NOW()),
(8, 8, 'TOTEM', 'EM_PREPARO', 8.50, NOW(), NOW()),
(9, 9, 'BALCAO', 'PRONTO', 22.00, NOW(), NOW()),
(10, 10, 'WEB', 'ENTREGUE', 7.50, NOW(), NOW());

-- =========================================================
-- 7) ITENS DO PEDIDO
-- =========================================================
INSERT INTO pedidos_itempedido
(pedido_id, produto_id, quantidade, preco_unitario, subtotal)
VALUES
(1, 1, 1, 18.90, 18.90),
(2, 2, 1, 21.50, 21.50),
(3, 3, 1, 6.50, 6.50),
(4, 4, 1, 9.90, 9.90),
(5, 5, 1, 29.90, 29.90),
(6, 6, 1, 17.00, 17.00),
(7, 7, 1, 5.00, 5.00),
(8, 8, 1, 8.50, 8.50),
(9, 9, 1, 22.00, 22.00),
(10, 10, 1, 7.50, 7.50);

-- =========================================================
-- 8) PAGAMENTOS
-- =========================================================
INSERT INTO pagamentos_pagamento
(pedido_id, metodo, status, valor, transacao_id, criado_em)
VALUES
(1, 'PIX', 'PENDENTE', 18.90, 'TXN0001', NOW()),
(2, 'CARTAO', 'APROVADO', 21.50, 'TXN0002', NOW()),
(3, 'DINHEIRO', 'PENDENTE', 6.50, 'TXN0003', NOW()),
(4, 'PIX', 'APROVADO', 9.90, 'TXN0004', NOW()),
(5, 'CARTAO', 'APROVADO', 29.90, 'TXN0005', NOW()),
(6, 'PIX', 'PENDENTE', 17.00, 'TXN0006', NOW()),
(7, 'DINHEIRO', 'APROVADO', 5.00, 'TXN0007', NOW()),
(8, 'CARTAO', 'PENDENTE', 8.50, 'TXN0008', NOW()),
(9, 'PIX', 'APROVADO', 22.00, 'TXN0009', NOW()),
(10, 'DINHEIRO', 'APROVADO', 7.50, 'TXN0010', NOW());

-- =========================================================
-- 9) FIDELIDADE
-- =========================================================
INSERT INTO fidelidade_fidelidade
(cliente_id, pontos)
VALUES
(1, 10),
(2, 20),
(3, 15),
(4, 30),
(5, 50),
(6, 12),
(7, 8),
(8, 25),
(9, 18),
(10, 40);

DELETE FROM catalogo_estoqueloja WHERE id > 0;

INSERT INTO catalogo_estoqueloja (quantidade, disponivel, loja_id, produto_id) VALUES

-- Loja 1
(35,1,1,1),(28,1,1,2),(42,1,1,3),(15,1,1,4),(12,1,1,5),(18,1,1,6),(50,1,1,7),(22,1,1,8),(9,1,1,9),(30,1,1,10),

-- Loja 2
(30,1,2,1),(25,1,2,2),(40,1,2,3),(18,1,2,4),(11,1,2,5),(20,1,2,6),(45,1,2,7),(24,1,2,8),(8,1,2,9),(28,1,2,10),

-- Loja 3
(32,1,3,1),(27,1,3,2),(38,1,3,3),(16,1,3,4),(13,1,3,5),(22,1,3,6),(48,1,3,7),(21,1,3,8),(7,1,3,9),(29,1,3,10),

-- Loja 4
(29,1,4,1),(26,1,4,2),(36,1,4,3),(14,1,4,4),(10,1,4,5),(19,1,4,6),(43,1,4,7),(20,1,4,8),(6,1,4,9),(25,1,4,10),

-- Loja 5
(31,1,5,1),(24,1,5,2),(39,1,5,3),(17,1,5,4),(12,1,5,5),(21,1,5,6),(46,1,5,7),(23,1,5,8),(9,1,5,9),(27,1,5,10),

-- Loja 6
(28,1,6,1),(22,1,6,2),(37,1,6,3),(15,1,6,4),(8,1,6,5),(18,1,6,6),(44,1,6,7),(19,1,6,8),(7,1,6,9),(26,1,6,10),

-- Loja 7
(33,1,7,1),(23,1,7,2),(41,1,7,3),(13,1,7,4),(11,1,7,5),(24,1,7,6),(49,1,7,7),(18,1,7,8),(8,1,7,9),(31,1,7,10),

-- Loja 8
(27,1,8,1),(21,1,8,2),(35,1,8,3),(16,1,8,4),(10,1,8,5),(17,1,8,6),(41,1,8,7),(22,1,8,8),(6,1,8,9),(28,1,8,10),

-- Loja 9
(34,1,9,1),(29,1,9,2),(33,1,9,3),(18,1,9,4),(12,1,9,5),(20,1,9,6),(47,1,9,7),(25,1,9,8),(9,1,9,9),(32,1,9,10),

-- Loja 10
(26,1,10,1),(20,1,10,2),(31,1,10,3),(12,1,10,4),(7,1,10,5),(15,1,10,6),(39,1,10,7),(21,1,10,8),(5,1,10,9),(24,1,10,10),

-- Loja 11
(36,1,11,1),(30,1,11,2),(45,1,11,3),(19,1,11,4),(14,1,11,5),(26,1,11,6),(52,1,11,7),(27,1,11,8),(11,1,11,9),(35,1,11,10),

-- Loja 12
(25,1,12,1),(19,1,12,2),(32,1,12,3),(11,1,12,4),(6,1,12,5),(14,1,12,6),(38,1,12,7),(17,1,12,8),(4,1,12,9),(23,1,12,10);
COMMIT;