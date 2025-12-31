const { JwtProvider } = require('@providers');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: "Token não encontrado" });

    const [ , token ] = authHeader.split(" ");
    const decoded = JwtProvider.verify(token);

    if (!decoded) return res.status(401).json({ error: "Token inválido" });

    req.user = decoded;
    next();
}