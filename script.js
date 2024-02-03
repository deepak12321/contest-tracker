
const container = document.getElementById('main-container');
const newData = (data) => {
    const note = document.createElement('div');
    note.classList.add('main-note-body');
    let start = data.start_time;
    let end = data.end_time;
    const innerNote = ` 

    <div div class="tools-div">
    <div class="heading-div">${data.name}</div>
    <div class="disp">
    <p class="site">${data.site}</p>
    <p class="startdate">Start Date : ${start.slice(0, 10)}</p>
    <p class="enddate">End Date : ${end.slice(0, 10)}</p>
    <p class="duration">Duration : ${Math.round(0.000277778 * data.duration)} hr</p>
    <p> Website:- <a class="website" href="${data.url}" target="_blank">Click Here</a></p>
    </div>
    </div>
    `;
    note.insertAdjacentHTML('afterbegin', innerNote);
    // note.querySelector(".tools-div").innerHTML = data.name;
    container.appendChild(note);
}

const genrateData = async () => {
    try {
        const setHeader = () => {
            header: {
                Accept: "application/json";
            }
        }

        const request = await fetch('https://kontests.net/api/v1/all', setHeader);
        const data = await request.json();
        console.log(data);
        data.forEach(element => {
            newData(element);
        });
    } catch (err) {
        console.log(err);
    }
}
genrateData();








