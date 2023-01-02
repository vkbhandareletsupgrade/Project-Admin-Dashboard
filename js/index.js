const leftside = document.getElementById('left');
const closebtn = document.getElementById('menuclose_btn');
const maincenter = document.getElementById('main-center');
const main = document.getElementsByTagName('main');
// closebtn.addEventListener('click',()=>{
//     leftside.style.display="none";
// });
document.querySelector('#menuclose_btn').
addEventListener('click', () =>
    document.querySelector('.left').classList.toggle('show')
    );

                



    const tableObject = [
        {
            name:"Yash Mohite",
            detail:'BSc Comp. Sci.',
            year:'Third.',
            grade:'A+'
        },
        {
            name:"Raj Sharma",
            detail:'BSc Chem.',
            year:'First.',
            grade:'A'
        },
        {
            name:"Priya Kumar",
            detail:'Mater Of Science.',
            year:'Third.',
            grade:'B+'
        },
        {
            name:"Yash Mohite",
            detail:'BSc Comp. Sci.',
            year:'Third.',
            grade:'A+'
        },
        {
            name:"Raj Sharma",
            detail:'BSc Chem.',
            year:'First.',
            grade:'A'
        },
        {
            name:"Priya Kumar",
            detail:'Mater Of Science.',
            year:'Third.',
            grade:'B+'
        },
        {
            name:"Yash Mohite",
            detail:'BSc Comp. Sci.',
            year:'Third.',
            grade:'A+'
        }
    ];

    tableObject.forEach((ele,i)=>{
        const createTR = document.createElement('tr');
        const tdData = `
            <td>${i+1}</td>
            <td>${ele.name}</td>
            <td>${ele.detail}</td>
            <td>${ele.year}</td>
            <td>${ele.grade}</td>
        `;

        createTR.innerHTML=tdData;
        document.querySelector('table tbody').appendChild(createTR);
    })