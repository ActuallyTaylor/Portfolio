---
title: Properly installing PostgreSQL on macOS 
slug: macOSPostgres
description: Installing Postgres on macOS and exposing PostgresSQL tools to the command line.
author: Taylor Lineman
date: 2026-04-15T00:00:00.000Z
series: misc
---

There are a lot of ways to *"properly"* install PostgreSQL, the fastest and by far easiest is to just use the [Postgres App](https://postgresapp.com/). I prefer to install it using brew:

```zsh
brew install --cask postgres-app
```

Just installing the Postgres App is *almost* enough to get full PostgreSQL functionality on macOS. However, the PostgreSQL command line tools (`psql`, `pg_dump`, etc.) are not automatically exposed to the shell. To expose them, just add the `bin` folder from the PostgreSQL App into your path. 

I just added this, into my `.zshrc`, but it should also work for bash or fish!

```zsh
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
```