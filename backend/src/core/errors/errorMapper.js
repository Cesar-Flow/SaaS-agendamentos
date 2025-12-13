const AppError = require("./AppError");
const handlePrismaError = require("./PrismaError");

module.exports = {
    mapError: (err) => {
        // Erro do Prisma
        if (err.code && err.code.startsWith("P")) {
            return handlePrismaError(err);
        }

        // Erro customizado (AppError)
        if (err instanceof AppError) {
            return err;
        }

        // Erro inesperado
        return new AppError("Erro interno no servidor", 500, "INTERNAL_ERROR");
    }
}