import { PreProcessHandler, Plugin, PluginContext, Schema } from 'dtsgenerator';
import ts from 'typescript';

const doNothing: Plugin = {
    meta: {
        name: 'do nothing',
        description: 'this plugin do nothing.',
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
