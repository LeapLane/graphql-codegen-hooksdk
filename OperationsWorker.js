const { buildOperationNodeForField } = require("@graphql-tools/utils");
const { camelCase } = require("lodash");

module.exports = {
  BuildOperation: (schema, field, kind, depth) => {
    const operation = buildOperationNodeForField({
      schema,
      field,
      kind,
      depthLimit: depth,
    });

    removeUnusedVariables(operation);
    fixVariableNameDefs(operation);
    addIncludeVariables(operation);

    return operation;
  },
};

const addIncludeVariables = (operation) => {
  const rootFields = operation.selectionSet?.selections?.[0]?.selectionSet;
  if (rootFields) {
    visitSelectionSetAndAddIncludeVariables(operation, rootFields, [
      "include",
      operation.selectionSet?.selections?.[0]?.name.value,
    ]);
  }
};

const visitSelectionSetAndAddIncludeVariables = (
  operation,
  selectionSet,
  baseNames
) => {
  selectionSet.selections.map((selection) => {
    if (!selection.directives) {
      selection.directives = [];
    }
    if (!!selection.selectionSet) {
      const names = [...baseNames, selection.name.value];
      const varName = camelCase(names.join("_"));

      pushIncludeVariableToOperation(operation, varName);
      pushDirectiveToField(selection, varName);

      visitSelectionSetAndAddIncludeVariables(
        operation,
        selection.selectionSet,
        names
      );
    }
  });
};

const pushIncludeVariableToOperation = (operation, name) => {
  operation.variableDefinitions.push({
    kind: "VariableDefinition",
    variable: {
      kind: "Variable",
      name: { kind: "Name", value: name },
    },
    type: {
      kind: "NonNullType",
      type: {
        kind: "NamedType",
        name: { kind: "Name", value: "Boolean" },
      },
    },
    defaultValue: {
      kind: "BooleanValue",
      value: false,
    },
  });
};

const pushDirectiveToField = (field, name) => {
  if (!field.directives) {
    field.directives = [];
  }

  field.directives.push({
    kind: "Directive",
    name: {
      kind: "Name",
      value: "include",
    },
    arguments: [
      {
        kind: "Argument",
        name: {
          kind: "Name",
          value: "if",
        },
        value: {
          kind: "Variable",
          name: {
            kind: "Name",
            value: name,
          },
        },
      },
    ],
  });
};

const removeUnusedVariables = (operation) => {
  const newVarDefs = [];
  for (let varDef in operation.variableDefinitions) {
    const varName = operation.variableDefinitions[varDef].variable.name.value;
    if (JSON.stringify(operation.selectionSet).indexOf(`${varName}`) !== -1) {
      newVarDefs.push(operation.variableDefinitions[varDef]);
    }
  }

  operation.variableDefinitions = newVarDefs;
};

const fixVariableNameDefs = (operation) => {
  for (let varDef in operation.variableDefinitions) {
    operation.variableDefinitions[varDef].variable.name.value = camelCase(
      operation.variableDefinitions[varDef].variable.name.value
    );
  }
};
