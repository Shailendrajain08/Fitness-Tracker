export default class FitnessTracker {
    constructor(root) {
        this.root = root;
        this.root.insertAdjacentHTML("afterbegin", FitnessTracker.html())
        this.entires = []

        this.loadEntries();
        this.updateViews();

        this.root.querySelector(".tracker_add").addEventListener("click", () => {
            const date = new Date();
            const year = date.getFullYear();
            const month = (date.getMonth()+1).toString().padStart(2,"0");
            const day = date.getDay().toString().padStart(2,"0");

            this.addEntry({
                date: `${ year }-${ month }-${ day }`, 
                workout : "walking",
                duration: 0,
                calories : 0
            })
        })
    }

    static html() {
        return `
            <table class="tracker">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Workout</th>
                        <th>Duration</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="tracker_entries">
                </tbody>
                <tbody>
                    <tr class="tracker_row tracker_row--add">
                        <td colspan="5">
                        <span class="tracker_add">Add Entry &plus;</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        `
    }

    static rowHtml() {
        return `
        <tr class="tracker_row">
            <td>
                <input type="date" class="tracker_date">
             </td>
             <td>
                <select class="tracker_workout">
                    <option value="walking">Walking</option>
                    <option value="running">Running</option>
                    <option value="cycling">Cycling</option>
                    <option value="swimming">Swimming</option>
                    <option value="yoga">Yoga</option>
                    <option value="Cardio">Cardio</option>
                    <option value="strangth">Strength</option>
                    <option value="sports">Sports</option>
                </select>
            </td>
            <td>
                <input type="number" class="tracker_duration">
                <span class="tracker__text">minutes</span>
            </td>
            <td>
                <input type="number" class="calories_burn">
                <span class="tracker__text">Calories</span>
            </td>
            <td>
                <button type="button" class="tracker_button">&times;</button>
             </td>
        </tr>
        `
    }

    loadEntries() {
        this.entires = JSON.parse(localStorage.getItem("workout-tracker-entries") || "[]")
    }

    saveEntries() {
        localStorage.setItem("workout-tracker-entries", JSON.stringify(this.entires))
    }

    updateViews() {
        const tableBody = this.root.querySelector(".tracker_entries");
        const addRow = data => {
            const template = document.createElement("template");
            let row = null;

            template.innerHTML = FitnessTracker.rowHtml().trim();
            row = template.content.firstElementChild;

            row.querySelector(".tracker_date").value = data.date;
            row.querySelector(".tracker_workout").value = data.workout;
            row.querySelector(".tracker_duration").value = data.duration;
            row.querySelector(".calories_burn").value = data.calories;

            row.querySelector(".tracker_date").addEventListener("change", ({ target }) => {
                data.date = target.value;
                this.saveEntries();
            });

            row.querySelector(".tracker_workout").addEventListener("change", ({ target }) => {
                data.workout = target.value;
                this.saveEntries();
            });

            row.querySelector(".tracker_duration").addEventListener("change", ({ target }) => {
                data.duration = target.value;
                this.saveEntries();
            });

            row.querySelector(".calories_burn").addEventListener("change", ({ target }) => {
                data.calories = target.value;
                this.saveEntries();
            });

            row.querySelector(".tracker_button").addEventListener("click", () => {
                this.deleteEntry(data);
            })

            tableBody.appendChild(row);

        };

        tableBody.querySelectorAll(".tracker_row").forEach(row => {
            row.remove();
        });

        this.entires.forEach(data => addRow(data));
    }

    addEntry(data) {
        this.entires.push(data);
        this.saveEntries();
        this.updateViews();
    }

    deleteEntry(dataToDelete){
        this.entires = this.entires.filter(data => data !== dataToDelete );
        this.saveEntries();
        this.updateViews();
    }

}