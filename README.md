# skDeno-ing

Doing stuff with deno.js

#### Main Features
* Secure by default. No file, network, or environment access, unless explicitly enabled.
* Supports TypeScript out of the box.
* Ships only a single executable file.

#### Steps to run the helloworld in deno
* install deno using Windows powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
* check version
 `deno --version`
* create a file named helloworld.ts and write `console.log("Hello World");`
* run the app as `deno run helloworld.ts`

#### Get response from an HTTP request by using fetch
* `const res = await fetch(url)`
* You need to run with the correct permission flag i.e `--allow-net`
* run the app as `deno run --allow-net fetch.ts`

#### Permissions
* http => `--allow-net`
* file => `--allow-read`