/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-mudules')([
//   '@mui/material',
//   '@mui/system',
//   '@mui/icons-material',
// ])

// module.exports = withTM({
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@mui/styled-engine': '@mui/styled-engine-sc',
//     }
//   }
// })
module.exports = {
  reactStrictMode: true,
};
