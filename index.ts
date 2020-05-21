import { PreProcessHandler, Plugin, PluginContext, Schema } from 'dtsgenerator';
import ts from 'typescript';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const doNothing: Plugin = {
    meta: {
        name: packageJson.name,
        version: packageJson.version,
        description: packageJson.description,
    },
    preProcess,
    postProcess,
};

async function preProcess(
    _pluginContext: PluginContext
): Promise<PreProcessHandler | undefined> {
    return (contents: Schema[]): Schema[] => {
        return contents;
    };
}

async function postProcess(
    _pluginContext: PluginContext
): Promise<ts.TransformerFactory<ts.SourceFile> | undefined> {
    return (_context: ts.TransformationContext) => (
        root: ts.SourceFile
    ): ts.SourceFile => {
        return root;
    };
}

export default doNothing;
