function show_delete(type, item)
{
	var label = 'Directory';
	if (type == 'file')
	{
		label = 'File';
	}
	$('#item-heading').html(label);
	$('#item-type').val(type);
	$('#item-title').html(item);
	$('#item-delete').val(item);
	$('#mDelete').modal('show');
}

function show_delete_column(item)
{
	$('#item-delete').html(item);
	$('#item-delete-2').html(item);
	$('#item-delete-3').val(item);
	$('#mDelete').modal('show');
}

function show_delete_index(item)
{
	$('#index-delete').html(item);
	$('#index-delete-2').html(item);
	$('#index-delete-3').val(item);
	$('#mDeleteIndex').modal('show');
}

function show_delete_constraint(item)
{
	$('#constraint-delete').html(item);
	$('#constraint-delete-2').html(item);
	$('#constraint-delete-3').val(item);
	$('#mDeleteConstraint').modal('show');
}
