# Gridify interface1

A demo interface for gridify:

- frontend-only
- requires a modern browser: ES modules, no transpilation

Demo URL: https://gridify-interface1.lyondataviz.now.sh/

## Install and run locally

```bash
git clone git@github.com:LyonDataViz/gridify-interface1.git
cd gridify-interface1
npm install
npm run serve
```

## Deploy to now.sh

Deploy to a personal domain (gridify-interface1-[MYUSER].lyondataviz.now.sh):

```bash
npm run deploy
```

Deploy to the common demo page
(https://gridify-interface1.lyondataviz.now.sh/) - it requires to be part of the
[`lyondataviz` organization in now.sh](https://zeit.co/lyondataviz):

```bash
npm run deploy:common
```

Note that any push to the GitHub repository will also trigger a deployment on
now.sh (you will receive a mail with the URL and its aliases).
