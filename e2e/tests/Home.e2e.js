describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: { notifications: 'YES' } });
  });

  it('can show users list', async () => {
    await element(by.id('btn-submit')).tap();
    await expect(element(by.id('home-screen'))).toBeVisible();
    await expect(element(by.id('FOUserSection'))).toBeVisible();
  });

  it('can show products list', async () => {
    await element(by.id('btn-products')).tap();
    await expect(element(by.id('FOProductsSection'))).toBeVisible();
  });

  it('can change products query and show updated products list', async () => {
    await element(by.id('input-products')).typeText('Apple');
    await element(by.id('input-products')).tapReturnKey();
    await expect(element(by.id('FOProductsSection'))).toBeVisible();
  });

  it('can change products query and show no data', async () => {
    await element(by.id('input-products')).clearText();
    await element(by.id('input-products')).typeText('sadsad');
    await element(by.id('input-products')).tapReturnKey();
    await expect(element(by.id('txt-no-data'))).toBeVisible();
  });
});
