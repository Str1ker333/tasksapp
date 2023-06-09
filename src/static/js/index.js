import sidebar from "./sidebar.js";
import message from "./message.js";
import confirmDelete from "./confirmDelete.js";
import selectDays from "./selectDays.js";
import orderList from "./orderList.js";
import expandTasks from "./expandTasks.js";
import expandHabits from "./expandHabits.js";
import logoutButton from "./logoutButton.js";
import doneTasksCheck from "./doneTasksCheck.js";
import doneTasksSelect from "./doneTaskSelect.js";
import checkHabitDays from "./checkHabitDays.js";
import showHabitsToday from "./showTodayHabits.js";
import expandTodayElements from "./expandTodayElements.js";
import noElementsMessage from "./noElementsMessage.js";
import addUserImg from "./addUserImg.js";

const documentUrl = document.URL;

// Main functions
logoutButton();
sidebar();
message();
if (documentUrl.includes("list")) {
    confirmDelete();
    orderList();
    if (documentUrl.includes("habit")) {
        expandHabits();
        checkHabitDays()
    }
    if (documentUrl.includes("tasks")) {
        expandTasks();
        doneTasksCheck()
        doneTasksSelect()
    }
}
if (documentUrl.includes("update") || documentUrl.includes("add")) {
    selectDays();
}
if (documentUrl.includes("dashboard")) {
    checkHabitDays()
    showHabitsToday()
    expandTodayElements()
    doneTasksCheck()
    noElementsMessage()
}
if (documentUrl.includes("profile")) {
    addUserImg()
}
