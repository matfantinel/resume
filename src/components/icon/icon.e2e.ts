import { newE2EPage } from '@stencil/core/testing';

describe('svg-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svg-icon></svg-icon>');

    const element = await page.find('svg-icon');
    expect(element).toHaveClass('hydrated');
  });
});
