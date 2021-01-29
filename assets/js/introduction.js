const tooltipList
    = document.querySelectorAll('.tooltip');

   


    tooltipList.forEach(function(element, index) {
        const linkElement = document.createElement('a');
        const spanElement = document.createElement('span');

        const href = element.dataset.url;
        
        linkElement.setAttribute('href',href);

        const typeTooltips = element.dataset.tooltipType;
        const spanContent = element.dataset.tooltipContent;
    
        


        spanElement.classList.add('tooltip__box');
        spanElement.setAttribute('data-tooltip-type', typeTooltips);
        linkElement.innerText = element.innerText;
        element.innerText = '';

        if( typeTooltips === 'text') {
            spanElement.classList.add('tooltip__box--text');
            spanElement.innerText = spanContent;
            
            
        } else if( typeTooltips === 'image') {
            spanElement.classList.add('tooltip__box--image');
            const imgElement = document.createElement('img');
            spanElement.appendChild(imgElement);
            imgElement.classList.add('tooltip__image');
            imgElement.setAttribute('src', spanContent);
        }




       element.appendChild(linkElement);
        element.appendChild(spanElement);
    })
   