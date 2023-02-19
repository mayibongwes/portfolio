class App{
    constructor(){
        // remove default text
        this.$headline = document.querySelector(".intro");
        this.$skillList = document.querySelector(".skill-list")

        this.render();
    }

    initTyped(){
        /* remove default text and replace with typed fx */
        this.$headline.innerHTML = "";

        const options = {
            strings: ['Hi there','My name is <span style="color:#6D1A36;font-weight:bold">Mayibongwe Sibanda</span>, and I am a <span style="color:#F75C03;font-weight:bold">Full-stack developer</span> and a <span style="color:#63535B;font-weight:bold">Software Engineer</span> with over 4 years of experience.'],
            typeSpeed: 40,
            showCursor: false,
            contentType: 'html'
        };
        
        const typed = new Typed('.intro', options);
    }

    loadSkils(){
        fetch('./skills.json')
            .then((response) => response.json())
            .then((json) => {
                this.renderSkills(json.skills);
            });
    }

    renderSkills(skills){
        let skillsElems = "";

        skills.forEach((skill) => {
            let icon;
            if (skill.icon){
                icon = "<img src='" + skill.icon + "' />"
            }else if(skill.devicon){
                icon = "<img src='" + skill.devicon + "' />"
            }

            const skillName = `<p>${skill.name}</p>`;

            skillsElems += `<div class="skill-item">${icon + skillName}</div>`;
        });

        this.$skillList.innerHTML = skillsElems
    }
        
    render(){
        this.initTyped();
        this.loadSkils();
    }
        
}