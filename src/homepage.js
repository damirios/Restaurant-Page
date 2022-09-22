function createHomePage() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');

    const contentRow = document.createElement('div');
    contentRow.classList.add('content-row');
    contentRow.id = 'home';

    const title = (function() {
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = 'Simple restaurant';
        return title;
    })();

    const blocks = (function() {
        const blocks = document.createElement('div');
        blocks.classList.add('blocks');
        return blocks;
    })();
    
    const aboutUs = (function() {
        const aboutUs = document.createElement('div');
        aboutUs.classList.add('about-us');
        aboutUs.classList.add('block');
        aboutUs.textContent = 'Hello there! Welcome to "Simple restaurant". Our rule is simple: fresh ingridients \
        plus friendly service plus charming atmosphere equals your good mood. We are waiting for you!';
        return aboutUs;
    })();

    const workingHours = (function() {
        const workingHours = document.createElement('div');
        workingHours.classList.add('working-hours');
        workingHours.classList.add('block');
        return workingHours;
    })();

    const workingHoursTitle = (function() {
        const workingHoursTitle = document.createElement('div');
        workingHoursTitle.classList.add('subtitle');
        workingHoursTitle.textContent = 'Hours';
        return workingHoursTitle;
    })();
    
    const hours = (function() {
        const hours = document.createElement('div');
        hours.classList.add('hours');
        const hoursList = document.createElement('ul');
        const mondayToFriday = document.createElement('li');
        mondayToFriday.textContent = 'Mon - Fri: 8am - 8pm';
        const saturdayToSunday = document.createElement('li');
        saturdayToSunday.textContent = 'Sat - Sun: 8am - 10pm';
        hoursList.appendChild(mondayToFriday);
        hoursList.appendChild(saturdayToSunday);
        hours.appendChild(hoursList);
        return hours;
    })();
    
    let appendSubblocksInCertainOrder = (function() {
        workingHours.appendChild(workingHoursTitle);
        workingHours.appendChild(hours); // working hours block is finished
        blocks.appendChild(aboutUs);
        blocks.appendChild(workingHours);
    })();

    let appendBlocksInCertainOrder = (function() {
        contentRow.appendChild(title);
        contentRow.appendChild(blocks);
        container.appendChild(contentRow);
        content.appendChild(container);
    })();
}

export {createHomePage};