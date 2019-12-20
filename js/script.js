let menssageChat = document.getElementById("inputChat");
let listChat = document.getElementById("listChat");
function send()
{
    let day = new Date();
    let data =
    {
        msg: menssageChat.value
    };
    return firebase.database().ref().child("msg").push(data);
}
firebase.database().ref("msg").on("value",function(snapshot)
{
    listChat.innerHTML = "";
    snapshot.forEach(function(item) {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(item.val().msg));
        listChat.appendChild(p);
    });
    document.getElementById("inputChat").value = "";
});
