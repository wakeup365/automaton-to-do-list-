import { Selector, t } from "testcafe";

const dataSet = require("./data.json");

fixture`Data-Driven Tests`.page`http://localhost:8000`;

dataSet.forEach((obj) => {
  test(`Create task with name: '${obj.taskName}'`, async (t) => {
    const element = Selector("li").withText(obj.taskName);

   await t.typeText("#new-todo", obj.taskName).pressKey("enter");
   await t.click(element).expect(element.hasClass("checked")).ok();
  
  });
});



