const { PrismaClient } = require('@prisma/client');

// Use a global variable to avoid multiple instances during development
let prismadb;

if (!global.prisma) {
  prismadb = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    global.prisma = prismadb;
  }
} else {
  prismadb = global.prisma;
}

module.exports = { prismadb };