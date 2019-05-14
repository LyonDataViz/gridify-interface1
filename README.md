# Gridify interface1

An demo interface for gridify:

- frontend-only
- requires a modern browser: ES modules, no transpilation

Demo URL: https://gridify-inferface1.lyondataviz.now.sh/

## Install and run locally

```bash
git clone git@github.com:LyonDataViz/gridify-interface1.git
cd gridify-interface1
npm install
npm run serve
```

## Build and deploy to now.sh

Until we setup an automatic deploy from GitHub on every push, deploy to now.sh
must be done locally:

```bash
npm run deploy
```

The demo page https://gridify-inferface1.lyondataviz.now.sh/ should have been
updated (a build is automatically done locally before deploying).

Note: ensure you are member of the
[lyondataviz](https://zeit.co/teams/lyondataviz) team in now.sh.
