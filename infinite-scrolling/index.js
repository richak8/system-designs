const container = document.querySelector('#container');
const loading = document.querySelector('.loading');

fetchData();
fetchData();
fetchData();
async function fetchData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${genrateRandomNo()}`);
    const data = await response.json();
    renderData(data);
}

function genrateRandomNo() {
    return Math.floor(Math.random()*100);
}


function renderData(data){
    const divEle = document.createElement('div');
    divEle.classList.add('wrapper');
    divEle.innerHTML = `
     <p class="name">${data.name}</p>
     <p class="email">${data.email}</p>
     <p class="body">${data.body}</p>
    `;
    container.appendChild(divEle);
    loading.classList.remove('show');
}

function showLoader(){
    loading.classList.add('show');
    setTimeout(() => { fetchData() }, 1000)
}

window.addEventListener('scroll', (e) => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if(scrollHeight - scrollTop === clientHeight){
        showLoader();
    }
});
