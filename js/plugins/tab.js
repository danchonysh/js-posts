const [tab1, tab2] = document.querySelectorAll('.tab__list-item')
const [articles, posts] = document.querySelectorAll('.tab__item')
const add = document.querySelector('.add')

tab1.classList.add('active')
posts.classList.add('hidden')

const switchClass = (el, prev, next) => {
	el.classList.remove(prev)
	el.classList.add(next)
}

tab1.addEventListener('click', () => {
	add.setAttribute('onclick', "addArticleHandler()")
	tab2.classList.remove('active')
	tab1.classList.add('active')
	switchClass(posts, 'show', 'hide')
	setTimeout(()=>{
		posts.classList.add('hidden')
		articles.classList.remove('hide', 'hidden')
		articles.classList.add('show')
	}, 200)
	
})

tab2.addEventListener('click', () => {
	add.setAttribute('onclick', "addPostHandler()")
	tab1.classList.remove('active')
	tab2.classList.add('active')
	switchClass(articles, 'show', 'hide')
	setTimeout(()=>{
		articles.classList.add('hidden')
		posts.classList.remove('hide', 'hidden')
		posts.classList.add('show')
	}, 200)
})
