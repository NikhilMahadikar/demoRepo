import {test} from '@playwright/test'
import {AutomationTestPractice} from '../pageobject/homepage.page'
test("homePage",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")
    let autoTesPra=new AutomationTestPractice(page)
    await autoTesPra.actionFunction("nikhil","nikhilmp@gmail.com","ramji")
    await page.pause()
})