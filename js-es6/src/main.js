import api from './api';

class App {
    constructor() {
        this.repositories= [];

        this.formElement = document.getElementById('repo-form');
        this.inputElement = document.querySelector('input[name=repository]');
        this.listElement = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.onsubmit = (event) => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingElement = document.createElement('span')
            loadingElement.appendChild(document.createTextNode('Loading...'));
            loadingElement.setAttribute('id', 'loading');
            loadingElement.setAttribute('style', 'display: block');

            this.formElement.appendChild(loadingElement);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputElement.value;

        if(repoInput.length === 0)
            return;

        this.setLoading();
        
        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;
    
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
    
            this.inputElement.value = '';
    
            this.render();
        } catch (err) {
            alert('Ops... We could not find the specified repository!');
        }

        this.setLoading(false);
    }

    render() {
        this.listElement.innerHTML = '';

        this.repositories.forEach((repo) => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', repo.avatar_url);

            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repo.name));

            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repo.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('href', repo.html_url);
            linkElement.appendChild(document.createTextNode('Access'));

            let listElement = document.createElement('li');
            listElement.appendChild(imgElement);
            listElement.appendChild(titleElement);
            listElement.appendChild(descriptionElement);
            listElement.appendChild(linkElement);

            this.listElement.appendChild(listElement);
        });
    }
}

new App();