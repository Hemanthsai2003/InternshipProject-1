const listItems = document.querySelectorAll(".bucket-list li");
listItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("completed");
        const status = item.classList.contains("completed")
            ? "completed"
            : "not completed";
        alert(`This task is now marked as ${status}.`);
    });
});
