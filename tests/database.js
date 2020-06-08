import { t } from "testcafe";

export async function AddInfo(newinfo) {
  click(Selector("div").withText("To do today"))
    .typeText(Selector("#new-todo"), "ddd111")
    .pressKey("enter");
}
