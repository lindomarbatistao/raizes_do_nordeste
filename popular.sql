create database raizes;

USE raizes;

SET SQL_SAFE_UPDATES = 0;
SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM pagamentos_pagamento;
DELETE FROM pedidos_itempedido;
DELETE FROM pedidos_pedido;
DELETE FROM fidelidade_fidelidade;
DELETE FROM catalogo_estoqueloja;
DELETE FROM catalogo_produto;
DELETE FROM catalogo_categoria;
DELETE FROM lojas_loja;
DELETE FROM usuarios_usuario;

ALTER TABLE usuarios_usuario AUTO_INCREMENT = 1;
ALTER TABLE lojas_loja AUTO_INCREMENT = 1;
ALTER TABLE catalogo_categoria AUTO_INCREMENT = 1;
ALTER TABLE catalogo_produto AUTO_INCREMENT = 1;
ALTER TABLE catalogo_estoqueloja AUTO_INCREMENT = 1;
ALTER TABLE pedidos_pedido AUTO_INCREMENT = 1;
ALTER TABLE pedidos_itempedido AUTO_INCREMENT = 1;
ALTER TABLE pagamentos_pagamento AUTO_INCREMENT = 1;
ALTER TABLE fidelidade_fidelidade AUTO_INCREMENT = 1;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO usuarios_usuario
(password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined, tipo, telefone, cpf)
VALUES
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente01', 'João', 'Silva', 'cliente01@email.com', 0, 1, NOW(), 'CLIENTE', '19999990001', '11111111111'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente02', 'Maria', 'Souza', 'cliente02@email.com', 0, 1, NOW(), 'CLIENTE', '19999990002', '22222222222'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente03', 'Pedro', 'Oliveira', 'cliente03@email.com', 0, 1, NOW(), 'CLIENTE', '19999990003', '33333333333'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente04', 'Ana', 'Costa', 'cliente04@email.com', 0, 1, NOW(), 'CLIENTE', '19999990004', '44444444444'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente05', 'Carlos', 'Santos', 'cliente05@email.com', 0, 1, NOW(), 'CLIENTE', '19999990005', '55555555555'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente06', 'Fernanda', 'Lima', 'cliente06@email.com', 0, 1, NOW(), 'CLIENTE', '19999990006', '66666666666'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente07', 'Ricardo', 'Almeida', 'cliente07@email.com', 0, 1, NOW(), 'CLIENTE', '19999990007', '77777777777'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente08', 'Juliana', 'Rocha', 'cliente08@email.com', 0, 1, NOW(), 'CLIENTE', '19999990008', '88888888888'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente09', 'Marcos', 'Pereira', 'cliente09@email.com', 0, 1, NOW(), 'CLIENTE', '19999990009', '99999999999'),
('pbkdf2_sha256$1200000$7JocHu6S2vGbxvR8...', NULL, 0, 'cliente10', 'Patrícia', 'Mendes', 'cliente10@email.com', 0, 1, NOW(), 'CLIENTE', '19999990010', '10101010101');

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

INSERT INTO catalogo_categoria (nome)
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

INSERT INTO catalogo_estoqueloja
(quantidade, disponivel, loja_id, produto_id)
VALUES
(35,1,1,1),(28,1,1,2),(42,1,1,3),(15,1,1,4),(12,1,1,5),(18,1,1,6),(50,1,1,7),(22,1,1,8),(9,1,1,9),(30,1,1,10),
(35,1,2,1),(42,1,2,2),(42,1,2,3),(15,1,2,4),(12,1,2,5),(18,1,2,6),(50,1,2,7),(22,1,2,8),(9,1,2,9),(30,1,2,10),
(35,1,3,1),(28,1,3,2),(42,1,3,3),(15,1,3,4),(12,1,3,5),(18,1,3,6),(50,1,3,7),(22,1,3,8),(9,1,3,9),(30,1,3,10),
(35,1,4,1),(28,1,4,2),(42,1,4,3),(42,1,4,4),(12,1,4,5),(18,1,4,6),(50,1,4,7),(22,1,4,8),(9,1,4,9),(30,1,4,10),
(35,1,5,1),(28,1,5,2),(42,1,5,3),(15,1,5,4),(42,1,5,5),(18,1,5,6),(50,1,5,7),(22,1,5,8),(9,1,5,9),(30,1,5,10),
(35,1,6,1),(28,1,6,2),(42,1,6,3),(15,1,6,4),(12,1,6,5),(42,1,6,6),(50,1,6,7),(22,1,6,8),(9,1,6,9),(30,1,6,10),
(35,1,7,1),(28,1,7,2),(42,1,7,3),(15,1,7,4),(12,1,7,5),(18,1,7,6),(42,1,7,7),(22,1,7,8),(9,1,7,9),(30,1,7,10),
(35,1,8,1),(28,1,8,2),(42,1,8,3),(15,1,8,4),(12,1,8,5),(18,1,8,6),(50,1,8,7),(42,1,8,8),(9,1,8,9),(30,1,8,10),
(35,1,9,1),(28,1,9,2),(42,1,9,3),(15,1,9,4),(12,1,9,5),(18,1,9,6),(50,1,9,7),(22,1,9,8),(42,1,9,9),(30,1,9,10),
(35,1,10,1),(28,1,10,2),(42,1,10,3),(15,1,10,4),(12,1,10,5),(18,1,10,6),(50,1,10,7),(22,1,10,8),(9,1,10,9),(30,1,10,10);

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

SET SQL_SAFE_UPDATES = 1;

COMMIT;

SELECT COUNT(*) AS total_usuarios FROM usuarios_usuario;
SELECT COUNT(*) AS total_lojas FROM lojas_loja;
SELECT COUNT(*) AS total_categorias FROM catalogo_categoria;
SELECT COUNT(*) AS total_produtos FROM catalogo_produto;
SELECT COUNT(*) AS total_estoque FROM catalogo_estoqueloja;
SELECT COUNT(*) AS total_pedidos FROM pedidos_pedido;