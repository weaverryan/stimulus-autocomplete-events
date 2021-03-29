import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import { Autocomplete } from 'stimulus-autocomplete'

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
application.register('autocomplete', Autocomplete);
