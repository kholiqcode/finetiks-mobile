describe('SignUp screen', () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: { notifications: 'YES' } });
  });

  it('can input form values and click submit button', async () => {
    await element(by.id('btn-signup')).tap();
    await expect(element(by.id('signup-screen'))).toBeVisible();
    await element(by.id('input-name')).typeText('this is name');
    await element(by.id('input-phone')).typeText('1231321321');
    await element(by.id('input-email')).typeText('e2e@test.com');
    await element(by.id('input-email')).tapReturnKey();
    await element(by.id('input-password')).typeText('password');
    await element(by.id('input-password')).tapReturnKey();
    await element(by.id('input-password-confirmation')).typeText('password');
    await element(by.id('input-password-confirmation')).tapReturnKey();
    await element(by.id('btn-submit')).tap();
  });
});
