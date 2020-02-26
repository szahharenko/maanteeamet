const animals = {
	1: {name:'Põder',	id:'l-1'},
	2: {name:'Metskits',id:'l-2'},
	3: {name:'Kärnkonn',id:'l-3'},
	4: {name:'Rebane',	id:'l-4'},
	5: {name:'Metssiga',id:'l-5'},
	6: {name:'Köhrik',	id:'l-6'},
	7: {name:'Punahirv',id:'l-7'},
	8: {name:'Kurg',	id:'l-8'}
};
const monthes_data = [
	{id:'jan',name:'Jaanuar',	type:'winter', objects: [{animals:[
			{name:animals[7].name,type:animals[7].id,x:  0, y:  0, w: 34, reverse: 1},
			{name:animals[5].name,type:animals[5].id,x: 48, y: 33, w: 25, reverse: 1}
		]}]
	},
	{id:'veb',name:'Veebruar',	type:'winter', objects: [{animals:[]}]
	},
	{id:'mar',name:'Märts',		type:'spring', objects: [{
			animals:[
			{name:animals[4].name,type:animals[4].id,x: 51, y: 36, w: 27, reverse: 1}
		]}]
	},
	{id:'apr',name:'Aprill',	type:'spring', objects:  [{animals:[
			{name:animals[1].name,type:animals[1].id,x: 40, y: 39, w: 38, reverse: 0},
			{name:animals[2].name,type:animals[2].id,x: 0,  y: 0,  w: 30, reverse: 1},
			{name:animals[4].name,type:animals[4].id,x: 78, y: 19, w: 20, reverse: 1},
			{name:animals[3].name,type:animals[3].id,x: 27, y: 62, w: 10, reverse: 0}
		]}]
	},
	{id:'mai',name:'Mai',		type:'spring', objects: [{animals:[
			{name:animals[1].name,type:animals[1].id,x:  0, y:  0, w: 38, reverse: 1},
			{name:animals[2].name,type:animals[2].id,x: 78, y: 19, w: 25, reverse: 0},
			{name:animals[7].name,type:animals[7].id,x: 50, y: 39, w: 28, reverse: 0},
			{name:animals[4].name,type:animals[4].id,x: 27, y: 62, w: 15, reverse: 0}
		]}]
	},
	{id:'jun',name:'Juun',		type:'summer', objects: [{animals:[
			{name:animals[4].name,type:animals[4].id,x:  0, y:  0, w: 20, reverse: 0},
			{name:animals[2].name,type:animals[2].id,x: 48, y: 39, w: 28, reverse: 0}
		]}]
	},
	{id:'jul',name:'Juul',		type:'summer', objects: [{animals:[
			{name:animals[2].name,type:animals[2].id,x: -1,  y: 0,  w: 30, reverse: 0}
		]}]
	},
	{id:'aug',name:'August',	type:'summer', objects: [{animals:[
			{name:animals[2].name,type:animals[2].id,x: 47, y: 39, w: 30, reverse: 0},
			{name:animals[6].name,type:animals[6].id,x: 0,  y: 0,  w: 25, reverse: 1},
			{name:animals[4].name,type:animals[4].id,x: 78, y: 19, w: 20, reverse: 1},
			{name:animals[8].name,type:animals[8].id,x: 22, y: 33, w: 15, reverse: 0}
		]}]
	},
	{id:'sep',name:'September',	type:'autumn', objects: [{animals:[
			{name:animals[1].name,type:animals[1].id,x: 40, y: 39, w: 38, reverse: 0},
			{name:animals[7].name,type:animals[7].id,x: 0,  y: 0,  w: 30, reverse: 0},
			{name:animals[6].name,type:animals[6].id,x: 78, y: 19, w: 20, reverse: 0},
			{name:animals[4].name,type:animals[4].id,x: 14, y: 72, w: 15, reverse: 0}
		]}]
	},
	{id:'okt',name:'Oktoober',	type:'autumn', objects: [{animals:[
			{name:animals[7].name,type:animals[7].id,x: 50, y: 39, w: 28, reverse: 0},
			{name:animals[1].name,type:animals[1].id,x: -2,  y: 0, w: 41, reverse: 1},
			{name:animals[5].name,type:animals[5].id,x: 78, y: 21, w: 24, reverse: 1}
		]}]
	},
	{id:'nov',name:'November',	type:'autumn', objects: [{animals:[
			{name:animals[5].name,type:animals[5].id,x: 50, y: 39, w: 24, reverse: 1},
			{name:animals[7].name,type:animals[7].id,x: 0,  y: 0,  w: 30, reverse: 0}
		]}]
	},
	{id:'dec',name:'Detsember',	type:'winter', objects: [{animals:[
			{name:animals[7].name,type:animals[7].id,x: 46, y: 31, w: 30, reverse: 1},
			{name:animals[5].name,type:animals[5].id,x: 0,  y: 0,  w: 24, reverse: 0}
		]}]
	}
];
const seasons_data = [
	{id:'winter',shrt:'wi',name:'TALV'},
	{id:'spring',shrt:'sp',name:'KEVAD'},
	{id:'summer',shrt:'su',name:'SUVI'},
	{id:'autumn',shrt:'au',name:'SÜGIS'},
];