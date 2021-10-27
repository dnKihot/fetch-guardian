let dataArr = []

// fetch(`https://content.guardianapis.com/search?q=${}&api-key=381204b8-d897-4c56-aa0c-7f27980f47d0`)
// .then(res => res.json())
// .then(data => dataArr = data.response.results)
// .then(data => console.log(dataArr))
// .catch(rej => console.log(rej))

let div = document.querySelector('.article_list')

const render = () => {
  div.innerText = null
  dataArr.forEach(elem => {
    let link = document.createElement('a')  
    link.href = elem.webUrl
    link.target = '_blank'
    link.classList.add('link-item')
    link.innerText = elem.webTitle
    div.appendChild(link)
  })

}
let request
document.querySelector('button').onclick = async function() {
  request = document.querySelector('input').value
  await getFetch(request) 
  render()
}
document.querySelector('input').onkeyup = async function() {
  request = document.querySelector('input').value
  await getFetch(request) 
  render()
}


async function getFetch(query) {
  let response = await fetch(`https://content.guardianapis.com/search?q=${query}&api-key=381204b8-d897-4c56-aa0c-7f27980f47d0`)
  let data = await response.json()
  dataArr = data.response.results
}



 
