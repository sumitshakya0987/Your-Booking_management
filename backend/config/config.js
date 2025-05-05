require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5ct',
  mongoURI: process.env.MONGO_URI || 'mongodb+srv://admin:food1611@cluster0.yc9zu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  port: process.env.PORT || 5000,
};
