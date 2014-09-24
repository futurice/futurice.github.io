---
---

$(document).ready(function () {

	{% for project in site.projects %}
	
	// Get information about the repository from Github
	var repouri = "https://api.github.com/repos/futurice-oss/{{project.github_repo_name}}";
			
	$.ajax({
		type: "GET",
		url: repouri,
		dataType: "json",
		success: function(data) {
			$('#stars_{{project.github_repo_name}}').html(data.stargazers_count);
			$('#forks_{{project.github_repo_name}}').html(data.forks_count);
		},
		error: function(req, status, err) {
			// Error occured so hide the icons.
			$('#icon_stars_{{project.github_repo_name}}').css('visibility', 'hidden');
			$('#icon_forks_{{project.github_repo_name}}').css('visibility', 'hidden');
		}});

	{% endfor %}
});
