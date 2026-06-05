-- CreateTable
CREATE TABLE `filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(200) NOT NULL,
    `sinopse` TEXT NULL,
    `genero` VARCHAR(100) NULL,
    `ano_lancamento` INTEGER NULL,
    `diretor` VARCHAR(150) NULL,
    `duracao_minutos` INTEGER NULL,
    `classificacao` VARCHAR(10) NULL,
    `nota` DECIMAL(3, 1) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
