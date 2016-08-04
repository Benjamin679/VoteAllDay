$(function(){
  var db = localStorage;
  var form = $('#task-form');
  var list = $('#task-list');
  var input = $('#task-input');
  var clear = $('#clear');

  logDB();
  bindEvents();
  renderAll();

  function bindEvents(){
    form.submit(function(event){
      var task = input.val();
      if (task !== "") {
        create(task);
        input.val('').focus();
      }
      logDB();
      event.preventDefault();
    });

    list.on("click", "li", function(event){
      key = $(this).attr('id');
      complete(key);
      logDB();
    });

    clear.click(function(event){
      clearDB();
      logDB();
    });
  }

  function render(key){
    list.append("<li id='" + key + "'>" + db.getItem(key) + "</li>");
  }

  function renderAll(){
    for (var i = 0; i < db.length; i++) {
      var key = db.key(i);
      render(key);
    }
  }

  function create(task){
    var count = db.length + 1;
    var time = Date.now();
    var key = "key-" + time + count;

    db.setItem(key, task);
    render(key);
  }

  function complete(key){
    db.removeItem(key);
    $('#' + key).remove();
  }

  function clearDB(){
    db.clear();
    list.empty();
  }

  function logDB(){
    // console.clear();
    console.log(db);
  }
});
