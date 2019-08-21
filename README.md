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

Deploy to a personal domain (gridify-interface1-[MYNOWUSER].lyondataviz.now.sh):

```bash
npm run deploy
```

Note that any push to the GitHub repository will also trigger a deploy on now.sh
(you will receive a mail with the URL and its aliases):

- gridify-interface1.[MYNOWUSER].now.sh
- gridify-interface1-git-master.[MYNOWUSER].now.sh

You may also deploy the common demo page
(https://gridify-interface1.lyondataviz.now.sh/), provided you are part of the
[`lyondataviz` organization in now.sh](https://zeit.co/lyondataviz):

```bash
npm run deploy:common
```

As of today, there is
[no GitHub hook to deploy to that common page](https://spectrum.chat/zeit/now/how-to-automatically-deploy-master-to-staging-target-when-pushing-to-github~52a59e75-6cb7-41a3-99ab-34d597f03c30?m=MTU1Nzg2NTk5MjEyMw==),
the only way is to manually launch from command line.
