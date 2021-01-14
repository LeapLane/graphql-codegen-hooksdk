const { print, Kind } = require("graphql");
const { BuildOperation } = require("./OperationsWorker.js");
const { codegen } = require("@graphql-codegen/core");
const tsPlugin = require("@graphql-codegen/typescript");
const tsPluginOperations = require("@graphql-codegen/typescript-operations");
const tsPluginApollo = require("@graphql-codegen/typescript-react-apollo");

module.exports = {
  plugin: async (schema, documents, config, info) => {
    const depth = config.depth || 2;

    const rootTypeMap = {
      query: schema.getQueryType(),
      mutation: schema.getMutationType(),
    };

    const sources = [];
    for (const operationType in rootTypeMap) {
      const rootType = rootTypeMap[operationType];
      if (rootType) {
        for (const fieldName in rootType.getFields()) {
          const operation = BuildOperation(
            schema,
            fieldName,
            operationType,
            depth
          );
          const document = {
            kind: Kind.DOCUMENT,
            definitions: [operation],
          };
          sources.push({
            document,
            rawSDL: print(document),
            location: `${fieldName}_${operationType}.graphql`,
          });
        }
      }
    }

    const output = await codegen({
      filename: info.outputFile,
      pluginMap: {
        typescript: tsPlugin,
        typescriptOperations: tsPluginOperations,
        typescriptReactApollo: tsPluginApollo,
      },
      documents: sources,
      skipDocumentsValidation: true,
      schema: undefined,
      schemaAst: schema,
      plugins: [
        {
          typescript: {
            ignoreEnumValuesFromSchema: true,
          },
        },
        {
          typescriptOperations: {},
        },
        {
          typescriptReactApollo: {},
        },
      ],
      config: {
        avoidOptionals: false,
        typesPrefix: "I",
        withHooks: true,
        reactApolloVersion: 3,
        withResultType: true,
        documentMode: "documentNode",
      },
    });

    return output;
  },
};
