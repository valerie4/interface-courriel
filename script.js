// Nemanja Mitrovic
// andre adzonyo kokouvi


$(document).ready(function() {
	$("#contenuListeMessages").hide();
	$("#contenuCarnet").hide();
	$("#contenuContact").hide();
	$("#contenuNouveauMessage").hide();
	
	$("#nouveau-message").on("click", function() {
		$("#contenuListeMessages").hide();
		$("#contenuCarnet").hide();
		$("#contenuContact").hide();
		$("#contenuNouveauMessage").show();
	});

	$("#liste-messages").on("click", function() {
		$("#contenuNouveauMessage").hide();
		$("#contenuCarnet").hide();
		$("#contenuContact").hide();
		$("#contenuListeMessages").show();
	});

	$("#carnet").on("click", function() {
		$("#contenuListeMessages").hide();
		$("#contenuNouveauMessage").hide();
		$("#contenuContact").hide();
		$("#contenuCarnet").show();
	});

	$("#contact").on("click", function() {
		$("#contenuListeMessages").hide();
		$("#contenuCarnet").hide();
		$("#contenuNouveauMessage").hide();
		$("#contenuContact").show();
	});
});