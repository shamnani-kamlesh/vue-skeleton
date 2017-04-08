import Vue from 'vue';
import configManagerInstance from 'config/configManagerInstance';
import VueExposePlugin from 'util/VueExposePlugin';
import { URLNames, PropertyNames, VariableNames } from 'data/enum/configNames';
import PageNames from 'data/enum/PageNames';
import Pages from 'data/enum/Pages';
import { createPath } from 'util/routeUtils';
import Params from 'data/enum/Params';

const initPlugins = () => {
	// expose objects to the Vue prototype for easy access in your vue templates and components
	Vue.use(VueExposePlugin, {
		$config: configManagerInstance,
		// $http: axios,
		URLNames,
		PropertyNames,
		VariableNames,
		PageNames,
		Pages,
		Params,
		createPath,
	});
};

const startUp = () => {
	// Initialise plugins
	initPlugins();

	// Add async methods to the Promise.all array
	return Promise.all([
		Promise.resolve(),
	]);
};

export default startUp;
