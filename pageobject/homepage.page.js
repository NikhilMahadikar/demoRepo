import {expect} from "@playwright/test";
export class AutomationTestPractice {
    /** 
     * @param {import('playwright').Page} page
     */
    constructor(page){
        this.page = page;
        this.userName = page.getByPlaceholder("Enter Name");
        this.email=page.getByPlaceholder("Enter EMail");
        this.maleGen=page.locator('//input[@id="male"]');
        this.mondayCheckBox=page.getByLabel("monday")
        this.singleSelection=page.getByLabel("Country:");
        this.multipleSel=page.getByLabel("Colors:");
        this.multipleSelSort=page.getByLabel("Sorted List:");
        this.datePick1=page.locator('//input[@id="datepicker"]');
        this.datePick2=page.locator('//input[@id="txtDate"]');
        this.selectMonth=page.locator('//select[@class="ui-datepicker-month"]');
        this.selectYear=page.locator('//select[@class="ui-datepicker-year"]');
        this.selectDate=page.locator('//a[@class="ui-state-default" and .="3"]');
        this.dateContainer=page.locator('//label[.="Date Picker 3: (Select a Date Range)"]');
        this.pressTab=page.keyboard.press('Tab');
        this.ufile=page.locator(`//input[@id="singleFileInput"]`);
        this.singleUploadClick=page.getByRole("button",{name:"Upload Single File"})
        this.uMulFile=page.locator('//input[@id="multipleFilesInput"]');
        this.multiUploadClick=page.getByRole("button",{name:"Upload Multiple Files"});
        this.searchInp=page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]');
        this.seachButton=page.locator('//input[@class="wikipedia-search-button"]');
        this.dynamicButton1=page.getByRole("button",{name:"START"});
        this.dynamicButton2=page.getByRole("button",{name:"STOP"});
    }
     async actionFunction(uName,uEmail,fillData)
        {
           await this.userName.fill(uName);
           await this.email.fill(uEmail);
           await this.maleGen.check();
           await this.mondayCheckBox.check();
           await this.singleSelection.selectOption("Canada");
           await this.multipleSel.selectOption(["Red","Blue","Green"]);
           await this.multipleSelSort.selectOption(["Cat","Deer","Fox"]);
           await this.datePick1.fill("06/03/1998");
           await this.datePick2.click();
           await this.selectMonth.selectOption("Jun");
           await this.selectYear.selectOption("2016");
           await this.selectDate.click();
           await this.dateContainer.click();
           await this.page.keyboard.press('Tab');
           await this.page.keyboard.press("0+3");
           await this.page.keyboard.press("0+6");
           await this.page.keyboard.press("1+9+9+8");
           await this.page.keyboard.press('Tab');
           await this.page.keyboard.press('Tab');
           await this.page.keyboard.press("0+3");
           await this.page.keyboard.press("0+6");
           await this.page.keyboard.press("2+0+2+6");
           await this.ufile.setInputFiles("C:/Users/nikhi/Downloads/The mirror of gesture.pdf");
           await this.singleUploadClick.click();
           await this.uMulFile.setInputFiles(["C:/Users/nikhi/Downloads/Hindu-America.pdf",
            "C:/Users/nikhi/Downloads/Practice of Bhakti-Yoga.pdf",
            "C:/Users/nikhi/Downloads/I AM THAT.pdf"]);
           await this.multiUploadClick.click();
           await this.searchInp.fill(fillData);
           await this.seachButton.click();
           await this.dynamicButton1.click();
           await expect(this.dynamicButton2).toHaveCSS("background-color","rgb(255, 0, 0)");
           await this.dynamicButton2.click();
           
        }
}