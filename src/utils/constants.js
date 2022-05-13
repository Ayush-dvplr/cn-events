const API_ROOT = 'https://api.codingninjas.com/api/v3';

export const API_URLS = {
  tags: () => `${API_ROOT}/event_tags`,

  events: (event_category,event_sub_category,tag_list,offset) =>
    `${API_ROOT}/events?event_category=${event_category}&event_sub_category=${event_sub_category.replace(/ /g,'%20')}&tag_list=${tag_list.toString().replace(/ /g,'%20')}&offset=${offset}`,
  
};

export const event_category_list = [
   {value: 'ALL_EVENTS',selectedImg: 'https://www.codingninjas.com/assets-landing/images/all-events-selected.svg',unselectedImg: 'https://www.codingninjas.com/assets-landing/images/all-events-unselected.svg',subMenu: [{text:'Upcoming',value:'Upcoming'},{text:'Archived',value:'Archived'},{text:'All Time Favorites',value:'All Time Favorites'}]},
   {value: 'WEBINAR',selectedImg: 'https://www.codingninjas.com/assets-landing/images/webinar-selected.svg',unselectedImg: 'https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg',subMenu: [{text:'Upcoming',value:'Upcoming'},{text:'Recorded',value:'Archived'},{text:'All Time Favorites',value:'All Time Favorites'}]},
   {value: 'CODING_EVENT',selectedImg:'https://www.codingninjas.com/assets-landing/images/coding-events-selected.svg',unselectedImg:'https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg',subMenu: [{text:'Upcoming',value:'Upcoming'},{text:'Archived',value:'Archived'}]},
   {value:  'BOOTCAMP_EVENT',selectedImg:'https://files.codingninjas.in/bootcamp_events_selected-5398.png',unselectedImg:'https://files.codingninjas.in/bootcamp_events_unselected-5397.png',subMenu: [{text:'Upcoming',value:'Upcoming'},{text:'Archived',value:'Archived'},{text:'All Time Favorites',value:'All Time Favorites'}]},
   {value: 'WORKSHOP',selectedImg:'https://files.codingninjas.in/workshop_selected-5396.png',unselectedImg:'https://files.codingninjas.in/workshop_unselected-5395.png',subMenu: [{text:'Upcoming',value:'Upcoming'},{text:'Archived',value:'Archived'},{text:'All Time Favorites',value:'All Time Favorites'}]},
];
export const event_sub_category_list = ['Upcoming', 'Archived' , 'All Time Favorites'];


