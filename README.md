# Peer DNS ![NPM Downloads](https://img.shields.io/npm/dw/peer-dns)
Another socket server for signaling peers


## Description
Server that listen 4 events on sockets.
- Query: Event to join peer in a room
- Link: Event to request offers and answer them
- Candidates: Event to export/import candidates
- Exit: To leave from a room

## Env vars

- HOST: Variable to know the host of the server to perform a fetch to mantaine alive the server on free instances

## Installation

``` bash
npm install peer-dns
```
