# learn-to-build-react-package

- Create folder

```sh
mkdir learn-to-build-react-package
```

- Change folder

```sh
cd learn-to-build-react-package
```

- Open with VSCode

```sh
code .
```

- NPM init

```sh
npm init -y
```

- Update package.json file:

```json
{
  "name": "learn-to-build-react-package",
  "private": true,
  "description": "Learn to to build react package",
  "workspaces": [
    "packages/*"
  ]
}
```

- Two important points:

  - `private` should be turned to `true`
  - `workspaces` contains workspace paths
  - I use `packages/*` to provide that my packages should be implemented under the `packages` folder

- Create new folder named `packages` under the root folder

```sh
mkdir packages
```

- Change directory to `./packages`:

```sh
cd ./packages
```

- Create your package folder in `./packages`

```sh
mkdir my-react-package
```

- Npm init your package

```sh
npm init -y
```

- Install `lerna` for `learn-to-build-react-package` workspace

```sh
yarn add -W -D lerna
```

- Set up `lerna` by creating file `lerna.json`

```json
{
  "npmClient": "yarn",
  "useWorkspaces": true,
  "version": "independent"
}
```

- Notes:
  - `npmClient`: your client npm or yarn
  - `useWorkspaces` use workspace flag
  - `version`: current version of your repository. (I choose `independent` to make every single package in my workspace has an independent version, not the same)

- Install `peerDependencies` for your react package

  I will install `react` and `react-dom`
  
  ```sh
  npx lerna add react --scope my-react-package --peer
  
  lerna notice cli v4.0.0
  lerna info versioning independent
  lerna notice filter including "my-react-package"
  lerna info filter [ 'my-react-package' ]
  lerna info Adding react in 1 package
  lerna info bootstrap root only
  yarn install v1.22.4
  [1/4] Resolving packages...
  [2/4] Fetching packages...
  [3/4] Linking dependencies...
  warning " > my-react-package@1.0.0" has unmet peer dependency "react@^17.0.2".
  [4/4] Building fresh packages...
  Done in 5.61s.
  ```
  
  ```sh
  npx lerna add react-dom --scope my-react-package --peer

  lerna notice cli v4.0.0
  lerna info versioning independent
  lerna notice filter including "my-react-package"
  lerna info filter [ 'my-react-package' ]
  lerna info Adding react-dom in 1 package
  lerna info bootstrap root only
  yarn install v1.22.4
  [1/4] Resolving packages...
  [2/4] Fetching packages...
  [3/4] Linking dependencies...
  warning " > my-react-package@1.0.0" has unmet peer dependency "react@^17.0.2".
  warning " > my-react-package@1.0.0" has unmet peer dependency "react-dom@^17.0.2".
  [4/4] Building fresh packages...
  Done in 6.25s.
  ```

- Now your react package has peerDependencies as below:

  ```json
  "peerDependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
  ```

- add tsconfig for your react package

TODO: add tsconfig sample

- install `@types/react` & `@types/react` for workspace

  ```sh
  yarn add -D -W @types/react @types/react
  ```

- Install devDependency `typescript`

  ```sh
  yarn add -D typescript
  ```

- Configure typescript `tsconfig.json`
- write your first component
- bundle your react package with rollup
- Rollup configuration
  
  ```js
  import typescript from 'rollup-plugin-typescript2';
  import pkg from './package.json';

  export default {
    input: 'src/index.ts',
    output: [
      {
        file: "./lib/cjs/index.js",
        format: 'cjs',
      },
      {
        file: "./lib/esm/index.js",
        format: 'es',
      },
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
    ],
  };
  ```

- write example react app and use your exported react library

- add script to build lib with rollup

  Reference: [Rollup commands](https://rollupjs.org/guide/en/#command-line-flags)

  ```json
  {
    "scripts": {
      "build": "rollup -c rollup.config.js",
      "watch": "rollup -cw rollup.config.js",
    }
  }
  ```
