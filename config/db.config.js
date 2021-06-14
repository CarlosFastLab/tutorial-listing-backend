module.exports = {
    HOST: "ec2-54-197-100-79.compute-1.amazonaws.com",
    USER: "hbeifwwsixezml",
    PASSWORD: "6a907a8304c00b34128b75c74b2cf83beb820a1a944629e14d887c932598d647",
    DB: "dd17odemp2gvne",
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
        ssl: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};