var app = app || {};

(function(a) {    
    a.trainings = {
        init:function() {
            $("#trainings-list").kendoMobileListView();
            $("#exercise-table").kendoMobileListView();
            $("#cld-table").kendoMobileListView();
            $("#bld-table").kendoMobileListView();
            $("#bhd-table").kendoMobileListView();
            $("#lld-table").kendoMobileListView();
            $("#lhd-table").kendoMobileListView();
            $("#ald-table").kendoMobileListView();
            $("#ahd-table").kendoMobileListView();
            
        }
    };
}(app));