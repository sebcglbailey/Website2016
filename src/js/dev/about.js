var aboutDescription = "Skills include the full Adobe Creative Suite, and multiple web development languages including HTML, CSS, Javascript and PHP. Experience and education are listed here, along with hobbies and interests.";

var fields = [
	{
		field: 'User Experience',
		sh: 'ux',
		project: 'PalringoWebUI'
	},
	{
		field: 'User Interface',
		sh: 'ui',
		project: 'XGames'
	},
	{
		field: 'Graphic Design',
		sh: 'gd',
		project: 'LandseerSnowboards'
	},
	{
		field: 'Web Design',
		sh: 'wd',
		project: 'Website2016'
	},
	{
		field: 'Prototyping',
		sh: 'pr',
		project: 'XGames'
	},
	{
		field: 'Photography',
		sh: 'ph',
		project: 'China'
	}
];

var skills = [
	['sk','skills'],
	{
		skill: 'Ps',
		level: '80%'
	},
	{
		skill: 'Ai',
		level: '90%'
	},
	{
		skill: 'Id',
		level: '60%'
	},
	{
		skill: 'Ae',
		level: '45%'
	},
	{
		skill: 'Xd',
		level: '95%'
	},
	{
		skill: 'Sketch',
		level: '75%'
	},
	{
		skill: 'HTML5',
		level: '85%'
	},
	{
		skill: 'CSS3',
		level: '80%'
	},
	{
		skill: 'Javascript',
		level: '60%'
	},
	{
		skill: 'JQuery',
		level: '75%'
	},
	{
		skill: 'PHP',
		level: '45%'
	},
	{
		skill: 'SASS',
		level: '80%'
	},
	{
		skill: 'AngularJS',
		level: '60%'
	},
	{
		skill: 'Framer.js',
		level: '50%'
	}
];

var experience = [
	['ex','experience'],
	{
		image: {
			large: '/src/img/about/palringo_lg.jpg',
			medium: '/src/img/about/palringo_md.jpg',
			small: '/src/img/about/palringo_sm.jpg'
		},
		company: 'Palringo Ltd',
		dates: 'March 2015 - Present',
		title: 'Graphic Designer, Web Designer',
		link: 'http://www.palringo.com'
	},
	{
		image: {
			large: '/src/img/about/imprima_lg.jpg',
			medium: '/src/img/about/imprima_md.jpg',
			small: '/src/img/about/imprima_sm.jpg'
		},
		company: 'Imprima',
		dates: 'May 2013 - February 2015',
		title: 'Head of Design, Graphic Designer',
		link: 'http://www.imprima.com'
	},
	{
		image: {
			large: '/src/img/about/burton_md.jpg',
			medium: '/src/img/about/burton_md.jpg',
			small: '/src/img/about/burton_sm.jpg'
		},
		company: 'Burton Menswear – Arcadia Group Ltd',
		dates: 'June 2012 - May 2013',
		title: 'Sales Assistant',
		link: 'http://www.burton.co.uk'
	},
	{
		image: {
			large: '/src/img/about/fosters_lg.jpg',
			medium: '/src/img/about/fosters_md.jpg',
			small: '/src/img/about/fosters_sm.jpg'
		},
		company: 'Foster + Partners',
		dates: 'June 2008, June 2009',
		title: 'Work Experience, Architectural Assistant',
		link: 'http://www.fosterandpartners.com'
	}
];

var education = [
	['ed','education'],
	{
		image: {
			large: '/src/img/about/sidney-sussex_lg.jpg',
			medium: '/src/img/about/sidney-sussex_md.jpg',
			small: '/src/img/about/sidney-sussex_sm.jpg'
		},
		name: 'Cambridge University – Sidney Sussex College',
		dates: '2009 - 2012',
		cert: 'Architecture, BA Hons. (Cantab.), RIBA Part I',
		clubs: 'Member of Sidney Sussex Porcupines\' Sporting Society for participating in College Rugby and Snowboarding' 
	},
	{
		image: {
			large: '/src/img/about/whitgift_lg.jpg',
			medium: '/src/img/about/whitgift_md.jpg',
			small: '/src/img/about/whitgift_sm.jpg'
		},
		name: 'Whitgift School',
		dates: '2002 - 2009',
		cert: 'A Levels: 4 A\'s, Further Mathematics, Mathematics, Physics, Art',
		grades: 'GCSE\'s: 6 A*s, 3 As, 2 Bs, Design & Technology, English Language, Japanese, Mathematics, Physics, Theology & Philosophy, Chemistry, English Literature, French, Biology, Fine Art'
	}
	
];

