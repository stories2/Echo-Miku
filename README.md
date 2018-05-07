# Echo-Miku
Kakaotalk echo miku bot using firebase.

## Getting Started

Check this steemit [link.]() 

### Prerequisites

You need to install [Node.js >= 6.11.1](https://nodejs.org/en/) in your Computer.
And we are use Intellij >= 2017.3
Firebase sdk version is >= 3.18.2

Please install github desktop.

### Installing

First, you must clone this project.

```
git clone https://github.com/stories2/Echo-Miku.git
```

Or, just open this repo as github desktop app.

And open this folder using `Intellij`.

We are use firebase service. So you need to setup it.

```
npm install -g firebase-tools
```

After this, you just follow this [link](https://firebase.google.com/docs/functions/get-started?authuser=0).

## Running the tests

There is no test rule.

## Deployment

After coded if you want deploy to cloud server, please type it in terminal.
```
firebase deploy --only functions
```

## Run

If you want run this project locally, please type it in terminal.
```
sudo firebase serve --only functions
```
And this is how to deploy hosting
```
firebase deploy --only hosting
```

### Caution

Before you run locally, you must have service-account.json file.
It can download at `Firebase project site -> setting -> service account tab -> firebase admin sdk `

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
