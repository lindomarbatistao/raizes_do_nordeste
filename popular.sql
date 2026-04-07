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

COMMIT;