var hobbies = [
	['ho','hobbies / interests'],
	{
		hobby: 'Snowboarding',
		text: 'Snowboarding is my real passion in life. there really is no better feeling than gliding over a fresh dump of powder with the sun beating down on your back, and not hearing a sound except the crunch of snow beneath the board. I\'ve been snowboarding since I was 10 years old, and try to go for at least one week a year.',
		image: {
			large: '/src/img/about/sbd_lg.jpg',
			medium: '/src/img/about/sbd_md.jpg',
			small: '/src/img/about/sbd_sm.jpg'
		}
	},
	{
		hobby: 'Photography',
		text: 'I use photography in a lot of my work, and try to base a lot of my designs off of the photos that I take myself, rather than use boring stock photographs! Whenever I go somewhere new, I will try to take my SLR with me, but I always have my phone handy to take some shots for Instagram if I don\'t!',
		image: {
			large: '/src/img/about/photo_lg.jpg',
			medium: '/src/img/about/photo_md.jpg',
			small: '/src/img/about/photo_sm.jpg'
		}
	},
	{
		hobby: 'Skiing',
		text: 'Skiing isn\'t as good as snowboarding (here\'s where the skiiers go \'boo-hiss\'), but it\'s still one of my favourite past-times. I\'ve been skiing since I can remember (with a big gap in the middle to learn to snowboard) so it\'s easy to understand why I love winter and snow so much.',
		image: {
			large: '/src/img/about/ski_lg.jpg',
			medium: '/src/img/about/ski_md.jpg',
			small: '/src/img/about/ski_sm.jpg'
		}
	},
	{
		hobby: 'Travelling',
		text: 'I\'m not exactly a veteran traveller, but I do love to go to different places when I get the chance to. Experiencing a different culture can be particularly rewarding and you get to learn so much. Wherever I go, I will always try and not travel the \'beaten track,\' and I try to show that with the photographs I take there, finding different angles to view the sights from – so I don\'t end up with a photo a million people have taken before me!' ,
		image: {
			large: '/src/img/about/travel_lg.jpg',
			medium: '/src/img/about/travel_md.jpg',
			small: '/src/img/about/travel_sm.jpg'
		}
	},
	{
		hobby: 'Karate',
		text: 'I started karate when I was about 8 years old and became a black belt when I was 15. It\'s really helped me to learn about discipline and is definitely one of the greatest achievements in my life. I have never been as tired as I was after enduring the three hour grading for my black belt.',
		image: {
			medium: '/src/img/about/karate_md.jpg',
			small: '/src/img/about/karate_sm.jpg'
		}
	},
	{
		hobby: 'Music',
		text: 'Life can\'t exist without music. It\'s as simple as that. I literally can\'t go a day without listening to something. You will rarely see me without a pair of headphones or just nodding along to a tune I have in my head.',
		image: {
			large: '/src/img/about/music_lg.jpg',
			medium: '/src/img/about/music_md.jpg',
			small: '/src/img/about/music_sm.jpg'
		}
	},
	{
		hobby: 'DJing',
		text: 'With my love for music comes the djing. I\'m not really into the whole gig thing – it\'s more just for personal pleasure. I try to mess around on the decks every now and then (electronic), but I would really love to get into vinyl djing to really get back to the roots.',
		image: {
			large: '/src/img/about/dj_lg.jpg',
			medium: '/src/img/about/dj_md.jpg',
			small: '/src/img/about/dj_sm.jpg'
		}
	},
	{
		hobby: 'Cooking',
		text: 'I\'ll never consider myself to be a decent cook - my family will always manage to out-do me by a long shot - but I do like to throw together some ingredients in the kitchen and see how it turns out. If i\'m trying to impress though, a recipe is definitely the way to go.',
		image: {
			large: '/src/img/about/cooking_lg.jpg',
			medium: '/src/img/about/cooking_md.jpg',
			small: '/src/img/about/cooking_sm.jpg'
		}
	}
];

var aboutType = [
	['sk', 'Skills'],
	['ex', 'Experience'],
	['ed', 'Education'],
	['ho', 'Hobbies / Interests']	
];