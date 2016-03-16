var bio  = {
	"name" : "Bernadette Pluempe",
	"role" : "Front-end Developer",
	"contacts": 
	{
		"mobile": "004976906543",
		"email": "myContact@gmail.com",
		"github": "https://github.com/pettibetty",
		"twitter": "mytwitter",
		"location": "Hamburg"
	}
	,
	"welcomeMessage" : "Hello There!!",
	"skills": ["Coding","Team work","great learner","Dynamic"],
	"biopic": "images/fry.jpg",
	"display": function(){
		var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
		var formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedheaderName);
		$("#name").after(formattedheaderRole);

		
		var formattedmobile = HTMLmobile.replace(/%data%/g,bio.contacts.mobile);
		$("#topContacts").append(formattedmobile);
		$("#footerContacts").append(formattedmobile);
		var formattedemail = HTMLemail.replace(/%data%/g,bio.contacts.email);
		$("#topContacts").append(formattedemail);
		$("#footerContacts").append(formattedemail);
		var formattedtwitter = HTMLtwitter.replace(/%data%/g,bio.contacts.twitter);
		$("#topContacts").append(formattedtwitter);
		$("#footerContacts").append(formattedtwitter);
		var formattedgithub = HTMLgithub.replace(/%data%/g,bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		$("#footerContacts").append(formattedgithub);
		var formattedlocation = HTMLlocation.replace(/%data%/g,bio.contacts.location);
		$("#topContacts").append(formattedlocation);
		$("#footerContacts").append(formattedlocation);


		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedwelcomeMsg);
		var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic);
		$("#header").append(formattedbiopic);
		
		$("#header").append(HTMLskillsStart);
		
		bio.skills.forEach(function(skill) {
			//console.log(skill);
        	var formattedskills = HTMLskills.replace("%data%",skill);
			$("#skills").append(formattedskills);
   		});
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
		"description": "Working with wordpress, Creating html pages and style with css"
	}
	],
	"display": function()
	{
		work.jobs.forEach(function(job)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedworkLocation =  HTMLworkLocation.replace("%data%",job.location);
			$(".work-entry:last").append(formattedworkLocation);
			var formattedDates =  HTMLworkDates.replace("%data%",job.dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription =  HTMLworkDescription.replace("%data%",job.description);
			$(".work-entry:last").append(formattedDescription);

		});
	}
};
work.display();

var projects  = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "02/03/2014 - 08/09/2014",
		"description": "My own project",
		"images": []
		
	},
	{
		"title": "Project 2",
		"dates": "01/01/2016 - 03/03/2016",
		"description": "My second project",
		"images": ["images/fry.jpg","images/fry.jpg"]
		
	}
	]
};

projects.display = function()
	{
		projects.projects.forEach(function(project)
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDate = HTMLprojectDates.replace("%data%",project.dates);
			$(".project-entry:last").append(formattedDate);
			var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
			$(".project-entry:last").append(formattedDescription);
			if (project.images.length > 0)
				{
					project.images.forEach(function(image)
					{
						var formattedImages = HTMLprojectImage.replace("%data%",image);
						$(".project-entry:last").append(formattedImages);
					});
				}
		});
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
	"onlineCourses": [ 
	{
		"title": "Web development",
		"school": "Udacity",
		"dates": "01/12/2015 - present",
		"url": "https://www.udacity.com"
	} 
	],
	"display": function(){
		education.schools.forEach(function(school)
			{
				$("#education").append(HTMLschoolStart);
				var formattedschoolName = HTMLschoolName.replace("%data%",school.name);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
				$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
				$(".education-entry:last").append(formattedschoolLocation);
				var formattedschoolDates = HTMLschoolDates.replace("%data%",school.dates);
				$(".education-entry:last").append(formattedschoolDates);
				school.majors.forEach(function(major) 
				{
					var formattedschoolMajor = HTMLschoolMajor.replace("%data%",major);
					$(".education-entry:last").append(formattedschoolMajor);
				});
			});
		education.onlineCourses.forEach(function(onlineCourse) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
			$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
			$(".education-entry:last").append(formattedonlineDates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%",onlineCourse.url);
			$(".education-entry:last").append(formattedonlineURL);	

			});
			
	}
};

education.display();

$("#mapDiv").append(googleMap);