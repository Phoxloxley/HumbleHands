if (Meteor.isClient) {
	oldInput = "";
	currentFilter = "name";	//1 - name, 2 - date+time, 3 - location, 4 - tag list
	Organization = new Meteor.Collection('organization');
	document.getElementById("user_search").addEventListener("input", handleInput);
	
	function handleInput(e) {
		if(oldInput != e.currentTarget.text) {
			switch(currentFilter) {
				case "name":
					var searchObj = {organization:e.currentTarget.text}
					break;
				case "date":
					var searchObj = {date:getUserDate()}
					break;
				case "location":
					var searchObj = {location:e.currentTarget.text}
					break;
				case "tag list":
					var searchObj = {tag_list:e.currentTarget.text}
					break;
			}
			var results = Organization.find(searchObj).fetch();
			insertEvents(results);
		}
	}
	
	/*Processes input field and converts it to a string for the database
	*args: none
	*return: string for database search*/
	function getUserDate() {
		var udate = document.getElementById("date").text;
		var utime = document.getElementById("time").text;
	}
	
	/*takes a set of events and shows them in the results field
	*args: array of events
	*return: none*/
	function insertEvents(eventSet) {
		
	}
}

if (Meteor.isServer) {
	Organization = new Meteor.Collection('organization');
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
