const mapError = require("./errorMapper");

module.exports = {
    errorMiddleware: (err, req, res, next) => {
        const mapped = mapError(err);

        return res.status(mapped.status).json({
            success: false,
            message: mapped.message,
            code: mapped.code,
        });
    }
};
