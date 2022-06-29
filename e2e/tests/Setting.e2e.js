describe('Setting screen', () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: { notifications: 'YES' } });
  });

  it('can show setting screen', async () => {
    await element(by.id('btn-submit')).tap();
    await element(by.id('setting-tab')).tap();
    await expect(element(by.id('setting-screen'))).toBeVisible();
  });

  it('can navigate to remote config demo', async () => {
    await element(by.id('btn-remote-config')).tap();
    await expect(element(by.id('remote-config-screen'))).toBeVisible();
    await element(by.id('btn-back')).tap();
  });

  it('can navigate to A/B testing demo', async () => {
    await element(by.id('btn-ab-testing')).tap();
    await expect(element(by.id('ab-testing-screen'))).toBeVisible();
    await element(by.id('btn-back')).tap();
  });

  it('can navigate show notification', async () => {
    await element(by.id('btn-notification')).tap();
  });
});
