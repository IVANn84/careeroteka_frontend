module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": "eslint --fix -- ",
  'src/**/*.{ts,tsx}': () => 'tsc --noEmit',
}