# vue-pure

This is an example of using Purescript to handle business logic in a Vue application. It uses `purs-loader` to incorporate Purescript compilation into the webpack build.

# Advantages
* All the benefits of static-typing, purity, and controlled effects
* Redux debug tools
* Vue ecosystem and tooling

# Setup
The actions, state, and reducers are written in Purescript. They can be found in the `state` directory.
Connecting this to Redux is done in `state/store.js`:
 * `reducer` catches the initialization case, where `state` is undefined, by calling the `rootReducer` with an `Initial` value.
 * `standardizeAction` intercepts incoming actions to assign them a name (following "flux-standard-action")

# Dispatching
Each smart component has a corresponding `.purs` file that will handle mapping the state and dispatch to props. An example is `components/Counter/Counter.purs`, where the state and actions are exposed.
Action creators are placed in their corresponding `Action.purs` file and can be invoked inside `mapDispatchToProps`.

## Project setup
```
yarn install
spago install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
