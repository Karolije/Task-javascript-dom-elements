const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];


const menuItem
    = document.querySelectorAll('.article__list');

menuItem.forEach(function (element, index) {
    const menuUl = document.createElement('ul');
    element.appendChild(menuUl);

    for (i = 0; i < list.length; i++) {


        const menuLi = document.createElement('li');
        const menuLink = document.createElement('a');
        const listId = list[i].id;
        const listLink = list[i].link;
        const listText = list[i].text;
        const childUl = document.createElement('ul');


        if (list[i].parentId === null) {

            menuUl.appendChild(menuLi);
            menuLi.appendChild(menuLink);
            menuLi.setAttribute('data-id', listId);
            menuLink.setAttribute('href', listLink);
            menuLink.innerText = listText;
        }

    }
})

const sectionWithLi = document.querySelectorAll('.article__list');

if (sectionWithLi) {
    const articleLi = document.querySelectorAll('li');

    articleLi.forEach(function (item) {
        const id = Number(item.dataset.id);

        const children = list.filter(function (element) {
            return element.parentId === id;
            
        });

        if (children.length > 0) {
            const articleUl = document.createElement('ul');
            item.appendChild(articleUl);

            for (i = 0; i < children.length; i++) {
            const articleLi = document.createElement('li');
            articleUl.appendChild(articleLi);
            const articleLink = document.createElement('a');
            articleLi.appendChild(articleLink);

                const childrenId = children[i].id;
                articleLi.setAttribute('data-id', childrenId);
                const childrenLink = children[i].link;
                articleLink.setAttribute('href', childrenLink);
                const articleText = children[i].text;
                articleLink.innerText = articleText;
        }
        }
    })
}




