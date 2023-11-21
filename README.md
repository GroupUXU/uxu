# UXU SYSTEM

The platform by UXU GROUP is a collection of tools and features that enable rapid development of new web systems based on a common design system.

## Demo Services

- [WTrasie.pl](https://wtrasie.pl/)
- [GetReturn.pl](https://www.getreturn.pl)

## Requirements

- Node 18.16.0 (use [NVM](https://github.com/nvm-sh/nvm))
- Yarn (any version - Yarn 3.x is included in the repo)

On Windows:

- use [NVM for Windows](https://github.com/coreybutler/nvm-windows)
- install [Visual C++ redistributable packages](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0) before running `yarn`

## Quick start

1. Create .env file within each application directory. You can use the provided example file named .env.example. Simply rename it from .env.example to .env, and it will function as intended.
1. Run commands:

```shell
# Run in project catalog to install dependencies
yarn
```

```shell
# Running project - Linux, macOS
# Replace appName with a real app name e.g. wtrasie
yarn appName
```