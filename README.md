# Projeto Básico Serverless Framework com Typescript

## Install

```bash
npm install
```

```bash
npx husky install
npx husky add .husky/pre-commit "npm run lint:fix && npm run format:fix"
npx husky add .husky/commit-msg "npx --no -- commitlint --edit"
npx husky add .husky/pre-push "npm test"
```
