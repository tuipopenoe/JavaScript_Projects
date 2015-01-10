export default(urls) => {
    var elem = document.querySelector('#imgs')
    elem.innerHTML = urls.map(url => `<img src="${url}">`).join('\n')
}