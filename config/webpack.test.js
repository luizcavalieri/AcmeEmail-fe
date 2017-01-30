var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },

    module: {
        loaders: [
            /**
             * Enable inline source maps for code coverage report.
             *
             * See project repository for details / configuration reference:
             * https://github.com/s-panferov/awesome-typescript-loader
             */
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                query: {
                    sourceMap: false,
                    inlineSourceMap: true
                }
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ],
        postLoaders: [
            /**
             * Instruments TS source files for subsequent code coverage.
             * See https://github.com/deepsweet/istanbul-instrumenter-loader
             */
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    'node_modules',
                    /\.(e2e|spec)\.ts$/
                ]
            }
        ]
    }
};
