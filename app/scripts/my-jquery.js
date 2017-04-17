$(document).ready(function(){
    
    var addElement = $('#add'); 

    addElement.on('click', function(){
        // Eliminar ayuda
        var help = $('.help');
        $(help).remove();
        
        // Agregar elementos
        var newElement = $('<tr class="newItemCont"><td class="col-md-3"><input type="text" class="form-control" /></td><td class="col-md-3"><label class="checkbox-inline"><input type="checkbox" class="checkboxOn" value="On" checked> On</label><label  class="checkbox-inline"><input type="checkbox" class="checkboxOff" value="Off"> Off</label></td><td class="col-md-4"><div class="drop-zone"></div></td><td class="col-md-2 text-center"><button class="btn btn-primary deleteItem"><i class="glyphicon glyphicon-trash"></i></button></td></tr>');
        $('#myItems').append(newElement);

        // Crear zona para drop
        function dropZones(zone, item){
            $(zone).droppable({
                accept: item,
                classes: {
                    'ui-droppable-active': 'custom-state-active'
                },
                drop: function(event, ui){
                    $(this).append($(ui.draggable));
                }
            });
        }
        dropZones('.drop-zone', '.myTag');
        dropZones('.tag', '.myTag');

        // validar si el dropzone tiene tags
        function zoneTags(myParent){
            var parentElement = myParent;
            var myDropZone = $( '.drop-zone .myTag' ).length;
            if(myDropZone > 0){
                var dropZoneItems = parentElement.find('.drop-zone .myTag');
                dropZoneItems.appendTo('.tag');
            }
        }

        // validar checkbox 
        var onCheckbox = newElement.find('.checkboxOn');
        var offCheckbox = newElement.find('.checkboxOff');
        var dropZoneDisable = $('<span class="text-center disableDrop">Drop Zone is not enable</span>');
        offCheckbox.change(function(){
            if($(this).prop('checked', true)){
                //console.log('off');                
                var thisParent = $(this).parent().parent().parent();
                thisParent.find('.drop-zone').droppable('disable');
                zoneTags(thisParent);                
                dropZoneDisable.appendTo(thisParent.find('.drop-zone'));
                onCheckbox.prop('checked', false);
            } 
        });
        onCheckbox.change(function(){
            if($(this).prop('checked', true)){
                //console.log('on');
                var thisParent = $(this).parent().parent().parent();
                thisParent.find('.drop-zone').droppable('enable');
                dropZoneDisable.remove();
                offCheckbox.prop('checked', false);
            } 
        });

        // Eliminar elemento
        var deleteElement = $('.deleteItem');
        deleteElement.on('click', function(event){
            var thisParent = $(this).parent().parent();
            zoneTags(thisParent);            
            thisParent.remove();
            var myTR = $( '#myItems tr' ).length;
            if(myTR == 0){
                var myHelp = $('<tr class="help"><td colspan="4" class="bg-info text-center">Please, add your first claim</td></tr>');
                myHelp.appendTo('#myItems');
            }
        });        
    });
    
    // Declarar elemento con drag
    $('.myTag').draggable({
        cursor: 'move',
        helper: function(event){
            var myText = $(this).text();
            return $('<span class="myTag helper">'+ myText + '</span>')
        },
        containment: 'document',
        revert: 'invalid'
    });

});