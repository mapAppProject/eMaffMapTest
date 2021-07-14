CREATE TABLE [dbo].[Nouchi] (
    [MapDataId]      INT           IDENTITY (1, 1) NOT NULL,
    [Chiban]       NVARCHAR (50) NULL,
    [Sakuki]      NVARCHAR (50) NULL,
    [SakumotsuMei]      NVARCHAR (50) NULL,
    [Chimoku] NVARCHAR (50)      NULL,
    [Area] INT      NULL,
    PRIMARY KEY CLUSTERED ([MapDataId] ASC)
)