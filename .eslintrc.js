module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    curly                 : [ 'error', 'multi', 'consistent' ],
    complexity            : [ 'error', 10 ],

    'promise/avoid-new'             : 'off',
    'require-await'                 : 'error',
    'prefer-promise-reject-errors'  : 'error',
    'no-return-await'               : 'error',
    'no-undef'                      : 'error',
    'no-delete-var'                 : 'error',
    'handle-callback-err'           : 'error',
    'global-require'                : 'error',
    'block-spacing'                 : 'error',
    'no-multiple-empty-lines'       : 'error',
    'no-multi-assign'               : 'error',
    'no-whitespace-before-property' : 'error',
    'no-nested-ternary'             : 'off',
    'prefer-const'                  : 'error',
    'no-useless-computed-key'       : 'error',
    'no-useless-constructor'        : 'error',
    'no-useless-rename'             : 'error',
    'arrow-spacing'                 : 'error',
    'no-var'                        : 'error',

    'arrow-body-style'         : [ 'error' ],
    'max-statements'           : [ 'error', 15 ],
    'max-params'               : [ 'error', 3 ],
    'max-nested-callbacks'     : [ 'error', 3 ],
    'max-depth'                : [ 'error', 4 ],
    'dot-location'             : [ 'error', 'property' ],
    'wrap-iife'                : [ 'error', 'any' ],
    'comma-style'              : [ 'error', 'last' ],
    'comma-dangle'             : [ 'error', 'never' ],
    'func-call-spacing'        : [ 'error', 'never' ],
    'object-curly-spacing'     : [ 'error', 'always' ],
    'quote-props'              : [ 'error', 'as-needed' ],
    'padded-blocks'            : [ 'error', 'never' ],
    'space-in-parens'          : [ 'error', 'never' ],
    'object-shorthand'         : [ 'error', 'always' ],
    'space-before-blocks'      : [ 'error', 'never' ],
    'computed-property-spacing': [ 'error', 'never' ],

    quotes    : [ 'error', 'single' ],

    camelcase : [ 'error', { properties: 'always' } ],

    'array-bracket-spacing': [ 'error', 'always'    , { singleValue: true } ],
    'brace-style'          : [ 'error', 'stroustrup', { allowSingleLine: true } ],
    'comma-spacing'        : [ 'error', { before: false, after : true } ],
    'no-trailing-spaces'   : [ 'error', { skipBlankLines: true } ],
    'object-curly-newline' : [ 'error', { consistent: true } ],
    'no-duplicate-imports' : [ 'error', { includeExports: true } ],
    'prefer-arrow-callback': [ 'error', { allowNamedFunctions: true } ],

    'func-style' : [ 'error', 'declaration', { allowArrowFunctions: true } ],
    'key-spacing': [ 'error', { align: { beforeColon: false, afterColon : true, on: 'colon', mode: 'strict' } } ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev     : [ 'const', 'let', 'var' ], next: '*' },
      { blankLine: 'any'   , prev     : [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] }
    ],
  indent: ['error', 2,
    { VariableDeclarator: 'first',
      "ignoreComments": true,
      "ImportDeclaration": "first",
      "ObjectExpression": "first",
      "ArrayExpression": "first",
      "flatTernaryExpressions": false,
      "FunctionDeclaration": {
        "parameters": "first"
      }
    }
  ],
  }
}
