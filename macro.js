const { createMacro } = require('babel-plugin-macros')
const babelPlugin = require('babel-plugin-styled-components').default

const styledComponentsMacro = ({
  references,
  state,
  babel: { types: t },
  config = {}
}) => {
  const program = state.file.path

  // replace `styled-components/macro` by `styled-components`
  // create a node for styled-components's imports
  const imports = t.importDeclaration([], t.stringLiteral('styled-components'))
  // and add it to top of the document
  program.node.body.unshift(imports)

  // references looks like this
  // { default: [path, path], css: [path], ... }
  Object.keys(references).forEach(refName => {
    // generate new identifier and add to imports
    let id
    if (refName === 'default') {
      id = program.scope.generateUidIdentifier('styled')
      imports.specifiers.push(t.importDefaultSpecifier(id))
    } else {
      id = program.scope.generateUidIdentifier(refName)
      imports.specifiers.push(t.importSpecifier(id, t.identifier(refName)))
    }

    // update references with the new identifiers
    references[refName].forEach(referencePath => {
      // eslint-disable-next-line no-param-reassign
      referencePath.node.name = id.name
    })
  })

  // apply babel-plugin-styled-components to the file
  const stateWithOpts = { ...state, opts: config }
  program.traverse(babelPlugin({ types: t }).visitor, stateWithOpts)
}

const configName = 'styledComponents'

module.exports = createMacro(styledComponentsMacro, { configName })
