var bio  = {
	"name" : "Bernadette Pluempe",
	"role" : "Front-end Developer",
	"contacts": [
	{
		"mobile": "004976906543",
		"email": "myContact@gmail.com",
		"github": "mygithub",
		"twitter": "mytwitter",
		"location": "Hamburg"
	}
	],
	"welcomeMessage" : "Hello There!!",
	"skills": ["Coding","Team work","great learner","Dynamic"],
	"biopic": ["images/fry.jpg"],
	display: function(){
		var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
		var formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedheaderName);
		$("#name").after(formattedheaderRole);

		for (contact in bio.contacts){
			var formattedmobile = HTMLmobile.replace(/%data%/g,bio.contacts[contact].mobile);
			$("#topContacts").append(formattedmobile);
			$("#footerContacts").append(formattedmobile);
			var formattedemail = HTMLemail.replace(/%data%/g,bio.contacts[contact].email);
			$("#topContacts").append(formattedemail);
			$("#footerContacts").append(formattedemail);
			var formattedtwitter = HTMLtwitter.replace(/%data%/g,bio.contacts[contact].twitter);
			$("#topContacts").append(formattedtwitter);
			$("#footerContacts").append(formattedtwitter);
			var formattedgithub = HTMLgithub.replace(/%data%/g,bio.contacts[contact].github);
			$("#topContacts").append(formattedgithub);
			$("#footerContacts").append(formattedgithub);
			var formattedlocation = HTMLlocation.replace(/%data%/g,bio.contacts[contact].location);
			$("#topContacts").append(formattedlocation);
			$("#footerContacts").append(formattedlocation);
		}

		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedwelcomeMsg);
		if (bio.biopic.length > 0)
				{
					for (pic in bio.biopic)
					{
						var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic[pic]);
						$("#header").append(formattedbiopic);
					}
				}
		$("#header:last").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#header:last").append(formattedskills);
		}
	}
};

bio.display();

var work = {
	"jobs": [
	{
		"employer": "Mylittlejob GmbH",
		"title": "Junior Front-end Developer",
		"location": "Hamburg",
		"dates": "April 2015 - present",
		"description": "Creating and maintening the company website"
	},
	{
		"employer": "4=1 GmbH",
		"title": "Front-end intern",
		"location": "Hamburg",
		"dates": "3 months",
		"description": ""
	}
	],
	display : function()
	{
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedworkLocation =  HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedworkLocation);
			var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		}
	}
};
work.display();

var projects  = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "02/03/2014 - 08/09/2014",
		"description": "My own project",
		"images": ["images/images/fry.jpg","images/images/fry.jpg"]
		
	}
	]
};

projects.display = function()
	{
		for(proj in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
			$(".project-entry:last").append(formattedDate);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[proj].images.length > 0)
				{
					for (image in projects.projects[proj].images)
					{
						var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[proj].images[image]);
						$(".project-entry:last").append(formattedImages);
					}
				}
		}
	};
projects.display();



var education = {
	"schools": [
		{
			"name":"King's college London",
			"location": "London",
			"degree": "Computer sience",
			"majors": ["Java"],
			"dates": "2011-20014",
			"url" : "http://www.kcl.ac.uk/index.aspx"
		},
		{
			"name":"Birkbeck univercity",
			"location": "London",
			"degree": "Mathematics",
			"majors": ["Mathematics"],
			"dates": "2010-2011",
			"url" : "http://www.bbk.ac.uk/"
		}
	],
	"onlineCourses": {
		"title": "Web development",
		"school": "Udacity",
		"dates": "01/12/2015 - present",
		"url": "https://www.udacity.com"
	},
	display: function(){
		for(school in education.schools)
			{
				$("#education").append(HTMLschoolStart);
				var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
				$(".education-entry:last").append(formattedschoolName);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
				$(".education-entry:last").append(formattedschoolDegree);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
				$(".education-entry:last").append(formattedschoolLocation);
				var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
				$(".education-entry:last").append(formattedschoolDates);
				for(major in education.schools[school].majors){
					var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedschoolMajor);
				}
			}
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
		$(".education-entry:last").append(formattedonlineTitle);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
		$(".education-entry:last").append(formattedonlineSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
		$(".education-entry:last").append(formattedonlineURL);		
	}
};
education.display();
$("#mapDiv").append(googleMap);