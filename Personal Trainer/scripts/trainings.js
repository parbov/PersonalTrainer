var app = app || {};

(function(a) {    
    a.trainings = {
        init:function() {
            $("#trainings-list").kendoMobileListView();
            $("#exercise-table").kendoMobileListView();
        }
    };
}(app));