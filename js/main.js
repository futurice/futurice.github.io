---
---

// Default slicepoint for expander.
$.expander.defaults.slicePoint = 500;

$(document).ready(function () {

	// Add jquery.expander functionality to the descriptions.
	$('.description').expander();

	// Add enough space on the bottom when clicking read more.
	$('.read-more').on('click', function() {
		$('.description').css('padding-bottom', '70px');
	});

	// Remove additional space from the bottom.
	$('.read-less').on('click', function() {
		$('.description').css('padding-bottom', '30px');
	});

	var repoList = [];
	{% for category in site.projects %}
	{% for project in category.contains %}
	repoList.push("{{project.github_repo_name}}");
	{% endfor %}
	{% endfor %}

	// Get information about the repository from Github)
	$.each(repoList, function(index, repoName) {
		var repouri = "https://api.github.com/repos/futurice/" + repoName;

		$.ajax({
			type: "GET",
			url: repouri,
			dataType: "json",
			success: function(data) {
				$('#stars_' + repoName).html(data.stargazers_count);
				$('#forks_' + repoName).html(data.forks_count);

				// Show the icons.
				$('#icon_stars_' + repoName).css('visibility', 'visible');
				$('#icon_forks_' + repoName).css('visibility', 'visible');
			},
			error: function(req, status, err) {
				// Error occured so make sure the icons are hidden.
				$('#icon_stars_' + repoName).css('visibility', 'hidden');
				$('#icon_forks_' + repoName).css('visibility', 'hidden');
			}});
	});
});
