// Betterbnb
// By: Jenn Huynh

// THIS FILE GENERATES RANDOM DATA FOR THE DESCRIPTION MODULE

// Data format:

// homes = [{ 
// 	id: integer between 100-199,
// 	name: string,
// property type: string,
// location: string,
// guests: integer between 1-16,
// bedrooms: {
// 	bedroom1: [type_of_bed, ...],
// 	bedroom2: [type_of_bed, …],
// 	common_space: [type_of_bed, …]
// },
// bathrooms: integer between 1-16,
// mini-ad: string,
// home-highlights: [
//   [title, description, helpfulCount, notHelpfulCount],
//   [title, description, helpfulCount, notHelpfulCount]
// ],
// description: {
// 	general: string,
// 	the_space: string,
// 	guest_access: string,
// 	interaction_with_guest: string,
// 	other_things: string
// },
// amenities: {
// 	basics: [string, string, ...],
// 	facilities: [string, string, ...],
// dining: [string, string, ...],
// safety: [string, string, ...]
// },
// owner: {
// 	name: string,
// 	image: url,
// 	contact: url,
// 	badge: url
// }}, 
// { /* house2 */ },
// { /* house3 */ }, ...
// ]

const data_entries = 100;
const start_index = 100;
