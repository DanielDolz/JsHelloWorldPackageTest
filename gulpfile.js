const elixir = require('laravel-elixir');

//ARROW FUNCTIONS
elixir( mix => {
        mix.webpack('app.js')
    }
)
