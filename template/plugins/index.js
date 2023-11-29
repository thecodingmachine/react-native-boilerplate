const prompts = require('prompts');
const typescriptPlugin = require('./compile-js');
const printSuccessPlugin = require('./printSuccess');

// List of plugin to apply (ordered)
const plugins = [typescriptPlugin, printSuccessPlugin];

/**
 * @typedef {Object} Plugin
 * @property promptsOptions {Object|null} the plugin prompt property
 * @property apply {Function} the refactoring to apply to the boilerplate
 */

/**
 * Apply a plugin
 * @param name {string}
 * @param plugin {Plugin}
 * @param response {Object} previous response
 *
 * @return {Promise<*>}
 */
async function applyPlugin(name, plugin, response) {
	if (!plugin.promptsOptions) {
		await plugin.apply(null, response);
		return { [name]: null, ...response };
	}
	const { value } = await prompts({ ...plugin.promptsOptions, name: 'value' });
	await plugin.apply(value, response);
	return { [name]: value, ...response };
}

module.exports = {
	/**
	 * Apply all plugin in the order of plugin
	 * @return {Promise<{apply: function(*=): Promise<void>, name: string, promptsOptions: {onRender(*): void, initial: boolean, name: string, type: string, message: string}|{type?: string, name?: string, message?: string, msg?: *, initial?: boolean, onRender?: function(*): void}}|{name?: string, promptsOptions?: {onRender(*): void, initial: boolean, name: string, type: string, message: string}|{type?: string, name?: string, message?: string, msg?: *, initial?: boolean, onRender?: function(*): void}, apply?: function(*=): Promise<void>}|{apply: function(*, *): Promise<Promise.Promise|Promise<unknown>>, name: string, promptsOptions: null}|{name?: string, promptsOptions?: null, apply?: function(*, *): Promise<Promise.Promise|Promise<unknown>>}>}
	 */
	async applyPlugins() {
		return plugins.reduce(
			(acc, { name, ...plugin }) =>
				acc.then(response => applyPlugin(name, plugin, response)),
			Promise.resolve({})
		);
	},
};
