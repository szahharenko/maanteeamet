new Vue({
	el: '#mnt',
	data: {
		layers: 5,
		monthes: monthes_data,
		seasons: seasons_data,
		interaction: false,
		month: '',
		season: '',
		animation: ''
	},
	mounted(){
		this.setSeason('winter',false,true)
	},
	methods: {
		getMonthObjects() {
			const currentMonth = this.monthes.find(mon => mon.id == this.month)
			if (currentMonth) {
				return currentMonth.objects
			} else {
				return []
			}

		},
		getSeasonMonth(season) {
			const firstMonth = this.monthes.find(mon => mon.type == season)
			return firstMonth.id
		},
		nextMonth() {
			const currentIndex = this.monthes.findIndex(mon => mon.id === this.month)
			const nextMonth = this.monthes[currentIndex + 1] || this.monthes[0]
			this.setSeason(nextMonth.type,nextMonth.id)
		},
		prevMonth() {
			const currentIndex = this.monthes.findIndex(mon => mon.id === this.month)
			const prevMonth = this.monthes[currentIndex - 1] || this.monthes[this.monthes.length - 1]
			this.setSeason(prevMonth.type,prevMonth.id)
		},
		setSeason(season,month,initial) {
			this.interaction = initial ? false : true
			month = month || this.getSeasonMonth(season)
			if (this.season != season) {
				this.animation = ''
				setTimeout(() => this.animation = 'new-season month-change', 50)
				this.season = season
				this.month = month
			}
			else if (this.month != month) {
				this.animation = 'new-season'
				setTimeout(() => this.animation = 'new-season month-change', 50)
				this.month = month
			}
		}
	}
});