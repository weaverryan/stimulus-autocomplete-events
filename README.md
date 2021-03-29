# stimulus-autocomplete with Events

For PR: https://github.com/afcapel/stimulus-autocomplete/pull/61

## Setup

1) `yarn install`

2) Build the dist files for the forked `stimulus-autocomplete`:

```
cd node_modules/stimulus-autocomplete
yarn
yarn build
cd ../..
```

3) `yarn start`

## Details

This shows off the different event behavior, and how it can be leveraged
by another controller (i.e. `src/controllers/autocomplete-transition_controller.js`)
to introduce CSS transitions.

Important files:

* `index.html`: the basic elements and `data-controller`
* `src/index.js`: wires the Stimulus controllers
* `src/controllers/autocomplete-transition_controller.js`: takes advantage of the `toggle` event and uses to add the transitions
* `/suggestions.html`: a static set of results used by autocomplete
