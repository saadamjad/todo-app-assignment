/** @format */

import { device, element, by, expect, waitFor } from 'detox';
import { splashScreen } from './pageObjects/screenObjectsPage';

describe('Splash Screen', () => {
	beforeAll(async () => {
		await device.launchApp();
	});
	it('It Should Render Welcome Text', async () => {
		await expect(element(by.id(splashScreen.screen_text))).toBeVisible();
		await expect(element(by.id(splashScreen.screen_text))).toExist();
	});
});
