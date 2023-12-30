export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Example API",
      version: "1.0.0",
      description: "A simple express library API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',  // Puede variar según el formato del token
        },
      },
    },
  },
  apis: ["./src/routes/**/*.js"],
};
