import test, { expect } from "@playwright/test";
import { cvs } from "./fixtures/cvs-fixtures";

test('la page cv qui affiche la liste des cvs', async ({page}) => {
  // intercept l'appel http qui correspond au path
  page.route('**/personnes**', async route => {
    await route.fulfill({
      // ca c'est les données qui vont être envoyés
      json : cvs
    })
  })
  await page.goto('/cv');
  await expect(page.getByText('M2i')).toBeDefined();
  //await expect(page).(/m2i/);

  await expect(page.locator('[data-testid=listCvs]')).toBeDefined();
  const cvsList = await page.getByTestId('listCvs');
  const lis = await cvsList.locator('li');

  await expect(lis).toHaveCount(cvs.length);
})
