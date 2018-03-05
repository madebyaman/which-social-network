const networkList = document.querySelectorAll('.js-list div')
const selectGroup = document.querySelector('select')
const networkDiv = document.querySelector('.js-network-div')
const button = networkDiv.querySelector('a')

selectGroup.addEventListener('change', (e) => {
  const index = e.target.selectedIndex
  const textDiv = networkDiv.querySelector('div')
  if (textDiv) {
    networkDiv.removeChild(textDiv)
  }
  networkList.forEach(div => {
    if (div.dataset.value == index) {
      networkDiv.insertBefore(div, button)
    }
  })
})
