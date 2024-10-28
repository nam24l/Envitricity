// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Error: ${selector} may not exist`);
};
//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if (this.scrollY >= 15) {
    headerElement.classList.add('activated');
  } else {
    headerElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
  bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme');

  if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive');
  } else {
    localStorage.removeItem('currentTheme')
  }
});

// Home solutions

// Core Systems 

const utilitiesBox = document.getElementById('utilities-box');
const roofBtn = document.getElementById('roof-btn');
const solarBtn = document.getElementById('solar-btn');
const carBtn = document.getElementById('car-btn');
const thermostatBtn = document.getElementById('thermostat-btn');
const windowBtn = document.getElementById('window-btn');
const heaterBtn = document.getElementById('heater-btn');
const hvacBtn = document.getElementById('hvac-btn');

// Appliances

const appliancesBox = document.getElementById('appliances-box');
const fridgeBtn = document.getElementById("fridge-btn");
const ovenBtn = document.getElementById("oven-btn");
const dishBtn = document.getElementById("dish-btn");
const washerBtn = document.getElementById("washer-btn");
const dryerBtn = document.getElementById("dryer-btn");

// Modal content 

utilitiesBox.textContent = 'Click on the numbered buttons in the image to begin researching home solutions.';

appliancesBox.textContent = 'Click on the numbered buttons in the image to begin researching home solutions.';

solarBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>Solar Panels:</u> Solar panels are extremely beneficial to homeowners and the environment. They produce no carbon emissions and burn no fossil fuels. According to the United States Department of Energy, homeowners are eligible for a tax credit of up to 26%! Solar-panels are very cost effective, with an estimate of $1,500 saved per year, and an astonishing $25,000-$33,000 dollars saved over the life of your system.';
}); 

roofBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>Roofs and Attics:</u> It is certainly worth investing in well-insulated and sealed attics, as poor-quality insulation can allow for the escape of heat and air. Reducing energy waste and costs, this improvement can keep your home and pockets comfortable during the summer and winter months. Homeowners may be eligible for tax credits of up to 30% of the cost not to exceed $1,200 for certified insulations.';
}); 

carBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>Electric Cars:</u> Electric cars offer great environmental and financial benefits. According to EnergyStar, electric cars improve air quality in your own home and local area. By installing an electric-ready design, you will be eligible for a tax credit of 30% of the project cost, and $600 for improving or replacing electrical panels in a home. Purchasing an electric car could qualify you for a tax credit of $7,500.';
});

thermostatBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>Thermostats:</u> Since fifty percent of the average Americans\' home energy bill goes to HVAC systems- more than $900 per year- smart thermostats help to save money substantially, while also avoiding the waste of energy. Since the HVAC system is controlled by a thermostat, the thermostat is an integral part of clean energy integration in your household.';
});

windowBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>Windows:</u> High performing and storm-proof windows help to reduce household electric bills by 12% and also reduce UV exposure on carpets, floors, and furniture. Such windows will help you to stop escape of air, thus helping your HVAC system to be efficient as well. You may be eligible for a tax credit of 30% of the cost up to $600 for installation of high-performing and storm-proof windows.'; 
});

heaterBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>Water Heaters:</u> The average water heater uses about 20% of a home\'s energy. ENERGY STAR certified water heaters are up to 4 times more efficient then, and use up to 70% less energy than standard models. Efficient water heaters can save a family of four over $470 per year, and over $4,700 during the system\'s lifetime. The Federal Heat Pump Water Heaters Tax Credit offers rebates for 30% of the project cost, and $2,000 for ENERGY STAR-certified water heaters.'; 
});

hvacBtn.addEventListener('click', () => {
  utilitiesBox.innerHTML = '<u>HVAC Systems:</u> Heating, Ventilation, and Air Conditioning (HVAC) systems account for over half of a home\'s energy usage. Every year, 3 million heating/cooling systems in the U.S. are replaced, and $14 billion is spent on HVAC services and repairs. High efficiency HVAC systems can reduce energy use by 50% and save money. Homeowners may even qualify for a federal tax credit of 30% up to $2,000.'; 
}); 

fridgeBtn.addEventListener('click', () => {
  appliancesBox.innerHTML = '<u>Refrigerators:</u> Refrigerators over 15 years old can cost the average homeowner more than $80 per year to run. Moreover, they may cost you 35% more energy expenditure than Energy Star certified products. Currently, it is known that highly efficient refrigerators have significantly less global warming potential(GWP) than others. This means that you can help to make a true difference for the good of the Earth through selecting an Energy Star refrigerator.'; 
}); 

ovenBtn.addEventListener('click', () => {
  appliancesBox.innerHTML = '<u>Ovens:</u> Energy Star certified electric cooking products help to increase energy efficiency by transferring 85% of the heating energy to cookware compared with only about a third of the energy transferred using gas cooking products. Energy-efficient electric stoves help to reduce the release of severely harmful indoor air pollutants which can cause dizziness, headaches, asthma, and even respiratory infections and cancers.';
}); 

dishBtn.addEventListener('click', () => {
  appliancesBox.innerHTML = '<u>Dishwashers:</u> Energy Star-approved dishwashers only cost about $55 per year to run and save around 4,000 gallons of water over its lifetime. It is certainly worth investing in an efficient dishwasher so that you can save money, water, and help to prevent dangerous runoff from entering natural bodies of water.'; 
});

washerBtn.addEventListener('click', () => {
  appliancesBox.innerHTML = '<u>Washing Machines:</u> Efficient washers help to lower your electric bill, lower your water bill, and save the environment too. Energy Star certified washers use about 45% less energy and 50% less water than others.'; 
}); 

dryerBtn.addEventListener('click', () => {
  appliancesBox.innerHTML = '<u>Drying Machines:</u> Energy Star clothes dryers help to save almost 30% less energy than other dryers. They are proven to have a lower global warming potential(GWP) than others, as they release less harmful greenhouse gasses like chlorofluorocarbons.'; 
}); 


// Add year

const year = document.querySelector(".year");

year.textContent = new Date().getFullYear();