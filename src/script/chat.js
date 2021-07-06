var OrderNo = new Date().getTime();
var ref = firebase.database().ref('Chats');
  ref.on("child_added", function(snapshot) {
    var newPost = snapshot.val();
    var time=newPost.time;
    var message = newPost.message;
    var fi = document.getElementById('chata');
    var entry = document.createElement('li');
    var entry_div = document.createElement('div');
    entry_div.classList.add("commenterImage");
   
    var entry_img = document.createElement('img');
    // entry_img.src="http://placekitten.com/40/40";
    entry_img.src="https://source.unsplash.com/2LowviVHZ-E/20x20";
    entry_img.style.borderRadius = "50%";
    entry_div.appendChild(entry_img);
    entry.appendChild(entry_div);
    var mess_div = document.createElement('div');
    mess_div.classList.add("commentText");
    
    mess_div.appendChild(document.createTextNode(message));
   var mess_span = document.createElement('span');
   mess_span.classList.add("sub-text");
   mess_span.appendChild(document.createTextNode(time));
    mess_div.appendChild(mess_span);

    entry.appendChild(mess_div);
    window.scrollBy(0,15);
    fi.appendChild(entry); 
    
    
  });
  function add(){
    // window.scrollBy(0,15);
    var chatWindow = document.querySelector('.commentList')
    chatWindow.scrollTop = chatWindow.scrollHeight;
    var Message = document.getElementById("mess").value;

    var OrderNo = new Date().toString();
    firebase.database().ref('Chats/'+OrderNo).set({
        time: OrderNo,
        message: Message
      });
      
  }

  function deleteChat(){
    ref.remove();
    location.reload()
  }