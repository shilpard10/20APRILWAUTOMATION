import test from "@playwright/test";

// test("should have the correct title" ,async({ page }) =>{
    
//     await page.goto("https://www.google.com");
//     const title = await page.title();
//     test.expect(title).toBe("Google");
    

// });

// test("navigation of gmail", async ({page}) =>{

//     await page.goto("https://workspace.google.com/intl/en-US/gmail/");
//     await page.waitForTimeout(2000);
//     await page.goBack();
//     await page.waitForTimeout(2000);
//     await page.goForward();
//     await page.waitForTimeout(2000);
//     await page.reload();
// }
// )

// test("Enter username in facebook" , async ({page}) => {
// await page.goto("https://www.facebook.com/");
// //await page.locator('//input[@name="email"]').fill("test@test.com");
// await page.getByLabel("Email address or mobile number").fill("test@test.com");
// }

// )


// test("Handling checkbox", async ({page}) => {
// await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
// await page.locator("(//input[@value='football'])[1]").click();

// let statusofCheckbox = await page.locator("(//input[@value='football'])[1]").isChecked();
// console.log(statusofCheckbox);
// }
//)

// test("Handling dropdown", async ({page}) =>
// {
//     await page.goto("https://www.wikipedia.org/");
//     await page.locator("//select[@id='searchLanguage']").selectOption([{index : 0}, {index : 1}]);
//     await page.waitForTimeout(2000);

//     await page.locator("//select[@id='searchLanguage']").selectOption(["Asturianu","Afrikaans"]);
//     await page.waitForTimeout(2000);

//     await page.locator("//select[@id='searchLanguage']").selectOption(["ar", "ast"]);
//     await page.waitForTimeout(2000);
// }

// )

// test("How many options present in dropdown", async ({page}) =>{
// await page.goto("https://www.wikipedia.org/");
// let totalOptions = await page.locator('//select[@id="searchLanguage"]/option').all();
// console.log(totalOptions.length);
// }
// )

// test("print all options from dropdown list", async ({page})=>{
// await page.goto("https://www.wikipedia.org/");
// let totalOptions = await page.locator('//select[@id="searchLanguage"]/option').all();
// console.log(await totalOptions[0].textContent());

// for(let i of totalOptions){
// console.log(await i.textContent());
// }
// }
// )

test("rediffmail assignment1", async ({page})=>{
await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");
await page.locator('//a[@title="Create new Rediffmail account"]').click();
await page.waitForTimeout(2000);
let day = await page.locator("//select[@class='day']").selectOption(["10"]);
await page.waitForTimeout(2000);
let month = await page.locator("//select[@class='middle month']").selectOption(["MAY"]);
await page.waitForTimeout(2000);
let year = await page.locator("//select[@class='year']").selectOption(["2013"]);
console.log(day,month,year);
}

)