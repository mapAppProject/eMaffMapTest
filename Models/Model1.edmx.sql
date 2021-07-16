
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/15/2021 15:44:44
-- Generated from EDMX file: C:\Users\TPC-1\Downloads\testAppService-main\testAppService-main\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [SampleDatabase];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_NouchiOwner]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[OwnerSet] DROP CONSTRAINT [FK_NouchiOwner];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[NouchiSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[NouchiSet];
GO
IF OBJECT_ID(N'[dbo].[OwnerSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[OwnerSet];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Nouchi'
CREATE TABLE [dbo].[Nouchi] (
    [MapDataID] int IDENTITY(1,1) NOT NULL,
    [Chiban] nvarchar(50)  NULL,
    [Sakuki] nvarchar(50)  NULL,
    [SakumotsuMei] nvarchar(50)  NULL,
    [Chimoku] nvarchar(50)  NULL,
    [Area] float  NULL
);
GO

-- Creating table 'OwnerSet'
CREATE TABLE [dbo].[OwnerSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Ownername] nvarchar(max)  NOT NULL,
    [NouchiMapDataID] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [MapDataID] in table 'Nouchi'
ALTER TABLE [dbo].[Nouchi]
ADD CONSTRAINT [PK_Nouchi]
    PRIMARY KEY CLUSTERED ([MapDataID] ASC);
GO

-- Creating primary key on [Id] in table 'OwnerSet'
ALTER TABLE [dbo].[OwnerSet]
ADD CONSTRAINT [PK_OwnerSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [NouchiMapDataID] in table 'OwnerSet'
ALTER TABLE [dbo].[OwnerSet]
ADD CONSTRAINT [FK_NouchiOwner]
    FOREIGN KEY ([NouchiMapDataID])
    REFERENCES [dbo].[Nouchi]
        ([MapDataID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_NouchiOwner'
CREATE INDEX [IX_FK_NouchiOwner]
ON [dbo].[OwnerSet]
    ([NouchiMapDataID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------