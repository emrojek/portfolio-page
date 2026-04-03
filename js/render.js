import { cvData } from './cv-data.js';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('skills-container');
	if (!container) return;

	container.innerHTML = Object.entries(cvData.skills)
		.map(
			([category, items]) => `
                <div class="skills-category-group">
                    <h3 class="skills-category">${category}</h3>
                    <ul class="skills-list">
                        ${items.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `
		)
		.join('');
});
