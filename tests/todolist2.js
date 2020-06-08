import { Selector, t } from "testcafe";

const dataSet = require("./data.json");

fixture`add new task and delete task`.page`http://localhost:8000`;

dataSet.forEach((obj) => {
  test(`Create task and delete : '${obj.taskName}'`, async (t) => {
    const element = Selector("li").withText(obj.taskName);
    await t.typeText("#new-todo", obj.taskName).pressKey("enter");
    await t.click(element).expect(element.hasClass("checked")).ok();
    await t.click(Selector("span").withText("🗑"));
    
  });
});

